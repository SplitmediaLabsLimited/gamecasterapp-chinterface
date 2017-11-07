/**
 * Copyright (c) 2017-present, SplitmediaLabs Limited
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as Constants from '../constants';
import Helpers from './helpers';

class Debug {

    /**
     * Displays a Debug Message to the console.
     *
     * @param {string} message
     * @param {string} [type]
     *
     * @return {void}
     */
    static log(message, type = Constants.LOG_INFO) {
        const date = new Date();
        const day = Helpers.prefixZero(date.getDate());
        const month = Helpers.prefixZero(date.getMonth() + 1);
        const year = date.getFullYear();
        const hour = Helpers.prefixZero(date.getHours());
        const mins = Helpers.prefixZero(date.getMinutes());
        const secs = Helpers.prefixZero(date.getSeconds());
        const time = `${day}/${month}/${year} ${hour}:${mins}:${secs}`;
        let postfix = '';

        if (type === Constants.LOG_ERROR) {
            postfix = ' Error';
        }

        const finalMessage = `[${time}] Chinterface${postfix}: ${message}`;

        if (type === Constants.LOG_ERROR) {
            console.error(finalMessage);
        } else {
            console.log(finalMessage);
        }
    }

}

export default Debug;
