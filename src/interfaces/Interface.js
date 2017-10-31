/**
 * Base Interface Class.
 */

const Helpers = require('./../utils/Helpers');

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
        if (this.isConnected()) {
            return;
        }
    }

    /**
     * Disconnects the Interface from it's data source.
     */
    disconnect() {
        if (!this.isConnected()) {
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
        return new Promise((resolve, reject) => {
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
     * Listen to the specified Event.
     *
     * @param {string|Array} evnt
     * @param {Function} callback
     * @param {boolean} [once]
     */
    on(evnt, callback, once = false) {
        if (Array.isArray(evnt)) {
            evnt.forEach(e => this.on(e, callback, once));
        } else {
            if (!Array.isArray(this._callbacks[evnt])) {
                this._callbacks[evnt] = [];
            }

            this._callbacks[evnt].push({
                callback,
                once,
            });
        }
    }

    /**
     * Shorthand function for listening to a single event once.
     *
     * @param {string} evnt
     * @param {Function} callback
     */
    once(evnt, callback) {
        this.on(evnt, callback, true);
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

                if (listener.once) {
                    console.log('TODO - Remove ONCE listeners.');
                }
            });
        }
    }

    /**
     * Sets Config value(s) for the Interface.
     *
     * @param {string} key
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
        } else {
            return this._config;
        }
    }

    /**
     * Set whether the Interface is connected/running a data source.
     *
     * @param {boolean} connected
     */
    setConnected(connected) {
        this._connected = connected;
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
     * Returns whether the Interface is connected/running to a data source.
     *
     * @return {boolean}
     */
    isConnected() {
        return this._connected;
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

}

module.exports = Interface;
