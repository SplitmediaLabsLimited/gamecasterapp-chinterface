/**
 * Copyright (c) 2017-present, SplitmediaLabs Limited
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import tmi from '@cvpcasada/tmi.js';
import axios from 'axios';
import Interface from './interface';

class Mixer extends Interface {

  /**
   * Initialize the Interface.
   */
  constructor() {
    super();

    this._http = axios.create({
      baseURL: 'https://mixer.com/api/v1/'
    });

    this._allowSend = false;
  }

  /**
   * Initialize the connection to WebSocket
   *
   * @return {Promise}
   */
  connect() {
    return new Promise((resolve, reject) => {
      const username = this.getConfig('username');

      if (!username) {
        reject(new Error('Username not specified.'));
      }

      this.api('get', `channels/${username}?fields=id`)
          .then(({ data }) => {

            const { id : channelId } = data;

            this.setConfig({ channelId });

            this.api('get', `chats/${channelId}`)
              .then(({ data }) => {

                const { endpoints } = data;

                this.endpoints = endpoints.entries();

                const url = this.connectToWs();
                this.emit('logs', `Connecting to Websocket using: ${url}`)
              })
              .catch(e => {
                reject(new Error(e))
              })
          })
          .catch(e => {
            reject(new Error(e))
          });

    })
  }

  /**
   * Disconnects the WebSocket Instance
   */
  disconnect() {
    if (this.isConnected) {
      this.ws.close();
    }
  }

  /**
   * Method to send the given message
   *
   * @param {string}
   */
  send(message) {
    if (typeof message === 'string') {
      if (!this.isConnected) {
        this.emit('logs', 'Unable to send message. No Connection to Websocket');
        return;
      }

      if (!this._allowSend) {
        this.emit('logs', 'Unable to send message. Logged in as Anonymous User');
        return;
      }

      message = { arguments: [message] };
    }

    let _message = {
      id: +(new Date()),
      type: 'method',
      method: 'msg',
      ...message
    };

    this.ws.send(JSON.stringify(_message));
  }

  /*
   * Parses emoticons
   *
   * return {array}
   */
  parseEmoticon(message) {
    let img = document.createElement('img');

    return message.map(item => {
      if (item.type === 'emoticon') {
        img.src = '';
        img.alt = item.text;
        img.classList.add(item.type);

        item.text = img.outerHTML;
      }

      return item;
    })
  }

  /**
   * Parses Links
   * @param  {[type]} message [description]
   * @return {[type]}         [description]
   */
  parseUrl(message) {
    let link = document.createElement('a');

    return message.map(item => {
      if (item.type === 'link') {
        link.href = item.url;
        link.textContent = item.text;
        link.classList.add(item.type);

        item.text = link.outerHTML;
      }

      return item;
    })
  }

  /**
   * Parses a message in to the unified format.
   *
   * @param {object}
   */
  parseMessage({ data }) {
    const rawMessage = data.message.message,
          {
            id,
            user_roles,
            user_level,
            user_id,
            user_avatar,
            user_name : username
          } = data;

    let message = rawMessage;

    if (this.shouldParseEmoticons) {
      message = this.parseEmoticon(message);
    }

    if (this.shouldParseUrl) {
      message = this.parseUrl(message);
    }

    message = message.reduce((text, item) => `${text}${item.text}`, '');

    this.emit('message', {
      username,
      id,
      body: message,
      raw: rawMessage,
      extra: {
        user_roles,
        user_level,
        user_id,
        user_avatar
      }
    })
  }

  /**
   * Creates an instance of Websocket
   *
   * @param {string} url
   */
  createWsInstance(url) {
    this.ws = new WebSocket(url);

    const args = [this.getConfig('channelId')],
      userId = this.getConfig('userId'),
      authKey = this.getConfig('authKey');

    if (userId && authKey) {
      args.push(userId);
      args.push(authKey);
    }

    this.ws.addEventListener('open', data => {
      this.send({ method: 'auth', arguments: args });
    })

    this.ws.addEventListener('message', this.msgEvent.bind(this))

    this.ws.addEventListener('error', () => this.ws.close())

    this.ws.addEventListener('close', () => {
      this._allowSend = false;

      this.ws.removeEventListener('message', this.msgEvent.bind(this))
      const url = this.connectToWs();
      this.emit('logs', `Reconnecting to Websocket using: ${url}`);
    })
  }

  /**
   * Handles connection and reconnection of WebSocket
   */
  connectToWs() {
    const item = this.endpoints.next();

    if (item.done) {
      this.emit('logs', 'Unable to connect to WebSocket servers');
      this.emit('disconnected');
      return;
    }

    const url = item.value.pop();

    this.createWsInstance(url);

    return url;
  }

  /**
  * Unified http request method.
  *
  * @param {string} method
  * @param {string} url
  * @param {object} data
  *
  * @return {Promise}
  */
  api(method, url, data = {}) {
    const username = this.getConfig('username');

    if (!username) {
      return Promise.reject(new Error('Username not specified.'));
    }

    return this._http.request({ method, url, data });
  }

  /**
   * Handler for message receive from WebSocket
   */
  msgEvent({ data }) {
    data = JSON.parse(data);

    if (data.data && data.data.authenticated !== undefined) {
      this._connected = true;
      this._allowSend = data.data.authenticated;
      this.emit('ready');
      return;
    }

    if (data.originatingChannel && data.username) {
      if (data.roles) {
        this.emit('user-join', {
          id: data.id,
          username: data.username,
          roles: data.roles
        })
        return;
      }

      this.emit('user-leave', {
        id: data.id,
        username: data.username
      })
      return;
    }

    switch (data.event) {
      case 'ChatMessage':
        this.parseMessage(data);
        break;

      case 'DeleteMessage':
        this.emit('message-delete', data.data.id);
        break;

      case 'ClearMessages':
        this.emit('message-clear');
        break;

      case 'UserUpdate':
        this.emit('user-update', {
          id: data.data.user,
          username: data.data.username,
          roles: data.data.roles
        })
        break;
      default:
    }
  }

  /**
   * Returns current emoticon parsing configuration
   *
   * return {boolean}
   */
  get shouldParseEmoticons() {
    return !!+this.getConfig('parseEmoticon');
  }

  /**
   * Returns current url parsing configuration
   *
   * return {boolean}
   */
  get shouldParseUrl() {
    return !!+this.getConfig('parseUrl');
  }

}

export default new Mixer();