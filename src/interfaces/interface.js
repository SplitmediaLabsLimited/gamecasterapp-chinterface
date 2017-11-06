/**
 * Copyright (c) 2017-present, SplitmediaLabs Limited
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Helpers from './../utils/helpers';

class Interface {

    /**
     * Initialize the Interface.
     */
    constructor() {
        this._config = {};
        this._callbacks = {};
        this._connected = false;
        this._parseEmoticons = true;
    }

    /**
     * Connects the Interface to it's data source/starts polling for data.
     */
    connect() {
        if (this.isConnected) {
            return;
        }
    }

    /**
     * Disconnects the Interface from it's data source.
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
        return new Promise(resolve => {
            resolve();
        });
    }

    /**
     * Parses a message in to the unified format.
     *
     * @param {Object} data
     */
    parseMessage(data) {
        //
    }

    /**
     * Fetch and set required user data for the Interface.
     *
     * @returns {Promise}
     */
    getUser() {
        return new Promise(resolve => {
            resolve();
        });
    }

    /**
     * Listen to the specified Event.
     *
     * @param {string|Array} evnt
     * @param {Function} callback
     */
    on(evnt, callback) {
        if (Array.isArray(evnt)) {
            evnt.forEach(e => this.on(e, callback));
        } else {
            if (!Array.isArray(this._callbacks[evnt])) {
                this._callbacks[evnt] = [];
            }

            this._callbacks[evnt].push({
                callback
            });
        }
    }

    /**
     * Emits the given event to any listeners.
     *
     * @param {string} evnt
     * @param {Object} [data]
     */
    emit(evnt, data = {}) {
        if (Array.isArray(this._callbacks[evnt]) && this._callbacks[evnt].length) {
            this._callbacks[evnt].forEach(listener => {
                listener.callback(data);
            });
        }
    }

    /**
     * Deletes a listener event.
     *
     * @param {String} evnt
     */
    destroy(evnt) {
        if (Array.isArray(this._callbacks[evnt]) && this._callbacks[evnt].length) {
            delete this._callbacks[evnt];
        }
    }

    /**
     * Sets Config value(s) for the Interface.
     *
     * @param {*} [key]
     * @param {*} [value]
     */
    setConfig(key, value = null) {
        if (Helpers.isObj(key)) {
            Object.keys(key).forEach(k => {
                this.setConfig(k, key[k]);
            });
        } else {
            this._config[key] = value;
        }

        return this;
    }

    /**
     * Returns the Interface Config.
     *
     * @param {string} [key]
     *
     * @return {*}
     */
    getConfig(key = null) {
        if (key !== null) {
            return this._config[key];
        }

        return this._config;
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
     * Returns whether the Interface should parse Emoticons automatically (if
     * supported).
     *
     * @returns {boolean}
     */
    shouldParseEmoticons() {
        return this._parseEmoticons;
    }

    /**
     * Returns whether the Interface is connected/running to a data source.
     *
     * @return {boolean}
     */
    get isConnected() {
        return this._connected;
    }

    /**
     * Set the Interface connection status.
     *
     * @param {boolean} [value]
     */
    set isConnected(value: boolean) {
        this._connected = value;
    }

}

export default Interface;
