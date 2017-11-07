/**
 * Copyright (c) 2017-present, SplitmediaLabs Limited
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

class Helpers {

    /**
     * Applies default object data to a given Object.
     *
     * @param {object} current
     * @param {object} defaults
     *
     * @return {object}
     */
    static applyDefaults(current, defaults) {
        Object.keys(current).forEach(key => {
            defaults[key] = current[key];
        });

        return defaults;
    }

    /**
     * Takes an Object and turns it in to URI encoded data.
     *
     * @param {object} data
     *
     * @return {string}
     */
    static parseUriData(data) {
        let first = true;
        let toReturn = '';

        Object.keys(data).forEach(key => {
            if (data[key] !== null) {
                const prepend = first ? '?' : '&';

                toReturn += `${prepend}${key}=${data[key]}`;
                first = false;
            }
        });

        return toReturn;
    }

    /**
     * Returns whether we're currently in a Browser-based environment.
     *
     * @return {boolean}
     */
    static isBrowser() {
        return typeof document !== 'undefined';
    }

    /**
     * Reliably determines if a variable is an Object.
     *
     * @param {*} variable
     *
     * @return {boolean}
     */
    static isObj(variable) {
        return variable !== null && typeof variable === 'object';
    }

    /**
     * Reliably determines if a variable is an Function.
     *
     * @param {*} variable
     *
     * @return {boolean}
     */
    static isFunc(variable) {
        return variable !== null && typeof variable === 'function';
    }

    /**
     * Reliably determines if a variable is a String.
     *
     * @param {*} variable
     *
     * @return {boolean}
     */
    static isString(variable) {
        return variable !== null && typeof variable === 'string';
    }

    /**
     * Adds a prefix 0 to Numbers lower than 10.
     *
     * @param {number} num
     *
     * @return {string}
     */
    static prefixZero(num) {
        return num < 10 ? `0${num}` : num;
    }

    /**
     * Returns the Base URL.
     *
     * @return {string}
     */
    static getBaseUrl() {
        const url = window.location;

        return `${url.protocol}//${url.host}`;
    }

}

export default Helpers;
