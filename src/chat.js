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
     * Returns the Interface for the given service.
     *
     * @param {*} service
     *
     * @return {*}
     */
    service(service: string) {
        if (this.exists(service)) {
            return Interfaces[service];
        } else {
            Debug.log(`The requested service "${service}" does not exist.`);

            return null;
        }
    }

    /**
     * Sets the Config for the given service.
     *
     * @param {string} service
     * @param {object} config
     */
    setConfig(service: string, config: {}) {
        if (this.exists(service)) {
            Interfaces[service].setConfig(config);

            return this.service(service);
        } else {
            Debug.log(`Could not set config for service "${service}", it does not exist.`);

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
    exists(service: string) {
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