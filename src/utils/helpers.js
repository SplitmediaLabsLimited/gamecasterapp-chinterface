/**
 * Copyright (c) 2017-present, SplitmediaLabs Limited
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

class Helpers {

    /**
     * Applies default object data to a given object.
     *
     * @param {Object} current
     * @param {Object} defaults
     *
     * @return {Object}
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
     * @param {Object} data
     *
     * @return {String}
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
     * @return {Boolean}
     */
    static isBrowser() {
        return typeof document !== 'undefined';
    }

    /**
     * Reliably determines if a variable is an Object.
     *
     * @param {*} variable
     *
     * @return {Boolean}
     */
    static isObj(variable) {
        return variable !== null && typeof variable === 'object';
    }

    /**
     * Reliably determines if a variable is an Function.
     *
     * @param {*} variable
     *
     * @return {Boolean}
     */
    static isFunc(variable) {
        return variable !== null && typeof variable === 'function';
    }

    /**
     * Adds a prefix 0 to Numbers lower than 10.
     *
     * @param {Number} num
     *
     * @return {String}
     */
    static prefixZero(num) {
        return num < 10 ? `0${num}` : num;
    }

    /**
     * Returns the Base URL.
     *
     * @return {String}
     */
    static getBaseUrl() {
        const url = window.location;

        return `${url.protocol}//${url.host}`;
    }

}

export default Helpers;
