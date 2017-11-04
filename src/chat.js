/**
 * Library Entry Point.
 */

// @flow
import Debug from './utils/debug';
import * as InterfaceBag from './bags/interfaces';
import type { Config } from './types';

class Api {

    /**
     * Initialize the Chinterface Instance.
     */
    constructor() {
        this._debug = false;
    }

    /**
     * Returns the Interface for the given service.
     *
     * @param {*} service
     *
     * @return {*}
     */
    service(service) {
        if (this.exists(service)) {
            return InterfaceBag[service];
        } else {
            Debug.log(`The requested service "${service}" does not exist.`);

            return null;
        }
    }

    /**
     * Sets the Config for the given service.
     *
     * @param {string} service
     * @param {Object} config
     */
    setConfig(service, config) {
        if (this.exists(service)) {
            InterfaceBag[service].setConfig(config);

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
    exists(service) {
        return Object.keys(InterfaceBag).indexOf(service) !== -1;
    }

    /**
     * Sets whether APInterface is in Debug mode.
     *
     * @param {boolean} debug
     *
     * @return {boolean}
     */
    setDebug(debug) {
        this._debug = debug;

        return this.isDebug();
    }

    /**
     * Returns whether APInterface is in Debug mode.
     *
     * @return {boolean}
     */
    isDebug() {
        return this._debug;
    }

}

export default new Api();