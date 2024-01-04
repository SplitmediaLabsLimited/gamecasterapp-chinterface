/**
 * Copyright (c) 2017-present, SplitmediaLabs Limited
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import axios from 'redaxios';
import Interface from './interface';
import Debug from '../utils/debug';

const CODE_500_SERVER_ERROR = 500;

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
      version: 'v3.3',
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
    
  }

  /**
   * Initialize connection to the Event Source
   *
   * @return {Promise}
   */
  async connect() {
    super.connect();
    this.connected = true;
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

      const { data: videoDetails } = await this.api('get', liveVideoId, videoParams);      
      
      if(!['LIVE', 'SCHEDULED_LIVE'].includes(videoDetails.status)) {
        this.disconnect();
        return;       
      }
      
      //continue getting chats
      const fields = this.fields.join(',');

      const urlMain = [        
        liveVideoId,
        'comments',
      ].join('/');      

      //instead of paging the since parameter would be used for optimization
      const params = this.since ? {
        access_token: accessToken,        
        fields: fields,
        limit: 200,
        since: this.since,
      } : {
        access_token: accessToken,        
        fields: fields,
        limit: 200,        
      };      

      const { data: messages } = await this.api('get', urlMain, params);

      console.log('chinterfate fetchMessage', messages);

      this.handleMessages(messages.data);

      const interval = parseInt(this.getConfig('interval'), 10);

      this.fetchTimeout = setTimeout(this._fetchMessages, interval);      

    } catch (error) {      
      clearTimeout(this.fetchTimeout);
      console.error(error);
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
        return;
      }

      this.messagesId.push(message.id);
      this.since = message.created_time.split('+')[0];
      this.msgEvent(message);

    });

  }  

  /**
   * Disconnecs the Event Source
   */
  disconnect() {
    super.disconnect();

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
      throw new Error('Unable to send message. No connection to Event Source.');
    }

    if (!this.canSend) {
      throw new Error(
        'Unable to send message. Sending is only available for page access tokens',
      );
    }

    const videoId = this.getConfig('videoId');

    if (!videoId) {
      this.canSend = false;
      console.error('Unable to send message. Need video id of stream');
      return;      
    }

    const liveVideoId = this.getConfig('liveVideoId');
    const accessToken = this.getConfig('accessToken');


    try {
      await this.api(
        'post',
        `${videoId}/comments?access_token=${accessToken}`,
        { message },
      );
    } catch (e) {
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
      await this.api(
        'post',
        `${liveVideoId}/comments?access_token=${accessToken}`,
        { message },
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
  msgEvent(event) {
    const { id, attachment, from, message, created_time } = event;    

    const username = from?.name ?? 'Anonymous';
    const userId = from?.id ?? 0;
    const image  = from.picture.data.url;

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
      throw new Error('accessToken not set.');
    }

    const { data } = await this.api('get', `me`, {
      fields: 'id,name,metadata{type}',
      metadata: 1,
      access_token: accessToken,
    });

    const { id: userId, name: username, metadata } = data;

    if (metadata.type === 'page') {
      this.canSend = true;
    }

    this.setConfig({
      userId,
      username,
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
        baseURL: `https://graph.facebook.com/${version}/`,
        responseType: 'json',
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
    try {      
      return await this.http.request({
        method,
        url:
          url +
          (method === 'get' ? '?' + new URLSearchParams(data).toString() : ''),
        data: method === 'get' ? undefined : data,
      });
    } catch (response) {
      throw new Error(response);
    }
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
