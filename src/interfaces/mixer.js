/**
 * Copyright (c) 2017-present, SplitmediaLabs Limited
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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

    this.setConfig({
      parseEmoticon: true,
      parseUrl: true,
      reconnect: true
    });
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

      this.api('get', `channels/${username}?fields=id,userId`)
          .then(({ data }) => {

            const { id : channelId, userId } = data;

            this.setConfig({ channelId, userId });

            this.api('get', `chats/${channelId}`)
              .then(({ data }) => {

                const { endpoints } = data;

                this.endpoints = endpoints.entries();

                const url = this.connectToWs(resolve);

                this.emit('logs', `Connecting to Websocket using: ${url}`)
              })
              .catch(e => {
                reject(new Error(e));
              })
          })
          .catch(e => {
            reject(new Error(e));
          });

    })
  }

  /**
   * Disconnects the WebSocket Instance
   */
  disconnect() {
    if (this.isConnected) {
      this.ws.close();
      return;
    }

    this.emit('disconnected');
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
    let span = document.createElement('span');

    return message
      .map(item => {
        if (item.type === 'emoticon') {
          span.style.backgroundImage = `url(https://mixer.com/_latest/assets/emoticons/${item.pack}.png)`;
          span.style.backgroundRepeat = 'no-repeat';
          span.style.verticalAlign = 'baseline';
          span.style.display = 'inline-block';
          span.style.height = item.coords.height + 'px';
          span.style.width = item.coords.width + 'px';
          span.style.backgroundPositionX = (item.coords.x * -1) + 'px';
          span.style.backgroundPositionY = (item.coords.y * -1) + 'px';
          span.alt = item.text;
          span.classList.add(item.type);

          item.text = span.outerHTML;
        }

        return item;
      })
  }

  /**
   * Parses Links
   *
   * return {array}
   */
  parseUrl(message) {
    let link = document.createElement('a');

    return message
      .map(item => {
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
    const {
            id,
            user_roles,
            user_level,
            user_id,
            user_avatar,
            message,
            user_name : username,
          } = data;

    let body = JSON.parse(JSON.stringify(message.message));

    if (this.shouldParseEmoticons) {
      body = this.parseEmoticon(body);
    }

    if (this.shouldParseUrl) {
      body = this.parseUrl(body);
    }

    body = body.reduce((text, item) => `${text}${item.text}`, '');

    this.emit('message', {
      username,
      id,
      body,
      raw: message.message,
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
  createWsInstance(resolve, url) {
    this.ws = new WebSocket(url);

    const args = [this.getConfig('channelId')],
      userId = this.getConfig('userId'),
      authKey = this.getConfig('authKey');

    if (userId && authKey) {
      args.push(userId);
      args.push(authKey);
    }

    this.ws.addEventListener('open', data => {
      this._connected = true;

      this.send({ method: 'auth', arguments: args });

      resolve();
    })

    this.ws.addEventListener('message', this.msgEvent.bind(this))

    this.ws.addEventListener('error', () => {
      this._allowSend = false;

      this.emit('message-sending', false);

      this.ws.removeEventListener('message', this.msgEvent.bind(this));

      if (this.shouldReconnect) {
        const url = this.connectToWs(resolve);
        this.emit('logs', `Reconnecting to Websocket using: ${url}`);
        return;
      }

      this.ws.close();
    });

    this.ws.addEventListener('close', () => {
      this._allowSend = false;

      this.ws.removeEventListener('message', this.msgEvent.bind(this));
      this.emit('message-sending', false);
      this.emit('disconnected');
    });
  }

  /**
   * Handles connection and reconnection of WebSocket
   */
  connectToWs(resolve) {
    const item = this.endpoints.next();

    if (item.done) {
      this.emit('logs', 'Unable to connect to WebSocket servers');
      this.emit('disconnected');
      return;
    }

    const url = item.value.pop();

    this.createWsInstance(resolve, url);

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
      this._allowSend = data.data.authenticated;

      this.emit('message-sending', true);
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
   * Returns current reconnect configuration
   *
   * return {boolean}
   */
  get shouldReconnect() {
    return !!+this.getConfig('reconnect');
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