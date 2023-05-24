/**
 * Copyright (c) 2017-present, SplitmediaLabs Limited
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import axios from 'redaxios';
import Interface from './interface';
import { YOUTUBE_EMOJI_LIST } from '../constants';

class Youtube extends Interface {
  messagesId = [];
  fetchTimeout;
  nextPageToken;

  /**
   * Initialize the Interface.
   */
  constructor() {
    super();

    this.required = ['liveChatId', 'accessToken'];
    this.setConfig({
      maxResults: 200,
      interval: 5000,
      profileImageSize: 64,
      parseUrl: true,
      formatMessages: true,
      parseEmoticon: true,
    });
  }

  /**
   * Creates the initial message request
   *
   * @return {Promise.<void>}
   */
  connect() {
    super.connect();

    this.connected = true;
    this.emit('connected');
    this.fetchMessages();
  }

  /**
   * Stops the polling request
   */
  disconnect() {
    super.disconnect();

    this.connected = false;
    clearTimeout(this.fetchTimeout);

    this.emit('disconnected');
  }

  /**
   * Send message to the specified live chat id
   *
   * @return {Promise}
   */
  async send(messageText) {
    if (!messageText.length) {
      throw new Error('A message cannot be empty!');
    }

    const liveChatId = this.getConfig('liveChatId');

    const { data } = await this.api(
      'post',
      'liveChat/messages?part=snippet,authorDetails',
      {
        snippet: {
          liveChatId,
          type: 'textMessageEvent',
          textMessageDetails: {
            messageText,
          },
        },
      }
    );

    this.handleMessages([data]);
  }

  _fetchMessages = async () => {
    try {
      const liveChatId = this.getConfig('liveChatId');
      const maxResults = this.getConfig('maxResults');
      const profileImageSize = this.getConfig('profileImageSize');
      const pageToken = this.nextPageToken ? this.nextPageToken : '';

      const { data } = await this.api('get', 'liveChat/messages', {
        part: 'snippet,authorDetails',
        profileImageSize,
        liveChatId,
        maxResults,
        pageToken,
      });
      const { items, nextPageToken, pollingIntervalMillis } = data;

      this.nextPageToken = nextPageToken;
      this.handleMessages(items);

      const interval = parseInt(this.getConfig('interval'), 10);

      this.fetchTimeout = setTimeout(
        this._fetchMessages,
        pollingIntervalMillis > interval ? pollingIntervalMillis : interval
      );
    } catch (error) {
      this.checkError(error);
      clearTimeout(this.fetchTimeout);
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

  /**
   * Parses a message into the unified format.
   *
   * @param {object} list
   */
  handleMessages(list) {
    list.forEach(({ id, snippet, authorDetails }) => {
      if (this.messagesId.includes(id)) {
        return;
      }

      this.messagesId.push(id);

      let message = snippet.displayMessage || '';
      let extra = {
        type: snippet.type,
        authorChannelId: authorDetails.channelId,
        image: authorDetails.profileImageUrl || '',
        moderator: authorDetails.isChatModerator,
        owner: authorDetails.isChatOwner,
        sponsor: authorDetails.isChatSponsor,
        verified: authorDetails.isVerified,
      };

      switch (snippet.type) {
        case 'superChatEvent':
          message = snippet.superChatDetails.userComment;
          extra.amount = snippet.superChatDetails.amountDisplayString;
          extra.amountMicros = snippet.superChatDetails.amountMicros;
          extra.tier = snippet.superChatDetails.tier;
          extra.currency = snippet.superChatDetails.currency;

          this.emit('super-chat', snippet.superChatDetails);
          return;

        case 'messageDeletedEvent':
          this.emit(
            'delete-message',
            snippet.messageDeletedDetails.deletedMessageId
          );
          return;

        case 'userBannedEvent':
          this.emit('user-banned', snippet.userBannedDetails);
          return;

        case 'chatEndedEvent':
          this.emit('chat-ended');
          return;
      }

      let body = this.filterXSS(message);

      if (this.getConfig('formatMessages') && this.getConfig('parseUrl')) {
        body = this.parseUrl(message);
      }

      if (this.getConfig('parseEmoticon')) {
        body = this.parseEmoticon(message);
      }

      this.emit('message', {
        id,
        body,
        username: authorDetails.displayName,
        raw: message,
        timestamp:
          new Date(snippet.publishedAt).getTime() || new Date().getTime(),
        extra,
      });
    });
  }

  /**
   * Parses Links
   *
   * return {string}
   */
  parseUrl(message) {
    const regex = new RegExp(/https?:\/\/\S+/gi);

    return message.replace(regex, (match) => {
      return `<a href='${match}' class='link'>${match}</a>`;
    });
  }

  escapeRegExp(string) {
    return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
  }

  /**
   * Parses Emoticons
   *
   * return {string}
   */
  parseEmoticon(message) {
    return message.replace(
      new RegExp(
        Object.keys(YOUTUBE_EMOJI_LIST)
          .map((message) => this.escapeRegExp(message))
          .join('|'),
        'g'
      ),
      (match) => `<img class='emoticon' src=${YOUTUBE_EMOJI_LIST[match]} />`
    );
  }

  /**
   * Sets Config value(s) for the Interface.
   *
   * @param {string|object} [key]
   * @param {string|number|object} [value]
   */
  setConfig(key, value = null) {
    super.setConfig(key, value);

    this.http = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3/',
      responseType: 'json',
      headers: {
        Authorization: `Bearer ${this.getConfig('accessToken')}`,
      },
    });
  }

  /**
   * Fetch and set the required chat ID.
   *
   * @returns {Promise.<void>}
   */
  async loadChatId() {
    const { data } = await this.api('get', 'liveBroadcasts', {
      part: 'snippet',
      broadcastStatus: 'active',
      broadcastType: 'all',
      maxResults: 1,
    });

    if (data.items.length) {
      const liveChatId = this.getConfig(
        'liveChatId',
        data.items[0].snippet.liveChatId || null
      );
      this.setConfig({
        liveChatId,
      });
    } else {
      throw new Error('No live broadcasts available.');
    }
  }

  /**
   * Query the YouTube API for a given method, endpoint and query param.
   *
   * @param {string} method
   * @param {string} url
   * @param {object} data
   *
   * @return {Promise}
   */
  async api(method, url, data = {}) {
    const accessToken = this.getConfig('accessToken');

    if (!accessToken) {
      throw new Error('accessToken not set.');
    }

    try {
      return await this.http.request({
        method,
        url:
          url +
          (method === 'get' ? '?' + new URLSearchParams(data).toString() : ''),
        data: method === 'get' ? undefined : data,
      });
    } catch (response) {
      if (response.json) {
        const { error } = await response.json();
        throw error;
      } else {
        throw response;
      }
    }
  }

  /**
   * Check the error status and emit appropriate event.
   *
   * @param {object} error
   */
  checkError(error) {
    switch (parseInt(error.code)) {
      case 401:
        this.emit('refresh-token', error);
        break;
      default:
        this.emit('error', error);
        break;
    }
  }

  /**
   * Name of the Interface.
   *
   * @return {string}
   */
  getName() {
    return 'YouTube';
  }

  /**
   * The short & lowercase key for the Interface. Should be the same as the
   * InterfaceBag Key.
   *
   * @return {string}
   */
  getKey() {
    return 'youtube';
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
    return false;
  }
}

export default Youtube;
