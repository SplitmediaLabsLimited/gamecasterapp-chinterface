/**
 * Copyright (c) 2017-present, SplitmediaLabs Limited
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import axios from 'redaxios';
import Interface from './interface';
import log from '../utils/logger';
import {
  CHAT_MESSAGE_EVENT,
  DEFAULT_PUSHER_KEY,
  KICK_API_BASE,
  KICK_CHANNEL_LOOKUP,
  buildPusherUrl,
  extractChatFields,
  isPusherProtocolEvent,
  parsePusherFrame,
  replaceEmoteTokens,
} from '../utils/kick-pusher';

const LOG_SCOPE = 'KICK';
const MAX_MESSAGE_LENGTH = 500;

class Kick extends Interface {
  /**
   * Initialize the Interface.
   */
  constructor() {
    super();

    this.socket = null;
    this.http = null;
    this.clientListeners = {};
    this.reconnectTimer = null;
    this.connectPromise = null;
    this.intentionalDisconnect = false;

    this.required = [];
    this.setConfig({
      parseEmoticon: true,
      reconnect: true,
      formatMessages: true,
      sendAs: 'user',
    });

    log.trace(LOG_SCOPE, 'CONSTRUCTED', {
      parseEmoticon: true,
      reconnect: true,
      formatMessages: true,
    });
  }

  /**
   * Connects the Interface to Kick's public Pusher chat socket.
   *
   * Requires `chatroomId` or `channel` (Kick slug). If `chatroomId` is omitted,
   * it is resolved from `GET https://kick.com/api/v2/channels/{slug}`.
   *
   * @return {Promise}
   */
  connect() {
    if (this.isConnected) {
      return Promise.resolve();
    }

    if (this.connectPromise) {
      return this.connectPromise;
    }

    const chatroomId = this.getConfig('chatroomId');
    const channel = this.getConfig('channel');

    if (!chatroomId && !channel) {
      log.trace(LOG_SCOPE, 'CONNECT FAILED', {
        reason: 'chatroomId or channel is required',
      });
      return Promise.reject(new Error('Required config options not set.'));
    }

    this.intentionalDisconnect = false;
    this.connectPromise = this.openPusher()
      .then(() => {
        this.resetReconnect();
      })
      .finally(() => {
        this.connectPromise = null;
      });

    return this.connectPromise;
  }

  /**
   * @return {Promise}
   */
  async openPusher() {
    const chatroomId = await this.resolveChatroomId();
    const pusherKey = this.getConfig('pusherKey', DEFAULT_PUSHER_KEY);
    const url = buildPusherUrl(pusherKey);

    if (typeof WebSocket === 'undefined') {
      throw new Error('WebSocket is not available in this environment.');
    }

    log.trace(LOG_SCOPE, 'CONNECT', {
      channel: this.getConfig('channel'),
      chatroomId,
      pusherKey,
      reconnect: this.shouldReconnect,
    });

    return new Promise((resolve, reject) => {
      let settled = false;
      const socket = new WebSocket(url);
      this.socket = socket;

      const finish = (err) => {
        if (settled) {
          return;
        }

        settled = true;

        if (err) {
          reject(err);
          return;
        }

        resolve();
      };

      socket.onopen = () => {
        log.trace(LOG_SCOPE, 'SOCKET OPEN', { chatroomId });
      };

      socket.onmessage = (event) => {
        const frame = parsePusherFrame(event && event.data);

        if (frame.event === 'pusher:ping') {
          this.sendPusher({ event: 'pusher:pong', data: {} });
          return;
        }

        if (frame.event === 'pusher:connection_established') {
          this.sendPusher({
            event: 'pusher:subscribe',
            data: {
              channel: `chatrooms.${chatroomId}.v2`,
            },
          });
          this.connected = true;
          this.emit('connected');
          log.trace(LOG_SCOPE, 'CONNECTED', { chatroomId });
          finish();
          return;
        }

        this.handlePusherFrame(event && event.data);
      };

      socket.onerror = () => {
        log.trace(LOG_SCOPE, 'SOCKET ERROR', { chatroomId });
      };

      socket.onclose = (event) => {
        const wasConnected = this.connected;
        this.connected = false;
        this.socket = null;

        log.trace(LOG_SCOPE, 'DISCONNECTED', {
          chatroomId,
          wasConnected,
          code: event && event.code,
          reason: (event && event.reason) || null,
          intentional: this.intentionalDisconnect,
        });

        if (!settled) {
          finish(new Error('Kick Pusher connection closed before it was established.'));
        }

        if (!this.intentionalDisconnect && this.shouldReconnect) {
          this.scheduleReconnect();
        }
      };
    });
  }

  /**
   * Disconnects the Interface from its data source.
   */
  disconnect() {
    log.trace(LOG_SCOPE, 'DISCONNECT', {
      channel: this.getConfig('channel'),
      chatroomId: this.getConfig('chatroomId'),
      wasConnected: this.connected,
      hadSocket: this.socket !== null,
    });

    this.intentionalDisconnect = true;
    this.clearReconnectTimer();

    if (this.socket) {
      try {
        this.socket.close();
      } catch (err) {
        // Ignore close errors from an already-closing socket.
      }
    }

    this.socket = null;
    this.connected = false;
  }

  /**
   * If the Interface supports writing, this method will send the given
   * message via the official Kick Public API.
   *
   * @param {string} message
   *
   * @return {Promise}
   */
  async send(message) {
    const accessToken = this.getConfig('accessToken');
    const content = typeof message === 'string' ? message : '';
    const type = this.getConfig('sendAs', 'user');
    const userId = this.getConfig('userId');

    if (!accessToken) {
      log.trace(LOG_SCOPE, 'SEND FAILED', { reason: 'accessToken not set' });
      throw new Error('accessToken not set.');
    }

    if (!content.trim()) {
      log.trace(LOG_SCOPE, 'SEND FAILED', { reason: 'empty message' });
      throw new Error('Message is empty.');
    }

    if (content.length > MAX_MESSAGE_LENGTH) {
      log.trace(LOG_SCOPE, 'SEND FAILED', {
        reason: 'message too long',
        messageLength: content.length,
      });
      throw new Error(`Message exceeds ${MAX_MESSAGE_LENGTH} characters.`);
    }

    const body = {
      content,
      type,
    };

    if (type === 'user') {
      if (!userId) {
        log.trace(LOG_SCOPE, 'SEND FAILED', { reason: 'userId not set' });
        throw new Error('userId is not set.');
      }

      body.broadcaster_user_id = Number(userId);
    }

    log.trace(LOG_SCOPE, 'SEND', {
      type,
      userId: userId || null,
      messageLength: content.length,
    });

    try {
      const result = await this.api('post', 'public/v1/chat', body);
      log.trace(LOG_SCOPE, 'SEND DONE', {
        isSent: result && result.data && result.data.data && result.data.data.is_sent,
      });
      return result;
    } catch (err) {
      log.trace(LOG_SCOPE, 'SEND ERROR', {
        error: {
          name: err && err.name ? err.name : 'Error',
          message: err && err.message ? err.message : String(err),
        },
      });
      throw err;
    }
  }

  /**
   * Listen to the specified Event.
   *
   * @param {string} evnt
   * @param {Function} callback
   */
  on(evnt, callback) {
    super.on(evnt, callback);

    if (evnt === 'message') {
      log.trace(LOG_SCOPE, 'LISTENER ADD', {
        event: evnt,
        channel: this.getConfig('channel'),
      });
    }
  }

  /**
   * Deletes a listener event.
   *
   * @param {string} evnt
   */
  destroy(evnt) {
    super.destroy(evnt);

    if (evnt === 'message') {
      log.trace(LOG_SCOPE, 'LISTENER REMOVE', {
        event: evnt,
        channel: this.getConfig('channel'),
      });
    }
  }

  /**
   * Handle a raw Pusher WebSocket frame (string or object).
   * Exposed for tests; also used by the live socket handler.
   *
   * @param {string|object} raw
   */
  handlePusherFrame(raw) {
    const frame = parsePusherFrame(raw);

    if (!frame.event) {
      return;
    }

    if (frame.event === 'pusher:ping') {
      this.sendPusher({ event: 'pusher:pong', data: {} });
      return;
    }

    if (isPusherProtocolEvent(frame.event)) {
      return;
    }

    this.dispatchClientOn(frame.event, frame.data);

    if (frame.event === CHAT_MESSAGE_EVENT) {
      this.parseMessage(frame.data);
    }
  }

  /**
   * Parses a Kick ChatMessageEvent into the unified message format.
   *
   * @param {object} data
   */
  parseMessage(data) {
    const formatMessages = this.getConfig('formatMessages');
    const fields = extractChatFields(data);
    let body = this.filterXSS(fields.content);

    if (formatMessages && this.shouldParseEmoticons) {
      body = this.parseEmoticons(fields.content);
    }

    const payload = {
      id: fields.id,
      username: fields.username,
      body,
      raw: fields.content,
      timestamp: fields.timestamp,
      extra: {
        colour: fields.colour,
        badges: fields.twitchBadges,
        subscriber: fields.subscriber,
        mod: fields.mod,
        turbo: false,
        broadcaster: fields.broadcaster,
        emotes: Object.keys(fields.emotes).length ? fields.emotes : null,
        kickBadges: fields.kickBadges,
        verified: fields.verified,
        slug: fields.slug,
        identity: fields.identity,
        repliesTo: fields.repliesTo,
      },
    };

    log.trace(LOG_SCOPE, 'EMIT MESSAGE', {
      username: payload.username,
      mod: payload.extra.mod,
      broadcaster: payload.extra.broadcaster,
      messageLength: fields.content.length,
    });

    this.emit('message', payload);
  }

  /**
   * @param {string} message
   *
   * @return {string}
   */
  parseEmoticons(message) {
    return replaceEmoteTokens(this.filterXSS(message));
  }

  /**
   * Fetch and set required user data for the Interface.
   * Requires `accessToken` only (no clientId). Fills `userId`, `channel`,
   * and `username` if unset. Does not set `chatroomId`.
   *
   * @returns {Promise}
   */
  async loadUser() {
    const accessToken = this.getConfig('accessToken');

    if (!accessToken) {
      log.trace(LOG_SCOPE, 'LOAD USER FAILED', { reason: 'accessToken not set' });
      throw new Error('accessToken not set.');
    }

    log.trace(LOG_SCOPE, 'LOAD USER START', {
      accessToken: log.redactToken(accessToken),
      channel: this.getConfig('channel') || null,
    });

    try {
      const usersResponse = await this.api('get', 'public/v1/users');
      const users = usersResponse && usersResponse.data && usersResponse.data.data;
      const user = Array.isArray(users) ? users[0] : users || {};
      const userId = user.user_id || user.id;
      const name = user.name || user.username;

      let slug = null;

      try {
        const channelsResponse = await this.api('get', 'public/v1/channels');
        const channels =
          channelsResponse && channelsResponse.data && channelsResponse.data.data;
        const channel = Array.isArray(channels) ? channels[0] : channels || {};
        slug = channel.slug || null;
      } catch (channelErr) {
        log.trace(LOG_SCOPE, 'LOAD USER CHANNELS ERROR', {
          error: {
            name: channelErr && channelErr.name ? channelErr.name : 'Error',
            message:
              channelErr && channelErr.message
                ? channelErr.message
                : String(channelErr),
          },
        });
      }

      const channel = this.getConfig('channel', slug || name);
      const username = this.getConfig('username', name || slug);
      const nextUserId = this.getConfig('userId', userId);

      this.setConfig({
        channel,
        username,
        userId: nextUserId,
      });

      log.trace(LOG_SCOPE, 'LOAD USER DONE', {
        channel,
        username,
        userId: nextUserId,
      });
    } catch (err) {
      log.trace(LOG_SCOPE, 'LOAD USER ERROR', {
        error: {
          name: err && err.name ? err.name : 'Error',
          message: err && err.message ? err.message : String(err),
        },
      });
      throw err;
    }
  }

  /**
   * Sets Config value(s) for the Interface.
   * Kick Public API is Bearer-only; `clientId` is ignored if passed.
   *
   * @param {string|object} [key]
   * @param {string|number|object} [value]
   */
  async setConfig(key, value = null) {
    super.setConfig(key, value);

    const headers = {
      Accept: 'application/json',
    };
    const accessToken = this.getConfig('accessToken');

    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`;
    }

    this.http = axios.create({
      baseURL: KICK_API_BASE,
      headers,
      responseType: 'json',
    });

    log.trace(LOG_SCOPE, 'SET CONFIG', {
      channel: this.getConfig('channel') || null,
      username: this.getConfig('username') || null,
      userId: this.getConfig('userId') || null,
      chatroomId: this.getConfig('chatroomId') || null,
      accessToken: log.redactToken(this.getConfig('accessToken')),
      parseEmoticon: this.getConfig('parseEmoticon'),
      reconnect: this.getConfig('reconnect'),
      formatMessages: this.getConfig('formatMessages'),
    });
  }

  /**
   * Returns the Kick Pusher WebSocket instance.
   *
   * @return {*}
   */
  getClient() {
    return this.socket;
  }

  /**
   * Name of the Interface.
   *
   * @return {string}
   */
  getName() {
    return 'Kick';
  }

  /**
   * The short & lowercase key for the Interface. Should be the same as the
   * InterfaceBag Key.
   *
   * @return {string}
   */
  getKey() {
    return 'kick';
  }

  /**
   * Returns whether the Interface supports emoticons.
   *
   * @return {boolean}
   */
  hasEmoticons() {
    return true;
  }

  /**
   * Returns whether the Interface supports writing/sending.
   *
   * @return {boolean}
   */
  hasWriting() {
    return true;
  }

  /**
   * Returns whether the Interface uses a LIVE datasource (Such as Websockets
   * or DataSource), or uses API polling.
   */
  isLive() {
    return true;
  }

  /**
   * Pass-through for Kick chatroom Pusher events (raw parsed `data` object).
   * Chat messages are also emitted as unified `message`.
   *
   * App\Events\ChatMessageEvent — viewer sent a chat message
   * App\Events\MessageDeletedEvent — a chat message was deleted
   * App\Events\ChatroomClearEvent — chat was cleared
   * App\Events\UserBannedEvent — a user was banned or timed out
   * App\Events\UserUnbannedEvent — a user ban/timeout was lifted
   * App\Events\PinnedMessageCreatedEvent — a message was pinned in chat
   * App\Events\PinnedMessageDeletedEvent — a pinned message was removed
   * App\Events\SubscriptionEvent — a user subscribed or renewed
   * App\Events\GiftedSubscriptionsEvent — a user gifted one or more subs
   * App\Events\FollowersUpdatedEvent — follower count / follow activity
   * App\Events\StreamHostEvent — another channel hosted this channel
   * App\Events\ChatroomUpdatedEvent — chatroom settings changed
   * App\Events\PollUpdateEvent — a chat poll was created or updated
   * App\Events\RewardRedeemedEvent — a channel reward was redeemed
   *
   * @param {string} evnt Kick Pusher event name
   * @param {Function} callback
   * @returns {Kick}
   */
  clientOn(evnt, callback) {
    log.trace(LOG_SCOPE, 'CLIENT ON', {
      event: evnt,
      channel: this.getConfig('channel'),
    });

    if (!this.clientListeners[evnt]) {
      this.clientListeners[evnt] = [];
    }

    this.clientListeners[evnt].push(callback);

    return this;
  }

  /**
   * Query the Kick Public API for a given method, endpoint and body/query.
   *
   * @param {string} method
   * @param {string} url
   * @param {object} data
   *
   * @return {Promise}
   */
  api(method, url, data = {}) {
    const accessToken = this.getConfig('accessToken');

    if (!accessToken) {
      log.trace(LOG_SCOPE, 'API FAILED', {
        reason: 'accessToken not set',
        method,
        url,
      });
      throw new Error('accessToken not set.');
    }

    const requestUrl =
      url + (method === 'get' ? '?' + new URLSearchParams(data).toString() : '');

    log.trace(LOG_SCOPE, 'API REQUEST', {
      method,
      url: requestUrl,
    });

    return this.http
      .request({
        method,
        url: requestUrl,
        data: method === 'get' ? undefined : data,
      })
      .then((response) => {
        log.trace(LOG_SCOPE, 'API RESPONSE', {
          method,
          url: requestUrl,
          status: response.status || 200,
        });
        return response;
      })
      .catch((err) => {
        log.trace(LOG_SCOPE, 'API ERROR', {
          method,
          url: requestUrl,
          status: (err && err.status) || null,
          statusText: (err && err.statusText) || null,
          message: (err && err.message) || null,
          error: {
            name: err && err.name ? err.name : 'Error',
            message: err && err.message ? err.message : String(err),
          },
        });
        throw err;
      });
  }

  /**
   * Resolve Pusher chatroom id from config or unofficial channel lookup.
   *
   * @return {Promise<string|number>}
   */
  async resolveChatroomId() {
    const existing = this.getConfig('chatroomId');

    if (existing) {
      return existing;
    }

    const slug = this.getConfig('channel');

    if (!slug) {
      throw new Error('chatroomId or channel is required to connect.');
    }

    log.trace(LOG_SCOPE, 'RESOLVE CHATROOM START', { slug });

    try {
      const response = await fetch(
        `${KICK_CHANNEL_LOOKUP}/${encodeURIComponent(slug)}`
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const json = await response.json();
      const chatroomId = json && json.chatroom && json.chatroom.id;

      if (!chatroomId) {
        throw new Error('chatroom.id missing from Kick channel lookup.');
      }

      this.setConfig({ chatroomId });
      log.trace(LOG_SCOPE, 'RESOLVE CHATROOM DONE', { slug, chatroomId });
      return chatroomId;
    } catch (err) {
      log.trace(LOG_SCOPE, 'RESOLVE CHATROOM ERROR', {
        slug,
        error: {
          name: err && err.name ? err.name : 'Error',
          message: err && err.message ? err.message : String(err),
        },
      });
      throw new Error(
        `Unable to resolve Kick chatroom id for channel "${slug}". Pass chatroomId in setConfig.`
      );
    }
  }

  /**
   * @param {string} evnt
   * @param {*} data
   */
  dispatchClientOn(evnt, data) {
    const listeners = this.clientListeners[evnt];

    if (!listeners || !listeners.length) {
      return;
    }

    listeners.forEach((callback) => {
      callback(data);
    });
  }

  /**
   * @param {object} payload
   */
  sendPusher(payload) {
    if (!this.socket || this.socket.readyState !== 1) {
      return;
    }

    this.socket.send(JSON.stringify(payload));
  }

  scheduleReconnect() {
    this.clearReconnectTimer();
    this.increaseReconnect();

    log.trace(LOG_SCOPE, 'RECONNECT', {
      channel: this.getConfig('channel'),
      attempt: this.reconnectAttempt,
      delay: this.reconnectCurrentInterval,
    });

    this.reconnectTimer = setTimeout(() => {
      this.connect().catch((err) => {
        log.trace(LOG_SCOPE, 'RECONNECT ERROR', {
          error: {
            name: err && err.name ? err.name : 'Error',
            message: err && err.message ? err.message : String(err),
          },
        });
      });
    }, this.reconnectCurrentInterval);
  }

  clearReconnectTimer() {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
  }
}

export default Kick;
