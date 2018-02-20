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

        this.client = null;

        this.required = [
            'clientId',
            'channel',
            'userId',
        ];
        this.setConfig({
            parseEmoticon: true,
            reconnect: true,
            formatMessages: true,
        });
    }

    /**
     * Connects the Interface to its data source/starts polling for data.
     *
     * @return {Promise}
     */
    connect() {
        super.connect();

        return new Promise((resolve, reject) => {
            const clientId = this.getConfig('clientId');
            const channel = this.getConfig('channel');

            const username = this.getConfig('username');
            const accessToken = this.getConfig('accessToken');
            let identity = {};

            if (username && accessToken) {
                identity = {
                    username,
                    password: accessToken,
                };
            }

            this.client = new tmi.client({
                channels: [channel],
                identity,
                options: {
                    clientId,
                    debug: false,
                },
                connection: {
                    reconnect: this.shouldReconnect,
                    secure: true,
                },
            });


            this.client.on('connected', () => {
                this.connected = true;
                this.emit('connected');
                resolve();
            });

            this.client.connect();
        });
    }

    /**
     * Disconnects the Interface from its data source.
     */
    disconnect() {
        super.disconnect();

        this.client.disconnect();
        this.client = null;
        this.connected = false;
    }

    /**
     * If the Interface supports writing, this method will send the given
     * message.
     *
     * @param {string} message
     *
     * @return {Promise}
     */
    async send(message) {
        return await this.client.say(this.getConfig('channel'), message);
    }

    /**
     * Listen to the specified Event.
     *
     * @param {string} evnt
     * @param {Function} callback
     */
    on(evnt, callback) {
        super.on(evnt, callback);

        if (
            this.client !== null &&
            evnt === 'message'
        ) {
            this.client.on('chat', this.msgEvnt.bind(this));
        }
    }

    /**
     * Deletes a listener event.
     *
     * @param {string} evnt
     */
    destroy(evnt) {
        super.destroy(evnt);

        if (
            this.client !== null &&
            evnt === 'message'
        ) {
            this.client.removeListener('chat', this.msgEvnt.bind(this));
        }
    }

    /**
     * Parses a message in to the unified format.
     *
     * @param {string} channel
     * @param {string} user
     * @param {string} message
     * @param {boolean} self
     */
    parseMessage({ channel, user, message, self }) {
        const formatMessages = this.getConfig('formatMessages');
        let isBroadcaster = false;
        let emotes = null;
        let body = null;

        if (
            user.emotes !== null &&
            Object.keys(user.emotes).length
        ) {
            emotes = user.emotes;
        }

        if (
            user.badges !== null &&
            Object.keys(user.badges).indexOf('broadcaster') !== -1 &&
            user.badges.broadcaster == '1'
        ) {
            isBroadcaster = true;
        }

        if (
            formatMessages &&
            this.shouldParseEmoticons
        ) {
            /**
             * TODO: Add html entity processing.
             *
             * Notes...
             *
             * 1. Replace all emoticons with a unique random string.
             * 2. Process html entites.
             * 3. Replace all unique strings with the image element.
             */
            body = this.parseEmoticons(message, emotes);
        }

        this.emit('message', {
            id: user.id || null,
            username: user['display-name'] || user.username,
            body,
            raw: message,
            timestamp: user['tmi-sent-ts'] ? parseInt(user['tmi-sent-ts']) : new Date().getTime(),
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
     * @param {object} rawEmotes
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
            const middle = `<img class="emoticon" src="https://static-cdn.jtvnw.net/emoticons/v1/${key}/1.0" />`;
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
    async getBadges() {
        const userId = this.getConfig('userId');

        if (!userId) {
            throw new Error('userId is not set.');
        }

        return await this.api('get', `chat/${userId}/badges`);
    }

    /**
     * Fetch and set required user data for the Interface.
     *
     * @returns {Promise}
     */
    async loadUser() {
        const accessToken = this.getConfig('accessToken');

        if (!accessToken) {
            throw new Error('accessToken not set.');
        }

        const { data } = await this.api('get', 'user');
        const channel = this.getConfig('channel', data.name);
        const username = this.getConfig('username', data.name);
        const userId = this.getConfig('userId', parseInt(data._id));

        this.setConfig({
            channel,
            username,
            userId,
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

        this.http = axios.create({
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
        return this.client;
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

    /**
     * Pass-through function to listen to any supported event in TMI.
     * https://docs.tmijs.org/v1.2.1/Events.html
     *
     * @param {string} evnt
     * @param {*}      callback
     *
     * @returns {Twitch}
     */
    clientOn(evnt, callback) {
        this.client.on(evnt, callback);

        return this;
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
    async api(method, url, data = {}) {
        const clientId = this.getConfig('clientId');

        if (!clientId) {
            throw new Error('clientId not set.');
        }

        return await this.http.request({
            method,
            url,
            data,
        });
    }

    /**
     * Message event handler.
     *
     * @param {string}  channel
     * @param {object}  user
     * @param {string}  message
     * @param {boolean} self
     */
    msgEvnt(channel, user, message, self) {
        this.parseMessage({
            channel,
            user,
            message,
            self,
        });
    }
}

export default new Twitch();
