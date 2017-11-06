/**
 * Copyright (c) 2017-present, SplitmediaLabs Limited
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @flow
export type Config = {
    channel: ?Array<string> | ?string,
    username: ?Array<string>,
    debug: ?boolean,
    clientId: ?string,
    accessToken: ?string,
    userId: ?number,
    reconnect: ?boolean,
};
