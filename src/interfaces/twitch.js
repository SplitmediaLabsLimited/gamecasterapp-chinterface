/**
 * Copyright (c) 2017-present, SplitmediaLabs Limited
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import tmi from '@cvpcasada/tmi.js';
import axios from 'axios';
import Interface from './interface';

class Twitch extends Interface {
    /**
     * Initialize the Interface.
     */
    constructor() {
        super();

        this._client = null;
    }

    /**
     * Connects the Interface to it's data source/starts polling for data.
     *
     * @return {Promise}
     */
    connect() {
        super.connect();

        return new Promise((resolve, reject) => {
            const clientId = this.getConfig('clientId');
            let channel = this.getConfig('channel');

            if (
                (clientId !== undefined && clientId.length) &&
                (channel !== undefined && channel.length)
            ) {
                const username = this.getConfig('username');
                const accessToken = this.getConfig('accessToken');
                let identity = {};

                if (
                    username !== undefined && username.length &&
                    accessToken !== undefined && accessToken.length
                ) {
                    identity = {
                        username,
                        password: accessToken,
                    };
                }

                this._client = new tmi.client({
                    channels: [channel],
                    identity,
                    options: {
                        clientId,
                        debug: false,
                    },
                    connection: {
                        reconnect: this.getConfig('reconnect') || true,
                        secure: true,
                    },
                });

                this._client.on('chat', (channel, user, message, self) => {
                    this.parseMessage({
                        channel,
                        user,
                        message,
                        self,
                    });
                });
                this._client.on('join', () => {
                    this.isConnected = true;
                    resolve();
                });

                this._client.connect();
            } else {
                reject('No ClientID or channel specified.');
            }
        });
    }

    /**
     * Disconnects the Interface from it's data source.
     */
    disconnect() {
        super.disconnect();

        this._client.disconnect();
        this._client = null;
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
        return this._client.say(this.getConfig('channel'), message);
    }

    /**
     * Parses a message in to the unified format.
     *
     * @param {String} channel
     * @param {String} user
     * @param {String} message
     * @param {Boolean} self
     */
    parseMessage({ channel, user, message, self }) {
        const rawMessage = message;
        let isBroadcaster = false;
        let emotes = null;

        if (
            user.emotes !== null &&
            Object.keys(user.emotes).length
        ) {
            emotes = user.emotes;
        }

        if (
            Object.keys(user.badges).indexOf('broadcaster') !== -1 &&
            user.badges.broadcaster == '1'
        ) {
            isBroadcaster = true;
        }

        if (this.shouldParseEmoticons()) {
            message = this.parseEmoticons(message, emotes);
        }

        this.emit('message', {
            username: user['display-name'] || user.username,
            body: message,
            raw: rawMessage,
            timestamp: user['sent-ts'] ? parseInt(user['sent-ts']) : new Date().getTime(),
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
     * @param {Object} rawEmotes
     *
     * @return {string}
     */
    parseEmoticons(message, rawEmotes) {
        if (rawEmotes === undefined || rawEmotes === null) {
            return message;
        }

        const rawKeys = Object.keys(rawEmotes);
        let offset = 0;
        let newMessage = message;
        let emotes = {};

        rawKeys.forEach(key => {
            key = parseInt(key);

            rawEmotes[key].forEach(p => {
                const split = p.split('-');
                const start = parseInt(split[0]);

                emotes[start] = {
                    start,
                    end: parseInt(split[1]),
                    key,
                };
            });
        });

        let keys = Object.keys(emotes);

        keys.sort((a, b) => a - b);

        keys.forEach(k => {
            const { start, end, key } = emotes[k];
            const length = (end - start) + 1;
            const left = newMessage.substring(0, start + offset);
            const middle = `<img class="emoticon" src="https://static-cdn.jtvnw.net/emoticons/v1/${key}/3.0" />`;
            const right = newMessage.substring(end + 1 + offset);

            offset += middle.length - length;

            newMessage = `${left}${middle}${right}`;
        });

        return newMessage;
    }

    /**
     * Fetches a list of badges for all connected channels or a given list of channels.
     *
     * @return {Promise}
     */
    getBadges() {
        const userId = this.getConfig('userId');

        if (!userId) {
            throw new Error('User ID is not set.');
        }

        return new Promise((resolve, reject) => {
            this.api('get', `chat/${userId}/badges`)
                .then(({data}) => {
                    resolve(data);
                })
                .catch(e => {
                    reject(e);
                });
        });
    }

    /**
     * Fetch and set required user data for the Interface.
     *
     * @returns {Promise}
     */
    getUser() {
        const accessToken = this.getConfig('accessToken');

        if (accessToken === undefined || !accessToken.length) {
            throw new Error('Access token not set.');
        }

        return new Promise((resolve, reject) => {
            this.api('get', 'user')
                .then(({data}) => {
                    let channel = this.getConfig('channel');
                    let username = this.getConfig('username');
                    let userId = this.getConfig('userId');

                    if (channel === undefined || !channel.length) {
                        channel = data.name || '';
                    }

                    if (username === undefined || !username.length) {
                        username = data.name || '';
                    }

                    if (userId === undefined || !userId) {
                        userId = parseInt(data._id) || null;
                    }

                    this.setConfig({
                        channel,
                        username,
                        userId,
                    });

                    resolve();
                })
                .catch(e => {
                    reject(e);
                });
        });
    }

    /**
     * Sets Config value(s) for the Interface.
     *
     * @param {*} [key]
     * @param {*} [value]
     */
    setConfig(key, value = null) {
        super.setConfig(key, value);

        this._http = axios.create({
            baseURL: 'https://api.twitch.tv/kraken/',
            headers: {
                'Client-ID': this.getConfig('clientId'),
                'Accept': 'application/vnd.twitchtv.v5+json',
                'Authorization': `OAuth ${this.getConfig('accessToken')}`,
            },
        });
    }

    /**
     * Returns the TMI instance.
     *
     * @return {*}
     */
    getClient() {
        return this._client;
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
        return false;
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
     * Pass-through function to listen to any supported event in TMI.
     * https://docs.tmijs.org/v1.2.1/Events.html
     *
     * @param {String} evnt
     * @param {*}      callback
     *
     * @returns {Twitch}
     */
    clientOn(evnt, callback) {
        this._client.on(evnt, callback);

        return this;
    }

    /**
     * Query the Twitch API for a given method, endpoint and query param.
     *
     * @param {String} method
     * @param {String} url
     * @param {Object} data
     *
     * @return {Promise}
     */
    api(method, url, data = {}) {
        const clientId = this.getConfig('clientId');

        if (clientId === undefined || !clientId.length) {
            throw new Error('Client ID not set.');
        }

        return this._http.request({
            method,
            url,
            data,
        });
    }
}

export default new Twitch();
