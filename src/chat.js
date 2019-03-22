/**
 * Copyright (c) 2017-present, SplitmediaLabs Limited
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @flow
import Debug from './utils/debug';
import * as Interfaces from './bags/interfaces';
import type { Config } from './types';

class Chat {
    debug = false;
    
    /**
     * Returns a unique instance of the interface for the given service.
     *
     * @param {*} service
     *
     * @return {*}
     */
    service(service: string) {
        if (this.isServiceExisting(service)) {
            return new Interfaces[service]();
        } else {
            Debug.log(`The requested service "${service}" does not exist.`);

            return null;
        }
    }

    /**
     * Returns whether a given Interface exists.
     *
     * @param {string} service
     *
     * @return {boolean}
     */
    isServiceExisting(service: string) {
        return Object.keys(Interfaces).indexOf(service) !== -1;
    }

    /**
     * Sets whether Chinterface is in Debug mode.
     *
     * @param {boolean} debug
     *
     * @return {boolean}
     */
    setDebug(debug: boolean) {
        this.debug = debug;

        return this.isDebug();
    }

    /**
     * Returns whether Chinterface is in Debug mode.
     *
     * @return {boolean}
     */
    isDebug() {
        return this.debug;
    }

}

export default new Chat();