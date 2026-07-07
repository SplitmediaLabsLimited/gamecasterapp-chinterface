/**
 * Copyright (c) 2017-present, SplitmediaLabs Limited
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import tmi from 'tmi.js';
import axios from 'redaxios';
import Interface from './interface';
import log from '../utils/logger';

const LOG_SCOPE = 'TWITCH';

class Twitch extends Interface {
  /**
   * Initialize the Interface.
   */
  constructor() {
    super();

    this.client = null;

    this.required = ['clientId', 'channel', 'userId'];
    this.setConfig({
      parseEmoticon: true,
      reconnect: true,
      formatMessages: true,
    });

    log.trace(LOG_SCOPE, 'CONSTRUCTED', {
      required: this.required,
      parseEmoticon: true,
      reconnect: true,
      formatMessages: true,
    });
  }

  /**
   * Connects the Interface to its data source/starts polling for data.
   *
   * @return {Promise}
   */
  connect() {
    super.connect();

    const clientId = this.getConfig('clientId');
    const channel = this.getConfig('channel');
    const username = this.getConfig('username');
    const accessToken = this.getConfig('accessToken');
    const hasIdentity = !!(username && accessToken);

    log.trace(LOG_SCOPE, 'CONNECT', {
      channel,
      clientId,
      hasIdentity,
      username: username || null,
      accessToken: log.redactToken(accessToken),
      reconnect: this.shouldReconnect,
    });

    return new Promise((resolve, reject) => {
      let identity = {};

      if (hasIdentity) {
        identity = {
          username,
          password: accessToken,
        };
      }

      this.client = new tmi.Client({
        channels: [channel],
        identity,
        options: {
          clientId,
          debug: false,
        },
        connection: {
          reconnect: this.shouldReconnect,
          secure: true,
        },
      });

      this.client.on('connected', (addr, port) => {
        log.trace(LOG_SCOPE, 'CONNECTED', {
          channel,
          addr: addr || null,
          port: port || null,
        });
        this.connected = true;
        this.emit('connected');
        resolve();
      });

      this.client.on('disconnected', reason => {
        log.trace(LOG_SCOPE, 'DISCONNECTED', {
          channel,
          reason: reason || null,
          wasConnected: this.connected,
        });
        this.connected = false;
      });

      this.client.on('reconnect', () => {
        log.trace(LOG_SCOPE, 'RECONNECT', {
          channel,
          attempt: this.reconnectAttempt,
        });
      });

      this.client.on('notice', (noticeChannel, msgtype, message) => {
        log.trace(LOG_SCOPE, 'NOTICE', {
          channel: noticeChannel || channel,
          msgtype: msgtype || null,
          message: message || null,
        });
      });

      this.client.connect().catch(err => {
        log.trace(LOG_SCOPE, 'CONNECT ERROR', {
          channel,
          hasIdentity,
          error: {
            name: err && err.name ? err.name : 'Error',
            message: err && err.message ? err.message : String(err),
          },
        });
        reject(err);
      });
    });
  }

  /**
   * Disconnects the Interface from its data source.
   */
  disconnect() {
    log.trace(LOG_SCOPE, 'DISCONNECT', {
      channel: this.getConfig('channel'),
      wasConnected: this.connected,
      hadClient: this.client !== null,
    });

    super.disconnect();

    if (this.client !== null) {
      this.client.disconnect();
    }

    this.client = null;
    this.connected = false;
  }

  /**
   * If the Interface supports writing, this method will send the given
   * message.
   *
   * @param {string} message
   *
   * @return {Promise}
   */
  async send(message) {
    const channel = this.getConfig('channel');

    log.trace(LOG_SCOPE, 'SEND', {
      channel,
      messageLength: typeof message === 'string' ? message.length : null,
      isConnected: this.connected,
    });

    try {
      const result = await this.client.say(channel, message);
      log.trace(LOG_SCOPE, 'SEND DONE', { channel });
      return result;
    } catch (err) {
      log.trace(LOG_SCOPE, 'SEND ERROR', {
        channel,
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

    if (this.client !== null && evnt === 'message') {
      log.trace(LOG_SCOPE, 'LISTENER ADD', {
        event: evnt,
        channel: this.getConfig('channel'),
      });
      this.client.on('chat', this.msgEvnt.bind(this));
    }
  }

  /**
   * Deletes a listener event.
   *
   * @param {string} evnt
   */
  destroy(evnt) {
    super.destroy(evnt);

    if (this.client !== null && evnt === 'message') {
      log.trace(LOG_SCOPE, 'LISTENER REMOVE', {
        event: evnt,
        channel: this.getConfig('channel'),
      });
      this.client.removeListener('chat', this.msgEvnt.bind(this));
    }
  }

  /**
   * Parses a message in to the unified format.
   *
   * @param {string} channel
   * @param {string} user
   * @param {string} message
   * @param {boolean} self
   */
  parseMessage({ channel, user, message, self }) {
    const formatMessages = this.getConfig('formatMessages');
    let isBroadcaster = false;
    let emotes = null;
    let body = null;

    if (user.emotes !== null && Object.keys(user.emotes).length) {
      emotes = user.emotes;
    }

    if (
      user.badges !== null &&
      Object.keys(user.badges).indexOf('broadcaster') !== -1 &&
      user.badges.broadcaster == '1'
    ) {
      isBroadcaster = true;
    }

    if (formatMessages && this.shouldParseEmoticons) {
      body = this.parseEmoticons(message, emotes);
    } else {
      body = this.filterXSS(message);
    }

    const payload = {
      id: user.id || null,
      username: user['display-name'] || user.username,
      body,
      raw: message,
      timestamp: user['tmi-sent-ts']
        ? parseInt(user['tmi-sent-ts'], 10)
        : new Date().getTime(),
      extra: {
        colour: user.color,
        badges: user.badges || {},
        subscriber: user.subscriber,
        mod: user.mod,
        turbo: user.turbo,
        broadcaster: isBroadcaster,
        'message-type': user['message-type'],
        emotes,
      },
    };

    log.trace(LOG_SCOPE, 'EMIT MESSAGE', {
      channel,
      username: payload.username,
      self: !!self,
      mod: payload.extra.mod,
      broadcaster: isBroadcaster,
      messageLength: typeof message === 'string' ? message.length : null,
    });

    this.emit('message', payload);
  }

  /**
   * @param {string} message
   * @param {object} rawEmotes
   *
   * @return {string}
   */
  parseEmoticons(message, rawEmotes) {
    if (rawEmotes === undefined || rawEmotes === null) {
      return this.filterXSS(message);
    }

    const rawKeys = Object.keys(rawEmotes);
    let newMessage = message;
    let emotes = {};

    // Loop through each emote key (eg. Kappa) and create an array of emote keys mapped to their <img> equivalent
    rawKeys.forEach((key) => {
      key = parseInt(key, 10);

      rawEmotes[key].forEach((p) => {
        const split = p.split('-');
        const start = parseInt(split[0], 10);
        const end = parseInt(split[1], 10) + 1;

        emotes[
          message.substring(start, end)
        ] = `<img class='emoticon' src='https://static-cdn.jtvnw.net/emoticons/v1/${key}/1.0' />`;
      });
    });

    // Filter the message for any XSS
    newMessage = this.filterXSS(newMessage);

    let keys = Object.keys(emotes);
    keys.forEach((key) => {
      // Escape the emote in the event it's a smiley face
      const keyEscaped = key.replace(
        /[-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
        '\\$&'
      );
      const reg = new RegExp(keyEscaped, 'g');

      // Replace all instances of each emote with its <img> equivalent
      newMessage = newMessage.replace(reg, emotes[key]);
    });

    return newMessage;
  }

  /**
   * Fetches a list of badges for all connected channels or a given list of channels.
   *
   * @return {Promise}
   */
  async getBadges() {
    const userId = this.getConfig('userId');

    if (!userId) {
      log.trace(LOG_SCOPE, 'GET BADGES FAILED', { reason: 'userId is not set' });
      throw new Error('userId is not set.');
    }

    log.trace(LOG_SCOPE, 'GET BADGES START', { userId });

    try {
      const globalResponse = await this.api('get', 'chat/badges/global');
      const customResponse = await this.api('get', 'chat/badges', {
        broadcaster_id: userId,
      });

      const badges = [...globalResponse?.data?.data, ...customResponse?.data?.data];

      log.trace(LOG_SCOPE, 'GET BADGES DONE', {
        userId,
        badgeCount: badges ? badges.length : 0,
      });

      return badges;
    } catch (err) {
      log.trace(LOG_SCOPE, 'GET BADGES ERROR', {
        userId,
        error: {
          name: err && err.name ? err.name : 'Error',
          message: err && err.message ? err.message : String(err),
        },
      });
      throw err;
    }
  }

  /**
   * Fetch and set required user data for the Interface.
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
      const { data } = await this.api('get', 'users');
      const user = data.data[0];

      const channel = this.getConfig('channel', user.login);
      const username = this.getConfig('username', user.login);
      const userId = this.getConfig('userId', parseInt(user.id, 10));

      this.setConfig({
        channel,
        username,
        userId,
      });

      log.trace(LOG_SCOPE, 'LOAD USER DONE', {
        channel,
        username,
        userId,
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
   *
   * @param {string|object} [key]
   * @param {string|number|object} [value]
   */
  async setConfig(key, value = null) {
    super.setConfig(key, value);

    this.http = axios.create({
      baseURL: 'https://api.twitch.tv/helix/',
      headers: {
        'Client-ID': this.getConfig('clientId'),
        Accept: 'application/vnd.twitchtv.v5+json',
        Authorization: `Bearer ${this.getConfig('accessToken')}`,
      },
      responseType: 'json',
    });

    log.trace(LOG_SCOPE, 'SET CONFIG', {
      clientId: this.getConfig('clientId') || null,
      channel: this.getConfig('channel') || null,
      username: this.getConfig('username') || null,
      userId: this.getConfig('userId') || null,
      accessToken: log.redactToken(this.getConfig('accessToken')),
      parseEmoticon: this.getConfig('parseEmoticon'),
      reconnect: this.getConfig('reconnect'),
      formatMessages: this.getConfig('formatMessages'),
    });
  }

  /**
   * Returns the TwitchJS instance.
   *
   * @return {*}
   */
  getClient() {
    return this.client;
  }

  /**
   * Name of the Interface.
   *
   * @return {string}
   */
  getName() {
    return 'Twitch';
  }

  /**
   * The short & lowercase key for the Interface. Should be the same as the
   * InterfaceBag Key.
   *
   * @return {string}
   */
  getKey() {
    return 'twitch';
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
   * Pass-through function to listen to any supported event in TwitchJS.
   * https://github.com/twitch-apis/twitch-js/blob/master/docs/Chat/Events.md
   *
   * @param {string} evnt
   * @param {*}      callback
   *
   * @returns {Twitch}
   */
  clientOn(evnt, callback) {
    log.trace(LOG_SCOPE, 'CLIENT ON', {
      event: evnt,
      channel: this.getConfig('channel'),
      hasClient: this.client !== null,
    });
    this.client.on(evnt, callback);

    return this;
  }

  /**
   * Query the Twitch API for a given method, endpoint and query param.
   *
   * @param {string} method
   * @param {string} url
   * @param {object} data
   *
   * @return {Promise}
   */
  api(method, url, data = {}) {
    const clientId = this.getConfig('clientId');

    if (!clientId) {
      log.trace(LOG_SCOPE, 'API FAILED', { reason: 'clientId not set', method, url });
      throw new Error('clientId not set.');
    }

    const requestUrl =
      url + (method === 'get' ? '?' + new URLSearchParams(data).toString() : '');

    log.trace(LOG_SCOPE, 'API REQUEST', {
      method,
      url: requestUrl,
      clientId,
    });

    return this.http
      .request({
        method,
        url: requestUrl,
        data: method === 'get' ? undefined : data,
      })
      .then(response => {
        log.trace(LOG_SCOPE, 'API RESPONSE', {
          method,
          url: requestUrl,
          status: response.status || 200,
        });
        return response;
      })
      .catch(err => {
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
   * Message event handler.
   *
   * @param {string}  channel
   * @param {object}  user
   * @param {string}  message
   * @param {boolean} self
   */
  msgEvnt(channel, user, message, self) {
    this.parseMessage({
      channel,
      user,
      message,
      self,
    });
  }
}

export default Twitch;
