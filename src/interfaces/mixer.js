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

        this.http = axios.create({
            baseURL: 'https://mixer.com/api/v1/'
        });

        this.canSend = false;
        this.endpoints = [];
        this.activeEndpoint = 0;

        this.required = [
            'channelId',
        ];
        this.setConfig({
            parseEmoticon: true,
            parseUrl: true,
            reconnect: true,
            formatMessages: true,
        });
    }

    /**
     * Initialize the connection to WebSocket
     *
     * @return {Promise}
     */
    async connect() {
        super.connect();

        const channelId = this.getConfig('channelId');
        const accessToken = this.getConfig('accessToken');

        const chats = await axios.get(`https://mixer.com/api/v1/chats/${channelId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const { authkey: authKey, endpoints } = chats.data;

        this.endpoints = endpoints;
        if (authKey) {
          this.setConfig('authKey', authKey);
        }

        const url = await this.getChatServer();
        await this.connectToChat(url);
    }

    /**
     * Disconnects the WebSocket Instance
     */
    async disconnect() {
        super.disconnect();

        if (this.ws !== null) {
            this.ws.close();
        }
    }

    /**
     * Method to send the given message
     *
     * @param {string} message
     */
    async send(message) {
        if (typeof message === 'string') {
            if (!this.isConnected) {
                throw new Error('Unable to send message. No connection to WebSocket.');
            }

            if (!this.canSend) {
                throw new Error('Unable to send message. userId or authKey is not set.');
            }

            message = { arguments: [message] };
        }

        this.ws.send(JSON.stringify({
            id: +(new Date()),
            type: 'method',
            method: 'msg',
            ...message,
        }));
    }

    /**
     * Parses emoticons
     *
     * @param {Object} item
     * @return {array}
     */
    parseEmoticon(item) {
        return '<span style="' +
            `background-image: url('https://mixer.com/_latest/assets/emoticons/${item.pack}.png'); ` +
            'background-repeat: no-repeat; ' +
            `height: ${item.coords.height}px; ` +
            `width: ${item.coords.width}px; ` +
            `background-position-x: ${item.coords.x * -1}px; ` +
            `background-position-y: ${item.coords.y * -1}px; "` +
            `alt="${item.text}" class="${item.type}"/></span>`;
    }

    /**
     * Parses links
     *
     * @param {Object} item
     * @return {array}
     */
    parseUrl(item) {
        return `<a href="${item.url}" class="${item.type}">${item.text}</a>`;
    }

    /**
     * Parses a message in to the unified format.
     *
     * @param {object} data
     */
    parseMessage({data}) {
        const formatMessages = this.getConfig('formatMessages');
        const {
            id,
            user_roles,
            user_level,
            user_id,
            user_avatar,
            message,
            user_name : username,
        } = data;
        const messageMeta = message.meta;
        let body = null;

        // A censored message is one that is automatically removed by Mixer, if enabled.
        // Streamers and mods can "restore" a message. When it is restored, meta.censored is omitted.
        if (messageMeta.hasOwnProperty('censored') && messageMeta.censored) {
            return;
        }

        if (formatMessages) {
            body = JSON.parse(JSON.stringify(message.message));
            body = body.map(item => {
                switch (item.type) {
                    case 'emoticon':
                        if (this.shouldParseEmoticons) {
                            return this.parseEmoticon(item);
                        }
                        break;
                    case 'link':
                        if (this.shouldParseUrl) {
                            return this.parseUrl(item);
                        }
                        break;
                    case 'text':
                        item.text = this.filterXSS(item.text);
                        break;
                }

                return item.text;
            });
            body = body.reduce((text, item) => `${text}${item}`, '');
        }

        const payload = {
            username,
            id,
            body,
            raw: message.message,
            timestamp: new Date().getTime(),
            extra: {
                user_roles,
                user_level,
                user_id,
                user_avatar,
            }
        };

        if (messageMeta.hasOwnProperty('whisper') && messageMeta.whisper) {
            this.emit('whisper', payload);
        } else {
            this.emit('message', payload);
        }
    }

    /**
     * Set the Socket package.
     *
     * @param ws
     * @returns {Mixer}
     */
    async setWebSocket(ws) {
        this.websocket = ws;

        return this;
    }

    /**
     * Creates an instance of WebSocket
     *
     * @param {string} url
     */
    async connectToChat(url) {
        this.ws = new this.websocket(url) || new WebSocket(url);

        if (!this.ws) {
            throw new Error('WebSocket not defined.');
        }

        const args = [
            this.getConfig('channelId'),
        ];
        const userId = this.getConfig('userId');
        const authKey = this.getConfig('authKey');

        if (userId && authKey) {
            args.push(userId);
            args.push(authKey);

            this.canSend = true;
        }

        this.ws.onopen = () => {
            this.connected = true;
            this.emit('connected');
            this.resetReconnect();
            this.send({
                method: 'auth',
                arguments: args,
            });
        };
        this.ws.onmessage = this.msgEvent.bind(this);
        this.ws.onerror = async (e) => {
            this.canSend = false;

            if (this.shouldReconnect) {
                this.increaseReconnect();
                this.emit('reconnect', this.reconnectAttempt);

                const url = await this.getChatServer();

                return setTimeout(async () => {
                    return await this.connectToChat(url);
                }, this.reconnectCurrentInterval);
            }

            this.emit('error', e);
        };
        this.ws.onclose = () => {
            this.canSend = false;
            this.emit('disconnected');
        };
    }

    /**
     * Fetch and set required user data for the Interface.
     *
     * @returns {Promise}
     */
    async loadUser() {
        const username = this.getConfig('username');

        if (!username) {
            throw new Error('username not set.');
        }

        const { data } = await this.api('get', `channels/${username}?fields=id,userId`);
        const channelId = this.getConfig('channelId', data.id);
        const userId = this.getConfig('userId', data.userId);

        this.setConfig({
            channelId,
            userId,
        });
    }

    /**
     * Fetch the next endpoint chat server to connect to.
     *
     * @returns {Promise.<T|*>}
     */
    async getChatServer() {
        const endpoints = this.endpoints;
        const endpoint = endpoints[this.activeEndpoint];
        this.activeEndpoint++;

        if (this.activeEndpoint === endpoints.length) {
            this.activeEndpoint = 0;
        }

        return endpoint;
    }

    /**
     * Name of the Interface.
     *
     * @return {string}
     */
    getName() {
        return 'Mixer';
    }

    /**
     * The short & lowercase key for the Interface. Should be the same as the
     * InterfaceBag Key.
     *
     * @return {string}
     */
    getKey() {
        return 'mixer';
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
     * Unified http request method.
     *
     * @param {string} method
     * @param {string} url
     * @param {object} data
     *
     * @return {Promise}
     */
    async api(method, url, data = {}) {
        return await this.http.request({
            method,
            url,
            data,
        });
    }

    /**
     * Handler for message receive from WebSocket
     */
    msgEvent({data}) {
        data = JSON.parse(data);

        if (data.originatingChannel && data.username) {
            if (data.roles) {
                this.emit('user-join', {
                    id: data.id,
                    username: data.username,
                    roles: data.roles,
                });
                return;
            }

            this.emit('user-leave', {
                id: data.id,
                username: data.username,
            });
            return;
        }

        switch (data.event) {
            case 'ChatMessage':
                this.parseMessage(data);
                break;
            case 'DeleteMessage':
                this.emit('delete-message', data.data.id);
                break;
            case 'PurgeMessage':
                this.emit('purge-message', data.data.user_id);
                break;
            case 'ClearMessages':
                this.emit('clear-messages');
                break;
            case 'UserTimeout':
                this.emit('user-timeout', {
                    user: {
                        id: data.data.user.user_id,
                        username: data.data.user.user_name,
                    },
                    duration: data.data.duration,
                });
                break;
            case 'UserUpdate':
                this.emit('user-update', {
                  id: data.data.user,
                  username: data.data.username,
                  roles: data.data.roles
                })
                break;
        }
    }

}

export default new Mixer();