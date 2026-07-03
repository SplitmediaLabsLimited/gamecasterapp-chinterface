/**
 * Copyright (c) 2017-present, SplitmediaLabs Limited
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import axios from 'redaxios';
import Interface from './interface';
import log from '../utils/logger';

const LOG_SCOPE = 'FACEBOOK';

// Latest Graph API version. https://developers.facebook.com/docs/graph-api/changelog/versions/
const DEFAULT_GRAPH_VERSION = 'v25.0';

class Facebook extends Interface {
  messagesId = [];
  fetchTimeout;
  since;

  /**
   * Initialize the Interface.
   */
  constructor() {
    super();

    this.canSend = false;

    this.setConfig({
      version: DEFAULT_GRAPH_VERSION,
      parseUrl: true,
      interval: 5000,
    });

    this.required = ['liveVideoId', 'accessToken'];

    this.fields = [
      'id',
      'attachment',
      'created_time',
      'from{id, name,picture{url}}',
      'message',
      'message_tags',
    ];

    log.trace(LOG_SCOPE, 'CONSTRUCTED', {
      version: DEFAULT_GRAPH_VERSION,
    });
  }

  /**
   * Initialize connection and start polling for comments.
   *
   * @return {Promise}
   */
  async connect() {
    super.connect();
    this.connected = true;

    log.trace(LOG_SCOPE, 'CONNECT', {
      liveVideoId: this.getConfig('liveVideoId'),
      accessToken: log.redactToken(this.getConfig('accessToken')),
      interval: this.getConfig('interval'),
    });

    this.emit('connected');
    this.fetchMessages();
  }

  _fetchMessages = async () => {
    try {
      const liveVideoId = this.getConfig('liveVideoId');
      const accessToken = this.getConfig('accessToken');

      //check if live stopped
      const videoParams = {
        access_token: accessToken,
        fields: 'status',
      };

      log.trace(LOG_SCOPE, 'FETCH STATUS', { liveVideoId });

      const { data: videoDetails } = await this.api('get', liveVideoId, videoParams);

      log.trace(LOG_SCOPE, 'FETCH STATUS RESULT', {
        liveVideoId,
        status: videoDetails ? videoDetails.status : null,
      });

      if (!['LIVE', 'SCHEDULED_LIVE'].includes(videoDetails.status)) {
        log.trace(LOG_SCOPE, 'FETCH STOPPING', {
          reason: 'video not live',
          status: videoDetails ? videoDetails.status : null,
        });
        this.disconnect();
        return;
      }

      //continue getting chats
      const fields = this.fields.join(',');

      const urlMain = [liveVideoId, 'comments'].join('/');

      //instead of paging the since parameter would be used for optimization
      const params = this.since
        ? {
            access_token: accessToken,
            fields: fields,
            limit: 200,
            since: this.since,
          }
        : {
            access_token: accessToken,
            fields: fields,
            limit: 200,
          };

      log.trace(LOG_SCOPE, 'FETCH COMMENTS', {
        liveVideoId,
        since: this.since || null,
        fields,
      });

      const { data: messages } = await this.api('get', urlMain, params);

      const list = (messages && messages.data) || [];

      log.trace(LOG_SCOPE, 'FETCH COMMENTS RESULT', {
        liveVideoId,
        received: list.length,
        seenCount: this.messagesId.length,
      });

      this.handleMessages(list);

      const interval = parseInt(this.getConfig('interval'), 10);

      this.fetchTimeout = setTimeout(this._fetchMessages, interval);
    } catch (error) {
      clearTimeout(this.fetchTimeout);

      log.trace(LOG_SCOPE, 'FETCH ERROR', {
        message: error && error.message ? error.message : String(error),
      });

      this.emit('error', error);
    }
  };

  /**
   * Fetch current available messages
   *
   * @return {Promise}
   */
  fetchMessages() {
    const interval = parseInt(this.getConfig('interval'), 10);
    this.fetchTimeout = setTimeout(this._fetchMessages, interval);
  }

  handleMessages(list) {
    list.forEach((message) => {
      if (this.messagesId.includes(message.id)) {
        log.trace(LOG_SCOPE, 'COMMENT DUPLICATE', { id: message.id });
        return;
      }

      this.messagesId.push(message.id);
      this.since = message.created_time.split('+')[0];
      this.msgEvent(message);
    });
  }

  /**
   * Disconnects the poller.
   */
  disconnect() {
    super.disconnect();

    log.trace(LOG_SCOPE, 'DISCONNECT', { wasConnected: this.connected });

    this.connected = false;
    this.canSend = false;
    this.since = null;
    this.messagesId = [];
    clearTimeout(this.fetchTimeout);

    this.emit('disconnected');
  }

  /**
   * Method to send the given message
   *
   * @param {string} message
   */
  async send(message) {
    if (!this.isConnected) {
      log.trace(LOG_SCOPE, 'SEND FAILED', { reason: 'not connected' });
      throw new Error('Unable to send message. No connection to Event Source.');
    }

    if (!this.canSend) {
      log.trace(LOG_SCOPE, 'SEND FAILED', { reason: 'not a page access token' });
      throw new Error(
        'Unable to send message. Sending is only available for page access tokens',
      );
    }

    const videoId = this.getConfig('videoId');

    if (!videoId) {
      this.canSend = false;
      log.trace(LOG_SCOPE, 'SEND FAILED', { reason: 'videoId not set' });
      console.error('Unable to send message. Need video id of stream');
      return;
    }

    const accessToken = this.getConfig('accessToken');

    log.trace(LOG_SCOPE, 'SEND', { videoId });

    try {
      await this.api(
        'post',
        `${videoId}/comments?access_token=${accessToken}`,
        { message },
      );

      log.trace(LOG_SCOPE, 'SEND DONE', { videoId });
    } catch (e) {
      log.trace(LOG_SCOPE, 'SEND ERROR', {
        message: e && e.message ? e.message : String(e),
      });
      this.emit('error', e);
    }
  }

  /**
   * Method to send a message to a page
   *
   * @param {object} config
   * @param {string} message
   */
  async sendMessageToPage(config, message) {
    try {
      const { liveVideoId, accessToken } = config;

      log.trace(LOG_SCOPE, 'SEND TO PAGE', { liveVideoId });

      await this.api(
        'post',
        `${liveVideoId}/comments?access_token=${accessToken}`,
        { message },
      );

      log.trace(LOG_SCOPE, 'SEND TO PAGE DONE', { liveVideoId });
    } catch (e) {
      log.trace(LOG_SCOPE, 'SEND TO PAGE ERROR', {
        message: e && e.message ? e.message : String(e),
      });
      this.emit('error', e);
    }
  }

  /**
   * Parses a message in to the unified format.
   *
   * @param {object} data
   */
  msgEvent(event) {
    const { id, attachment, from, message, created_time } = event;

    const username = from?.name ?? 'Anonymous';
    const userId = from?.id ?? 0;
    const image = from?.picture?.data?.url ?? null;

    let body = this.filterXSS(message ?? '');
    body = this.parseMessage(body);

    const broadcasterId = this.getConfig('userId');

    log.trace(LOG_SCOPE, 'EMIT message', {
      id,
      username,
      userId,
      broadcaster: +userId === +broadcasterId,
    });

    this.emit('message', {
      id,
      body,
      username,
      raw: message,
      timestamp: created_time ? new Date(created_time).getTime() : Date.now(),
      extra: {
        user_id: userId,
        image,
        broadcaster: +userId === +broadcasterId,
        attachment,
      },
    });
  }

  /**
   * Parses message
   *
   * @param {message} message
   * @returns {string}
   */
  parseMessage(message) {
    if (this.shouldParseUrl) {
      message = this.parseUrl(message);
    }

    return message;
  }

  /**
   * Parses links
   *
   * @param {string} message
   * @return {string}
   */
  parseUrl(message) {
    const regex = new RegExp(/((https?|ftp):\/\/|www)\S+/gi);

    return message.replace(
      regex,
      match => `<a href='${match}' class='link'>${match}</a>`,
    );
  }

  /**
   * Fetch and set user data for the Interface.
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
    });

    const { data } = await this.api('get', `me`, {
      fields: 'id,name',
      access_token: accessToken,
    });

    const { id: userId, name: username } = data;

    // The `metadata` introspection previously used to detect a page vs. user
    // token was deprecated in Graph API v25.0 (it now returns a 400), so probe
    // a Page-only field instead to decide whether sending is available.
    this.canSend = await this.isPageAccessToken(accessToken);

    this.setConfig({
      userId,
      username,
    });

    log.trace(LOG_SCOPE, 'LOAD USER DONE', {
      userId,
      username,
      isPage: this.canSend,
      canSend: this.canSend,
    });
  }

  /**
   * Determines whether the given access token is a Page access token.
   *
   * `/me?metadata=1` no longer reports the node type in Graph API v25.0, so we
   * probe the `category` field which only exists on Page nodes. Requesting it
   * with a User token errors, which we treat as "not a page".
   *
   * @param {string} accessToken
   *
   * @return {Promise<boolean>}
   */
  async isPageAccessToken(accessToken) {
    try {
      const { data } = await this.api('get', 'me', {
        fields: 'category',
        access_token: accessToken,
      });

      return Boolean(data && data.category);
    } catch (error) {
      log.trace(LOG_SCOPE, 'TOKEN TYPE PROBE FAILED', {
        message: error && error.message ? error.message : String(error),
      });

      return false;
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

    const version = this.getConfig('version', DEFAULT_GRAPH_VERSION);

    if (version) {
      this.http = axios.create({
        baseURL: `https://graph.facebook.com/${version}/`,
        responseType: 'json',
      });
    }

    log.trace(LOG_SCOPE, 'SET CONFIG', {
      version,
      liveVideoId: this.getConfig('liveVideoId') || null,
      accessToken: log.redactToken(this.getConfig('accessToken')),
      interval: this.getConfig('interval'),
      parseUrl: this.getConfig('parseUrl'),
    });

    return this;
  }

  /**
   * Query the Facebook Graph API for a given method, endpoint and query param.
   *
   * @param {string} method
   * @param {string} url
   * @param {object} data
   *
   * @return {Promise}
   */
  async api(method, url, data = {}) {
    const requestUrl =
      url +
      (method === 'get' ? '?' + new URLSearchParams(data).toString() : '');

    log.trace(LOG_SCOPE, 'API REQUEST', {
      method,
      version: this.getConfig('version', DEFAULT_GRAPH_VERSION),
      url: this.redactUrl(requestUrl),
    });

    try {
      const response = await this.http.request({
        method,
        url: requestUrl,
        data: method === 'get' ? undefined : data,
      });

      log.trace(LOG_SCOPE, 'API RESPONSE', {
        method,
        status: response.status || 200,
        url: this.redactUrl(requestUrl),
      });

      return response;
    } catch (response) {
      const fbError = response && response.data && response.data.error;
      const status = (response && response.status) || null;
      const statusText = (response && response.statusText) || null;

      log.trace(LOG_SCOPE, 'API ERROR', {
        method,
        url: this.redactUrl(requestUrl),
        status,
        statusText,
        fbCode: (fbError && fbError.code) || null,
        fbSubcode: (fbError && fbError.error_subcode) || null,
        fbType: (fbError && fbError.type) || null,
        fbMessage: (fbError && fbError.message) || null,
        // Surface the raw payload when Facebook didn't return a standard error
        // object (e.g. an empty/opaque body on a cross-origin 400) so failures
        // aren't logged as "[object Object]" with no detail.
        rawData: fbError ? undefined : response && response.data,
      });

      const message =
        (fbError && fbError.message) ||
        (status
          ? `Request failed with status ${status}${
              statusText ? ` (${statusText})` : ''
            }`
          : String(response));

      throw new Error(message);
    }
  }

  /**
   * Redacts the access_token value from a URL so it can be safely logged.
   *
   * @param {string} url
   *
   * @return {string}
   */
  redactUrl(url) {
    if (typeof url !== 'string') {
      return url;
    }

    return url.replace(
      /(access_token=)[^&]+/i,
      (match, prefix) => `${prefix}${log.redactToken(this.getConfig('accessToken'))}`
    );
  }

  /**
   * Name of the Interface.
   *
   * @return {string}
   */
  getName() {
    return 'Facebook';
  }

  /**
   * The short & lowercase key for the Interface. Should be the same as the
   * InterfaceBag Key.
   *
   * @return {string}
   */
  getKey() {
    return 'facebook';
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
}

export default Facebook;
