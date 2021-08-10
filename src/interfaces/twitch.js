/**
 * Copyright (c) 2017-present, SplitmediaLabs Limited
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import tmi from 'tmi.js';
import axios from 'redaxios';
import Interface from './interface';

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
  }

  /**
   * Connects the Interface to its data source/starts polling for data.
   *
   * @return {Promise}
   */
  connect() {
    super.connect();

    return new Promise((resolve, reject) => {
      const clientId = this.getConfig('clientId');
      const channel = this.getConfig('channel');

      const username = this.getConfig('username');
      const accessToken = this.getConfig('accessToken');
      let identity = {};

      if (username && accessToken) {
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

      this.client.on('connected', () => {
        this.connected = true;
        this.emit('connected');
        resolve();
      });

      this.client.connect();
    });
  }

  /**
   * Disconnects the Interface from its data source.
   */
  disconnect() {
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
    return await this.client.say(this.getConfig('channel'), message);
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

    this.emit('message', {
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
        emotes,
      },
    });
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
      throw new Error('userId is not set.');
    }

    const globalResponse = await this.api('get', 'chat/badges/global');
    const customResponse = await this.api('get', 'chat/badges', {
      broadcaster_id: userId,
    });

    return [...globalResponse?.data?.data, ...customResponse?.data?.data];
  }

  /**
   * Fetch and set required user data for the Interface.
   *
   * @returns {Promise}
   */
  async loadUser() {
    const accessToken = this.getConfig('accessToken');

    if (!accessToken) {
      throw new Error('accessToken not set.');
    }

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
      throw new Error('clientId not set.');
    }

    return this.http.request({
      method,
      url:
        url +
        (method === 'get' ? '?' + new URLSearchParams(data).toString() : ''),
      data: method === 'get' ? undefined : data,
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
