/**
 * Copyright (c) 2017-present, SplitmediaLabs Limited
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Html5Entities } from 'html-entities/lib/html5-entities';
import Helpers from '../utils/helpers';

class Interface {
  /**
   * Initialize the Interface.
   */
  constructor() {
    this.config = {};
    this.required = []; // required config settings
    this.callbacks = {};
    this.connected = false;

    this.reconnectCurrentInterval = 1000; // 1s [default]
    this.reconnectDefaultInterval = 1000; // 1s [default]
    this.reconnectMultiplier = 1.8; // 1.8s [reconnect interval increment]
    this.reconnectMaxInterval = 60000; // 60s [max. retry time]
    this.reconnectAttempt = 0;
  }

  /**
   * Connects the Interface to its data source/starts polling for data.
   */
  connect() {
    if (this.isConnected) {
      return;
    }

    this.requiredConfigSet();
  }

  /**
   * Disconnects the Interface from its data source.
   */
  disconnect() {
    if (!this.isConnected) {
      return;
    }
  }

  /**
   * If the Interface supports writing, this method will send the given
   * message.
   *
   * @param {string} message
   *
   * @return {Promise}
   */
  send(message) {
    return Promise.resolve();
  }

  /**
   * Parses a message in to the unified format.
   *
   * @param {object} data
   */
  parseMessage(data) {
    //
  }

  /**
   * Fetch and set required user data for the Interface.
   *
   * @returns {Promise}
   */
  loadUser() {
    return Promise.resolve();
  }

  /**
   * Listen to the specified Event.
   *
   * @param {string} evnt
   * @param {Function} callback
   */
  on(evnt, callback) {
    this.callbacks[evnt] = callback;
  }

  /**
   * Emits the given event to any listeners.
   *
   * @param {string} evnt
   * @param {object} [data]
   */
  emit(evnt, data = {}) {
    if (this.callbacks.hasOwnProperty(evnt)) {
      this.callbacks[evnt](data);
    }
  }

  /**
   * Deletes a listener event.
   *
   * @param {string} evnt
   */
  destroy(evnt) {
    delete this.callbacks[evnt];
  }

  /**
   * Sets Config value(s) for the Interface.
   *
   * @param {string|object} [key]
   * @param {string|number|object} [value]
   */
  async setConfig(key, value = null) {
    if (Helpers.isObj(key)) {
      Object.keys(key).forEach((k) => {
        this.setConfig(k, key[k]);
      });
    } else {
      this.config[key] = value;
    }

    return this;
  }

  /**
   * Returns the Interface Config, specific key value, or default value if not set.
   *
   * @param {string|null} [key]
   * @param {*} [dflt]
   *
   * @return {*}
   */
  getConfig(key = null, dflt = null) {
    if (key !== null) {
      if (
        this.config[key] === undefined ||
        (Helpers.isString(this.config[key]) && !this.config[key].length)
      ) {
        return dflt;
      }

      return this.config[key];
    }

    return this.config;
  }

  /**
   * Check all the required config options are set.
   */
  requiredConfigSet() {
    this.required.forEach((item) => {
      if (!this.getConfig(item)) {
        throw new Error('Required config options not set.');
      }
    });
  }

  /**
   * Name of the Interface.
   *
   * @return {string}
   */
  getName() {
    return 'Undefined';
  }

  /**
   * The short & lowercase key for the Interface. Should be the same as the
   * InterfaceBag Key.
   *
   * @return {string}
   */
  getKey() {
    return 'undefined';
  }

  /**
   * Returns whether the Interface supports emoticons.
   *
   * @return {boolean}
   */
  hasEmoticons() {
    return false;
  }

  /**
   * Returns whether the Interface supports writing/sending.
   *
   * @return {boolean}
   */
  hasWriting() {
    return false;
  }

  /**
   * Returns whether the Interface uses a LIVE datasource (Such as Websockets
   * or DataSource), or uses API polling.
   */
  isLive() {
    return false;
  }

  /**
   * Returns current emoticon parsing configuration
   *
   * @return {boolean}
   */
  get shouldParseEmoticons() {
    return this.getConfig('parseEmoticon');
  }

  /**
   * Returns current url parsing configuration
   *
   * @return {boolean}
   */
  get shouldParseUrl() {
    return this.getConfig('parseUrl');
  }

  /**
   * Returns current reconnect configuration
   *
   * @return {boolean}
   */
  get shouldReconnect() {
    return this.getConfig('reconnect');
  }

  /**
   * Returns whether the Interface is connected/running to a data source.
   *
   * @return {boolean}
   */
  get isConnected() {
    return this.connected;
  }

  /**
   * Increase reconnect interval properties.
   */
  increaseReconnect() {
    if (this.reconnectCurrentInterval >= this.reconnectMaxInterval) {
      this.reconnectCurrentInterval = this.reconnectMaxInterval;
    } else {
      this.reconnectCurrentInterval =
        this.reconnectCurrentInterval * this.reconnectMultiplier;
    }

    this.reconnectAttempt++;
  }

  /**
   * Reset reconnect interval properties.
   */
  resetReconnect() {
    this.reconnectCurrentInterval = this.reconnectDefaultInterval;
    this.reconnectAttempt = 0;
  }

  /**
   *
   * @param message
   * @return {*}
   */
  filterXSS(message) {
    return Html5Entities.encode(message);
  }
}

export default Interface;
