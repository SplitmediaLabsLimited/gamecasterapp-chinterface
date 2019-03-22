/**
 * Copyright (c) 2017-present, SplitmediaLabs Limited
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import axios from 'axios';
import Interface from './interface';

const CODE_500_SERVER_ERROR = 500;

class Facebook extends Interface {
  /**
   * Initialize the Interface.
   */
  constructor() {
    super();

    this.canSend = false;

    this.setConfig({
      version: 'v3.0',
      parseUrl: true,
      reconnect: true
    });

    this.required = ['liveVideoId', 'accessToken'];

    this.fields = [
      'id',
      'attachment',
      'created_time',
      'from',
      'message',
      'message_tags',
      'object'
    ];

    this.reConnectionTimeOut = '';
  }

  /**
   * Initialize connection to the Event Source
   *
   * @return {Promise}
   */
  async connect() {
    super.connect();

    const liveVideoId = this.getConfig('liveVideoId');
    const accessToken = this.getConfig('accessToken');
    const commentRate = this.getConfig('commentRate', 'one_hundred_per_second');
    const fields = this.fields.join(',');

    const urlMain = [
      'https://streaming-graph.facebook.com',
      liveVideoId,
      'live_comments'
    ].join('/');

    const params = [
      `access_token=${accessToken}`,
      `comment_rate=${commentRate}`,
      `fields=${fields}`
    ].join('&');

    const url = `${urlMain}?${params}`;

    this.tryConnect(url);
  }

  /**
   * Connects to Event Source
   *
   * @param {string} url
   */
  tryConnect(url) {
    const es = new EventSource(url);

    es.onopen = () => {
      this.connected = true;
      this.emit('connected');
      this.resetReconnect();
    };

    es.onmessage = this.msgEvent.bind(this);

    es.onerror = e => {
      if (e.target.readyState === es.CLOSED) {
        axios.get(url).catch(({ response }) => {
          if (+response.status === CODE_500_SERVER_ERROR) {
            if (this.shouldReconnect) {
              this.increaseReconnect();
              this.emit('reconnect', this.reconnectAttempt);

              this.reConnectionTimeOut = setTimeout(
                () => this.tryConnect(url),
                this.reconnectCurrentInterval
              );
            }
          }
          this.emit('error', response);
        });
        return;
      }

      this.emit('error', e);
    };

    this.es = es;
  }

  /**
   * Disconnecs the Event Source
   */
  disconnect() {
    clearTimeout(this.reConnectionTimeOut);

    if (this.es && this.es.close) {
      this.es.close();
    }

    this.canSend = false;
    this.emit('disconnected');
  }

  /**
   * Method to send the given message
   *
   * @param {string} message
   */
  async send(message) {
    if (!this.isConnected) {
      throw new Error('Unable to send message. No connection to Event Source.');
    }

    if (!this.canSend) {
      throw new Error(
        'Unable to send message. Sending is only available for page access tokens'
      );
    }

    const liveVideoId = this.getConfig('liveVideoId');
    const accessToken = this.getConfig('accessToken');

    try {
      await this.api(
        'post',
        `${liveVideoId}/comments?access_token=${accessToken}`,
        { message }
      );
    } catch (e) {
      this.emit('error', e);
    }
  }

  /**
   * Parses a message in to the unified format.
   *
   * @param {object} data
   */
  msgEvent({ data }) {
    const { id, from, message, created_time } = JSON.parse(data);

    const { username, user_id, image } = this.getUserInfo(from);
    let body = this.filterXSS(message);
    body = this.parseMessage(body);

    const broadcasterId = this.getConfig('userId');

    this.emit('message', {
      id,
      body,
      username,
      raw: message,
      timestamp: new Date(created_time).getTime(),
      extra: {
        user_id,
        image,
        broadcaster: +user_id === +broadcasterId
      }
    });
  }

  /**
   * Method to create unified user object
   *
   * @return {object}
   */
  getUserInfo({ id, name }) {
    const userObj = {
      user_id: id || 0,
      username: name || 'Anonymous',
      image: ''
    };

    if (id) {
      userObj.image = `${this.http.defaults.baseURL}${id}/picture`;
    }

    return userObj;
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
      match => `<a href='${match}' class='link'>${match}</a>`
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
      throw new Error('accessToken not set.');
    }

    const { data } = await this.api('get', `me`, {
      fields: 'id,name,metadata{type}',
      metadata: 1,
      access_token: accessToken
    });

    const { id: userId, name: username, metadata } = data;

    if (metadata.type === 'page') {
      this.canSend = true;
    }

    this.setConfig({
      userId,
      username
    });
  }

  /**
   * Sets Config value(s) for the Interface.
   *
   * @param {string|object} [key]
   * @param {string|number|object} [value]
   */
  async setConfig(key, value = null) {
    super.setConfig(key, value);

    const version = this.getConfig('version', 'v3.0');

    if (version) {
      this.http = axios.create({
        baseURL: `https://graph.facebook.com/${version}/`
      });
    }

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
    if (method === 'get') {
      const params = Object.keys(data)
        .reduce((arr, key) => {
          const value = data[key];

          arr.push(`${key}=${value}`);

          return arr;
        }, [])
        .join('&');

      url = `${url}?${params}`;
      data = {};
    }

    return await this.http.request({
      method,
      url,
      data
    });
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
