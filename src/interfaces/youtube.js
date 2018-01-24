/**
 * Copyright (c) 2017-present, SplitmediaLabs Limited
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import axios from 'axios';
import Interface from './interface';

class Youtube extends Interface {

  messagesId = [];
  interval;

  /**
   * Initialize the Interface.
   */
  constructor() {
    super();

    this.setConfig({
      maxResults: 200,
      interval: 5000
    });
  }

  /**
   * Creates the initial message request
   *
   * @return {Promise}
   */
  connect() {
    super.connect();

    return this.fetchMessage()
      .then(() => {
        this._connected = true;
      });
  }

  /**
   * Stops the polling request
   */
  disconnect() {
    super.disconnect();

    this._connected = false;

    this.emit('disconnected');
  }

  /**
   * Send message to the specified live chat id
   *
   * @return {Promise}
   */
  send(message) {
    const liveChatId = this.getConfig('liveChatId');

    return this.api('post', '?part=snippet,authorDetails', {
      snippet: {
        liveChatId: liveChatId,
        type: 'textMessageEvent',
        textMessageDetails: {
          messageText: message
        }
      }
    })
    .then(({ data }) => {
      this.handleMessages([data]);
    });
  }

  /**
   * Fetch current available messages
   *
   * @return {Promise}
   */
  fetchMessage(token = '') {
    const liveChatId = this.getConfig('liveChatId'),
          maxResults = this.getConfig('maxResults'),
          tokenParam = token ? `&pageToken=${token}` : '';

    return new Promise((resolve, reject) => {
      this.api('get', `?part=snippet,authorDetails&liveChatId=${liveChatId}&maxResults=${maxResults}${tokenParam}`)
        .then(({ data }) => {

          const { items, nextPageToken, pollingIntervalMillis } = data;

          this.handleMessages(items);

          resolve();

          const intervalConfig = +this.getConfig('interval'),
                interval = pollingIntervalMillis > intervalConfig ? pollingIntervalMillis : intervalConfig;

          this.interval = setTimeout(
            () => {
              if (this._connected) {
                this.fetchMessage(nextPageToken)
              }
            },
            interval
          );
        })
        .catch(({ response }) => {
          const { error } = response.data;

          if (+error.code === 401) {
            this.emit('refresh_token');
          }

          reject(error)
        });
    })
  }

  /**
   * Parses a message in to the unified format.
   *
   * @param {object}
   */
  handleMessages(list) {
    const maxResults = this.getConfig('maxResults');

    list
      .forEach(({ id, snippet, authorDetails }) => {

        if (this.messagesId.includes(id)) {
          return;
        }

        this.messagesId.push(id);

        if (this.messagesId.length > maxResults) {
          this.messagesId = this.messagesId.slice(1);
        }

        let message = snippet.displayMessage,
            amount = 0,
            tier = 0;

        if (snippet.type === 'superChatEvent') {
          message = snippet.superChatDetails.userComment;
          amount = snippet.superChatDetails.amountDisplayString;
          tier = snippet.superChatDetails.tier;
        }

        const body = this.parseUrl(message);

        this.emit('message', {
          id,
          body,
          username: authorDetails.displayName,
          raw: message,
          timestamp: new Date(snippet.publishedAt).getTime() || new Date().getTime(),
          extra: {
              type: snippet.type,
              amount,
              tier,
              message: body,
              image: authorDetails.profileImageUrl || '',
              moderator: authorDetails.isChatModerator,
              owner: authorDetails.isChatOwner,
              sponsor: authorDetails.isChatSponsor,
              verified: authorDetails.isVerified
          },
        })
      })
  }


  /**
   * Parses Links
   *
   * return {string}
   */
  parseUrl (message) {
    const regex = new RegExp(/https?:\/\/\S+/ig),
          link = document.createElement('a');

    return message.replace(regex, match => {
      let text = match.length > 40 ? match.slice(0, 37) + '...' : match;

      link.href = match;
      link.textContent = text;

      return link.outerHTML;
    });
  }

  /**
   * Sets Config value(s) for the Interface.
   *
   * @param {string|object} [key]
   * @param {string|number|object} [value]
   */
  setConfig(key, value = null) {
    super.setConfig(key, value);

    this._http = axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3/liveChat/messages',
        headers: {
          'Authorization': `Bearer ${this.getConfig('accessToken')}`,
        },
    });
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
      const accessToken = this.getConfig('accessToken');

      if (!accessToken) {
        return Promise.reject(new Error('Access Token not set.'));
      }

      return this._http.request({
        method,
        url,
        data,
      });
    }
}

export default new Youtube();