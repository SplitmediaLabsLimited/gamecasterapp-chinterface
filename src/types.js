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
