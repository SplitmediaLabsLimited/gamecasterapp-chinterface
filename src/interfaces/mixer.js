/**
 * Copyright (c) 2017-present, SplitmediaLabs Limited
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import axios from 'axios';
import HtmlEntities from 'html-entities';
import Interface from './interface';

class Mixer extends Interface {

    /**
     * Initialize the Interface.
     */
    constructor() {
        super();

        this._http = axios.create({
            baseURL: 'https://mixer.com/api/v1/'
        });

        this.canSend = false;
        this.endpoints = [];
        this.authKey = null;

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
        const channelId = this.getConfig('channelId');
        const accessToken = this.getConfig('accessToken');

        if (!channelId) {
            throw new Error('Channel ID not set.');
        }

        const chats = await axios.get(`https://mixer.com/api/v1/chats/${channelId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const { authkey: authKey, endpoints } = chats.data;

        this.authKey = authKey;
        this.endpoints = endpoints;

        const url = await this.getChatServer();
        await this.connectToChat(url);
    }

    /**
     * Disconnects the WebSocket Instance
     */
    async disconnect() {
        super.disconnect();

        this.ws.close();
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
                throw new Error('Unable to send message. User ID or auth key is not set.');
            }

            message = { arguments: [message] };
        }

        this.ws.send(JSON.stringify({
            id: +(new Date()),
            type: 'method',
            method: 'msg',
            ...message
        }));
    }

    /**
     * Parses emoticons
     *
     * @param {Object} item
     * return {array}
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
     * return {array}
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
        let body = null;

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
                        item.text = HtmlEntities.AllHtmlEntities.encode(item.text);
                        break;
                }

                return item.text;
            });
            body = body.reduce((text, item) => `${text}${item}`, '');
        }

        this.emit('message', {
            username,
            id,
            body,
            raw: message.message,
            timestamp: new Date().getTime(),
            extra: {
                user_roles,
                user_level,
                user_id,
                user_avatar
            }
        })
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
            this._connected = true;
            this.emit('connected');
            this.resetReconnect();
            this.send({
                method: 'auth',
                arguments: args
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
            throw new Error('Username not set.');
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
        const endpoint = endpoints.entries().next();

        if (endpoint.done) {
            throw new Error('No more chat servers available.');
        }

        return endpoint.value.pop();
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
        return await this._http.request({
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
                    roles: data.roles
                });
                return;
            }

            this.emit('user-leave', {
                id: data.id,
                username: data.username
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
        }
    }

}

export default new Mixer();