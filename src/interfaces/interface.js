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
     * Connects the Interface to its data source/starts polling for data.
     */
    connect() {
        if (this.isConnected) {
            return;
        }
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
    getUser() {
        return Promise.resolve();
    }

    /**
     * Listen to the specified Event.
     *
     * @param {string} evnt
     * @param {Function} callback
     */
    on(evnt, callback) {
        this._callbacks[evnt] = callback;
    }

    /**
     * Emits the given event to any listeners.
     *
     * @param {string} evnt
     * @param {object} [data]
     */
    emit(evnt, data = {}) {
        if (this._callbacks.hasOwnProperty(evnt)) {
            this._callbacks[evnt](data);
        }
    }

    /**
     * Deletes a listener event.
     *
     * @param {string} evnt
     */
    destroy(evnt) {
        if (this._callbacks.hasOwnProperty(evnt)) {
            delete this._callbacks[evnt];
        }
    }

    /**
     * Sets Config value(s) for the Interface.
     *
     * @param {string|object} [key]
     * @param {string|number|object} [value]
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
                this._config[key] === undefined ||
                (Helpers.isString(this._config[key]) && !this._config[key].length)
            ) {
                return dflt;
            }

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

}

export default Interface;
