/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $Array = $util.global.Array, $TypeError = $util.global.TypeError, $String = $util.global.String, $Boolean = $util.global.Boolean, $parseInt = $util.global.parseInt, $Number = $util.global.Number, $BigInt = $util.global.BigInt;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const youtube = $root.youtube = (() => {

    /**
     * Namespace youtube.
     * @exports youtube
     * @namespace
     */
    const youtube = {};

    youtube.api = (function() {

        /**
         * Namespace api.
         * @memberof youtube
         * @namespace
         */
        const api = {};

        api.v3 = (function() {

            /**
             * Namespace v3.
             * @memberof youtube.api
             * @namespace
             */
            const v3 = {};

            v3.V3DataLiveChatMessageService = (function() {

                /**
                 * Constructs a new V3DataLiveChatMessageService service.
                 * @memberof youtube.api.v3
                 * @classdesc Represents a V3DataLiveChatMessageService
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                const V3DataLiveChatMessageService = function(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                };

                $Object.defineProperty(V3DataLiveChatMessageService.prototype = $Object.create($protobuf.rpc.Service.prototype), "constructor", { value: V3DataLiveChatMessageService, writable: true, enumerable: false, configurable: true });

                /**
                 * Creates new V3DataLiveChatMessageService service using the specified rpc implementation.
                 * @function create
                 * @memberof youtube.api.v3.V3DataLiveChatMessageService
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {V3DataLiveChatMessageService} RPC service. Useful where requests and/or responses are streamed.
                 */
                V3DataLiveChatMessageService.create = function(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };

                /**
                 * Callback as used by {@link youtube.api.v3.V3DataLiveChatMessageService#streamList}.
                 * @memberof youtube.api.v3.V3DataLiveChatMessageService
                 * @typedef StreamListCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {youtube.api.v3.LiveChatMessageListResponse} [response] LiveChatMessageListResponse
                 */

                /**
                 * Calls StreamList.
                 * @memberof youtube.api.v3.V3DataLiveChatMessageService
                 * @typedef StreamList
                 * @type {{
                 *   (request: youtube.api.v3.ILiveChatMessageListRequest, callback: youtube.api.v3.V3DataLiveChatMessageService.StreamListCallback): void;
                 *   (request: youtube.api.v3.ILiveChatMessageListRequest): Promise<youtube.api.v3.LiveChatMessageListResponse>;
                 *   readonly name: "StreamList";
                 *   readonly path: undefined;
                 *   readonly requestType: "LiveChatMessageListRequest";
                 *   readonly responseType: "LiveChatMessageListResponse";
                 *   readonly requestStream: undefined;
                 *   readonly responseStream: true;
                 * }}
                 */

                /**
                 * Calls StreamList.
                 * @name youtube.api.v3.V3DataLiveChatMessageService#streamList
                 * @type {youtube.api.v3.V3DataLiveChatMessageService.StreamList}
                 */
                $Object.defineProperties(V3DataLiveChatMessageService.prototype.streamList = function(request, callback) {
                    return $protobuf.rpc.Service.prototype.rpcCall.call(this, V3DataLiveChatMessageService.prototype.streamList, $root.youtube.api.v3.LiveChatMessageListRequest, $root.youtube.api.v3.LiveChatMessageListResponse, request, callback);
                }, {
                    name: { value: "StreamList" },
                    path: { value: undefined },
                    requestType: { value: "LiveChatMessageListRequest" },
                    responseType: { value: "LiveChatMessageListResponse" },
                    requestStream: { value: $undefined },
                    responseStream: { value: true }
                });

                return V3DataLiveChatMessageService;
            })();

            v3.LiveChatMessageListRequest = (function() {

                /**
                 * Properties of a LiveChatMessageListRequest.
                 * @typedef {Object} youtube.api.v3.LiveChatMessageListRequest.$Properties
                 * @property {string|null} [liveChatId] LiveChatMessageListRequest liveChatId
                 * @property {string|null} [hl] LiveChatMessageListRequest hl
                 * @property {number|null} [profileImageSize] LiveChatMessageListRequest profileImageSize
                 * @property {number|null} [maxResults] LiveChatMessageListRequest maxResults
                 * @property {string|null} [pageToken] LiveChatMessageListRequest pageToken
                 * @property {Array.<string>|null} [part] LiveChatMessageListRequest part
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a LiveChatMessageListRequest.
                 * @memberof youtube.api.v3
                 * @interface ILiveChatMessageListRequest
                 * @augments youtube.api.v3.LiveChatMessageListRequest.$Properties
                 * @deprecated Use youtube.api.v3.LiveChatMessageListRequest.$Properties instead.
                 */

                /**
                 * Shape of a LiveChatMessageListRequest.
                 * @typedef {youtube.api.v3.LiveChatMessageListRequest.$Properties} youtube.api.v3.LiveChatMessageListRequest.$Shape
                 */

                /**
                 * Constructs a new LiveChatMessageListRequest.
                 * @memberof youtube.api.v3
                 * @classdesc Represents a LiveChatMessageListRequest.
                 * @constructor
                 * @param {youtube.api.v3.LiveChatMessageListRequest.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                const LiveChatMessageListRequest = function LiveChatMessageListRequest(properties) {
                    this.part = [];
                    if (properties)
                        for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * LiveChatMessageListRequest liveChatId.
                 * @member {string} liveChatId
                 * @memberof youtube.api.v3.LiveChatMessageListRequest
                 * @instance
                 */
                LiveChatMessageListRequest.prototype.liveChatId = "";

                /**
                 * LiveChatMessageListRequest hl.
                 * @member {string} hl
                 * @memberof youtube.api.v3.LiveChatMessageListRequest
                 * @instance
                 */
                LiveChatMessageListRequest.prototype.hl = "";

                /**
                 * LiveChatMessageListRequest profileImageSize.
                 * @member {number} profileImageSize
                 * @memberof youtube.api.v3.LiveChatMessageListRequest
                 * @instance
                 */
                LiveChatMessageListRequest.prototype.profileImageSize = 0;

                /**
                 * LiveChatMessageListRequest maxResults.
                 * @member {number} maxResults
                 * @memberof youtube.api.v3.LiveChatMessageListRequest
                 * @instance
                 */
                LiveChatMessageListRequest.prototype.maxResults = 0;

                /**
                 * LiveChatMessageListRequest pageToken.
                 * @member {string} pageToken
                 * @memberof youtube.api.v3.LiveChatMessageListRequest
                 * @instance
                 */
                LiveChatMessageListRequest.prototype.pageToken = "";

                /**
                 * LiveChatMessageListRequest part.
                 * @member {Array.<string>} part
                 * @memberof youtube.api.v3.LiveChatMessageListRequest
                 * @instance
                 */
                LiveChatMessageListRequest.prototype.part = $util.emptyArray;

                /**
                 * Creates a new LiveChatMessageListRequest instance using the specified properties.
                 * @function create
                 * @memberof youtube.api.v3.LiveChatMessageListRequest
                 * @static
                 * @param {youtube.api.v3.LiveChatMessageListRequest.$Properties=} [properties] Properties to set
                 * @returns {youtube.api.v3.LiveChatMessageListRequest} LiveChatMessageListRequest instance
                 * @type {{
                 *   (properties: youtube.api.v3.LiveChatMessageListRequest.$Shape): youtube.api.v3.LiveChatMessageListRequest & youtube.api.v3.LiveChatMessageListRequest.$Shape;
                 *   (properties?: youtube.api.v3.LiveChatMessageListRequest.$Properties): youtube.api.v3.LiveChatMessageListRequest;
                 * }}
                 */
                LiveChatMessageListRequest.create = function(properties) {
                    return new LiveChatMessageListRequest(properties);
                };

                /**
                 * Encodes the specified LiveChatMessageListRequest message. Does not implicitly {@link youtube.api.v3.LiveChatMessageListRequest.verify|verify} messages.
                 * @function encode
                 * @memberof youtube.api.v3.LiveChatMessageListRequest
                 * @static
                 * @param {youtube.api.v3.LiveChatMessageListRequest.$Properties} message LiveChatMessageListRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatMessageListRequest.encode = function LiveChatMessageListRequest$encode(message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.liveChatId != null && $Object.hasOwnProperty.call(message, "liveChatId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.liveChatId);
                    if (message.hl != null && $Object.hasOwnProperty.call(message, "hl"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.hl);
                    if (message.profileImageSize != null && $Object.hasOwnProperty.call(message, "profileImageSize"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.profileImageSize);
                    if (message.maxResults != null && $Object.hasOwnProperty.call(message, "maxResults"))
                        writer.uint32(/* id 98, wireType 0 =*/784).uint32(message.maxResults);
                    if (message.pageToken != null && $Object.hasOwnProperty.call(message, "pageToken"))
                        writer.uint32(/* id 99, wireType 2 =*/794).string(message.pageToken);
                    if (message.part != null && message.part.length)
                        for (let i = 0; i < message.part.length; ++i)
                            writer.uint32(/* id 100, wireType 2 =*/802).string(message.part[i]);
                    return writer;
                };

                /**
                 * Encodes the specified LiveChatMessageListRequest message, length delimited. Does not implicitly {@link youtube.api.v3.LiveChatMessageListRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof youtube.api.v3.LiveChatMessageListRequest
                 * @static
                 * @param {youtube.api.v3.LiveChatMessageListRequest.$Properties} message LiveChatMessageListRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatMessageListRequest.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a LiveChatMessageListRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof youtube.api.v3.LiveChatMessageListRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {youtube.api.v3.LiveChatMessageListRequest & youtube.api.v3.LiveChatMessageListRequest.$Shape} LiveChatMessageListRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatMessageListRequest.decode = function LiveChatMessageListRequest$decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === $undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let end = length === $undefined ? reader.len : reader.pos + length, message = new this.ctor();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.liveChatId = reader.string();
                                break;
                            }
                        case 2: {
                                message.hl = reader.string();
                                break;
                            }
                        case 3: {
                                message.profileImageSize = reader.uint32();
                                break;
                            }
                        case 98: {
                                message.maxResults = reader.uint32();
                                break;
                            }
                        case 99: {
                                message.pageToken = reader.string();
                                break;
                            }
                        case 100: {
                                if (!(message.part && message.part.length))
                                    message.part = [];
                                message.part.push(reader.string());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a LiveChatMessageListRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof youtube.api.v3.LiveChatMessageListRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {youtube.api.v3.LiveChatMessageListRequest & youtube.api.v3.LiveChatMessageListRequest.$Shape} LiveChatMessageListRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatMessageListRequest.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a LiveChatMessageListRequest message.
                 * @function verify
                 * @memberof youtube.api.v3.LiveChatMessageListRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LiveChatMessageListRequest.verify = function LiveChatMessageListRequest$verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.liveChatId != null && $Object.hasOwnProperty.call(message, "liveChatId"))
                        if (!$util.isString(message.liveChatId))
                            return "liveChatId: string expected";
                    if (message.hl != null && $Object.hasOwnProperty.call(message, "hl"))
                        if (!$util.isString(message.hl))
                            return "hl: string expected";
                    if (message.profileImageSize != null && $Object.hasOwnProperty.call(message, "profileImageSize"))
                        if (!$util.isInteger(message.profileImageSize))
                            return "profileImageSize: integer expected";
                    if (message.maxResults != null && $Object.hasOwnProperty.call(message, "maxResults"))
                        if (!$util.isInteger(message.maxResults))
                            return "maxResults: integer expected";
                    if (message.pageToken != null && $Object.hasOwnProperty.call(message, "pageToken"))
                        if (!$util.isString(message.pageToken))
                            return "pageToken: string expected";
                    if (message.part != null && $Object.hasOwnProperty.call(message, "part")) {
                        if (!$Array.isArray(message.part))
                            return "part: array expected";
                        for (let i = 0; i < message.part.length; ++i)
                            if (!$util.isString(message.part[i]))
                                return "part: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a LiveChatMessageListRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof youtube.api.v3.LiveChatMessageListRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {youtube.api.v3.LiveChatMessageListRequest} LiveChatMessageListRequest
                 */
                LiveChatMessageListRequest.fromObject = function LiveChatMessageListRequest$fromObject(object, long) {
                    if (object instanceof this.ctor)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".youtube.api.v3.LiveChatMessageListRequest: object expected");
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let message = new this.ctor();
                    if (object.liveChatId != null)
                        message.liveChatId = $String(object.liveChatId);
                    if (object.hl != null)
                        message.hl = $String(object.hl);
                    if (object.profileImageSize != null)
                        message.profileImageSize = object.profileImageSize >>> 0;
                    if (object.maxResults != null)
                        message.maxResults = object.maxResults >>> 0;
                    if (object.pageToken != null)
                        message.pageToken = $String(object.pageToken);
                    if (object.part) {
                        if (!$Array.isArray(object.part))
                            throw $TypeError(".youtube.api.v3.LiveChatMessageListRequest.part: array expected");
                        message.part = [];
                        for (let i = 0; i < object.part.length; ++i)
                            message.part[i] = $String(object.part[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a LiveChatMessageListRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof youtube.api.v3.LiveChatMessageListRequest
                 * @static
                 * @param {youtube.api.v3.LiveChatMessageListRequest} message LiveChatMessageListRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LiveChatMessageListRequest.toObject = function LiveChatMessageListRequest$toObject(message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.part = [];
                    if (options.defaults) {
                        object.liveChatId = "";
                        object.hl = "";
                        object.profileImageSize = 0;
                        object.maxResults = 0;
                        object.pageToken = "";
                    }
                    if (message.liveChatId != null && $Object.hasOwnProperty.call(message, "liveChatId"))
                        object.liveChatId = message.liveChatId;
                    if (message.hl != null && $Object.hasOwnProperty.call(message, "hl"))
                        object.hl = message.hl;
                    if (message.profileImageSize != null && $Object.hasOwnProperty.call(message, "profileImageSize"))
                        object.profileImageSize = message.profileImageSize;
                    if (message.maxResults != null && $Object.hasOwnProperty.call(message, "maxResults"))
                        object.maxResults = message.maxResults;
                    if (message.pageToken != null && $Object.hasOwnProperty.call(message, "pageToken"))
                        object.pageToken = message.pageToken;
                    if (message.part && message.part.length) {
                        object.part = [];
                        for (let j = 0; j < message.part.length; ++j)
                            object.part[j] = message.part[j];
                    }
                    return object;
                };

                /**
                 * Converts this LiveChatMessageListRequest to JSON.
                 * @function toJSON
                 * @memberof youtube.api.v3.LiveChatMessageListRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                LiveChatMessageListRequest.prototype.toJSON = function() {
                    return LiveChatMessageListRequest.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for LiveChatMessageListRequest
                 * @function getTypeUrl
                 * @memberof youtube.api.v3.LiveChatMessageListRequest
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                LiveChatMessageListRequest.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/youtube.api.v3.LiveChatMessageListRequest";
                };

                return LiveChatMessageListRequest;
            })();

            v3.LiveChatMessageListResponse = (function() {

                /**
                 * Properties of a LiveChatMessageListResponse.
                 * @typedef {Object} youtube.api.v3.LiveChatMessageListResponse.$Properties
                 * @property {string|null} [kind] LiveChatMessageListResponse kind
                 * @property {string|null} [etag] LiveChatMessageListResponse etag
                 * @property {string|null} [offlineAt] LiveChatMessageListResponse offlineAt
                 * @property {youtube.api.v3.PageInfo.$Properties|null} [pageInfo] LiveChatMessageListResponse pageInfo
                 * @property {string|null} [nextPageToken] LiveChatMessageListResponse nextPageToken
                 * @property {Array.<youtube.api.v3.LiveChatMessage.$Properties>|null} [items] LiveChatMessageListResponse items
                 * @property {youtube.api.v3.LiveChatMessage.$Properties|null} [activePollItem] LiveChatMessageListResponse activePollItem
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a LiveChatMessageListResponse.
                 * @memberof youtube.api.v3
                 * @interface ILiveChatMessageListResponse
                 * @augments youtube.api.v3.LiveChatMessageListResponse.$Properties
                 * @deprecated Use youtube.api.v3.LiveChatMessageListResponse.$Properties instead.
                 */

                /**
                 * Shape of a LiveChatMessageListResponse.
                 * @typedef {{
                 *   kind?: string|null;
                 *   etag?: string|null;
                 *   offlineAt?: string|null;
                 *   pageInfo?: youtube.api.v3.PageInfo.$Shape|null;
                 *   nextPageToken?: string|null;
                 *   items?: Array.<youtube.api.v3.LiveChatMessage.$Shape>|null;
                 *   activePollItem?: youtube.api.v3.LiveChatMessage.$Shape|null;
                 *   $unknowns?: Array.<Uint8Array>;
                 * }} youtube.api.v3.LiveChatMessageListResponse.$Shape
                 */

                /**
                 * Constructs a new LiveChatMessageListResponse.
                 * @memberof youtube.api.v3
                 * @classdesc Represents a LiveChatMessageListResponse.
                 * @constructor
                 * @param {youtube.api.v3.LiveChatMessageListResponse.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                const LiveChatMessageListResponse = function LiveChatMessageListResponse(properties) {
                    this.items = [];
                    if (properties)
                        for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * LiveChatMessageListResponse kind.
                 * @member {string} kind
                 * @memberof youtube.api.v3.LiveChatMessageListResponse
                 * @instance
                 */
                LiveChatMessageListResponse.prototype.kind = "";

                /**
                 * LiveChatMessageListResponse etag.
                 * @member {string} etag
                 * @memberof youtube.api.v3.LiveChatMessageListResponse
                 * @instance
                 */
                LiveChatMessageListResponse.prototype.etag = "";

                /**
                 * LiveChatMessageListResponse offlineAt.
                 * @member {string} offlineAt
                 * @memberof youtube.api.v3.LiveChatMessageListResponse
                 * @instance
                 */
                LiveChatMessageListResponse.prototype.offlineAt = "";

                /**
                 * LiveChatMessageListResponse pageInfo.
                 * @member {youtube.api.v3.PageInfo.$Properties|null|undefined} pageInfo
                 * @memberof youtube.api.v3.LiveChatMessageListResponse
                 * @instance
                 */
                LiveChatMessageListResponse.prototype.pageInfo = null;

                /**
                 * LiveChatMessageListResponse nextPageToken.
                 * @member {string} nextPageToken
                 * @memberof youtube.api.v3.LiveChatMessageListResponse
                 * @instance
                 */
                LiveChatMessageListResponse.prototype.nextPageToken = "";

                /**
                 * LiveChatMessageListResponse items.
                 * @member {Array.<youtube.api.v3.LiveChatMessage.$Properties>} items
                 * @memberof youtube.api.v3.LiveChatMessageListResponse
                 * @instance
                 */
                LiveChatMessageListResponse.prototype.items = $util.emptyArray;

                /**
                 * LiveChatMessageListResponse activePollItem.
                 * @member {youtube.api.v3.LiveChatMessage.$Properties|null|undefined} activePollItem
                 * @memberof youtube.api.v3.LiveChatMessageListResponse
                 * @instance
                 */
                LiveChatMessageListResponse.prototype.activePollItem = null;

                /**
                 * Creates a new LiveChatMessageListResponse instance using the specified properties.
                 * @function create
                 * @memberof youtube.api.v3.LiveChatMessageListResponse
                 * @static
                 * @param {youtube.api.v3.LiveChatMessageListResponse.$Properties=} [properties] Properties to set
                 * @returns {youtube.api.v3.LiveChatMessageListResponse} LiveChatMessageListResponse instance
                 * @type {{
                 *   (properties: youtube.api.v3.LiveChatMessageListResponse.$Shape): youtube.api.v3.LiveChatMessageListResponse & youtube.api.v3.LiveChatMessageListResponse.$Shape;
                 *   (properties?: youtube.api.v3.LiveChatMessageListResponse.$Properties): youtube.api.v3.LiveChatMessageListResponse;
                 * }}
                 */
                LiveChatMessageListResponse.create = function(properties) {
                    return new LiveChatMessageListResponse(properties);
                };

                /**
                 * Encodes the specified LiveChatMessageListResponse message. Does not implicitly {@link youtube.api.v3.LiveChatMessageListResponse.verify|verify} messages.
                 * @function encode
                 * @memberof youtube.api.v3.LiveChatMessageListResponse
                 * @static
                 * @param {youtube.api.v3.LiveChatMessageListResponse.$Properties} message LiveChatMessageListResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatMessageListResponse.encode = function LiveChatMessageListResponse$encode(message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.offlineAt != null && $Object.hasOwnProperty.call(message, "offlineAt"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.offlineAt);
                    if (message.kind != null && $Object.hasOwnProperty.call(message, "kind"))
                        writer.uint32(/* id 200, wireType 2 =*/1602).string(message.kind);
                    if (message.etag != null && $Object.hasOwnProperty.call(message, "etag"))
                        writer.uint32(/* id 201, wireType 2 =*/1610).string(message.etag);
                    if (message.pageInfo != null && $Object.hasOwnProperty.call(message, "pageInfo"))
                        $root.youtube.api.v3.PageInfo.encode(message.pageInfo, writer.uint32(/* id 1004, wireType 2 =*/8034).fork(), _depth + 1).ldelim();
                    if (message.items != null && message.items.length)
                        for (let i = 0; i < message.items.length; ++i)
                            $root.youtube.api.v3.LiveChatMessage.encode(message.items[i], writer.uint32(/* id 1007, wireType 2 =*/8058).fork(), _depth + 1).ldelim();
                    if (message.activePollItem != null && $Object.hasOwnProperty.call(message, "activePollItem"))
                        $root.youtube.api.v3.LiveChatMessage.encode(message.activePollItem, writer.uint32(/* id 1008, wireType 2 =*/8066).fork(), _depth + 1).ldelim();
                    if (message.nextPageToken != null && $Object.hasOwnProperty.call(message, "nextPageToken"))
                        writer.uint32(/* id 100602, wireType 2 =*/804818).string(message.nextPageToken);
                    return writer;
                };

                /**
                 * Encodes the specified LiveChatMessageListResponse message, length delimited. Does not implicitly {@link youtube.api.v3.LiveChatMessageListResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof youtube.api.v3.LiveChatMessageListResponse
                 * @static
                 * @param {youtube.api.v3.LiveChatMessageListResponse.$Properties} message LiveChatMessageListResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatMessageListResponse.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a LiveChatMessageListResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof youtube.api.v3.LiveChatMessageListResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {youtube.api.v3.LiveChatMessageListResponse & youtube.api.v3.LiveChatMessageListResponse.$Shape} LiveChatMessageListResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatMessageListResponse.decode = function LiveChatMessageListResponse$decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === $undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let end = length === $undefined ? reader.len : reader.pos + length, message = new this.ctor();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 200: {
                                message.kind = reader.string();
                                break;
                            }
                        case 201: {
                                message.etag = reader.string();
                                break;
                            }
                        case 2: {
                                message.offlineAt = reader.string();
                                break;
                            }
                        case 1004: {
                                message.pageInfo = $root.youtube.api.v3.PageInfo.decode(reader, reader.uint32(), $undefined, long + 1);
                                break;
                            }
                        case 100602: {
                                message.nextPageToken = reader.string();
                                break;
                            }
                        case 1007: {
                                if (!(message.items && message.items.length))
                                    message.items = [];
                                message.items.push($root.youtube.api.v3.LiveChatMessage.decode(reader, reader.uint32(), $undefined, long + 1));
                                break;
                            }
                        case 1008: {
                                message.activePollItem = $root.youtube.api.v3.LiveChatMessage.decode(reader, reader.uint32(), $undefined, long + 1);
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a LiveChatMessageListResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof youtube.api.v3.LiveChatMessageListResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {youtube.api.v3.LiveChatMessageListResponse & youtube.api.v3.LiveChatMessageListResponse.$Shape} LiveChatMessageListResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatMessageListResponse.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a LiveChatMessageListResponse message.
                 * @function verify
                 * @memberof youtube.api.v3.LiveChatMessageListResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LiveChatMessageListResponse.verify = function LiveChatMessageListResponse$verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.kind != null && $Object.hasOwnProperty.call(message, "kind"))
                        if (!$util.isString(message.kind))
                            return "kind: string expected";
                    if (message.etag != null && $Object.hasOwnProperty.call(message, "etag"))
                        if (!$util.isString(message.etag))
                            return "etag: string expected";
                    if (message.offlineAt != null && $Object.hasOwnProperty.call(message, "offlineAt"))
                        if (!$util.isString(message.offlineAt))
                            return "offlineAt: string expected";
                    if (message.pageInfo != null && $Object.hasOwnProperty.call(message, "pageInfo")) {
                        let error = $root.youtube.api.v3.PageInfo.verify(message.pageInfo, long + 1);
                        if (error)
                            return "pageInfo." + error;
                    }
                    if (message.nextPageToken != null && $Object.hasOwnProperty.call(message, "nextPageToken"))
                        if (!$util.isString(message.nextPageToken))
                            return "nextPageToken: string expected";
                    if (message.items != null && $Object.hasOwnProperty.call(message, "items")) {
                        if (!$Array.isArray(message.items))
                            return "items: array expected";
                        for (let i = 0; i < message.items.length; ++i) {
                            let error = $root.youtube.api.v3.LiveChatMessage.verify(message.items[i], long + 1);
                            if (error)
                                return "items." + error;
                        }
                    }
                    if (message.activePollItem != null && $Object.hasOwnProperty.call(message, "activePollItem")) {
                        let error = $root.youtube.api.v3.LiveChatMessage.verify(message.activePollItem, long + 1);
                        if (error)
                            return "activePollItem." + error;
                    }
                    return null;
                };

                /**
                 * Creates a LiveChatMessageListResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof youtube.api.v3.LiveChatMessageListResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {youtube.api.v3.LiveChatMessageListResponse} LiveChatMessageListResponse
                 */
                LiveChatMessageListResponse.fromObject = function LiveChatMessageListResponse$fromObject(object, long) {
                    if (object instanceof this.ctor)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".youtube.api.v3.LiveChatMessageListResponse: object expected");
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let message = new this.ctor();
                    if (object.kind != null)
                        message.kind = $String(object.kind);
                    if (object.etag != null)
                        message.etag = $String(object.etag);
                    if (object.offlineAt != null)
                        message.offlineAt = $String(object.offlineAt);
                    if (object.pageInfo != null) {
                        if (!$util.isObject(object.pageInfo))
                            throw $TypeError(".youtube.api.v3.LiveChatMessageListResponse.pageInfo: object expected");
                        message.pageInfo = $root.youtube.api.v3.PageInfo.fromObject(object.pageInfo, long + 1);
                    }
                    if (object.nextPageToken != null)
                        message.nextPageToken = $String(object.nextPageToken);
                    if (object.items) {
                        if (!$Array.isArray(object.items))
                            throw $TypeError(".youtube.api.v3.LiveChatMessageListResponse.items: array expected");
                        message.items = [];
                        for (let i = 0; i < object.items.length; ++i) {
                            if (!$util.isObject(object.items[i]))
                                throw $TypeError(".youtube.api.v3.LiveChatMessageListResponse.items: object expected");
                            message.items[i] = $root.youtube.api.v3.LiveChatMessage.fromObject(object.items[i], long + 1);
                        }
                    }
                    if (object.activePollItem != null) {
                        if (!$util.isObject(object.activePollItem))
                            throw $TypeError(".youtube.api.v3.LiveChatMessageListResponse.activePollItem: object expected");
                        message.activePollItem = $root.youtube.api.v3.LiveChatMessage.fromObject(object.activePollItem, long + 1);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a LiveChatMessageListResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof youtube.api.v3.LiveChatMessageListResponse
                 * @static
                 * @param {youtube.api.v3.LiveChatMessageListResponse} message LiveChatMessageListResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LiveChatMessageListResponse.toObject = function LiveChatMessageListResponse$toObject(message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.items = [];
                    if (options.defaults) {
                        object.offlineAt = "";
                        object.kind = "";
                        object.etag = "";
                        object.pageInfo = null;
                        object.activePollItem = null;
                        object.nextPageToken = "";
                    }
                    if (message.offlineAt != null && $Object.hasOwnProperty.call(message, "offlineAt"))
                        object.offlineAt = message.offlineAt;
                    if (message.kind != null && $Object.hasOwnProperty.call(message, "kind"))
                        object.kind = message.kind;
                    if (message.etag != null && $Object.hasOwnProperty.call(message, "etag"))
                        object.etag = message.etag;
                    if (message.pageInfo != null && $Object.hasOwnProperty.call(message, "pageInfo"))
                        object.pageInfo = $root.youtube.api.v3.PageInfo.toObject(message.pageInfo, options, _depth + 1);
                    if (message.items && message.items.length) {
                        object.items = [];
                        for (let j = 0; j < message.items.length; ++j)
                            object.items[j] = $root.youtube.api.v3.LiveChatMessage.toObject(message.items[j], options, _depth + 1);
                    }
                    if (message.activePollItem != null && $Object.hasOwnProperty.call(message, "activePollItem"))
                        object.activePollItem = $root.youtube.api.v3.LiveChatMessage.toObject(message.activePollItem, options, _depth + 1);
                    if (message.nextPageToken != null && $Object.hasOwnProperty.call(message, "nextPageToken"))
                        object.nextPageToken = message.nextPageToken;
                    return object;
                };

                /**
                 * Converts this LiveChatMessageListResponse to JSON.
                 * @function toJSON
                 * @memberof youtube.api.v3.LiveChatMessageListResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                LiveChatMessageListResponse.prototype.toJSON = function() {
                    return LiveChatMessageListResponse.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for LiveChatMessageListResponse
                 * @function getTypeUrl
                 * @memberof youtube.api.v3.LiveChatMessageListResponse
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                LiveChatMessageListResponse.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/youtube.api.v3.LiveChatMessageListResponse";
                };

                return LiveChatMessageListResponse;
            })();

            v3.LiveChatMessage = (function() {

                /**
                 * Properties of a LiveChatMessage.
                 * @typedef {Object} youtube.api.v3.LiveChatMessage.$Properties
                 * @property {string|null} [kind] LiveChatMessage kind
                 * @property {string|null} [etag] LiveChatMessage etag
                 * @property {string|null} [id] LiveChatMessage id
                 * @property {youtube.api.v3.LiveChatMessageSnippet.$Properties|null} [snippet] LiveChatMessage snippet
                 * @property {youtube.api.v3.LiveChatMessageAuthorDetails.$Properties|null} [authorDetails] LiveChatMessage authorDetails
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a LiveChatMessage.
                 * @memberof youtube.api.v3
                 * @interface ILiveChatMessage
                 * @augments youtube.api.v3.LiveChatMessage.$Properties
                 * @deprecated Use youtube.api.v3.LiveChatMessage.$Properties instead.
                 */

                /**
                 * Shape of a LiveChatMessage.
                 * @typedef {{
                 *   kind?: string|null;
                 *   etag?: string|null;
                 *   id?: string|null;
                 *   snippet?: youtube.api.v3.LiveChatMessageSnippet.$Shape|null;
                 *   authorDetails?: youtube.api.v3.LiveChatMessageAuthorDetails.$Shape|null;
                 *   $unknowns?: Array.<Uint8Array>;
                 * }} youtube.api.v3.LiveChatMessage.$Shape
                 */

                /**
                 * Constructs a new LiveChatMessage.
                 * @memberof youtube.api.v3
                 * @classdesc Represents a LiveChatMessage.
                 * @constructor
                 * @param {youtube.api.v3.LiveChatMessage.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                const LiveChatMessage = function LiveChatMessage(properties) {
                    if (properties)
                        for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * LiveChatMessage kind.
                 * @member {string} kind
                 * @memberof youtube.api.v3.LiveChatMessage
                 * @instance
                 */
                LiveChatMessage.prototype.kind = "";

                /**
                 * LiveChatMessage etag.
                 * @member {string} etag
                 * @memberof youtube.api.v3.LiveChatMessage
                 * @instance
                 */
                LiveChatMessage.prototype.etag = "";

                /**
                 * LiveChatMessage id.
                 * @member {string} id
                 * @memberof youtube.api.v3.LiveChatMessage
                 * @instance
                 */
                LiveChatMessage.prototype.id = "";

                /**
                 * LiveChatMessage snippet.
                 * @member {youtube.api.v3.LiveChatMessageSnippet.$Properties|null|undefined} snippet
                 * @memberof youtube.api.v3.LiveChatMessage
                 * @instance
                 */
                LiveChatMessage.prototype.snippet = null;

                /**
                 * LiveChatMessage authorDetails.
                 * @member {youtube.api.v3.LiveChatMessageAuthorDetails.$Properties|null|undefined} authorDetails
                 * @memberof youtube.api.v3.LiveChatMessage
                 * @instance
                 */
                LiveChatMessage.prototype.authorDetails = null;

                /**
                 * Creates a new LiveChatMessage instance using the specified properties.
                 * @function create
                 * @memberof youtube.api.v3.LiveChatMessage
                 * @static
                 * @param {youtube.api.v3.LiveChatMessage.$Properties=} [properties] Properties to set
                 * @returns {youtube.api.v3.LiveChatMessage} LiveChatMessage instance
                 * @type {{
                 *   (properties: youtube.api.v3.LiveChatMessage.$Shape): youtube.api.v3.LiveChatMessage & youtube.api.v3.LiveChatMessage.$Shape;
                 *   (properties?: youtube.api.v3.LiveChatMessage.$Properties): youtube.api.v3.LiveChatMessage;
                 * }}
                 */
                LiveChatMessage.create = function(properties) {
                    return new LiveChatMessage(properties);
                };

                /**
                 * Encodes the specified LiveChatMessage message. Does not implicitly {@link youtube.api.v3.LiveChatMessage.verify|verify} messages.
                 * @function encode
                 * @memberof youtube.api.v3.LiveChatMessage
                 * @static
                 * @param {youtube.api.v3.LiveChatMessage.$Properties} message LiveChatMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatMessage.encode = function LiveChatMessage$encode(message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.snippet != null && $Object.hasOwnProperty.call(message, "snippet"))
                        $root.youtube.api.v3.LiveChatMessageSnippet.encode(message.snippet, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                    if (message.authorDetails != null && $Object.hasOwnProperty.call(message, "authorDetails"))
                        $root.youtube.api.v3.LiveChatMessageAuthorDetails.encode(message.authorDetails, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                    if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 101, wireType 2 =*/810).string(message.id);
                    if (message.kind != null && $Object.hasOwnProperty.call(message, "kind"))
                        writer.uint32(/* id 200, wireType 2 =*/1602).string(message.kind);
                    if (message.etag != null && $Object.hasOwnProperty.call(message, "etag"))
                        writer.uint32(/* id 201, wireType 2 =*/1610).string(message.etag);
                    return writer;
                };

                /**
                 * Encodes the specified LiveChatMessage message, length delimited. Does not implicitly {@link youtube.api.v3.LiveChatMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof youtube.api.v3.LiveChatMessage
                 * @static
                 * @param {youtube.api.v3.LiveChatMessage.$Properties} message LiveChatMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatMessage.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a LiveChatMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof youtube.api.v3.LiveChatMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {youtube.api.v3.LiveChatMessage & youtube.api.v3.LiveChatMessage.$Shape} LiveChatMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatMessage.decode = function LiveChatMessage$decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === $undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let end = length === $undefined ? reader.len : reader.pos + length, message = new this.ctor();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 200: {
                                message.kind = reader.string();
                                break;
                            }
                        case 201: {
                                message.etag = reader.string();
                                break;
                            }
                        case 101: {
                                message.id = reader.string();
                                break;
                            }
                        case 2: {
                                message.snippet = $root.youtube.api.v3.LiveChatMessageSnippet.decode(reader, reader.uint32(), $undefined, long + 1);
                                break;
                            }
                        case 3: {
                                message.authorDetails = $root.youtube.api.v3.LiveChatMessageAuthorDetails.decode(reader, reader.uint32(), $undefined, long + 1);
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a LiveChatMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof youtube.api.v3.LiveChatMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {youtube.api.v3.LiveChatMessage & youtube.api.v3.LiveChatMessage.$Shape} LiveChatMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatMessage.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a LiveChatMessage message.
                 * @function verify
                 * @memberof youtube.api.v3.LiveChatMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LiveChatMessage.verify = function LiveChatMessage$verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.kind != null && $Object.hasOwnProperty.call(message, "kind"))
                        if (!$util.isString(message.kind))
                            return "kind: string expected";
                    if (message.etag != null && $Object.hasOwnProperty.call(message, "etag"))
                        if (!$util.isString(message.etag))
                            return "etag: string expected";
                    if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.snippet != null && $Object.hasOwnProperty.call(message, "snippet")) {
                        let error = $root.youtube.api.v3.LiveChatMessageSnippet.verify(message.snippet, long + 1);
                        if (error)
                            return "snippet." + error;
                    }
                    if (message.authorDetails != null && $Object.hasOwnProperty.call(message, "authorDetails")) {
                        let error = $root.youtube.api.v3.LiveChatMessageAuthorDetails.verify(message.authorDetails, long + 1);
                        if (error)
                            return "authorDetails." + error;
                    }
                    return null;
                };

                /**
                 * Creates a LiveChatMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof youtube.api.v3.LiveChatMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {youtube.api.v3.LiveChatMessage} LiveChatMessage
                 */
                LiveChatMessage.fromObject = function LiveChatMessage$fromObject(object, long) {
                    if (object instanceof this.ctor)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".youtube.api.v3.LiveChatMessage: object expected");
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let message = new this.ctor();
                    if (object.kind != null)
                        message.kind = $String(object.kind);
                    if (object.etag != null)
                        message.etag = $String(object.etag);
                    if (object.id != null)
                        message.id = $String(object.id);
                    if (object.snippet != null) {
                        if (!$util.isObject(object.snippet))
                            throw $TypeError(".youtube.api.v3.LiveChatMessage.snippet: object expected");
                        message.snippet = $root.youtube.api.v3.LiveChatMessageSnippet.fromObject(object.snippet, long + 1);
                    }
                    if (object.authorDetails != null) {
                        if (!$util.isObject(object.authorDetails))
                            throw $TypeError(".youtube.api.v3.LiveChatMessage.authorDetails: object expected");
                        message.authorDetails = $root.youtube.api.v3.LiveChatMessageAuthorDetails.fromObject(object.authorDetails, long + 1);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a LiveChatMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof youtube.api.v3.LiveChatMessage
                 * @static
                 * @param {youtube.api.v3.LiveChatMessage} message LiveChatMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LiveChatMessage.toObject = function LiveChatMessage$toObject(message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    let object = {};
                    if (options.defaults) {
                        object.snippet = null;
                        object.authorDetails = null;
                        object.id = "";
                        object.kind = "";
                        object.etag = "";
                    }
                    if (message.snippet != null && $Object.hasOwnProperty.call(message, "snippet"))
                        object.snippet = $root.youtube.api.v3.LiveChatMessageSnippet.toObject(message.snippet, options, _depth + 1);
                    if (message.authorDetails != null && $Object.hasOwnProperty.call(message, "authorDetails"))
                        object.authorDetails = $root.youtube.api.v3.LiveChatMessageAuthorDetails.toObject(message.authorDetails, options, _depth + 1);
                    if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                        object.id = message.id;
                    if (message.kind != null && $Object.hasOwnProperty.call(message, "kind"))
                        object.kind = message.kind;
                    if (message.etag != null && $Object.hasOwnProperty.call(message, "etag"))
                        object.etag = message.etag;
                    return object;
                };

                /**
                 * Converts this LiveChatMessage to JSON.
                 * @function toJSON
                 * @memberof youtube.api.v3.LiveChatMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                LiveChatMessage.prototype.toJSON = function() {
                    return LiveChatMessage.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for LiveChatMessage
                 * @function getTypeUrl
                 * @memberof youtube.api.v3.LiveChatMessage
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                LiveChatMessage.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/youtube.api.v3.LiveChatMessage";
                };

                return LiveChatMessage;
            })();

            v3.LiveChatMessageAuthorDetails = (function() {

                /**
                 * Properties of a LiveChatMessageAuthorDetails.
                 * @typedef {Object} youtube.api.v3.LiveChatMessageAuthorDetails.$Properties
                 * @property {string|null} [channelId] LiveChatMessageAuthorDetails channelId
                 * @property {string|null} [channelUrl] LiveChatMessageAuthorDetails channelUrl
                 * @property {string|null} [displayName] LiveChatMessageAuthorDetails displayName
                 * @property {string|null} [profileImageUrl] LiveChatMessageAuthorDetails profileImageUrl
                 * @property {boolean|null} [isVerified] LiveChatMessageAuthorDetails isVerified
                 * @property {boolean|null} [isChatOwner] LiveChatMessageAuthorDetails isChatOwner
                 * @property {boolean|null} [isChatSponsor] LiveChatMessageAuthorDetails isChatSponsor
                 * @property {boolean|null} [isChatModerator] LiveChatMessageAuthorDetails isChatModerator
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a LiveChatMessageAuthorDetails.
                 * @memberof youtube.api.v3
                 * @interface ILiveChatMessageAuthorDetails
                 * @augments youtube.api.v3.LiveChatMessageAuthorDetails.$Properties
                 * @deprecated Use youtube.api.v3.LiveChatMessageAuthorDetails.$Properties instead.
                 */

                /**
                 * Shape of a LiveChatMessageAuthorDetails.
                 * @typedef {youtube.api.v3.LiveChatMessageAuthorDetails.$Properties} youtube.api.v3.LiveChatMessageAuthorDetails.$Shape
                 */

                /**
                 * Constructs a new LiveChatMessageAuthorDetails.
                 * @memberof youtube.api.v3
                 * @classdesc Represents a LiveChatMessageAuthorDetails.
                 * @constructor
                 * @param {youtube.api.v3.LiveChatMessageAuthorDetails.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                const LiveChatMessageAuthorDetails = function LiveChatMessageAuthorDetails(properties) {
                    if (properties)
                        for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * LiveChatMessageAuthorDetails channelId.
                 * @member {string} channelId
                 * @memberof youtube.api.v3.LiveChatMessageAuthorDetails
                 * @instance
                 */
                LiveChatMessageAuthorDetails.prototype.channelId = "";

                /**
                 * LiveChatMessageAuthorDetails channelUrl.
                 * @member {string} channelUrl
                 * @memberof youtube.api.v3.LiveChatMessageAuthorDetails
                 * @instance
                 */
                LiveChatMessageAuthorDetails.prototype.channelUrl = "";

                /**
                 * LiveChatMessageAuthorDetails displayName.
                 * @member {string} displayName
                 * @memberof youtube.api.v3.LiveChatMessageAuthorDetails
                 * @instance
                 */
                LiveChatMessageAuthorDetails.prototype.displayName = "";

                /**
                 * LiveChatMessageAuthorDetails profileImageUrl.
                 * @member {string} profileImageUrl
                 * @memberof youtube.api.v3.LiveChatMessageAuthorDetails
                 * @instance
                 */
                LiveChatMessageAuthorDetails.prototype.profileImageUrl = "";

                /**
                 * LiveChatMessageAuthorDetails isVerified.
                 * @member {boolean} isVerified
                 * @memberof youtube.api.v3.LiveChatMessageAuthorDetails
                 * @instance
                 */
                LiveChatMessageAuthorDetails.prototype.isVerified = false;

                /**
                 * LiveChatMessageAuthorDetails isChatOwner.
                 * @member {boolean} isChatOwner
                 * @memberof youtube.api.v3.LiveChatMessageAuthorDetails
                 * @instance
                 */
                LiveChatMessageAuthorDetails.prototype.isChatOwner = false;

                /**
                 * LiveChatMessageAuthorDetails isChatSponsor.
                 * @member {boolean} isChatSponsor
                 * @memberof youtube.api.v3.LiveChatMessageAuthorDetails
                 * @instance
                 */
                LiveChatMessageAuthorDetails.prototype.isChatSponsor = false;

                /**
                 * LiveChatMessageAuthorDetails isChatModerator.
                 * @member {boolean} isChatModerator
                 * @memberof youtube.api.v3.LiveChatMessageAuthorDetails
                 * @instance
                 */
                LiveChatMessageAuthorDetails.prototype.isChatModerator = false;

                /**
                 * Creates a new LiveChatMessageAuthorDetails instance using the specified properties.
                 * @function create
                 * @memberof youtube.api.v3.LiveChatMessageAuthorDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatMessageAuthorDetails.$Properties=} [properties] Properties to set
                 * @returns {youtube.api.v3.LiveChatMessageAuthorDetails} LiveChatMessageAuthorDetails instance
                 * @type {{
                 *   (properties: youtube.api.v3.LiveChatMessageAuthorDetails.$Shape): youtube.api.v3.LiveChatMessageAuthorDetails & youtube.api.v3.LiveChatMessageAuthorDetails.$Shape;
                 *   (properties?: youtube.api.v3.LiveChatMessageAuthorDetails.$Properties): youtube.api.v3.LiveChatMessageAuthorDetails;
                 * }}
                 */
                LiveChatMessageAuthorDetails.create = function(properties) {
                    return new LiveChatMessageAuthorDetails(properties);
                };

                /**
                 * Encodes the specified LiveChatMessageAuthorDetails message. Does not implicitly {@link youtube.api.v3.LiveChatMessageAuthorDetails.verify|verify} messages.
                 * @function encode
                 * @memberof youtube.api.v3.LiveChatMessageAuthorDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatMessageAuthorDetails.$Properties} message LiveChatMessageAuthorDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatMessageAuthorDetails.encode = function LiveChatMessageAuthorDetails$encode(message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.isVerified != null && $Object.hasOwnProperty.call(message, "isVerified"))
                        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isVerified);
                    if (message.isChatOwner != null && $Object.hasOwnProperty.call(message, "isChatOwner"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isChatOwner);
                    if (message.isChatSponsor != null && $Object.hasOwnProperty.call(message, "isChatSponsor"))
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isChatSponsor);
                    if (message.isChatModerator != null && $Object.hasOwnProperty.call(message, "isChatModerator"))
                        writer.uint32(/* id 7, wireType 0 =*/56).bool(message.isChatModerator);
                    if (message.channelUrl != null && $Object.hasOwnProperty.call(message, "channelUrl"))
                        writer.uint32(/* id 102, wireType 2 =*/818).string(message.channelUrl);
                    if (message.displayName != null && $Object.hasOwnProperty.call(message, "displayName"))
                        writer.uint32(/* id 103, wireType 2 =*/826).string(message.displayName);
                    if (message.profileImageUrl != null && $Object.hasOwnProperty.call(message, "profileImageUrl"))
                        writer.uint32(/* id 104, wireType 2 =*/834).string(message.profileImageUrl);
                    if (message.channelId != null && $Object.hasOwnProperty.call(message, "channelId"))
                        writer.uint32(/* id 10101, wireType 2 =*/80810).string(message.channelId);
                    return writer;
                };

                /**
                 * Encodes the specified LiveChatMessageAuthorDetails message, length delimited. Does not implicitly {@link youtube.api.v3.LiveChatMessageAuthorDetails.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof youtube.api.v3.LiveChatMessageAuthorDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatMessageAuthorDetails.$Properties} message LiveChatMessageAuthorDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatMessageAuthorDetails.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a LiveChatMessageAuthorDetails message from the specified reader or buffer.
                 * @function decode
                 * @memberof youtube.api.v3.LiveChatMessageAuthorDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {youtube.api.v3.LiveChatMessageAuthorDetails & youtube.api.v3.LiveChatMessageAuthorDetails.$Shape} LiveChatMessageAuthorDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatMessageAuthorDetails.decode = function LiveChatMessageAuthorDetails$decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === $undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let end = length === $undefined ? reader.len : reader.pos + length, message = new this.ctor();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 10101: {
                                message.channelId = reader.string();
                                break;
                            }
                        case 102: {
                                message.channelUrl = reader.string();
                                break;
                            }
                        case 103: {
                                message.displayName = reader.string();
                                break;
                            }
                        case 104: {
                                message.profileImageUrl = reader.string();
                                break;
                            }
                        case 4: {
                                message.isVerified = reader.bool();
                                break;
                            }
                        case 5: {
                                message.isChatOwner = reader.bool();
                                break;
                            }
                        case 6: {
                                message.isChatSponsor = reader.bool();
                                break;
                            }
                        case 7: {
                                message.isChatModerator = reader.bool();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a LiveChatMessageAuthorDetails message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof youtube.api.v3.LiveChatMessageAuthorDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {youtube.api.v3.LiveChatMessageAuthorDetails & youtube.api.v3.LiveChatMessageAuthorDetails.$Shape} LiveChatMessageAuthorDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatMessageAuthorDetails.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a LiveChatMessageAuthorDetails message.
                 * @function verify
                 * @memberof youtube.api.v3.LiveChatMessageAuthorDetails
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LiveChatMessageAuthorDetails.verify = function LiveChatMessageAuthorDetails$verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.channelId != null && $Object.hasOwnProperty.call(message, "channelId"))
                        if (!$util.isString(message.channelId))
                            return "channelId: string expected";
                    if (message.channelUrl != null && $Object.hasOwnProperty.call(message, "channelUrl"))
                        if (!$util.isString(message.channelUrl))
                            return "channelUrl: string expected";
                    if (message.displayName != null && $Object.hasOwnProperty.call(message, "displayName"))
                        if (!$util.isString(message.displayName))
                            return "displayName: string expected";
                    if (message.profileImageUrl != null && $Object.hasOwnProperty.call(message, "profileImageUrl"))
                        if (!$util.isString(message.profileImageUrl))
                            return "profileImageUrl: string expected";
                    if (message.isVerified != null && $Object.hasOwnProperty.call(message, "isVerified"))
                        if (typeof message.isVerified !== "boolean")
                            return "isVerified: boolean expected";
                    if (message.isChatOwner != null && $Object.hasOwnProperty.call(message, "isChatOwner"))
                        if (typeof message.isChatOwner !== "boolean")
                            return "isChatOwner: boolean expected";
                    if (message.isChatSponsor != null && $Object.hasOwnProperty.call(message, "isChatSponsor"))
                        if (typeof message.isChatSponsor !== "boolean")
                            return "isChatSponsor: boolean expected";
                    if (message.isChatModerator != null && $Object.hasOwnProperty.call(message, "isChatModerator"))
                        if (typeof message.isChatModerator !== "boolean")
                            return "isChatModerator: boolean expected";
                    return null;
                };

                /**
                 * Creates a LiveChatMessageAuthorDetails message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof youtube.api.v3.LiveChatMessageAuthorDetails
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {youtube.api.v3.LiveChatMessageAuthorDetails} LiveChatMessageAuthorDetails
                 */
                LiveChatMessageAuthorDetails.fromObject = function LiveChatMessageAuthorDetails$fromObject(object, long) {
                    if (object instanceof this.ctor)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".youtube.api.v3.LiveChatMessageAuthorDetails: object expected");
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let message = new this.ctor();
                    if (object.channelId != null)
                        message.channelId = $String(object.channelId);
                    if (object.channelUrl != null)
                        message.channelUrl = $String(object.channelUrl);
                    if (object.displayName != null)
                        message.displayName = $String(object.displayName);
                    if (object.profileImageUrl != null)
                        message.profileImageUrl = $String(object.profileImageUrl);
                    if (object.isVerified != null)
                        message.isVerified = $Boolean(object.isVerified);
                    if (object.isChatOwner != null)
                        message.isChatOwner = $Boolean(object.isChatOwner);
                    if (object.isChatSponsor != null)
                        message.isChatSponsor = $Boolean(object.isChatSponsor);
                    if (object.isChatModerator != null)
                        message.isChatModerator = $Boolean(object.isChatModerator);
                    return message;
                };

                /**
                 * Creates a plain object from a LiveChatMessageAuthorDetails message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof youtube.api.v3.LiveChatMessageAuthorDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatMessageAuthorDetails} message LiveChatMessageAuthorDetails
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LiveChatMessageAuthorDetails.toObject = function LiveChatMessageAuthorDetails$toObject(message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    let object = {};
                    if (options.defaults) {
                        object.isVerified = false;
                        object.isChatOwner = false;
                        object.isChatSponsor = false;
                        object.isChatModerator = false;
                        object.channelUrl = "";
                        object.displayName = "";
                        object.profileImageUrl = "";
                        object.channelId = "";
                    }
                    if (message.isVerified != null && $Object.hasOwnProperty.call(message, "isVerified"))
                        object.isVerified = message.isVerified;
                    if (message.isChatOwner != null && $Object.hasOwnProperty.call(message, "isChatOwner"))
                        object.isChatOwner = message.isChatOwner;
                    if (message.isChatSponsor != null && $Object.hasOwnProperty.call(message, "isChatSponsor"))
                        object.isChatSponsor = message.isChatSponsor;
                    if (message.isChatModerator != null && $Object.hasOwnProperty.call(message, "isChatModerator"))
                        object.isChatModerator = message.isChatModerator;
                    if (message.channelUrl != null && $Object.hasOwnProperty.call(message, "channelUrl"))
                        object.channelUrl = message.channelUrl;
                    if (message.displayName != null && $Object.hasOwnProperty.call(message, "displayName"))
                        object.displayName = message.displayName;
                    if (message.profileImageUrl != null && $Object.hasOwnProperty.call(message, "profileImageUrl"))
                        object.profileImageUrl = message.profileImageUrl;
                    if (message.channelId != null && $Object.hasOwnProperty.call(message, "channelId"))
                        object.channelId = message.channelId;
                    return object;
                };

                /**
                 * Converts this LiveChatMessageAuthorDetails to JSON.
                 * @function toJSON
                 * @memberof youtube.api.v3.LiveChatMessageAuthorDetails
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                LiveChatMessageAuthorDetails.prototype.toJSON = function() {
                    return LiveChatMessageAuthorDetails.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for LiveChatMessageAuthorDetails
                 * @function getTypeUrl
                 * @memberof youtube.api.v3.LiveChatMessageAuthorDetails
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                LiveChatMessageAuthorDetails.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/youtube.api.v3.LiveChatMessageAuthorDetails";
                };

                return LiveChatMessageAuthorDetails;
            })();

            v3.LiveChatMessageSnippet = (function() {

                /**
                 * Properties of a LiveChatMessageSnippet.
                 * @typedef {Object} youtube.api.v3.LiveChatMessageSnippet.$Properties
                 * @property {youtube.api.v3.LiveChatMessageSnippet.TypeWrapper.Type|null} [type] LiveChatMessageSnippet type
                 * @property {string|null} [liveChatId] LiveChatMessageSnippet liveChatId
                 * @property {string|null} [authorChannelId] LiveChatMessageSnippet authorChannelId
                 * @property {string|null} [publishedAt] LiveChatMessageSnippet publishedAt
                 * @property {boolean|null} [hasDisplayContent] LiveChatMessageSnippet hasDisplayContent
                 * @property {string|null} [displayMessage] LiveChatMessageSnippet displayMessage
                 * @property {youtube.api.v3.LiveChatTextMessageDetails.$Properties|null} [textMessageDetails] LiveChatMessageSnippet textMessageDetails
                 * @property {youtube.api.v3.LiveChatMessageDeletedDetails.$Properties|null} [messageDeletedDetails] LiveChatMessageSnippet messageDeletedDetails
                 * @property {youtube.api.v3.LiveChatMessageRetractedDetails.$Properties|null} [messageRetractedDetails] LiveChatMessageSnippet messageRetractedDetails
                 * @property {youtube.api.v3.LiveChatUserBannedMessageDetails.$Properties|null} [userBannedDetails] LiveChatMessageSnippet userBannedDetails
                 * @property {youtube.api.v3.LiveChatSuperChatDetails.$Properties|null} [superChatDetails] LiveChatMessageSnippet superChatDetails
                 * @property {youtube.api.v3.LiveChatSuperStickerDetails.$Properties|null} [superStickerDetails] LiveChatMessageSnippet superStickerDetails
                 * @property {youtube.api.v3.LiveChatNewSponsorDetails.$Properties|null} [newSponsorDetails] LiveChatMessageSnippet newSponsorDetails
                 * @property {youtube.api.v3.LiveChatMemberMilestoneChatDetails.$Properties|null} [memberMilestoneChatDetails] LiveChatMessageSnippet memberMilestoneChatDetails
                 * @property {youtube.api.v3.LiveChatMembershipGiftingDetails.$Properties|null} [membershipGiftingDetails] LiveChatMessageSnippet membershipGiftingDetails
                 * @property {youtube.api.v3.LiveChatGiftMembershipReceivedDetails.$Properties|null} [giftMembershipReceivedDetails] LiveChatMessageSnippet giftMembershipReceivedDetails
                 * @property {youtube.api.v3.LiveChatPollDetails.$Properties|null} [pollDetails] LiveChatMessageSnippet pollDetails
                 * @property {youtube.api.v3.LiveChatGiftDetails.$Properties|null} [giftDetails] LiveChatMessageSnippet giftDetails
                 * @property {"textMessageDetails"|"messageDeletedDetails"|"messageRetractedDetails"|"userBannedDetails"|"superChatDetails"|"superStickerDetails"|"newSponsorDetails"|"memberMilestoneChatDetails"|"membershipGiftingDetails"|"giftMembershipReceivedDetails"|"pollDetails"|"giftDetails"} [displayedContent] LiveChatMessageSnippet displayedContent
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a LiveChatMessageSnippet.
                 * @memberof youtube.api.v3
                 * @interface ILiveChatMessageSnippet
                 * @augments youtube.api.v3.LiveChatMessageSnippet.$Properties
                 * @deprecated Use youtube.api.v3.LiveChatMessageSnippet.$Properties instead.
                 */

                /**
                 * Narrowed shape of a LiveChatMessageSnippet.
                 * @typedef {{
                 *   type?: youtube.api.v3.LiveChatMessageSnippet.TypeWrapper.Type|null;
                 *   liveChatId?: string|null;
                 *   authorChannelId?: string|null;
                 *   publishedAt?: string|null;
                 *   hasDisplayContent?: boolean|null;
                 *   displayMessage?: string|null;
                 *   textMessageDetails?: youtube.api.v3.LiveChatTextMessageDetails.$Shape|null;
                 *   messageDeletedDetails?: youtube.api.v3.LiveChatMessageDeletedDetails.$Shape|null;
                 *   messageRetractedDetails?: youtube.api.v3.LiveChatMessageRetractedDetails.$Shape|null;
                 *   userBannedDetails?: youtube.api.v3.LiveChatUserBannedMessageDetails.$Shape|null;
                 *   superChatDetails?: youtube.api.v3.LiveChatSuperChatDetails.$Shape|null;
                 *   superStickerDetails?: youtube.api.v3.LiveChatSuperStickerDetails.$Shape|null;
                 *   newSponsorDetails?: youtube.api.v3.LiveChatNewSponsorDetails.$Shape|null;
                 *   memberMilestoneChatDetails?: youtube.api.v3.LiveChatMemberMilestoneChatDetails.$Shape|null;
                 *   membershipGiftingDetails?: youtube.api.v3.LiveChatMembershipGiftingDetails.$Shape|null;
                 *   giftMembershipReceivedDetails?: youtube.api.v3.LiveChatGiftMembershipReceivedDetails.$Shape|null;
                 *   pollDetails?: youtube.api.v3.LiveChatPollDetails.$Shape|null;
                 *   giftDetails?: youtube.api.v3.LiveChatGiftDetails.$Shape|null;
                 *   $unknowns?: Array.<Uint8Array>;
                 * } & (
                 *   ({ displayedContent?: undefined; textMessageDetails?: null; messageDeletedDetails?: null; messageRetractedDetails?: null; userBannedDetails?: null; superChatDetails?: null; superStickerDetails?: null; newSponsorDetails?: null; memberMilestoneChatDetails?: null; membershipGiftingDetails?: null; giftMembershipReceivedDetails?: null; pollDetails?: null; giftDetails?: null }|{ displayedContent?: "textMessageDetails"; textMessageDetails: youtube.api.v3.LiveChatTextMessageDetails.$Shape; messageDeletedDetails?: null; messageRetractedDetails?: null; userBannedDetails?: null; superChatDetails?: null; superStickerDetails?: null; newSponsorDetails?: null; memberMilestoneChatDetails?: null; membershipGiftingDetails?: null; giftMembershipReceivedDetails?: null; pollDetails?: null; giftDetails?: null }|{ displayedContent?: "messageDeletedDetails"; textMessageDetails?: null; messageDeletedDetails: youtube.api.v3.LiveChatMessageDeletedDetails.$Shape; messageRetractedDetails?: null; userBannedDetails?: null; superChatDetails?: null; superStickerDetails?: null; newSponsorDetails?: null; memberMilestoneChatDetails?: null; membershipGiftingDetails?: null; giftMembershipReceivedDetails?: null; pollDetails?: null; giftDetails?: null }|{ displayedContent?: "messageRetractedDetails"; textMessageDetails?: null; messageDeletedDetails?: null; messageRetractedDetails: youtube.api.v3.LiveChatMessageRetractedDetails.$Shape; userBannedDetails?: null; superChatDetails?: null; superStickerDetails?: null; newSponsorDetails?: null; memberMilestoneChatDetails?: null; membershipGiftingDetails?: null; giftMembershipReceivedDetails?: null; pollDetails?: null; giftDetails?: null }|{ displayedContent?: "userBannedDetails"; textMessageDetails?: null; messageDeletedDetails?: null; messageRetractedDetails?: null; userBannedDetails: youtube.api.v3.LiveChatUserBannedMessageDetails.$Shape; superChatDetails?: null; superStickerDetails?: null; newSponsorDetails?: null; memberMilestoneChatDetails?: null; membershipGiftingDetails?: null; giftMembershipReceivedDetails?: null; pollDetails?: null; giftDetails?: null }|{ displayedContent?: "superChatDetails"; textMessageDetails?: null; messageDeletedDetails?: null; messageRetractedDetails?: null; userBannedDetails?: null; superChatDetails: youtube.api.v3.LiveChatSuperChatDetails.$Shape; superStickerDetails?: null; newSponsorDetails?: null; memberMilestoneChatDetails?: null; membershipGiftingDetails?: null; giftMembershipReceivedDetails?: null; pollDetails?: null; giftDetails?: null }|{ displayedContent?: "superStickerDetails"; textMessageDetails?: null; messageDeletedDetails?: null; messageRetractedDetails?: null; userBannedDetails?: null; superChatDetails?: null; superStickerDetails: youtube.api.v3.LiveChatSuperStickerDetails.$Shape; newSponsorDetails?: null; memberMilestoneChatDetails?: null; membershipGiftingDetails?: null; giftMembershipReceivedDetails?: null; pollDetails?: null; giftDetails?: null }|{ displayedContent?: "newSponsorDetails"; textMessageDetails?: null; messageDeletedDetails?: null; messageRetractedDetails?: null; userBannedDetails?: null; superChatDetails?: null; superStickerDetails?: null; newSponsorDetails: youtube.api.v3.LiveChatNewSponsorDetails.$Shape; memberMilestoneChatDetails?: null; membershipGiftingDetails?: null; giftMembershipReceivedDetails?: null; pollDetails?: null; giftDetails?: null }|{ displayedContent?: "memberMilestoneChatDetails"; textMessageDetails?: null; messageDeletedDetails?: null; messageRetractedDetails?: null; userBannedDetails?: null; superChatDetails?: null; superStickerDetails?: null; newSponsorDetails?: null; memberMilestoneChatDetails: youtube.api.v3.LiveChatMemberMilestoneChatDetails.$Shape; membershipGiftingDetails?: null; giftMembershipReceivedDetails?: null; pollDetails?: null; giftDetails?: null }|{ displayedContent?: "membershipGiftingDetails"; textMessageDetails?: null; messageDeletedDetails?: null; messageRetractedDetails?: null; userBannedDetails?: null; superChatDetails?: null; superStickerDetails?: null; newSponsorDetails?: null; memberMilestoneChatDetails?: null; membershipGiftingDetails: youtube.api.v3.LiveChatMembershipGiftingDetails.$Shape; giftMembershipReceivedDetails?: null; pollDetails?: null; giftDetails?: null }|{ displayedContent?: "giftMembershipReceivedDetails"; textMessageDetails?: null; messageDeletedDetails?: null; messageRetractedDetails?: null; userBannedDetails?: null; superChatDetails?: null; superStickerDetails?: null; newSponsorDetails?: null; memberMilestoneChatDetails?: null; membershipGiftingDetails?: null; giftMembershipReceivedDetails: youtube.api.v3.LiveChatGiftMembershipReceivedDetails.$Shape; pollDetails?: null; giftDetails?: null }|{ displayedContent?: "pollDetails"; textMessageDetails?: null; messageDeletedDetails?: null; messageRetractedDetails?: null; userBannedDetails?: null; superChatDetails?: null; superStickerDetails?: null; newSponsorDetails?: null; memberMilestoneChatDetails?: null; membershipGiftingDetails?: null; giftMembershipReceivedDetails?: null; pollDetails: youtube.api.v3.LiveChatPollDetails.$Shape; giftDetails?: null }|{ displayedContent?: "giftDetails"; textMessageDetails?: null; messageDeletedDetails?: null; messageRetractedDetails?: null; userBannedDetails?: null; superChatDetails?: null; superStickerDetails?: null; newSponsorDetails?: null; memberMilestoneChatDetails?: null; membershipGiftingDetails?: null; giftMembershipReceivedDetails?: null; pollDetails?: null; giftDetails: youtube.api.v3.LiveChatGiftDetails.$Shape })
                 * )} youtube.api.v3.LiveChatMessageSnippet.$Shape
                 */

                /**
                 * Constructs a new LiveChatMessageSnippet.
                 * @memberof youtube.api.v3
                 * @classdesc Represents a LiveChatMessageSnippet.
                 * @constructor
                 * @param {youtube.api.v3.LiveChatMessageSnippet.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                const LiveChatMessageSnippet = function LiveChatMessageSnippet(properties) {
                    if (properties)
                        for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * LiveChatMessageSnippet type.
                 * @member {youtube.api.v3.LiveChatMessageSnippet.TypeWrapper.Type} type
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @instance
                 */
                LiveChatMessageSnippet.prototype.type = 0;

                /**
                 * LiveChatMessageSnippet liveChatId.
                 * @member {string} liveChatId
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @instance
                 */
                LiveChatMessageSnippet.prototype.liveChatId = "";

                /**
                 * LiveChatMessageSnippet authorChannelId.
                 * @member {string} authorChannelId
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @instance
                 */
                LiveChatMessageSnippet.prototype.authorChannelId = "";

                /**
                 * LiveChatMessageSnippet publishedAt.
                 * @member {string} publishedAt
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @instance
                 */
                LiveChatMessageSnippet.prototype.publishedAt = "";

                /**
                 * LiveChatMessageSnippet hasDisplayContent.
                 * @member {boolean} hasDisplayContent
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @instance
                 */
                LiveChatMessageSnippet.prototype.hasDisplayContent = false;

                /**
                 * LiveChatMessageSnippet displayMessage.
                 * @member {string} displayMessage
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @instance
                 */
                LiveChatMessageSnippet.prototype.displayMessage = "";

                /**
                 * LiveChatMessageSnippet textMessageDetails.
                 * @member {youtube.api.v3.LiveChatTextMessageDetails.$Properties|null|undefined} textMessageDetails
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @instance
                 */
                LiveChatMessageSnippet.prototype.textMessageDetails = null;

                /**
                 * LiveChatMessageSnippet messageDeletedDetails.
                 * @member {youtube.api.v3.LiveChatMessageDeletedDetails.$Properties|null|undefined} messageDeletedDetails
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @instance
                 */
                LiveChatMessageSnippet.prototype.messageDeletedDetails = null;

                /**
                 * LiveChatMessageSnippet messageRetractedDetails.
                 * @member {youtube.api.v3.LiveChatMessageRetractedDetails.$Properties|null|undefined} messageRetractedDetails
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @instance
                 */
                LiveChatMessageSnippet.prototype.messageRetractedDetails = null;

                /**
                 * LiveChatMessageSnippet userBannedDetails.
                 * @member {youtube.api.v3.LiveChatUserBannedMessageDetails.$Properties|null|undefined} userBannedDetails
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @instance
                 */
                LiveChatMessageSnippet.prototype.userBannedDetails = null;

                /**
                 * LiveChatMessageSnippet superChatDetails.
                 * @member {youtube.api.v3.LiveChatSuperChatDetails.$Properties|null|undefined} superChatDetails
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @instance
                 */
                LiveChatMessageSnippet.prototype.superChatDetails = null;

                /**
                 * LiveChatMessageSnippet superStickerDetails.
                 * @member {youtube.api.v3.LiveChatSuperStickerDetails.$Properties|null|undefined} superStickerDetails
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @instance
                 */
                LiveChatMessageSnippet.prototype.superStickerDetails = null;

                /**
                 * LiveChatMessageSnippet newSponsorDetails.
                 * @member {youtube.api.v3.LiveChatNewSponsorDetails.$Properties|null|undefined} newSponsorDetails
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @instance
                 */
                LiveChatMessageSnippet.prototype.newSponsorDetails = null;

                /**
                 * LiveChatMessageSnippet memberMilestoneChatDetails.
                 * @member {youtube.api.v3.LiveChatMemberMilestoneChatDetails.$Properties|null|undefined} memberMilestoneChatDetails
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @instance
                 */
                LiveChatMessageSnippet.prototype.memberMilestoneChatDetails = null;

                /**
                 * LiveChatMessageSnippet membershipGiftingDetails.
                 * @member {youtube.api.v3.LiveChatMembershipGiftingDetails.$Properties|null|undefined} membershipGiftingDetails
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @instance
                 */
                LiveChatMessageSnippet.prototype.membershipGiftingDetails = null;

                /**
                 * LiveChatMessageSnippet giftMembershipReceivedDetails.
                 * @member {youtube.api.v3.LiveChatGiftMembershipReceivedDetails.$Properties|null|undefined} giftMembershipReceivedDetails
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @instance
                 */
                LiveChatMessageSnippet.prototype.giftMembershipReceivedDetails = null;

                /**
                 * LiveChatMessageSnippet pollDetails.
                 * @member {youtube.api.v3.LiveChatPollDetails.$Properties|null|undefined} pollDetails
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @instance
                 */
                LiveChatMessageSnippet.prototype.pollDetails = null;

                /**
                 * LiveChatMessageSnippet giftDetails.
                 * @member {youtube.api.v3.LiveChatGiftDetails.$Properties|null|undefined} giftDetails
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @instance
                 */
                LiveChatMessageSnippet.prototype.giftDetails = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * LiveChatMessageSnippet displayedContent.
                 * @member {"textMessageDetails"|"messageDeletedDetails"|"messageRetractedDetails"|"userBannedDetails"|"superChatDetails"|"superStickerDetails"|"newSponsorDetails"|"memberMilestoneChatDetails"|"membershipGiftingDetails"|"giftMembershipReceivedDetails"|"pollDetails"|"giftDetails"|undefined} displayedContent
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @instance
                 */
                $Object.defineProperty(LiveChatMessageSnippet.prototype, "displayedContent", {
                    get: $util.oneOfGetter($oneOfFields = ["textMessageDetails", "messageDeletedDetails", "messageRetractedDetails", "userBannedDetails", "superChatDetails", "superStickerDetails", "newSponsorDetails", "memberMilestoneChatDetails", "membershipGiftingDetails", "giftMembershipReceivedDetails", "pollDetails", "giftDetails"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new LiveChatMessageSnippet instance using the specified properties.
                 * @function create
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @static
                 * @param {youtube.api.v3.LiveChatMessageSnippet.$Properties=} [properties] Properties to set
                 * @returns {youtube.api.v3.LiveChatMessageSnippet} LiveChatMessageSnippet instance
                 * @type {{
                 *   (properties: youtube.api.v3.LiveChatMessageSnippet.$Shape): youtube.api.v3.LiveChatMessageSnippet & youtube.api.v3.LiveChatMessageSnippet.$Shape;
                 *   (properties?: youtube.api.v3.LiveChatMessageSnippet.$Properties): youtube.api.v3.LiveChatMessageSnippet;
                 * }}
                 */
                LiveChatMessageSnippet.create = function(properties) {
                    return new LiveChatMessageSnippet(properties);
                };

                /**
                 * Encodes the specified LiveChatMessageSnippet message. Does not implicitly {@link youtube.api.v3.LiveChatMessageSnippet.verify|verify} messages.
                 * @function encode
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @static
                 * @param {youtube.api.v3.LiveChatMessageSnippet.$Properties} message LiveChatMessageSnippet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatMessageSnippet.encode = function LiveChatMessageSnippet$encode(message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                    if (message.publishedAt != null && $Object.hasOwnProperty.call(message, "publishedAt"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.publishedAt);
                    if (message.displayMessage != null && $Object.hasOwnProperty.call(message, "displayMessage"))
                        writer.uint32(/* id 16, wireType 2 =*/130).string(message.displayMessage);
                    if (message.hasDisplayContent != null && $Object.hasOwnProperty.call(message, "hasDisplayContent"))
                        writer.uint32(/* id 17, wireType 0 =*/136).bool(message.hasDisplayContent);
                    if (message.textMessageDetails != null && $Object.hasOwnProperty.call(message, "textMessageDetails"))
                        $root.youtube.api.v3.LiveChatTextMessageDetails.encode(message.textMessageDetails, writer.uint32(/* id 19, wireType 2 =*/154).fork(), _depth + 1).ldelim();
                    if (message.messageDeletedDetails != null && $Object.hasOwnProperty.call(message, "messageDeletedDetails"))
                        $root.youtube.api.v3.LiveChatMessageDeletedDetails.encode(message.messageDeletedDetails, writer.uint32(/* id 20, wireType 2 =*/162).fork(), _depth + 1).ldelim();
                    if (message.messageRetractedDetails != null && $Object.hasOwnProperty.call(message, "messageRetractedDetails"))
                        $root.youtube.api.v3.LiveChatMessageRetractedDetails.encode(message.messageRetractedDetails, writer.uint32(/* id 21, wireType 2 =*/170).fork(), _depth + 1).ldelim();
                    if (message.userBannedDetails != null && $Object.hasOwnProperty.call(message, "userBannedDetails"))
                        $root.youtube.api.v3.LiveChatUserBannedMessageDetails.encode(message.userBannedDetails, writer.uint32(/* id 22, wireType 2 =*/178).fork(), _depth + 1).ldelim();
                    if (message.superChatDetails != null && $Object.hasOwnProperty.call(message, "superChatDetails"))
                        $root.youtube.api.v3.LiveChatSuperChatDetails.encode(message.superChatDetails, writer.uint32(/* id 27, wireType 2 =*/218).fork(), _depth + 1).ldelim();
                    if (message.superStickerDetails != null && $Object.hasOwnProperty.call(message, "superStickerDetails"))
                        $root.youtube.api.v3.LiveChatSuperStickerDetails.encode(message.superStickerDetails, writer.uint32(/* id 28, wireType 2 =*/226).fork(), _depth + 1).ldelim();
                    if (message.newSponsorDetails != null && $Object.hasOwnProperty.call(message, "newSponsorDetails"))
                        $root.youtube.api.v3.LiveChatNewSponsorDetails.encode(message.newSponsorDetails, writer.uint32(/* id 29, wireType 2 =*/234).fork(), _depth + 1).ldelim();
                    if (message.memberMilestoneChatDetails != null && $Object.hasOwnProperty.call(message, "memberMilestoneChatDetails"))
                        $root.youtube.api.v3.LiveChatMemberMilestoneChatDetails.encode(message.memberMilestoneChatDetails, writer.uint32(/* id 30, wireType 2 =*/242).fork(), _depth + 1).ldelim();
                    if (message.membershipGiftingDetails != null && $Object.hasOwnProperty.call(message, "membershipGiftingDetails"))
                        $root.youtube.api.v3.LiveChatMembershipGiftingDetails.encode(message.membershipGiftingDetails, writer.uint32(/* id 31, wireType 2 =*/250).fork(), _depth + 1).ldelim();
                    if (message.giftMembershipReceivedDetails != null && $Object.hasOwnProperty.call(message, "giftMembershipReceivedDetails"))
                        $root.youtube.api.v3.LiveChatGiftMembershipReceivedDetails.encode(message.giftMembershipReceivedDetails, writer.uint32(/* id 32, wireType 2 =*/258).fork(), _depth + 1).ldelim();
                    if (message.pollDetails != null && $Object.hasOwnProperty.call(message, "pollDetails"))
                        $root.youtube.api.v3.LiveChatPollDetails.encode(message.pollDetails, writer.uint32(/* id 33, wireType 2 =*/266).fork(), _depth + 1).ldelim();
                    if (message.giftDetails != null && $Object.hasOwnProperty.call(message, "giftDetails"))
                        $root.youtube.api.v3.LiveChatGiftDetails.encode(message.giftDetails, writer.uint32(/* id 34, wireType 2 =*/274).fork(), _depth + 1).ldelim();
                    if (message.liveChatId != null && $Object.hasOwnProperty.call(message, "liveChatId"))
                        writer.uint32(/* id 201, wireType 2 =*/1610).string(message.liveChatId);
                    if (message.authorChannelId != null && $Object.hasOwnProperty.call(message, "authorChannelId"))
                        writer.uint32(/* id 301, wireType 2 =*/2410).string(message.authorChannelId);
                    return writer;
                };

                /**
                 * Encodes the specified LiveChatMessageSnippet message, length delimited. Does not implicitly {@link youtube.api.v3.LiveChatMessageSnippet.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @static
                 * @param {youtube.api.v3.LiveChatMessageSnippet.$Properties} message LiveChatMessageSnippet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatMessageSnippet.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a LiveChatMessageSnippet message from the specified reader or buffer.
                 * @function decode
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {youtube.api.v3.LiveChatMessageSnippet & youtube.api.v3.LiveChatMessageSnippet.$Shape} LiveChatMessageSnippet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatMessageSnippet.decode = function LiveChatMessageSnippet$decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === $undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let end = length === $undefined ? reader.len : reader.pos + length, message = new this.ctor();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.type = reader.int32();
                                break;
                            }
                        case 201: {
                                message.liveChatId = reader.string();
                                break;
                            }
                        case 301: {
                                message.authorChannelId = reader.string();
                                break;
                            }
                        case 4: {
                                message.publishedAt = reader.string();
                                break;
                            }
                        case 17: {
                                message.hasDisplayContent = reader.bool();
                                break;
                            }
                        case 16: {
                                message.displayMessage = reader.string();
                                break;
                            }
                        case 19: {
                                message.textMessageDetails = $root.youtube.api.v3.LiveChatTextMessageDetails.decode(reader, reader.uint32(), $undefined, long + 1);
                                break;
                            }
                        case 20: {
                                message.messageDeletedDetails = $root.youtube.api.v3.LiveChatMessageDeletedDetails.decode(reader, reader.uint32(), $undefined, long + 1);
                                break;
                            }
                        case 21: {
                                message.messageRetractedDetails = $root.youtube.api.v3.LiveChatMessageRetractedDetails.decode(reader, reader.uint32(), $undefined, long + 1);
                                break;
                            }
                        case 22: {
                                message.userBannedDetails = $root.youtube.api.v3.LiveChatUserBannedMessageDetails.decode(reader, reader.uint32(), $undefined, long + 1);
                                break;
                            }
                        case 27: {
                                message.superChatDetails = $root.youtube.api.v3.LiveChatSuperChatDetails.decode(reader, reader.uint32(), $undefined, long + 1);
                                break;
                            }
                        case 28: {
                                message.superStickerDetails = $root.youtube.api.v3.LiveChatSuperStickerDetails.decode(reader, reader.uint32(), $undefined, long + 1);
                                break;
                            }
                        case 29: {
                                message.newSponsorDetails = $root.youtube.api.v3.LiveChatNewSponsorDetails.decode(reader, reader.uint32(), $undefined, long + 1);
                                break;
                            }
                        case 30: {
                                message.memberMilestoneChatDetails = $root.youtube.api.v3.LiveChatMemberMilestoneChatDetails.decode(reader, reader.uint32(), $undefined, long + 1);
                                break;
                            }
                        case 31: {
                                message.membershipGiftingDetails = $root.youtube.api.v3.LiveChatMembershipGiftingDetails.decode(reader, reader.uint32(), $undefined, long + 1);
                                break;
                            }
                        case 32: {
                                message.giftMembershipReceivedDetails = $root.youtube.api.v3.LiveChatGiftMembershipReceivedDetails.decode(reader, reader.uint32(), $undefined, long + 1);
                                break;
                            }
                        case 33: {
                                message.pollDetails = $root.youtube.api.v3.LiveChatPollDetails.decode(reader, reader.uint32(), $undefined, long + 1);
                                break;
                            }
                        case 34: {
                                message.giftDetails = $root.youtube.api.v3.LiveChatGiftDetails.decode(reader, reader.uint32(), $undefined, long + 1);
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a LiveChatMessageSnippet message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {youtube.api.v3.LiveChatMessageSnippet & youtube.api.v3.LiveChatMessageSnippet.$Shape} LiveChatMessageSnippet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatMessageSnippet.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a LiveChatMessageSnippet message.
                 * @function verify
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LiveChatMessageSnippet.verify = function LiveChatMessageSnippet$verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    let properties = {};
                    if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 17:
                        case 18:
                        case 19:
                        case 8:
                        case 9:
                        case 10:
                        case 15:
                        case 16:
                        case 20:
                        case 21:
                            break;
                        }
                    if (message.liveChatId != null && $Object.hasOwnProperty.call(message, "liveChatId"))
                        if (!$util.isString(message.liveChatId))
                            return "liveChatId: string expected";
                    if (message.authorChannelId != null && $Object.hasOwnProperty.call(message, "authorChannelId"))
                        if (!$util.isString(message.authorChannelId))
                            return "authorChannelId: string expected";
                    if (message.publishedAt != null && $Object.hasOwnProperty.call(message, "publishedAt"))
                        if (!$util.isString(message.publishedAt))
                            return "publishedAt: string expected";
                    if (message.hasDisplayContent != null && $Object.hasOwnProperty.call(message, "hasDisplayContent"))
                        if (typeof message.hasDisplayContent !== "boolean")
                            return "hasDisplayContent: boolean expected";
                    if (message.displayMessage != null && $Object.hasOwnProperty.call(message, "displayMessage"))
                        if (!$util.isString(message.displayMessage))
                            return "displayMessage: string expected";
                    if (message.textMessageDetails != null && $Object.hasOwnProperty.call(message, "textMessageDetails")) {
                        properties.displayedContent = 1;
                        {
                            let error = $root.youtube.api.v3.LiveChatTextMessageDetails.verify(message.textMessageDetails, long + 1);
                            if (error)
                                return "textMessageDetails." + error;
                        }
                    }
                    if (message.messageDeletedDetails != null && $Object.hasOwnProperty.call(message, "messageDeletedDetails")) {
                        if (properties.displayedContent === 1)
                            return "displayedContent: multiple values";
                        properties.displayedContent = 1;
                        {
                            let error = $root.youtube.api.v3.LiveChatMessageDeletedDetails.verify(message.messageDeletedDetails, long + 1);
                            if (error)
                                return "messageDeletedDetails." + error;
                        }
                    }
                    if (message.messageRetractedDetails != null && $Object.hasOwnProperty.call(message, "messageRetractedDetails")) {
                        if (properties.displayedContent === 1)
                            return "displayedContent: multiple values";
                        properties.displayedContent = 1;
                        {
                            let error = $root.youtube.api.v3.LiveChatMessageRetractedDetails.verify(message.messageRetractedDetails, long + 1);
                            if (error)
                                return "messageRetractedDetails." + error;
                        }
                    }
                    if (message.userBannedDetails != null && $Object.hasOwnProperty.call(message, "userBannedDetails")) {
                        if (properties.displayedContent === 1)
                            return "displayedContent: multiple values";
                        properties.displayedContent = 1;
                        {
                            let error = $root.youtube.api.v3.LiveChatUserBannedMessageDetails.verify(message.userBannedDetails, long + 1);
                            if (error)
                                return "userBannedDetails." + error;
                        }
                    }
                    if (message.superChatDetails != null && $Object.hasOwnProperty.call(message, "superChatDetails")) {
                        if (properties.displayedContent === 1)
                            return "displayedContent: multiple values";
                        properties.displayedContent = 1;
                        {
                            let error = $root.youtube.api.v3.LiveChatSuperChatDetails.verify(message.superChatDetails, long + 1);
                            if (error)
                                return "superChatDetails." + error;
                        }
                    }
                    if (message.superStickerDetails != null && $Object.hasOwnProperty.call(message, "superStickerDetails")) {
                        if (properties.displayedContent === 1)
                            return "displayedContent: multiple values";
                        properties.displayedContent = 1;
                        {
                            let error = $root.youtube.api.v3.LiveChatSuperStickerDetails.verify(message.superStickerDetails, long + 1);
                            if (error)
                                return "superStickerDetails." + error;
                        }
                    }
                    if (message.newSponsorDetails != null && $Object.hasOwnProperty.call(message, "newSponsorDetails")) {
                        if (properties.displayedContent === 1)
                            return "displayedContent: multiple values";
                        properties.displayedContent = 1;
                        {
                            let error = $root.youtube.api.v3.LiveChatNewSponsorDetails.verify(message.newSponsorDetails, long + 1);
                            if (error)
                                return "newSponsorDetails." + error;
                        }
                    }
                    if (message.memberMilestoneChatDetails != null && $Object.hasOwnProperty.call(message, "memberMilestoneChatDetails")) {
                        if (properties.displayedContent === 1)
                            return "displayedContent: multiple values";
                        properties.displayedContent = 1;
                        {
                            let error = $root.youtube.api.v3.LiveChatMemberMilestoneChatDetails.verify(message.memberMilestoneChatDetails, long + 1);
                            if (error)
                                return "memberMilestoneChatDetails." + error;
                        }
                    }
                    if (message.membershipGiftingDetails != null && $Object.hasOwnProperty.call(message, "membershipGiftingDetails")) {
                        if (properties.displayedContent === 1)
                            return "displayedContent: multiple values";
                        properties.displayedContent = 1;
                        {
                            let error = $root.youtube.api.v3.LiveChatMembershipGiftingDetails.verify(message.membershipGiftingDetails, long + 1);
                            if (error)
                                return "membershipGiftingDetails." + error;
                        }
                    }
                    if (message.giftMembershipReceivedDetails != null && $Object.hasOwnProperty.call(message, "giftMembershipReceivedDetails")) {
                        if (properties.displayedContent === 1)
                            return "displayedContent: multiple values";
                        properties.displayedContent = 1;
                        {
                            let error = $root.youtube.api.v3.LiveChatGiftMembershipReceivedDetails.verify(message.giftMembershipReceivedDetails, long + 1);
                            if (error)
                                return "giftMembershipReceivedDetails." + error;
                        }
                    }
                    if (message.pollDetails != null && $Object.hasOwnProperty.call(message, "pollDetails")) {
                        if (properties.displayedContent === 1)
                            return "displayedContent: multiple values";
                        properties.displayedContent = 1;
                        {
                            let error = $root.youtube.api.v3.LiveChatPollDetails.verify(message.pollDetails, long + 1);
                            if (error)
                                return "pollDetails." + error;
                        }
                    }
                    if (message.giftDetails != null && $Object.hasOwnProperty.call(message, "giftDetails")) {
                        if (properties.displayedContent === 1)
                            return "displayedContent: multiple values";
                        properties.displayedContent = 1;
                        {
                            let error = $root.youtube.api.v3.LiveChatGiftDetails.verify(message.giftDetails, long + 1);
                            if (error)
                                return "giftDetails." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a LiveChatMessageSnippet message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {youtube.api.v3.LiveChatMessageSnippet} LiveChatMessageSnippet
                 */
                LiveChatMessageSnippet.fromObject = function LiveChatMessageSnippet$fromObject(object, long) {
                    if (object instanceof this.ctor)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".youtube.api.v3.LiveChatMessageSnippet: object expected");
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let message = new this.ctor();
                    switch (object.type) {
                    default:
                        if (typeof object.type === "number") {
                            message.type = object.type;
                            break;
                        }
                        break;
                    case "INVALID_TYPE":
                    case 0:
                        message.type = 0;
                        break;
                    case "TEXT_MESSAGE_EVENT":
                    case 1:
                        message.type = 1;
                        break;
                    case "TOMBSTONE":
                    case 2:
                        message.type = 2;
                        break;
                    case "FAN_FUNDING_EVENT":
                    case 3:
                        message.type = 3;
                        break;
                    case "CHAT_ENDED_EVENT":
                    case 4:
                        message.type = 4;
                        break;
                    case "SPONSOR_ONLY_MODE_STARTED_EVENT":
                    case 5:
                        message.type = 5;
                        break;
                    case "SPONSOR_ONLY_MODE_ENDED_EVENT":
                    case 6:
                        message.type = 6;
                        break;
                    case "NEW_SPONSOR_EVENT":
                    case 7:
                        message.type = 7;
                        break;
                    case "MEMBER_MILESTONE_CHAT_EVENT":
                    case 17:
                        message.type = 17;
                        break;
                    case "MEMBERSHIP_GIFTING_EVENT":
                    case 18:
                        message.type = 18;
                        break;
                    case "GIFT_MEMBERSHIP_RECEIVED_EVENT":
                    case 19:
                        message.type = 19;
                        break;
                    case "MESSAGE_DELETED_EVENT":
                    case 8:
                        message.type = 8;
                        break;
                    case "MESSAGE_RETRACTED_EVENT":
                    case 9:
                        message.type = 9;
                        break;
                    case "USER_BANNED_EVENT":
                    case 10:
                        message.type = 10;
                        break;
                    case "SUPER_CHAT_EVENT":
                    case 15:
                        message.type = 15;
                        break;
                    case "SUPER_STICKER_EVENT":
                    case 16:
                        message.type = 16;
                        break;
                    case "POLL_EVENT":
                    case 20:
                        message.type = 20;
                        break;
                    case "GIFT_EVENT":
                    case 21:
                        message.type = 21;
                        break;
                    }
                    if (object.liveChatId != null)
                        message.liveChatId = $String(object.liveChatId);
                    if (object.authorChannelId != null)
                        message.authorChannelId = $String(object.authorChannelId);
                    if (object.publishedAt != null)
                        message.publishedAt = $String(object.publishedAt);
                    if (object.hasDisplayContent != null)
                        message.hasDisplayContent = $Boolean(object.hasDisplayContent);
                    if (object.displayMessage != null)
                        message.displayMessage = $String(object.displayMessage);
                    if (object.textMessageDetails != null) {
                        if (!$util.isObject(object.textMessageDetails))
                            throw $TypeError(".youtube.api.v3.LiveChatMessageSnippet.textMessageDetails: object expected");
                        message.textMessageDetails = $root.youtube.api.v3.LiveChatTextMessageDetails.fromObject(object.textMessageDetails, long + 1);
                    }
                    if (object.messageDeletedDetails != null) {
                        if (!$util.isObject(object.messageDeletedDetails))
                            throw $TypeError(".youtube.api.v3.LiveChatMessageSnippet.messageDeletedDetails: object expected");
                        message.messageDeletedDetails = $root.youtube.api.v3.LiveChatMessageDeletedDetails.fromObject(object.messageDeletedDetails, long + 1);
                    }
                    if (object.messageRetractedDetails != null) {
                        if (!$util.isObject(object.messageRetractedDetails))
                            throw $TypeError(".youtube.api.v3.LiveChatMessageSnippet.messageRetractedDetails: object expected");
                        message.messageRetractedDetails = $root.youtube.api.v3.LiveChatMessageRetractedDetails.fromObject(object.messageRetractedDetails, long + 1);
                    }
                    if (object.userBannedDetails != null) {
                        if (!$util.isObject(object.userBannedDetails))
                            throw $TypeError(".youtube.api.v3.LiveChatMessageSnippet.userBannedDetails: object expected");
                        message.userBannedDetails = $root.youtube.api.v3.LiveChatUserBannedMessageDetails.fromObject(object.userBannedDetails, long + 1);
                    }
                    if (object.superChatDetails != null) {
                        if (!$util.isObject(object.superChatDetails))
                            throw $TypeError(".youtube.api.v3.LiveChatMessageSnippet.superChatDetails: object expected");
                        message.superChatDetails = $root.youtube.api.v3.LiveChatSuperChatDetails.fromObject(object.superChatDetails, long + 1);
                    }
                    if (object.superStickerDetails != null) {
                        if (!$util.isObject(object.superStickerDetails))
                            throw $TypeError(".youtube.api.v3.LiveChatMessageSnippet.superStickerDetails: object expected");
                        message.superStickerDetails = $root.youtube.api.v3.LiveChatSuperStickerDetails.fromObject(object.superStickerDetails, long + 1);
                    }
                    if (object.newSponsorDetails != null) {
                        if (!$util.isObject(object.newSponsorDetails))
                            throw $TypeError(".youtube.api.v3.LiveChatMessageSnippet.newSponsorDetails: object expected");
                        message.newSponsorDetails = $root.youtube.api.v3.LiveChatNewSponsorDetails.fromObject(object.newSponsorDetails, long + 1);
                    }
                    if (object.memberMilestoneChatDetails != null) {
                        if (!$util.isObject(object.memberMilestoneChatDetails))
                            throw $TypeError(".youtube.api.v3.LiveChatMessageSnippet.memberMilestoneChatDetails: object expected");
                        message.memberMilestoneChatDetails = $root.youtube.api.v3.LiveChatMemberMilestoneChatDetails.fromObject(object.memberMilestoneChatDetails, long + 1);
                    }
                    if (object.membershipGiftingDetails != null) {
                        if (!$util.isObject(object.membershipGiftingDetails))
                            throw $TypeError(".youtube.api.v3.LiveChatMessageSnippet.membershipGiftingDetails: object expected");
                        message.membershipGiftingDetails = $root.youtube.api.v3.LiveChatMembershipGiftingDetails.fromObject(object.membershipGiftingDetails, long + 1);
                    }
                    if (object.giftMembershipReceivedDetails != null) {
                        if (!$util.isObject(object.giftMembershipReceivedDetails))
                            throw $TypeError(".youtube.api.v3.LiveChatMessageSnippet.giftMembershipReceivedDetails: object expected");
                        message.giftMembershipReceivedDetails = $root.youtube.api.v3.LiveChatGiftMembershipReceivedDetails.fromObject(object.giftMembershipReceivedDetails, long + 1);
                    }
                    if (object.pollDetails != null) {
                        if (!$util.isObject(object.pollDetails))
                            throw $TypeError(".youtube.api.v3.LiveChatMessageSnippet.pollDetails: object expected");
                        message.pollDetails = $root.youtube.api.v3.LiveChatPollDetails.fromObject(object.pollDetails, long + 1);
                    }
                    if (object.giftDetails != null) {
                        if (!$util.isObject(object.giftDetails))
                            throw $TypeError(".youtube.api.v3.LiveChatMessageSnippet.giftDetails: object expected");
                        message.giftDetails = $root.youtube.api.v3.LiveChatGiftDetails.fromObject(object.giftDetails, long + 1);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a LiveChatMessageSnippet message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @static
                 * @param {youtube.api.v3.LiveChatMessageSnippet} message LiveChatMessageSnippet
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LiveChatMessageSnippet.toObject = function LiveChatMessageSnippet$toObject(message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    let object = {};
                    if (options.defaults) {
                        object.type = options.enums === $String ? "INVALID_TYPE" : 0;
                        object.publishedAt = "";
                        object.displayMessage = "";
                        object.hasDisplayContent = false;
                        object.liveChatId = "";
                        object.authorChannelId = "";
                    }
                    if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                        object.type = options.enums === $String ? $root.youtube.api.v3.LiveChatMessageSnippet.TypeWrapper.Type[message.type] === $undefined ? message.type : $root.youtube.api.v3.LiveChatMessageSnippet.TypeWrapper.Type[message.type] : message.type;
                    if (message.publishedAt != null && $Object.hasOwnProperty.call(message, "publishedAt"))
                        object.publishedAt = message.publishedAt;
                    if (message.displayMessage != null && $Object.hasOwnProperty.call(message, "displayMessage"))
                        object.displayMessage = message.displayMessage;
                    if (message.hasDisplayContent != null && $Object.hasOwnProperty.call(message, "hasDisplayContent"))
                        object.hasDisplayContent = message.hasDisplayContent;
                    if (message.textMessageDetails != null && $Object.hasOwnProperty.call(message, "textMessageDetails")) {
                        object.textMessageDetails = $root.youtube.api.v3.LiveChatTextMessageDetails.toObject(message.textMessageDetails, options, _depth + 1);
                        if (options.oneofs)
                            object.displayedContent = "textMessageDetails";
                    }
                    if (message.messageDeletedDetails != null && $Object.hasOwnProperty.call(message, "messageDeletedDetails")) {
                        object.messageDeletedDetails = $root.youtube.api.v3.LiveChatMessageDeletedDetails.toObject(message.messageDeletedDetails, options, _depth + 1);
                        if (options.oneofs)
                            object.displayedContent = "messageDeletedDetails";
                    }
                    if (message.messageRetractedDetails != null && $Object.hasOwnProperty.call(message, "messageRetractedDetails")) {
                        object.messageRetractedDetails = $root.youtube.api.v3.LiveChatMessageRetractedDetails.toObject(message.messageRetractedDetails, options, _depth + 1);
                        if (options.oneofs)
                            object.displayedContent = "messageRetractedDetails";
                    }
                    if (message.userBannedDetails != null && $Object.hasOwnProperty.call(message, "userBannedDetails")) {
                        object.userBannedDetails = $root.youtube.api.v3.LiveChatUserBannedMessageDetails.toObject(message.userBannedDetails, options, _depth + 1);
                        if (options.oneofs)
                            object.displayedContent = "userBannedDetails";
                    }
                    if (message.superChatDetails != null && $Object.hasOwnProperty.call(message, "superChatDetails")) {
                        object.superChatDetails = $root.youtube.api.v3.LiveChatSuperChatDetails.toObject(message.superChatDetails, options, _depth + 1);
                        if (options.oneofs)
                            object.displayedContent = "superChatDetails";
                    }
                    if (message.superStickerDetails != null && $Object.hasOwnProperty.call(message, "superStickerDetails")) {
                        object.superStickerDetails = $root.youtube.api.v3.LiveChatSuperStickerDetails.toObject(message.superStickerDetails, options, _depth + 1);
                        if (options.oneofs)
                            object.displayedContent = "superStickerDetails";
                    }
                    if (message.newSponsorDetails != null && $Object.hasOwnProperty.call(message, "newSponsorDetails")) {
                        object.newSponsorDetails = $root.youtube.api.v3.LiveChatNewSponsorDetails.toObject(message.newSponsorDetails, options, _depth + 1);
                        if (options.oneofs)
                            object.displayedContent = "newSponsorDetails";
                    }
                    if (message.memberMilestoneChatDetails != null && $Object.hasOwnProperty.call(message, "memberMilestoneChatDetails")) {
                        object.memberMilestoneChatDetails = $root.youtube.api.v3.LiveChatMemberMilestoneChatDetails.toObject(message.memberMilestoneChatDetails, options, _depth + 1);
                        if (options.oneofs)
                            object.displayedContent = "memberMilestoneChatDetails";
                    }
                    if (message.membershipGiftingDetails != null && $Object.hasOwnProperty.call(message, "membershipGiftingDetails")) {
                        object.membershipGiftingDetails = $root.youtube.api.v3.LiveChatMembershipGiftingDetails.toObject(message.membershipGiftingDetails, options, _depth + 1);
                        if (options.oneofs)
                            object.displayedContent = "membershipGiftingDetails";
                    }
                    if (message.giftMembershipReceivedDetails != null && $Object.hasOwnProperty.call(message, "giftMembershipReceivedDetails")) {
                        object.giftMembershipReceivedDetails = $root.youtube.api.v3.LiveChatGiftMembershipReceivedDetails.toObject(message.giftMembershipReceivedDetails, options, _depth + 1);
                        if (options.oneofs)
                            object.displayedContent = "giftMembershipReceivedDetails";
                    }
                    if (message.pollDetails != null && $Object.hasOwnProperty.call(message, "pollDetails")) {
                        object.pollDetails = $root.youtube.api.v3.LiveChatPollDetails.toObject(message.pollDetails, options, _depth + 1);
                        if (options.oneofs)
                            object.displayedContent = "pollDetails";
                    }
                    if (message.giftDetails != null && $Object.hasOwnProperty.call(message, "giftDetails")) {
                        object.giftDetails = $root.youtube.api.v3.LiveChatGiftDetails.toObject(message.giftDetails, options, _depth + 1);
                        if (options.oneofs)
                            object.displayedContent = "giftDetails";
                    }
                    if (message.liveChatId != null && $Object.hasOwnProperty.call(message, "liveChatId"))
                        object.liveChatId = message.liveChatId;
                    if (message.authorChannelId != null && $Object.hasOwnProperty.call(message, "authorChannelId"))
                        object.authorChannelId = message.authorChannelId;
                    return object;
                };

                /**
                 * Converts this LiveChatMessageSnippet to JSON.
                 * @function toJSON
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                LiveChatMessageSnippet.prototype.toJSON = function() {
                    return LiveChatMessageSnippet.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for LiveChatMessageSnippet
                 * @function getTypeUrl
                 * @memberof youtube.api.v3.LiveChatMessageSnippet
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                LiveChatMessageSnippet.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/youtube.api.v3.LiveChatMessageSnippet";
                };

                LiveChatMessageSnippet.TypeWrapper = (function() {

                    /**
                     * Properties of a TypeWrapper.
                     * @typedef {Object} youtube.api.v3.LiveChatMessageSnippet.TypeWrapper.$Properties
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a TypeWrapper.
                     * @memberof youtube.api.v3.LiveChatMessageSnippet
                     * @interface ITypeWrapper
                     * @augments youtube.api.v3.LiveChatMessageSnippet.TypeWrapper.$Properties
                     * @deprecated Use youtube.api.v3.LiveChatMessageSnippet.TypeWrapper.$Properties instead.
                     */

                    /**
                     * Shape of a TypeWrapper.
                     * @typedef {youtube.api.v3.LiveChatMessageSnippet.TypeWrapper.$Properties} youtube.api.v3.LiveChatMessageSnippet.TypeWrapper.$Shape
                     */

                    /**
                     * Constructs a new TypeWrapper.
                     * @memberof youtube.api.v3.LiveChatMessageSnippet
                     * @classdesc Represents a TypeWrapper.
                     * @constructor
                     * @param {youtube.api.v3.LiveChatMessageSnippet.TypeWrapper.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const TypeWrapper = function TypeWrapper(properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * Creates a new TypeWrapper instance using the specified properties.
                     * @function create
                     * @memberof youtube.api.v3.LiveChatMessageSnippet.TypeWrapper
                     * @static
                     * @param {youtube.api.v3.LiveChatMessageSnippet.TypeWrapper.$Properties=} [properties] Properties to set
                     * @returns {youtube.api.v3.LiveChatMessageSnippet.TypeWrapper} TypeWrapper instance
                     * @type {{
                     *   (properties: youtube.api.v3.LiveChatMessageSnippet.TypeWrapper.$Shape): youtube.api.v3.LiveChatMessageSnippet.TypeWrapper & youtube.api.v3.LiveChatMessageSnippet.TypeWrapper.$Shape;
                     *   (properties?: youtube.api.v3.LiveChatMessageSnippet.TypeWrapper.$Properties): youtube.api.v3.LiveChatMessageSnippet.TypeWrapper;
                     * }}
                     */
                    TypeWrapper.create = function(properties) {
                        return new TypeWrapper(properties);
                    };

                    /**
                     * Encodes the specified TypeWrapper message. Does not implicitly {@link youtube.api.v3.LiveChatMessageSnippet.TypeWrapper.verify|verify} messages.
                     * @function encode
                     * @memberof youtube.api.v3.LiveChatMessageSnippet.TypeWrapper
                     * @static
                     * @param {youtube.api.v3.LiveChatMessageSnippet.TypeWrapper.$Properties} message TypeWrapper message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TypeWrapper.encode = function TypeWrapper$encode(message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        return writer;
                    };

                    /**
                     * Encodes the specified TypeWrapper message, length delimited. Does not implicitly {@link youtube.api.v3.LiveChatMessageSnippet.TypeWrapper.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof youtube.api.v3.LiveChatMessageSnippet.TypeWrapper
                     * @static
                     * @param {youtube.api.v3.LiveChatMessageSnippet.TypeWrapper.$Properties} message TypeWrapper message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TypeWrapper.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a TypeWrapper message from the specified reader or buffer.
                     * @function decode
                     * @memberof youtube.api.v3.LiveChatMessageSnippet.TypeWrapper
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {youtube.api.v3.LiveChatMessageSnippet.TypeWrapper & youtube.api.v3.LiveChatMessageSnippet.TypeWrapper.$Shape} TypeWrapper
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TypeWrapper.decode = function TypeWrapper$decode(reader, length, error, long) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (long === $undefined)
                            long = 0;
                        if (long > $Reader.recursionLimit)
                            throw $Error("maximum nesting depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = new this.ctor();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7, long);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a TypeWrapper message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof youtube.api.v3.LiveChatMessageSnippet.TypeWrapper
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {youtube.api.v3.LiveChatMessageSnippet.TypeWrapper & youtube.api.v3.LiveChatMessageSnippet.TypeWrapper.$Shape} TypeWrapper
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TypeWrapper.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a TypeWrapper message.
                     * @function verify
                     * @memberof youtube.api.v3.LiveChatMessageSnippet.TypeWrapper
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TypeWrapper.verify = function TypeWrapper$verify(message, long) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (long === $undefined)
                            long = 0;
                        if (long > $util.recursionLimit)
                            return "maximum nesting depth exceeded";
                        return null;
                    };

                    /**
                     * Creates a TypeWrapper message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof youtube.api.v3.LiveChatMessageSnippet.TypeWrapper
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {youtube.api.v3.LiveChatMessageSnippet.TypeWrapper} TypeWrapper
                     */
                    TypeWrapper.fromObject = function TypeWrapper$fromObject(object, long) {
                        if (object instanceof this.ctor)
                            return object;
                        return new this.ctor();
                    };

                    /**
                     * Creates a plain object from a TypeWrapper message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof youtube.api.v3.LiveChatMessageSnippet.TypeWrapper
                     * @static
                     * @param {youtube.api.v3.LiveChatMessageSnippet.TypeWrapper} message TypeWrapper
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TypeWrapper.toObject = function () {
                        return {};
                    };

                    /**
                     * Converts this TypeWrapper to JSON.
                     * @function toJSON
                     * @memberof youtube.api.v3.LiveChatMessageSnippet.TypeWrapper
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TypeWrapper.prototype.toJSON = function() {
                        return TypeWrapper.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for TypeWrapper
                     * @function getTypeUrl
                     * @memberof youtube.api.v3.LiveChatMessageSnippet.TypeWrapper
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    TypeWrapper.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/youtube.api.v3.LiveChatMessageSnippet.TypeWrapper";
                    };

                    /**
                     * Type enum.
                     * @name youtube.api.v3.LiveChatMessageSnippet.TypeWrapper.Type
                     * @enum {number}
                     * @property {number} INVALID_TYPE=0 INVALID_TYPE value
                     * @property {number} TEXT_MESSAGE_EVENT=1 TEXT_MESSAGE_EVENT value
                     * @property {number} TOMBSTONE=2 TOMBSTONE value
                     * @property {number} FAN_FUNDING_EVENT=3 FAN_FUNDING_EVENT value
                     * @property {number} CHAT_ENDED_EVENT=4 CHAT_ENDED_EVENT value
                     * @property {number} SPONSOR_ONLY_MODE_STARTED_EVENT=5 SPONSOR_ONLY_MODE_STARTED_EVENT value
                     * @property {number} SPONSOR_ONLY_MODE_ENDED_EVENT=6 SPONSOR_ONLY_MODE_ENDED_EVENT value
                     * @property {number} NEW_SPONSOR_EVENT=7 NEW_SPONSOR_EVENT value
                     * @property {number} MEMBER_MILESTONE_CHAT_EVENT=17 MEMBER_MILESTONE_CHAT_EVENT value
                     * @property {number} MEMBERSHIP_GIFTING_EVENT=18 MEMBERSHIP_GIFTING_EVENT value
                     * @property {number} GIFT_MEMBERSHIP_RECEIVED_EVENT=19 GIFT_MEMBERSHIP_RECEIVED_EVENT value
                     * @property {number} MESSAGE_DELETED_EVENT=8 MESSAGE_DELETED_EVENT value
                     * @property {number} MESSAGE_RETRACTED_EVENT=9 MESSAGE_RETRACTED_EVENT value
                     * @property {number} USER_BANNED_EVENT=10 USER_BANNED_EVENT value
                     * @property {number} SUPER_CHAT_EVENT=15 SUPER_CHAT_EVENT value
                     * @property {number} SUPER_STICKER_EVENT=16 SUPER_STICKER_EVENT value
                     * @property {number} POLL_EVENT=20 POLL_EVENT value
                     * @property {number} GIFT_EVENT=21 GIFT_EVENT value
                     */
                    TypeWrapper.Type = (function() {
                        const valuesById = $Object.create(null), values = $Object.create(valuesById);
                        values[valuesById[0] = "INVALID_TYPE"] = 0;
                        values[valuesById[1] = "TEXT_MESSAGE_EVENT"] = 1;
                        values[valuesById[2] = "TOMBSTONE"] = 2;
                        values[valuesById[3] = "FAN_FUNDING_EVENT"] = 3;
                        values[valuesById[4] = "CHAT_ENDED_EVENT"] = 4;
                        values[valuesById[5] = "SPONSOR_ONLY_MODE_STARTED_EVENT"] = 5;
                        values[valuesById[6] = "SPONSOR_ONLY_MODE_ENDED_EVENT"] = 6;
                        values[valuesById[7] = "NEW_SPONSOR_EVENT"] = 7;
                        values[valuesById[17] = "MEMBER_MILESTONE_CHAT_EVENT"] = 17;
                        values[valuesById[18] = "MEMBERSHIP_GIFTING_EVENT"] = 18;
                        values[valuesById[19] = "GIFT_MEMBERSHIP_RECEIVED_EVENT"] = 19;
                        values[valuesById[8] = "MESSAGE_DELETED_EVENT"] = 8;
                        values[valuesById[9] = "MESSAGE_RETRACTED_EVENT"] = 9;
                        values[valuesById[10] = "USER_BANNED_EVENT"] = 10;
                        values[valuesById[15] = "SUPER_CHAT_EVENT"] = 15;
                        values[valuesById[16] = "SUPER_STICKER_EVENT"] = 16;
                        values[valuesById[20] = "POLL_EVENT"] = 20;
                        values[valuesById[21] = "GIFT_EVENT"] = 21;
                        return values;
                    })();

                    return TypeWrapper;
                })();

                return LiveChatMessageSnippet;
            })();

            v3.LiveChatTextMessageDetails = (function() {

                /**
                 * Properties of a LiveChatTextMessageDetails.
                 * @typedef {Object} youtube.api.v3.LiveChatTextMessageDetails.$Properties
                 * @property {string|null} [messageText] LiveChatTextMessageDetails messageText
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a LiveChatTextMessageDetails.
                 * @memberof youtube.api.v3
                 * @interface ILiveChatTextMessageDetails
                 * @augments youtube.api.v3.LiveChatTextMessageDetails.$Properties
                 * @deprecated Use youtube.api.v3.LiveChatTextMessageDetails.$Properties instead.
                 */

                /**
                 * Shape of a LiveChatTextMessageDetails.
                 * @typedef {youtube.api.v3.LiveChatTextMessageDetails.$Properties} youtube.api.v3.LiveChatTextMessageDetails.$Shape
                 */

                /**
                 * Constructs a new LiveChatTextMessageDetails.
                 * @memberof youtube.api.v3
                 * @classdesc Represents a LiveChatTextMessageDetails.
                 * @constructor
                 * @param {youtube.api.v3.LiveChatTextMessageDetails.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                const LiveChatTextMessageDetails = function LiveChatTextMessageDetails(properties) {
                    if (properties)
                        for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * LiveChatTextMessageDetails messageText.
                 * @member {string} messageText
                 * @memberof youtube.api.v3.LiveChatTextMessageDetails
                 * @instance
                 */
                LiveChatTextMessageDetails.prototype.messageText = "";

                /**
                 * Creates a new LiveChatTextMessageDetails instance using the specified properties.
                 * @function create
                 * @memberof youtube.api.v3.LiveChatTextMessageDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatTextMessageDetails.$Properties=} [properties] Properties to set
                 * @returns {youtube.api.v3.LiveChatTextMessageDetails} LiveChatTextMessageDetails instance
                 * @type {{
                 *   (properties: youtube.api.v3.LiveChatTextMessageDetails.$Shape): youtube.api.v3.LiveChatTextMessageDetails & youtube.api.v3.LiveChatTextMessageDetails.$Shape;
                 *   (properties?: youtube.api.v3.LiveChatTextMessageDetails.$Properties): youtube.api.v3.LiveChatTextMessageDetails;
                 * }}
                 */
                LiveChatTextMessageDetails.create = function(properties) {
                    return new LiveChatTextMessageDetails(properties);
                };

                /**
                 * Encodes the specified LiveChatTextMessageDetails message. Does not implicitly {@link youtube.api.v3.LiveChatTextMessageDetails.verify|verify} messages.
                 * @function encode
                 * @memberof youtube.api.v3.LiveChatTextMessageDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatTextMessageDetails.$Properties} message LiveChatTextMessageDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatTextMessageDetails.encode = function LiveChatTextMessageDetails$encode(message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.messageText != null && $Object.hasOwnProperty.call(message, "messageText"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.messageText);
                    return writer;
                };

                /**
                 * Encodes the specified LiveChatTextMessageDetails message, length delimited. Does not implicitly {@link youtube.api.v3.LiveChatTextMessageDetails.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof youtube.api.v3.LiveChatTextMessageDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatTextMessageDetails.$Properties} message LiveChatTextMessageDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatTextMessageDetails.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a LiveChatTextMessageDetails message from the specified reader or buffer.
                 * @function decode
                 * @memberof youtube.api.v3.LiveChatTextMessageDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {youtube.api.v3.LiveChatTextMessageDetails & youtube.api.v3.LiveChatTextMessageDetails.$Shape} LiveChatTextMessageDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatTextMessageDetails.decode = function LiveChatTextMessageDetails$decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === $undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let end = length === $undefined ? reader.len : reader.pos + length, message = new this.ctor();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.messageText = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a LiveChatTextMessageDetails message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof youtube.api.v3.LiveChatTextMessageDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {youtube.api.v3.LiveChatTextMessageDetails & youtube.api.v3.LiveChatTextMessageDetails.$Shape} LiveChatTextMessageDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatTextMessageDetails.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a LiveChatTextMessageDetails message.
                 * @function verify
                 * @memberof youtube.api.v3.LiveChatTextMessageDetails
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LiveChatTextMessageDetails.verify = function LiveChatTextMessageDetails$verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.messageText != null && $Object.hasOwnProperty.call(message, "messageText"))
                        if (!$util.isString(message.messageText))
                            return "messageText: string expected";
                    return null;
                };

                /**
                 * Creates a LiveChatTextMessageDetails message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof youtube.api.v3.LiveChatTextMessageDetails
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {youtube.api.v3.LiveChatTextMessageDetails} LiveChatTextMessageDetails
                 */
                LiveChatTextMessageDetails.fromObject = function LiveChatTextMessageDetails$fromObject(object, long) {
                    if (object instanceof this.ctor)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".youtube.api.v3.LiveChatTextMessageDetails: object expected");
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let message = new this.ctor();
                    if (object.messageText != null)
                        message.messageText = $String(object.messageText);
                    return message;
                };

                /**
                 * Creates a plain object from a LiveChatTextMessageDetails message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof youtube.api.v3.LiveChatTextMessageDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatTextMessageDetails} message LiveChatTextMessageDetails
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LiveChatTextMessageDetails.toObject = function LiveChatTextMessageDetails$toObject(message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    let object = {};
                    if (options.defaults)
                        object.messageText = "";
                    if (message.messageText != null && $Object.hasOwnProperty.call(message, "messageText"))
                        object.messageText = message.messageText;
                    return object;
                };

                /**
                 * Converts this LiveChatTextMessageDetails to JSON.
                 * @function toJSON
                 * @memberof youtube.api.v3.LiveChatTextMessageDetails
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                LiveChatTextMessageDetails.prototype.toJSON = function() {
                    return LiveChatTextMessageDetails.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for LiveChatTextMessageDetails
                 * @function getTypeUrl
                 * @memberof youtube.api.v3.LiveChatTextMessageDetails
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                LiveChatTextMessageDetails.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/youtube.api.v3.LiveChatTextMessageDetails";
                };

                return LiveChatTextMessageDetails;
            })();

            v3.LiveChatMessageDeletedDetails = (function() {

                /**
                 * Properties of a LiveChatMessageDeletedDetails.
                 * @typedef {Object} youtube.api.v3.LiveChatMessageDeletedDetails.$Properties
                 * @property {string|null} [deletedMessageId] LiveChatMessageDeletedDetails deletedMessageId
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a LiveChatMessageDeletedDetails.
                 * @memberof youtube.api.v3
                 * @interface ILiveChatMessageDeletedDetails
                 * @augments youtube.api.v3.LiveChatMessageDeletedDetails.$Properties
                 * @deprecated Use youtube.api.v3.LiveChatMessageDeletedDetails.$Properties instead.
                 */

                /**
                 * Shape of a LiveChatMessageDeletedDetails.
                 * @typedef {youtube.api.v3.LiveChatMessageDeletedDetails.$Properties} youtube.api.v3.LiveChatMessageDeletedDetails.$Shape
                 */

                /**
                 * Constructs a new LiveChatMessageDeletedDetails.
                 * @memberof youtube.api.v3
                 * @classdesc Represents a LiveChatMessageDeletedDetails.
                 * @constructor
                 * @param {youtube.api.v3.LiveChatMessageDeletedDetails.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                const LiveChatMessageDeletedDetails = function LiveChatMessageDeletedDetails(properties) {
                    if (properties)
                        for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * LiveChatMessageDeletedDetails deletedMessageId.
                 * @member {string} deletedMessageId
                 * @memberof youtube.api.v3.LiveChatMessageDeletedDetails
                 * @instance
                 */
                LiveChatMessageDeletedDetails.prototype.deletedMessageId = "";

                /**
                 * Creates a new LiveChatMessageDeletedDetails instance using the specified properties.
                 * @function create
                 * @memberof youtube.api.v3.LiveChatMessageDeletedDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatMessageDeletedDetails.$Properties=} [properties] Properties to set
                 * @returns {youtube.api.v3.LiveChatMessageDeletedDetails} LiveChatMessageDeletedDetails instance
                 * @type {{
                 *   (properties: youtube.api.v3.LiveChatMessageDeletedDetails.$Shape): youtube.api.v3.LiveChatMessageDeletedDetails & youtube.api.v3.LiveChatMessageDeletedDetails.$Shape;
                 *   (properties?: youtube.api.v3.LiveChatMessageDeletedDetails.$Properties): youtube.api.v3.LiveChatMessageDeletedDetails;
                 * }}
                 */
                LiveChatMessageDeletedDetails.create = function(properties) {
                    return new LiveChatMessageDeletedDetails(properties);
                };

                /**
                 * Encodes the specified LiveChatMessageDeletedDetails message. Does not implicitly {@link youtube.api.v3.LiveChatMessageDeletedDetails.verify|verify} messages.
                 * @function encode
                 * @memberof youtube.api.v3.LiveChatMessageDeletedDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatMessageDeletedDetails.$Properties} message LiveChatMessageDeletedDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatMessageDeletedDetails.encode = function LiveChatMessageDeletedDetails$encode(message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.deletedMessageId != null && $Object.hasOwnProperty.call(message, "deletedMessageId"))
                        writer.uint32(/* id 101, wireType 2 =*/810).string(message.deletedMessageId);
                    return writer;
                };

                /**
                 * Encodes the specified LiveChatMessageDeletedDetails message, length delimited. Does not implicitly {@link youtube.api.v3.LiveChatMessageDeletedDetails.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof youtube.api.v3.LiveChatMessageDeletedDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatMessageDeletedDetails.$Properties} message LiveChatMessageDeletedDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatMessageDeletedDetails.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a LiveChatMessageDeletedDetails message from the specified reader or buffer.
                 * @function decode
                 * @memberof youtube.api.v3.LiveChatMessageDeletedDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {youtube.api.v3.LiveChatMessageDeletedDetails & youtube.api.v3.LiveChatMessageDeletedDetails.$Shape} LiveChatMessageDeletedDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatMessageDeletedDetails.decode = function LiveChatMessageDeletedDetails$decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === $undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let end = length === $undefined ? reader.len : reader.pos + length, message = new this.ctor();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 101: {
                                message.deletedMessageId = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a LiveChatMessageDeletedDetails message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof youtube.api.v3.LiveChatMessageDeletedDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {youtube.api.v3.LiveChatMessageDeletedDetails & youtube.api.v3.LiveChatMessageDeletedDetails.$Shape} LiveChatMessageDeletedDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatMessageDeletedDetails.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a LiveChatMessageDeletedDetails message.
                 * @function verify
                 * @memberof youtube.api.v3.LiveChatMessageDeletedDetails
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LiveChatMessageDeletedDetails.verify = function LiveChatMessageDeletedDetails$verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.deletedMessageId != null && $Object.hasOwnProperty.call(message, "deletedMessageId"))
                        if (!$util.isString(message.deletedMessageId))
                            return "deletedMessageId: string expected";
                    return null;
                };

                /**
                 * Creates a LiveChatMessageDeletedDetails message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof youtube.api.v3.LiveChatMessageDeletedDetails
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {youtube.api.v3.LiveChatMessageDeletedDetails} LiveChatMessageDeletedDetails
                 */
                LiveChatMessageDeletedDetails.fromObject = function LiveChatMessageDeletedDetails$fromObject(object, long) {
                    if (object instanceof this.ctor)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".youtube.api.v3.LiveChatMessageDeletedDetails: object expected");
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let message = new this.ctor();
                    if (object.deletedMessageId != null)
                        message.deletedMessageId = $String(object.deletedMessageId);
                    return message;
                };

                /**
                 * Creates a plain object from a LiveChatMessageDeletedDetails message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof youtube.api.v3.LiveChatMessageDeletedDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatMessageDeletedDetails} message LiveChatMessageDeletedDetails
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LiveChatMessageDeletedDetails.toObject = function LiveChatMessageDeletedDetails$toObject(message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    let object = {};
                    if (options.defaults)
                        object.deletedMessageId = "";
                    if (message.deletedMessageId != null && $Object.hasOwnProperty.call(message, "deletedMessageId"))
                        object.deletedMessageId = message.deletedMessageId;
                    return object;
                };

                /**
                 * Converts this LiveChatMessageDeletedDetails to JSON.
                 * @function toJSON
                 * @memberof youtube.api.v3.LiveChatMessageDeletedDetails
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                LiveChatMessageDeletedDetails.prototype.toJSON = function() {
                    return LiveChatMessageDeletedDetails.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for LiveChatMessageDeletedDetails
                 * @function getTypeUrl
                 * @memberof youtube.api.v3.LiveChatMessageDeletedDetails
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                LiveChatMessageDeletedDetails.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/youtube.api.v3.LiveChatMessageDeletedDetails";
                };

                return LiveChatMessageDeletedDetails;
            })();

            v3.LiveChatMessageRetractedDetails = (function() {

                /**
                 * Properties of a LiveChatMessageRetractedDetails.
                 * @typedef {Object} youtube.api.v3.LiveChatMessageRetractedDetails.$Properties
                 * @property {string|null} [retractedMessageId] LiveChatMessageRetractedDetails retractedMessageId
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a LiveChatMessageRetractedDetails.
                 * @memberof youtube.api.v3
                 * @interface ILiveChatMessageRetractedDetails
                 * @augments youtube.api.v3.LiveChatMessageRetractedDetails.$Properties
                 * @deprecated Use youtube.api.v3.LiveChatMessageRetractedDetails.$Properties instead.
                 */

                /**
                 * Shape of a LiveChatMessageRetractedDetails.
                 * @typedef {youtube.api.v3.LiveChatMessageRetractedDetails.$Properties} youtube.api.v3.LiveChatMessageRetractedDetails.$Shape
                 */

                /**
                 * Constructs a new LiveChatMessageRetractedDetails.
                 * @memberof youtube.api.v3
                 * @classdesc Represents a LiveChatMessageRetractedDetails.
                 * @constructor
                 * @param {youtube.api.v3.LiveChatMessageRetractedDetails.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                const LiveChatMessageRetractedDetails = function LiveChatMessageRetractedDetails(properties) {
                    if (properties)
                        for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * LiveChatMessageRetractedDetails retractedMessageId.
                 * @member {string} retractedMessageId
                 * @memberof youtube.api.v3.LiveChatMessageRetractedDetails
                 * @instance
                 */
                LiveChatMessageRetractedDetails.prototype.retractedMessageId = "";

                /**
                 * Creates a new LiveChatMessageRetractedDetails instance using the specified properties.
                 * @function create
                 * @memberof youtube.api.v3.LiveChatMessageRetractedDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatMessageRetractedDetails.$Properties=} [properties] Properties to set
                 * @returns {youtube.api.v3.LiveChatMessageRetractedDetails} LiveChatMessageRetractedDetails instance
                 * @type {{
                 *   (properties: youtube.api.v3.LiveChatMessageRetractedDetails.$Shape): youtube.api.v3.LiveChatMessageRetractedDetails & youtube.api.v3.LiveChatMessageRetractedDetails.$Shape;
                 *   (properties?: youtube.api.v3.LiveChatMessageRetractedDetails.$Properties): youtube.api.v3.LiveChatMessageRetractedDetails;
                 * }}
                 */
                LiveChatMessageRetractedDetails.create = function(properties) {
                    return new LiveChatMessageRetractedDetails(properties);
                };

                /**
                 * Encodes the specified LiveChatMessageRetractedDetails message. Does not implicitly {@link youtube.api.v3.LiveChatMessageRetractedDetails.verify|verify} messages.
                 * @function encode
                 * @memberof youtube.api.v3.LiveChatMessageRetractedDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatMessageRetractedDetails.$Properties} message LiveChatMessageRetractedDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatMessageRetractedDetails.encode = function LiveChatMessageRetractedDetails$encode(message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.retractedMessageId != null && $Object.hasOwnProperty.call(message, "retractedMessageId"))
                        writer.uint32(/* id 201, wireType 2 =*/1610).string(message.retractedMessageId);
                    return writer;
                };

                /**
                 * Encodes the specified LiveChatMessageRetractedDetails message, length delimited. Does not implicitly {@link youtube.api.v3.LiveChatMessageRetractedDetails.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof youtube.api.v3.LiveChatMessageRetractedDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatMessageRetractedDetails.$Properties} message LiveChatMessageRetractedDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatMessageRetractedDetails.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a LiveChatMessageRetractedDetails message from the specified reader or buffer.
                 * @function decode
                 * @memberof youtube.api.v3.LiveChatMessageRetractedDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {youtube.api.v3.LiveChatMessageRetractedDetails & youtube.api.v3.LiveChatMessageRetractedDetails.$Shape} LiveChatMessageRetractedDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatMessageRetractedDetails.decode = function LiveChatMessageRetractedDetails$decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === $undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let end = length === $undefined ? reader.len : reader.pos + length, message = new this.ctor();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 201: {
                                message.retractedMessageId = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a LiveChatMessageRetractedDetails message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof youtube.api.v3.LiveChatMessageRetractedDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {youtube.api.v3.LiveChatMessageRetractedDetails & youtube.api.v3.LiveChatMessageRetractedDetails.$Shape} LiveChatMessageRetractedDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatMessageRetractedDetails.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a LiveChatMessageRetractedDetails message.
                 * @function verify
                 * @memberof youtube.api.v3.LiveChatMessageRetractedDetails
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LiveChatMessageRetractedDetails.verify = function LiveChatMessageRetractedDetails$verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.retractedMessageId != null && $Object.hasOwnProperty.call(message, "retractedMessageId"))
                        if (!$util.isString(message.retractedMessageId))
                            return "retractedMessageId: string expected";
                    return null;
                };

                /**
                 * Creates a LiveChatMessageRetractedDetails message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof youtube.api.v3.LiveChatMessageRetractedDetails
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {youtube.api.v3.LiveChatMessageRetractedDetails} LiveChatMessageRetractedDetails
                 */
                LiveChatMessageRetractedDetails.fromObject = function LiveChatMessageRetractedDetails$fromObject(object, long) {
                    if (object instanceof this.ctor)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".youtube.api.v3.LiveChatMessageRetractedDetails: object expected");
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let message = new this.ctor();
                    if (object.retractedMessageId != null)
                        message.retractedMessageId = $String(object.retractedMessageId);
                    return message;
                };

                /**
                 * Creates a plain object from a LiveChatMessageRetractedDetails message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof youtube.api.v3.LiveChatMessageRetractedDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatMessageRetractedDetails} message LiveChatMessageRetractedDetails
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LiveChatMessageRetractedDetails.toObject = function LiveChatMessageRetractedDetails$toObject(message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    let object = {};
                    if (options.defaults)
                        object.retractedMessageId = "";
                    if (message.retractedMessageId != null && $Object.hasOwnProperty.call(message, "retractedMessageId"))
                        object.retractedMessageId = message.retractedMessageId;
                    return object;
                };

                /**
                 * Converts this LiveChatMessageRetractedDetails to JSON.
                 * @function toJSON
                 * @memberof youtube.api.v3.LiveChatMessageRetractedDetails
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                LiveChatMessageRetractedDetails.prototype.toJSON = function() {
                    return LiveChatMessageRetractedDetails.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for LiveChatMessageRetractedDetails
                 * @function getTypeUrl
                 * @memberof youtube.api.v3.LiveChatMessageRetractedDetails
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                LiveChatMessageRetractedDetails.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/youtube.api.v3.LiveChatMessageRetractedDetails";
                };

                return LiveChatMessageRetractedDetails;
            })();

            v3.LiveChatUserBannedMessageDetails = (function() {

                /**
                 * Properties of a LiveChatUserBannedMessageDetails.
                 * @typedef {Object} youtube.api.v3.LiveChatUserBannedMessageDetails.$Properties
                 * @property {youtube.api.v3.ChannelProfileDetails.$Properties|null} [bannedUserDetails] LiveChatUserBannedMessageDetails bannedUserDetails
                 * @property {youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper.BanType|null} [banType] LiveChatUserBannedMessageDetails banType
                 * @property {number|Long|null} [banDurationSeconds] LiveChatUserBannedMessageDetails banDurationSeconds
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a LiveChatUserBannedMessageDetails.
                 * @memberof youtube.api.v3
                 * @interface ILiveChatUserBannedMessageDetails
                 * @augments youtube.api.v3.LiveChatUserBannedMessageDetails.$Properties
                 * @deprecated Use youtube.api.v3.LiveChatUserBannedMessageDetails.$Properties instead.
                 */

                /**
                 * Shape of a LiveChatUserBannedMessageDetails.
                 * @typedef {youtube.api.v3.LiveChatUserBannedMessageDetails.$Properties} youtube.api.v3.LiveChatUserBannedMessageDetails.$Shape
                 */

                /**
                 * Constructs a new LiveChatUserBannedMessageDetails.
                 * @memberof youtube.api.v3
                 * @classdesc Represents a LiveChatUserBannedMessageDetails.
                 * @constructor
                 * @param {youtube.api.v3.LiveChatUserBannedMessageDetails.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                const LiveChatUserBannedMessageDetails = function LiveChatUserBannedMessageDetails(properties) {
                    if (properties)
                        for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * LiveChatUserBannedMessageDetails bannedUserDetails.
                 * @member {youtube.api.v3.ChannelProfileDetails.$Properties|null|undefined} bannedUserDetails
                 * @memberof youtube.api.v3.LiveChatUserBannedMessageDetails
                 * @instance
                 */
                LiveChatUserBannedMessageDetails.prototype.bannedUserDetails = null;

                /**
                 * LiveChatUserBannedMessageDetails banType.
                 * @member {youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper.BanType} banType
                 * @memberof youtube.api.v3.LiveChatUserBannedMessageDetails
                 * @instance
                 */
                LiveChatUserBannedMessageDetails.prototype.banType = 1;

                /**
                 * LiveChatUserBannedMessageDetails banDurationSeconds.
                 * @member {number|Long} banDurationSeconds
                 * @memberof youtube.api.v3.LiveChatUserBannedMessageDetails
                 * @instance
                 */
                LiveChatUserBannedMessageDetails.prototype.banDurationSeconds = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * Creates a new LiveChatUserBannedMessageDetails instance using the specified properties.
                 * @function create
                 * @memberof youtube.api.v3.LiveChatUserBannedMessageDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatUserBannedMessageDetails.$Properties=} [properties] Properties to set
                 * @returns {youtube.api.v3.LiveChatUserBannedMessageDetails} LiveChatUserBannedMessageDetails instance
                 * @type {{
                 *   (properties: youtube.api.v3.LiveChatUserBannedMessageDetails.$Shape): youtube.api.v3.LiveChatUserBannedMessageDetails & youtube.api.v3.LiveChatUserBannedMessageDetails.$Shape;
                 *   (properties?: youtube.api.v3.LiveChatUserBannedMessageDetails.$Properties): youtube.api.v3.LiveChatUserBannedMessageDetails;
                 * }}
                 */
                LiveChatUserBannedMessageDetails.create = function(properties) {
                    return new LiveChatUserBannedMessageDetails(properties);
                };

                /**
                 * Encodes the specified LiveChatUserBannedMessageDetails message. Does not implicitly {@link youtube.api.v3.LiveChatUserBannedMessageDetails.verify|verify} messages.
                 * @function encode
                 * @memberof youtube.api.v3.LiveChatUserBannedMessageDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatUserBannedMessageDetails.$Properties} message LiveChatUserBannedMessageDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatUserBannedMessageDetails.encode = function LiveChatUserBannedMessageDetails$encode(message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.bannedUserDetails != null && $Object.hasOwnProperty.call(message, "bannedUserDetails"))
                        $root.youtube.api.v3.ChannelProfileDetails.encode(message.bannedUserDetails, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                    if (message.banType != null && $Object.hasOwnProperty.call(message, "banType"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.banType);
                    if (message.banDurationSeconds != null && $Object.hasOwnProperty.call(message, "banDurationSeconds"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.banDurationSeconds);
                    return writer;
                };

                /**
                 * Encodes the specified LiveChatUserBannedMessageDetails message, length delimited. Does not implicitly {@link youtube.api.v3.LiveChatUserBannedMessageDetails.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof youtube.api.v3.LiveChatUserBannedMessageDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatUserBannedMessageDetails.$Properties} message LiveChatUserBannedMessageDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatUserBannedMessageDetails.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a LiveChatUserBannedMessageDetails message from the specified reader or buffer.
                 * @function decode
                 * @memberof youtube.api.v3.LiveChatUserBannedMessageDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {youtube.api.v3.LiveChatUserBannedMessageDetails & youtube.api.v3.LiveChatUserBannedMessageDetails.$Shape} LiveChatUserBannedMessageDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatUserBannedMessageDetails.decode = function LiveChatUserBannedMessageDetails$decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === $undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let end = length === $undefined ? reader.len : reader.pos + length, message = new this.ctor();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.bannedUserDetails = $root.youtube.api.v3.ChannelProfileDetails.decode(reader, reader.uint32(), $undefined, long + 1);
                                break;
                            }
                        case 2: {
                                message.banType = reader.int32();
                                break;
                            }
                        case 4: {
                                message.banDurationSeconds = reader.uint64();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a LiveChatUserBannedMessageDetails message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof youtube.api.v3.LiveChatUserBannedMessageDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {youtube.api.v3.LiveChatUserBannedMessageDetails & youtube.api.v3.LiveChatUserBannedMessageDetails.$Shape} LiveChatUserBannedMessageDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatUserBannedMessageDetails.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a LiveChatUserBannedMessageDetails message.
                 * @function verify
                 * @memberof youtube.api.v3.LiveChatUserBannedMessageDetails
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LiveChatUserBannedMessageDetails.verify = function LiveChatUserBannedMessageDetails$verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.bannedUserDetails != null && $Object.hasOwnProperty.call(message, "bannedUserDetails")) {
                        let error = $root.youtube.api.v3.ChannelProfileDetails.verify(message.bannedUserDetails, long + 1);
                        if (error)
                            return "bannedUserDetails." + error;
                    }
                    if (message.banType != null && $Object.hasOwnProperty.call(message, "banType"))
                        switch (message.banType) {
                        default:
                            return "banType: enum value expected";
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.banDurationSeconds != null && $Object.hasOwnProperty.call(message, "banDurationSeconds"))
                        if (!$util.isInteger(message.banDurationSeconds) && !(message.banDurationSeconds && $util.isInteger(message.banDurationSeconds.low) && $util.isInteger(message.banDurationSeconds.high)))
                            return "banDurationSeconds: integer|Long expected";
                    return null;
                };

                /**
                 * Creates a LiveChatUserBannedMessageDetails message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof youtube.api.v3.LiveChatUserBannedMessageDetails
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {youtube.api.v3.LiveChatUserBannedMessageDetails} LiveChatUserBannedMessageDetails
                 */
                LiveChatUserBannedMessageDetails.fromObject = function LiveChatUserBannedMessageDetails$fromObject(object, long) {
                    if (object instanceof this.ctor)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".youtube.api.v3.LiveChatUserBannedMessageDetails: object expected");
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let message = new this.ctor();
                    if (object.bannedUserDetails != null) {
                        if (!$util.isObject(object.bannedUserDetails))
                            throw $TypeError(".youtube.api.v3.LiveChatUserBannedMessageDetails.bannedUserDetails: object expected");
                        message.bannedUserDetails = $root.youtube.api.v3.ChannelProfileDetails.fromObject(object.bannedUserDetails, long + 1);
                    }
                    switch (object.banType) {
                    default:
                        if (typeof object.banType === "number") {
                            message.banType = object.banType;
                            break;
                        }
                        break;
                    case "PERMANENT":
                    case 1:
                        message.banType = 1;
                        break;
                    case "TEMPORARY":
                    case 2:
                        message.banType = 2;
                        break;
                    }
                    if (object.banDurationSeconds != null)
                        if ($util.Long)
                            message.banDurationSeconds = $util.Long.fromValue(object.banDurationSeconds, true);
                        else if (typeof object.banDurationSeconds === "string")
                            message.banDurationSeconds = $parseInt(object.banDurationSeconds, 10);
                        else if (typeof object.banDurationSeconds === "number")
                            message.banDurationSeconds = object.banDurationSeconds;
                        else if (typeof object.banDurationSeconds === "object")
                            message.banDurationSeconds = new $util.LongBits(object.banDurationSeconds.low >>> 0, object.banDurationSeconds.high >>> 0).toNumber(true);
                    return message;
                };

                /**
                 * Creates a plain object from a LiveChatUserBannedMessageDetails message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof youtube.api.v3.LiveChatUserBannedMessageDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatUserBannedMessageDetails} message LiveChatUserBannedMessageDetails
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LiveChatUserBannedMessageDetails.toObject = function LiveChatUserBannedMessageDetails$toObject(message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    let object = {};
                    if (options.defaults) {
                        object.bannedUserDetails = null;
                        object.banType = options.enums === $String ? "PERMANENT" : 1;
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, true);
                            object.banDurationSeconds = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                        } else
                            object.banDurationSeconds = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    }
                    if (message.bannedUserDetails != null && $Object.hasOwnProperty.call(message, "bannedUserDetails"))
                        object.bannedUserDetails = $root.youtube.api.v3.ChannelProfileDetails.toObject(message.bannedUserDetails, options, _depth + 1);
                    if (message.banType != null && $Object.hasOwnProperty.call(message, "banType"))
                        object.banType = options.enums === $String ? $root.youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper.BanType[message.banType] === $undefined ? message.banType : $root.youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper.BanType[message.banType] : message.banType;
                    if (message.banDurationSeconds != null && $Object.hasOwnProperty.call(message, "banDurationSeconds"))
                        if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                            object.banDurationSeconds = typeof message.banDurationSeconds === "number" ? $BigInt(message.banDurationSeconds) : $util.Long.fromBits(message.banDurationSeconds.low >>> 0, message.banDurationSeconds.high >>> 0, true).toBigInt();
                        else if (typeof message.banDurationSeconds === "number")
                            object.banDurationSeconds = options.longs === $String ? $String(message.banDurationSeconds) : message.banDurationSeconds;
                        else
                            object.banDurationSeconds = options.longs === $String ? $util.Long.prototype.toString.call(message.banDurationSeconds) : options.longs === $Number ? new $util.LongBits(message.banDurationSeconds.low >>> 0, message.banDurationSeconds.high >>> 0).toNumber(true) : message.banDurationSeconds;
                    return object;
                };

                /**
                 * Converts this LiveChatUserBannedMessageDetails to JSON.
                 * @function toJSON
                 * @memberof youtube.api.v3.LiveChatUserBannedMessageDetails
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                LiveChatUserBannedMessageDetails.prototype.toJSON = function() {
                    return LiveChatUserBannedMessageDetails.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for LiveChatUserBannedMessageDetails
                 * @function getTypeUrl
                 * @memberof youtube.api.v3.LiveChatUserBannedMessageDetails
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                LiveChatUserBannedMessageDetails.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/youtube.api.v3.LiveChatUserBannedMessageDetails";
                };

                LiveChatUserBannedMessageDetails.BanTypeWrapper = (function() {

                    /**
                     * Properties of a BanTypeWrapper.
                     * @typedef {Object} youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper.$Properties
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a BanTypeWrapper.
                     * @memberof youtube.api.v3.LiveChatUserBannedMessageDetails
                     * @interface IBanTypeWrapper
                     * @augments youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper.$Properties
                     * @deprecated Use youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper.$Properties instead.
                     */

                    /**
                     * Shape of a BanTypeWrapper.
                     * @typedef {youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper.$Properties} youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper.$Shape
                     */

                    /**
                     * Constructs a new BanTypeWrapper.
                     * @memberof youtube.api.v3.LiveChatUserBannedMessageDetails
                     * @classdesc Represents a BanTypeWrapper.
                     * @constructor
                     * @param {youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const BanTypeWrapper = function BanTypeWrapper(properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * Creates a new BanTypeWrapper instance using the specified properties.
                     * @function create
                     * @memberof youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper
                     * @static
                     * @param {youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper.$Properties=} [properties] Properties to set
                     * @returns {youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper} BanTypeWrapper instance
                     * @type {{
                     *   (properties: youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper.$Shape): youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper & youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper.$Shape;
                     *   (properties?: youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper.$Properties): youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper;
                     * }}
                     */
                    BanTypeWrapper.create = function(properties) {
                        return new BanTypeWrapper(properties);
                    };

                    /**
                     * Encodes the specified BanTypeWrapper message. Does not implicitly {@link youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper.verify|verify} messages.
                     * @function encode
                     * @memberof youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper
                     * @static
                     * @param {youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper.$Properties} message BanTypeWrapper message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BanTypeWrapper.encode = function BanTypeWrapper$encode(message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        return writer;
                    };

                    /**
                     * Encodes the specified BanTypeWrapper message, length delimited. Does not implicitly {@link youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper
                     * @static
                     * @param {youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper.$Properties} message BanTypeWrapper message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BanTypeWrapper.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a BanTypeWrapper message from the specified reader or buffer.
                     * @function decode
                     * @memberof youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper & youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper.$Shape} BanTypeWrapper
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BanTypeWrapper.decode = function BanTypeWrapper$decode(reader, length, error, long) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (long === $undefined)
                            long = 0;
                        if (long > $Reader.recursionLimit)
                            throw $Error("maximum nesting depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = new this.ctor();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7, long);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a BanTypeWrapper message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper & youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper.$Shape} BanTypeWrapper
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BanTypeWrapper.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a BanTypeWrapper message.
                     * @function verify
                     * @memberof youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    BanTypeWrapper.verify = function BanTypeWrapper$verify(message, long) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (long === $undefined)
                            long = 0;
                        if (long > $util.recursionLimit)
                            return "maximum nesting depth exceeded";
                        return null;
                    };

                    /**
                     * Creates a BanTypeWrapper message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper} BanTypeWrapper
                     */
                    BanTypeWrapper.fromObject = function BanTypeWrapper$fromObject(object, long) {
                        if (object instanceof this.ctor)
                            return object;
                        return new this.ctor();
                    };

                    /**
                     * Creates a plain object from a BanTypeWrapper message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper
                     * @static
                     * @param {youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper} message BanTypeWrapper
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    BanTypeWrapper.toObject = function () {
                        return {};
                    };

                    /**
                     * Converts this BanTypeWrapper to JSON.
                     * @function toJSON
                     * @memberof youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    BanTypeWrapper.prototype.toJSON = function() {
                        return BanTypeWrapper.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for BanTypeWrapper
                     * @function getTypeUrl
                     * @memberof youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    BanTypeWrapper.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper";
                    };

                    /**
                     * BanType enum.
                     * @name youtube.api.v3.LiveChatUserBannedMessageDetails.BanTypeWrapper.BanType
                     * @enum {number}
                     * @property {number} PERMANENT=1 PERMANENT value
                     * @property {number} TEMPORARY=2 TEMPORARY value
                     */
                    BanTypeWrapper.BanType = (function() {
                        const valuesById = $Object.create(null), values = $Object.create(valuesById);
                        values[valuesById[1] = "PERMANENT"] = 1;
                        values[valuesById[2] = "TEMPORARY"] = 2;
                        return values;
                    })();

                    return BanTypeWrapper;
                })();

                return LiveChatUserBannedMessageDetails;
            })();

            v3.LiveChatSuperChatDetails = (function() {

                /**
                 * Properties of a LiveChatSuperChatDetails.
                 * @typedef {Object} youtube.api.v3.LiveChatSuperChatDetails.$Properties
                 * @property {number|Long|null} [amountMicros] LiveChatSuperChatDetails amountMicros
                 * @property {string|null} [currency] LiveChatSuperChatDetails currency
                 * @property {string|null} [amountDisplayString] LiveChatSuperChatDetails amountDisplayString
                 * @property {string|null} [userComment] LiveChatSuperChatDetails userComment
                 * @property {number|null} [tier] LiveChatSuperChatDetails tier
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a LiveChatSuperChatDetails.
                 * @memberof youtube.api.v3
                 * @interface ILiveChatSuperChatDetails
                 * @augments youtube.api.v3.LiveChatSuperChatDetails.$Properties
                 * @deprecated Use youtube.api.v3.LiveChatSuperChatDetails.$Properties instead.
                 */

                /**
                 * Shape of a LiveChatSuperChatDetails.
                 * @typedef {youtube.api.v3.LiveChatSuperChatDetails.$Properties} youtube.api.v3.LiveChatSuperChatDetails.$Shape
                 */

                /**
                 * Constructs a new LiveChatSuperChatDetails.
                 * @memberof youtube.api.v3
                 * @classdesc Represents a LiveChatSuperChatDetails.
                 * @constructor
                 * @param {youtube.api.v3.LiveChatSuperChatDetails.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                const LiveChatSuperChatDetails = function LiveChatSuperChatDetails(properties) {
                    if (properties)
                        for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * LiveChatSuperChatDetails amountMicros.
                 * @member {number|Long} amountMicros
                 * @memberof youtube.api.v3.LiveChatSuperChatDetails
                 * @instance
                 */
                LiveChatSuperChatDetails.prototype.amountMicros = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * LiveChatSuperChatDetails currency.
                 * @member {string} currency
                 * @memberof youtube.api.v3.LiveChatSuperChatDetails
                 * @instance
                 */
                LiveChatSuperChatDetails.prototype.currency = "";

                /**
                 * LiveChatSuperChatDetails amountDisplayString.
                 * @member {string} amountDisplayString
                 * @memberof youtube.api.v3.LiveChatSuperChatDetails
                 * @instance
                 */
                LiveChatSuperChatDetails.prototype.amountDisplayString = "";

                /**
                 * LiveChatSuperChatDetails userComment.
                 * @member {string} userComment
                 * @memberof youtube.api.v3.LiveChatSuperChatDetails
                 * @instance
                 */
                LiveChatSuperChatDetails.prototype.userComment = "";

                /**
                 * LiveChatSuperChatDetails tier.
                 * @member {number} tier
                 * @memberof youtube.api.v3.LiveChatSuperChatDetails
                 * @instance
                 */
                LiveChatSuperChatDetails.prototype.tier = 0;

                /**
                 * Creates a new LiveChatSuperChatDetails instance using the specified properties.
                 * @function create
                 * @memberof youtube.api.v3.LiveChatSuperChatDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatSuperChatDetails.$Properties=} [properties] Properties to set
                 * @returns {youtube.api.v3.LiveChatSuperChatDetails} LiveChatSuperChatDetails instance
                 * @type {{
                 *   (properties: youtube.api.v3.LiveChatSuperChatDetails.$Shape): youtube.api.v3.LiveChatSuperChatDetails & youtube.api.v3.LiveChatSuperChatDetails.$Shape;
                 *   (properties?: youtube.api.v3.LiveChatSuperChatDetails.$Properties): youtube.api.v3.LiveChatSuperChatDetails;
                 * }}
                 */
                LiveChatSuperChatDetails.create = function(properties) {
                    return new LiveChatSuperChatDetails(properties);
                };

                /**
                 * Encodes the specified LiveChatSuperChatDetails message. Does not implicitly {@link youtube.api.v3.LiveChatSuperChatDetails.verify|verify} messages.
                 * @function encode
                 * @memberof youtube.api.v3.LiveChatSuperChatDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatSuperChatDetails.$Properties} message LiveChatSuperChatDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatSuperChatDetails.encode = function LiveChatSuperChatDetails$encode(message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.amountMicros != null && $Object.hasOwnProperty.call(message, "amountMicros"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.amountMicros);
                    if (message.currency != null && $Object.hasOwnProperty.call(message, "currency"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.currency);
                    if (message.amountDisplayString != null && $Object.hasOwnProperty.call(message, "amountDisplayString"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.amountDisplayString);
                    if (message.userComment != null && $Object.hasOwnProperty.call(message, "userComment"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.userComment);
                    if (message.tier != null && $Object.hasOwnProperty.call(message, "tier"))
                        writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.tier);
                    return writer;
                };

                /**
                 * Encodes the specified LiveChatSuperChatDetails message, length delimited. Does not implicitly {@link youtube.api.v3.LiveChatSuperChatDetails.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof youtube.api.v3.LiveChatSuperChatDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatSuperChatDetails.$Properties} message LiveChatSuperChatDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatSuperChatDetails.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a LiveChatSuperChatDetails message from the specified reader or buffer.
                 * @function decode
                 * @memberof youtube.api.v3.LiveChatSuperChatDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {youtube.api.v3.LiveChatSuperChatDetails & youtube.api.v3.LiveChatSuperChatDetails.$Shape} LiveChatSuperChatDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatSuperChatDetails.decode = function LiveChatSuperChatDetails$decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === $undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let end = length === $undefined ? reader.len : reader.pos + length, message = new this.ctor();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.amountMicros = reader.uint64();
                                break;
                            }
                        case 2: {
                                message.currency = reader.string();
                                break;
                            }
                        case 3: {
                                message.amountDisplayString = reader.string();
                                break;
                            }
                        case 4: {
                                message.userComment = reader.string();
                                break;
                            }
                        case 5: {
                                message.tier = reader.uint32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a LiveChatSuperChatDetails message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof youtube.api.v3.LiveChatSuperChatDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {youtube.api.v3.LiveChatSuperChatDetails & youtube.api.v3.LiveChatSuperChatDetails.$Shape} LiveChatSuperChatDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatSuperChatDetails.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a LiveChatSuperChatDetails message.
                 * @function verify
                 * @memberof youtube.api.v3.LiveChatSuperChatDetails
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LiveChatSuperChatDetails.verify = function LiveChatSuperChatDetails$verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.amountMicros != null && $Object.hasOwnProperty.call(message, "amountMicros"))
                        if (!$util.isInteger(message.amountMicros) && !(message.amountMicros && $util.isInteger(message.amountMicros.low) && $util.isInteger(message.amountMicros.high)))
                            return "amountMicros: integer|Long expected";
                    if (message.currency != null && $Object.hasOwnProperty.call(message, "currency"))
                        if (!$util.isString(message.currency))
                            return "currency: string expected";
                    if (message.amountDisplayString != null && $Object.hasOwnProperty.call(message, "amountDisplayString"))
                        if (!$util.isString(message.amountDisplayString))
                            return "amountDisplayString: string expected";
                    if (message.userComment != null && $Object.hasOwnProperty.call(message, "userComment"))
                        if (!$util.isString(message.userComment))
                            return "userComment: string expected";
                    if (message.tier != null && $Object.hasOwnProperty.call(message, "tier"))
                        if (!$util.isInteger(message.tier))
                            return "tier: integer expected";
                    return null;
                };

                /**
                 * Creates a LiveChatSuperChatDetails message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof youtube.api.v3.LiveChatSuperChatDetails
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {youtube.api.v3.LiveChatSuperChatDetails} LiveChatSuperChatDetails
                 */
                LiveChatSuperChatDetails.fromObject = function LiveChatSuperChatDetails$fromObject(object, long) {
                    if (object instanceof this.ctor)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".youtube.api.v3.LiveChatSuperChatDetails: object expected");
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let message = new this.ctor();
                    if (object.amountMicros != null)
                        if ($util.Long)
                            message.amountMicros = $util.Long.fromValue(object.amountMicros, true);
                        else if (typeof object.amountMicros === "string")
                            message.amountMicros = $parseInt(object.amountMicros, 10);
                        else if (typeof object.amountMicros === "number")
                            message.amountMicros = object.amountMicros;
                        else if (typeof object.amountMicros === "object")
                            message.amountMicros = new $util.LongBits(object.amountMicros.low >>> 0, object.amountMicros.high >>> 0).toNumber(true);
                    if (object.currency != null)
                        message.currency = $String(object.currency);
                    if (object.amountDisplayString != null)
                        message.amountDisplayString = $String(object.amountDisplayString);
                    if (object.userComment != null)
                        message.userComment = $String(object.userComment);
                    if (object.tier != null)
                        message.tier = object.tier >>> 0;
                    return message;
                };

                /**
                 * Creates a plain object from a LiveChatSuperChatDetails message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof youtube.api.v3.LiveChatSuperChatDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatSuperChatDetails} message LiveChatSuperChatDetails
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LiveChatSuperChatDetails.toObject = function LiveChatSuperChatDetails$toObject(message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    let object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, true);
                            object.amountMicros = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                        } else
                            object.amountMicros = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                        object.currency = "";
                        object.amountDisplayString = "";
                        object.userComment = "";
                        object.tier = 0;
                    }
                    if (message.amountMicros != null && $Object.hasOwnProperty.call(message, "amountMicros"))
                        if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                            object.amountMicros = typeof message.amountMicros === "number" ? $BigInt(message.amountMicros) : $util.Long.fromBits(message.amountMicros.low >>> 0, message.amountMicros.high >>> 0, true).toBigInt();
                        else if (typeof message.amountMicros === "number")
                            object.amountMicros = options.longs === $String ? $String(message.amountMicros) : message.amountMicros;
                        else
                            object.amountMicros = options.longs === $String ? $util.Long.prototype.toString.call(message.amountMicros) : options.longs === $Number ? new $util.LongBits(message.amountMicros.low >>> 0, message.amountMicros.high >>> 0).toNumber(true) : message.amountMicros;
                    if (message.currency != null && $Object.hasOwnProperty.call(message, "currency"))
                        object.currency = message.currency;
                    if (message.amountDisplayString != null && $Object.hasOwnProperty.call(message, "amountDisplayString"))
                        object.amountDisplayString = message.amountDisplayString;
                    if (message.userComment != null && $Object.hasOwnProperty.call(message, "userComment"))
                        object.userComment = message.userComment;
                    if (message.tier != null && $Object.hasOwnProperty.call(message, "tier"))
                        object.tier = message.tier;
                    return object;
                };

                /**
                 * Converts this LiveChatSuperChatDetails to JSON.
                 * @function toJSON
                 * @memberof youtube.api.v3.LiveChatSuperChatDetails
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                LiveChatSuperChatDetails.prototype.toJSON = function() {
                    return LiveChatSuperChatDetails.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for LiveChatSuperChatDetails
                 * @function getTypeUrl
                 * @memberof youtube.api.v3.LiveChatSuperChatDetails
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                LiveChatSuperChatDetails.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/youtube.api.v3.LiveChatSuperChatDetails";
                };

                return LiveChatSuperChatDetails;
            })();

            v3.LiveChatSuperStickerDetails = (function() {

                /**
                 * Properties of a LiveChatSuperStickerDetails.
                 * @typedef {Object} youtube.api.v3.LiveChatSuperStickerDetails.$Properties
                 * @property {number|Long|null} [amountMicros] LiveChatSuperStickerDetails amountMicros
                 * @property {string|null} [currency] LiveChatSuperStickerDetails currency
                 * @property {string|null} [amountDisplayString] LiveChatSuperStickerDetails amountDisplayString
                 * @property {number|null} [tier] LiveChatSuperStickerDetails tier
                 * @property {youtube.api.v3.SuperStickerMetadata.$Properties|null} [superStickerMetadata] LiveChatSuperStickerDetails superStickerMetadata
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a LiveChatSuperStickerDetails.
                 * @memberof youtube.api.v3
                 * @interface ILiveChatSuperStickerDetails
                 * @augments youtube.api.v3.LiveChatSuperStickerDetails.$Properties
                 * @deprecated Use youtube.api.v3.LiveChatSuperStickerDetails.$Properties instead.
                 */

                /**
                 * Shape of a LiveChatSuperStickerDetails.
                 * @typedef {youtube.api.v3.LiveChatSuperStickerDetails.$Properties} youtube.api.v3.LiveChatSuperStickerDetails.$Shape
                 */

                /**
                 * Constructs a new LiveChatSuperStickerDetails.
                 * @memberof youtube.api.v3
                 * @classdesc Represents a LiveChatSuperStickerDetails.
                 * @constructor
                 * @param {youtube.api.v3.LiveChatSuperStickerDetails.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                const LiveChatSuperStickerDetails = function LiveChatSuperStickerDetails(properties) {
                    if (properties)
                        for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * LiveChatSuperStickerDetails amountMicros.
                 * @member {number|Long} amountMicros
                 * @memberof youtube.api.v3.LiveChatSuperStickerDetails
                 * @instance
                 */
                LiveChatSuperStickerDetails.prototype.amountMicros = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * LiveChatSuperStickerDetails currency.
                 * @member {string} currency
                 * @memberof youtube.api.v3.LiveChatSuperStickerDetails
                 * @instance
                 */
                LiveChatSuperStickerDetails.prototype.currency = "";

                /**
                 * LiveChatSuperStickerDetails amountDisplayString.
                 * @member {string} amountDisplayString
                 * @memberof youtube.api.v3.LiveChatSuperStickerDetails
                 * @instance
                 */
                LiveChatSuperStickerDetails.prototype.amountDisplayString = "";

                /**
                 * LiveChatSuperStickerDetails tier.
                 * @member {number} tier
                 * @memberof youtube.api.v3.LiveChatSuperStickerDetails
                 * @instance
                 */
                LiveChatSuperStickerDetails.prototype.tier = 0;

                /**
                 * LiveChatSuperStickerDetails superStickerMetadata.
                 * @member {youtube.api.v3.SuperStickerMetadata.$Properties|null|undefined} superStickerMetadata
                 * @memberof youtube.api.v3.LiveChatSuperStickerDetails
                 * @instance
                 */
                LiveChatSuperStickerDetails.prototype.superStickerMetadata = null;

                /**
                 * Creates a new LiveChatSuperStickerDetails instance using the specified properties.
                 * @function create
                 * @memberof youtube.api.v3.LiveChatSuperStickerDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatSuperStickerDetails.$Properties=} [properties] Properties to set
                 * @returns {youtube.api.v3.LiveChatSuperStickerDetails} LiveChatSuperStickerDetails instance
                 * @type {{
                 *   (properties: youtube.api.v3.LiveChatSuperStickerDetails.$Shape): youtube.api.v3.LiveChatSuperStickerDetails & youtube.api.v3.LiveChatSuperStickerDetails.$Shape;
                 *   (properties?: youtube.api.v3.LiveChatSuperStickerDetails.$Properties): youtube.api.v3.LiveChatSuperStickerDetails;
                 * }}
                 */
                LiveChatSuperStickerDetails.create = function(properties) {
                    return new LiveChatSuperStickerDetails(properties);
                };

                /**
                 * Encodes the specified LiveChatSuperStickerDetails message. Does not implicitly {@link youtube.api.v3.LiveChatSuperStickerDetails.verify|verify} messages.
                 * @function encode
                 * @memberof youtube.api.v3.LiveChatSuperStickerDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatSuperStickerDetails.$Properties} message LiveChatSuperStickerDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatSuperStickerDetails.encode = function LiveChatSuperStickerDetails$encode(message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.amountMicros != null && $Object.hasOwnProperty.call(message, "amountMicros"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.amountMicros);
                    if (message.currency != null && $Object.hasOwnProperty.call(message, "currency"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.currency);
                    if (message.amountDisplayString != null && $Object.hasOwnProperty.call(message, "amountDisplayString"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.amountDisplayString);
                    if (message.tier != null && $Object.hasOwnProperty.call(message, "tier"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.tier);
                    if (message.superStickerMetadata != null && $Object.hasOwnProperty.call(message, "superStickerMetadata"))
                        $root.youtube.api.v3.SuperStickerMetadata.encode(message.superStickerMetadata, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified LiveChatSuperStickerDetails message, length delimited. Does not implicitly {@link youtube.api.v3.LiveChatSuperStickerDetails.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof youtube.api.v3.LiveChatSuperStickerDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatSuperStickerDetails.$Properties} message LiveChatSuperStickerDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatSuperStickerDetails.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a LiveChatSuperStickerDetails message from the specified reader or buffer.
                 * @function decode
                 * @memberof youtube.api.v3.LiveChatSuperStickerDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {youtube.api.v3.LiveChatSuperStickerDetails & youtube.api.v3.LiveChatSuperStickerDetails.$Shape} LiveChatSuperStickerDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatSuperStickerDetails.decode = function LiveChatSuperStickerDetails$decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === $undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let end = length === $undefined ? reader.len : reader.pos + length, message = new this.ctor();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.amountMicros = reader.uint64();
                                break;
                            }
                        case 2: {
                                message.currency = reader.string();
                                break;
                            }
                        case 3: {
                                message.amountDisplayString = reader.string();
                                break;
                            }
                        case 4: {
                                message.tier = reader.uint32();
                                break;
                            }
                        case 5: {
                                message.superStickerMetadata = $root.youtube.api.v3.SuperStickerMetadata.decode(reader, reader.uint32(), $undefined, long + 1);
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a LiveChatSuperStickerDetails message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof youtube.api.v3.LiveChatSuperStickerDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {youtube.api.v3.LiveChatSuperStickerDetails & youtube.api.v3.LiveChatSuperStickerDetails.$Shape} LiveChatSuperStickerDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatSuperStickerDetails.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a LiveChatSuperStickerDetails message.
                 * @function verify
                 * @memberof youtube.api.v3.LiveChatSuperStickerDetails
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LiveChatSuperStickerDetails.verify = function LiveChatSuperStickerDetails$verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.amountMicros != null && $Object.hasOwnProperty.call(message, "amountMicros"))
                        if (!$util.isInteger(message.amountMicros) && !(message.amountMicros && $util.isInteger(message.amountMicros.low) && $util.isInteger(message.amountMicros.high)))
                            return "amountMicros: integer|Long expected";
                    if (message.currency != null && $Object.hasOwnProperty.call(message, "currency"))
                        if (!$util.isString(message.currency))
                            return "currency: string expected";
                    if (message.amountDisplayString != null && $Object.hasOwnProperty.call(message, "amountDisplayString"))
                        if (!$util.isString(message.amountDisplayString))
                            return "amountDisplayString: string expected";
                    if (message.tier != null && $Object.hasOwnProperty.call(message, "tier"))
                        if (!$util.isInteger(message.tier))
                            return "tier: integer expected";
                    if (message.superStickerMetadata != null && $Object.hasOwnProperty.call(message, "superStickerMetadata")) {
                        let error = $root.youtube.api.v3.SuperStickerMetadata.verify(message.superStickerMetadata, long + 1);
                        if (error)
                            return "superStickerMetadata." + error;
                    }
                    return null;
                };

                /**
                 * Creates a LiveChatSuperStickerDetails message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof youtube.api.v3.LiveChatSuperStickerDetails
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {youtube.api.v3.LiveChatSuperStickerDetails} LiveChatSuperStickerDetails
                 */
                LiveChatSuperStickerDetails.fromObject = function LiveChatSuperStickerDetails$fromObject(object, long) {
                    if (object instanceof this.ctor)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".youtube.api.v3.LiveChatSuperStickerDetails: object expected");
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let message = new this.ctor();
                    if (object.amountMicros != null)
                        if ($util.Long)
                            message.amountMicros = $util.Long.fromValue(object.amountMicros, true);
                        else if (typeof object.amountMicros === "string")
                            message.amountMicros = $parseInt(object.amountMicros, 10);
                        else if (typeof object.amountMicros === "number")
                            message.amountMicros = object.amountMicros;
                        else if (typeof object.amountMicros === "object")
                            message.amountMicros = new $util.LongBits(object.amountMicros.low >>> 0, object.amountMicros.high >>> 0).toNumber(true);
                    if (object.currency != null)
                        message.currency = $String(object.currency);
                    if (object.amountDisplayString != null)
                        message.amountDisplayString = $String(object.amountDisplayString);
                    if (object.tier != null)
                        message.tier = object.tier >>> 0;
                    if (object.superStickerMetadata != null) {
                        if (!$util.isObject(object.superStickerMetadata))
                            throw $TypeError(".youtube.api.v3.LiveChatSuperStickerDetails.superStickerMetadata: object expected");
                        message.superStickerMetadata = $root.youtube.api.v3.SuperStickerMetadata.fromObject(object.superStickerMetadata, long + 1);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a LiveChatSuperStickerDetails message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof youtube.api.v3.LiveChatSuperStickerDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatSuperStickerDetails} message LiveChatSuperStickerDetails
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LiveChatSuperStickerDetails.toObject = function LiveChatSuperStickerDetails$toObject(message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    let object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, true);
                            object.amountMicros = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                        } else
                            object.amountMicros = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                        object.currency = "";
                        object.amountDisplayString = "";
                        object.tier = 0;
                        object.superStickerMetadata = null;
                    }
                    if (message.amountMicros != null && $Object.hasOwnProperty.call(message, "amountMicros"))
                        if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                            object.amountMicros = typeof message.amountMicros === "number" ? $BigInt(message.amountMicros) : $util.Long.fromBits(message.amountMicros.low >>> 0, message.amountMicros.high >>> 0, true).toBigInt();
                        else if (typeof message.amountMicros === "number")
                            object.amountMicros = options.longs === $String ? $String(message.amountMicros) : message.amountMicros;
                        else
                            object.amountMicros = options.longs === $String ? $util.Long.prototype.toString.call(message.amountMicros) : options.longs === $Number ? new $util.LongBits(message.amountMicros.low >>> 0, message.amountMicros.high >>> 0).toNumber(true) : message.amountMicros;
                    if (message.currency != null && $Object.hasOwnProperty.call(message, "currency"))
                        object.currency = message.currency;
                    if (message.amountDisplayString != null && $Object.hasOwnProperty.call(message, "amountDisplayString"))
                        object.amountDisplayString = message.amountDisplayString;
                    if (message.tier != null && $Object.hasOwnProperty.call(message, "tier"))
                        object.tier = message.tier;
                    if (message.superStickerMetadata != null && $Object.hasOwnProperty.call(message, "superStickerMetadata"))
                        object.superStickerMetadata = $root.youtube.api.v3.SuperStickerMetadata.toObject(message.superStickerMetadata, options, _depth + 1);
                    return object;
                };

                /**
                 * Converts this LiveChatSuperStickerDetails to JSON.
                 * @function toJSON
                 * @memberof youtube.api.v3.LiveChatSuperStickerDetails
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                LiveChatSuperStickerDetails.prototype.toJSON = function() {
                    return LiveChatSuperStickerDetails.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for LiveChatSuperStickerDetails
                 * @function getTypeUrl
                 * @memberof youtube.api.v3.LiveChatSuperStickerDetails
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                LiveChatSuperStickerDetails.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/youtube.api.v3.LiveChatSuperStickerDetails";
                };

                return LiveChatSuperStickerDetails;
            })();

            v3.LiveChatNewSponsorDetails = (function() {

                /**
                 * Properties of a LiveChatNewSponsorDetails.
                 * @typedef {Object} youtube.api.v3.LiveChatNewSponsorDetails.$Properties
                 * @property {string|null} [memberLevelName] LiveChatNewSponsorDetails memberLevelName
                 * @property {boolean|null} [isUpgrade] LiveChatNewSponsorDetails isUpgrade
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a LiveChatNewSponsorDetails.
                 * @memberof youtube.api.v3
                 * @interface ILiveChatNewSponsorDetails
                 * @augments youtube.api.v3.LiveChatNewSponsorDetails.$Properties
                 * @deprecated Use youtube.api.v3.LiveChatNewSponsorDetails.$Properties instead.
                 */

                /**
                 * Shape of a LiveChatNewSponsorDetails.
                 * @typedef {youtube.api.v3.LiveChatNewSponsorDetails.$Properties} youtube.api.v3.LiveChatNewSponsorDetails.$Shape
                 */

                /**
                 * Constructs a new LiveChatNewSponsorDetails.
                 * @memberof youtube.api.v3
                 * @classdesc Represents a LiveChatNewSponsorDetails.
                 * @constructor
                 * @param {youtube.api.v3.LiveChatNewSponsorDetails.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                const LiveChatNewSponsorDetails = function LiveChatNewSponsorDetails(properties) {
                    if (properties)
                        for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * LiveChatNewSponsorDetails memberLevelName.
                 * @member {string} memberLevelName
                 * @memberof youtube.api.v3.LiveChatNewSponsorDetails
                 * @instance
                 */
                LiveChatNewSponsorDetails.prototype.memberLevelName = "";

                /**
                 * LiveChatNewSponsorDetails isUpgrade.
                 * @member {boolean} isUpgrade
                 * @memberof youtube.api.v3.LiveChatNewSponsorDetails
                 * @instance
                 */
                LiveChatNewSponsorDetails.prototype.isUpgrade = false;

                /**
                 * Creates a new LiveChatNewSponsorDetails instance using the specified properties.
                 * @function create
                 * @memberof youtube.api.v3.LiveChatNewSponsorDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatNewSponsorDetails.$Properties=} [properties] Properties to set
                 * @returns {youtube.api.v3.LiveChatNewSponsorDetails} LiveChatNewSponsorDetails instance
                 * @type {{
                 *   (properties: youtube.api.v3.LiveChatNewSponsorDetails.$Shape): youtube.api.v3.LiveChatNewSponsorDetails & youtube.api.v3.LiveChatNewSponsorDetails.$Shape;
                 *   (properties?: youtube.api.v3.LiveChatNewSponsorDetails.$Properties): youtube.api.v3.LiveChatNewSponsorDetails;
                 * }}
                 */
                LiveChatNewSponsorDetails.create = function(properties) {
                    return new LiveChatNewSponsorDetails(properties);
                };

                /**
                 * Encodes the specified LiveChatNewSponsorDetails message. Does not implicitly {@link youtube.api.v3.LiveChatNewSponsorDetails.verify|verify} messages.
                 * @function encode
                 * @memberof youtube.api.v3.LiveChatNewSponsorDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatNewSponsorDetails.$Properties} message LiveChatNewSponsorDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatNewSponsorDetails.encode = function LiveChatNewSponsorDetails$encode(message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.memberLevelName != null && $Object.hasOwnProperty.call(message, "memberLevelName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.memberLevelName);
                    if (message.isUpgrade != null && $Object.hasOwnProperty.call(message, "isUpgrade"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isUpgrade);
                    return writer;
                };

                /**
                 * Encodes the specified LiveChatNewSponsorDetails message, length delimited. Does not implicitly {@link youtube.api.v3.LiveChatNewSponsorDetails.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof youtube.api.v3.LiveChatNewSponsorDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatNewSponsorDetails.$Properties} message LiveChatNewSponsorDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatNewSponsorDetails.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a LiveChatNewSponsorDetails message from the specified reader or buffer.
                 * @function decode
                 * @memberof youtube.api.v3.LiveChatNewSponsorDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {youtube.api.v3.LiveChatNewSponsorDetails & youtube.api.v3.LiveChatNewSponsorDetails.$Shape} LiveChatNewSponsorDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatNewSponsorDetails.decode = function LiveChatNewSponsorDetails$decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === $undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let end = length === $undefined ? reader.len : reader.pos + length, message = new this.ctor();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.memberLevelName = reader.string();
                                break;
                            }
                        case 2: {
                                message.isUpgrade = reader.bool();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a LiveChatNewSponsorDetails message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof youtube.api.v3.LiveChatNewSponsorDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {youtube.api.v3.LiveChatNewSponsorDetails & youtube.api.v3.LiveChatNewSponsorDetails.$Shape} LiveChatNewSponsorDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatNewSponsorDetails.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a LiveChatNewSponsorDetails message.
                 * @function verify
                 * @memberof youtube.api.v3.LiveChatNewSponsorDetails
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LiveChatNewSponsorDetails.verify = function LiveChatNewSponsorDetails$verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.memberLevelName != null && $Object.hasOwnProperty.call(message, "memberLevelName"))
                        if (!$util.isString(message.memberLevelName))
                            return "memberLevelName: string expected";
                    if (message.isUpgrade != null && $Object.hasOwnProperty.call(message, "isUpgrade"))
                        if (typeof message.isUpgrade !== "boolean")
                            return "isUpgrade: boolean expected";
                    return null;
                };

                /**
                 * Creates a LiveChatNewSponsorDetails message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof youtube.api.v3.LiveChatNewSponsorDetails
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {youtube.api.v3.LiveChatNewSponsorDetails} LiveChatNewSponsorDetails
                 */
                LiveChatNewSponsorDetails.fromObject = function LiveChatNewSponsorDetails$fromObject(object, long) {
                    if (object instanceof this.ctor)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".youtube.api.v3.LiveChatNewSponsorDetails: object expected");
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let message = new this.ctor();
                    if (object.memberLevelName != null)
                        message.memberLevelName = $String(object.memberLevelName);
                    if (object.isUpgrade != null)
                        message.isUpgrade = $Boolean(object.isUpgrade);
                    return message;
                };

                /**
                 * Creates a plain object from a LiveChatNewSponsorDetails message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof youtube.api.v3.LiveChatNewSponsorDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatNewSponsorDetails} message LiveChatNewSponsorDetails
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LiveChatNewSponsorDetails.toObject = function LiveChatNewSponsorDetails$toObject(message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    let object = {};
                    if (options.defaults) {
                        object.memberLevelName = "";
                        object.isUpgrade = false;
                    }
                    if (message.memberLevelName != null && $Object.hasOwnProperty.call(message, "memberLevelName"))
                        object.memberLevelName = message.memberLevelName;
                    if (message.isUpgrade != null && $Object.hasOwnProperty.call(message, "isUpgrade"))
                        object.isUpgrade = message.isUpgrade;
                    return object;
                };

                /**
                 * Converts this LiveChatNewSponsorDetails to JSON.
                 * @function toJSON
                 * @memberof youtube.api.v3.LiveChatNewSponsorDetails
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                LiveChatNewSponsorDetails.prototype.toJSON = function() {
                    return LiveChatNewSponsorDetails.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for LiveChatNewSponsorDetails
                 * @function getTypeUrl
                 * @memberof youtube.api.v3.LiveChatNewSponsorDetails
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                LiveChatNewSponsorDetails.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/youtube.api.v3.LiveChatNewSponsorDetails";
                };

                return LiveChatNewSponsorDetails;
            })();

            v3.LiveChatMemberMilestoneChatDetails = (function() {

                /**
                 * Properties of a LiveChatMemberMilestoneChatDetails.
                 * @typedef {Object} youtube.api.v3.LiveChatMemberMilestoneChatDetails.$Properties
                 * @property {string|null} [memberLevelName] LiveChatMemberMilestoneChatDetails memberLevelName
                 * @property {number|null} [memberMonth] LiveChatMemberMilestoneChatDetails memberMonth
                 * @property {string|null} [userComment] LiveChatMemberMilestoneChatDetails userComment
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a LiveChatMemberMilestoneChatDetails.
                 * @memberof youtube.api.v3
                 * @interface ILiveChatMemberMilestoneChatDetails
                 * @augments youtube.api.v3.LiveChatMemberMilestoneChatDetails.$Properties
                 * @deprecated Use youtube.api.v3.LiveChatMemberMilestoneChatDetails.$Properties instead.
                 */

                /**
                 * Shape of a LiveChatMemberMilestoneChatDetails.
                 * @typedef {youtube.api.v3.LiveChatMemberMilestoneChatDetails.$Properties} youtube.api.v3.LiveChatMemberMilestoneChatDetails.$Shape
                 */

                /**
                 * Constructs a new LiveChatMemberMilestoneChatDetails.
                 * @memberof youtube.api.v3
                 * @classdesc Represents a LiveChatMemberMilestoneChatDetails.
                 * @constructor
                 * @param {youtube.api.v3.LiveChatMemberMilestoneChatDetails.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                const LiveChatMemberMilestoneChatDetails = function LiveChatMemberMilestoneChatDetails(properties) {
                    if (properties)
                        for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * LiveChatMemberMilestoneChatDetails memberLevelName.
                 * @member {string} memberLevelName
                 * @memberof youtube.api.v3.LiveChatMemberMilestoneChatDetails
                 * @instance
                 */
                LiveChatMemberMilestoneChatDetails.prototype.memberLevelName = "";

                /**
                 * LiveChatMemberMilestoneChatDetails memberMonth.
                 * @member {number} memberMonth
                 * @memberof youtube.api.v3.LiveChatMemberMilestoneChatDetails
                 * @instance
                 */
                LiveChatMemberMilestoneChatDetails.prototype.memberMonth = 0;

                /**
                 * LiveChatMemberMilestoneChatDetails userComment.
                 * @member {string} userComment
                 * @memberof youtube.api.v3.LiveChatMemberMilestoneChatDetails
                 * @instance
                 */
                LiveChatMemberMilestoneChatDetails.prototype.userComment = "";

                /**
                 * Creates a new LiveChatMemberMilestoneChatDetails instance using the specified properties.
                 * @function create
                 * @memberof youtube.api.v3.LiveChatMemberMilestoneChatDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatMemberMilestoneChatDetails.$Properties=} [properties] Properties to set
                 * @returns {youtube.api.v3.LiveChatMemberMilestoneChatDetails} LiveChatMemberMilestoneChatDetails instance
                 * @type {{
                 *   (properties: youtube.api.v3.LiveChatMemberMilestoneChatDetails.$Shape): youtube.api.v3.LiveChatMemberMilestoneChatDetails & youtube.api.v3.LiveChatMemberMilestoneChatDetails.$Shape;
                 *   (properties?: youtube.api.v3.LiveChatMemberMilestoneChatDetails.$Properties): youtube.api.v3.LiveChatMemberMilestoneChatDetails;
                 * }}
                 */
                LiveChatMemberMilestoneChatDetails.create = function(properties) {
                    return new LiveChatMemberMilestoneChatDetails(properties);
                };

                /**
                 * Encodes the specified LiveChatMemberMilestoneChatDetails message. Does not implicitly {@link youtube.api.v3.LiveChatMemberMilestoneChatDetails.verify|verify} messages.
                 * @function encode
                 * @memberof youtube.api.v3.LiveChatMemberMilestoneChatDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatMemberMilestoneChatDetails.$Properties} message LiveChatMemberMilestoneChatDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatMemberMilestoneChatDetails.encode = function LiveChatMemberMilestoneChatDetails$encode(message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.memberLevelName != null && $Object.hasOwnProperty.call(message, "memberLevelName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.memberLevelName);
                    if (message.memberMonth != null && $Object.hasOwnProperty.call(message, "memberMonth"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.memberMonth);
                    if (message.userComment != null && $Object.hasOwnProperty.call(message, "userComment"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.userComment);
                    return writer;
                };

                /**
                 * Encodes the specified LiveChatMemberMilestoneChatDetails message, length delimited. Does not implicitly {@link youtube.api.v3.LiveChatMemberMilestoneChatDetails.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof youtube.api.v3.LiveChatMemberMilestoneChatDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatMemberMilestoneChatDetails.$Properties} message LiveChatMemberMilestoneChatDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatMemberMilestoneChatDetails.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a LiveChatMemberMilestoneChatDetails message from the specified reader or buffer.
                 * @function decode
                 * @memberof youtube.api.v3.LiveChatMemberMilestoneChatDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {youtube.api.v3.LiveChatMemberMilestoneChatDetails & youtube.api.v3.LiveChatMemberMilestoneChatDetails.$Shape} LiveChatMemberMilestoneChatDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatMemberMilestoneChatDetails.decode = function LiveChatMemberMilestoneChatDetails$decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === $undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let end = length === $undefined ? reader.len : reader.pos + length, message = new this.ctor();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.memberLevelName = reader.string();
                                break;
                            }
                        case 2: {
                                message.memberMonth = reader.uint32();
                                break;
                            }
                        case 3: {
                                message.userComment = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a LiveChatMemberMilestoneChatDetails message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof youtube.api.v3.LiveChatMemberMilestoneChatDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {youtube.api.v3.LiveChatMemberMilestoneChatDetails & youtube.api.v3.LiveChatMemberMilestoneChatDetails.$Shape} LiveChatMemberMilestoneChatDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatMemberMilestoneChatDetails.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a LiveChatMemberMilestoneChatDetails message.
                 * @function verify
                 * @memberof youtube.api.v3.LiveChatMemberMilestoneChatDetails
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LiveChatMemberMilestoneChatDetails.verify = function LiveChatMemberMilestoneChatDetails$verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.memberLevelName != null && $Object.hasOwnProperty.call(message, "memberLevelName"))
                        if (!$util.isString(message.memberLevelName))
                            return "memberLevelName: string expected";
                    if (message.memberMonth != null && $Object.hasOwnProperty.call(message, "memberMonth"))
                        if (!$util.isInteger(message.memberMonth))
                            return "memberMonth: integer expected";
                    if (message.userComment != null && $Object.hasOwnProperty.call(message, "userComment"))
                        if (!$util.isString(message.userComment))
                            return "userComment: string expected";
                    return null;
                };

                /**
                 * Creates a LiveChatMemberMilestoneChatDetails message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof youtube.api.v3.LiveChatMemberMilestoneChatDetails
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {youtube.api.v3.LiveChatMemberMilestoneChatDetails} LiveChatMemberMilestoneChatDetails
                 */
                LiveChatMemberMilestoneChatDetails.fromObject = function LiveChatMemberMilestoneChatDetails$fromObject(object, long) {
                    if (object instanceof this.ctor)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".youtube.api.v3.LiveChatMemberMilestoneChatDetails: object expected");
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let message = new this.ctor();
                    if (object.memberLevelName != null)
                        message.memberLevelName = $String(object.memberLevelName);
                    if (object.memberMonth != null)
                        message.memberMonth = object.memberMonth >>> 0;
                    if (object.userComment != null)
                        message.userComment = $String(object.userComment);
                    return message;
                };

                /**
                 * Creates a plain object from a LiveChatMemberMilestoneChatDetails message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof youtube.api.v3.LiveChatMemberMilestoneChatDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatMemberMilestoneChatDetails} message LiveChatMemberMilestoneChatDetails
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LiveChatMemberMilestoneChatDetails.toObject = function LiveChatMemberMilestoneChatDetails$toObject(message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    let object = {};
                    if (options.defaults) {
                        object.memberLevelName = "";
                        object.memberMonth = 0;
                        object.userComment = "";
                    }
                    if (message.memberLevelName != null && $Object.hasOwnProperty.call(message, "memberLevelName"))
                        object.memberLevelName = message.memberLevelName;
                    if (message.memberMonth != null && $Object.hasOwnProperty.call(message, "memberMonth"))
                        object.memberMonth = message.memberMonth;
                    if (message.userComment != null && $Object.hasOwnProperty.call(message, "userComment"))
                        object.userComment = message.userComment;
                    return object;
                };

                /**
                 * Converts this LiveChatMemberMilestoneChatDetails to JSON.
                 * @function toJSON
                 * @memberof youtube.api.v3.LiveChatMemberMilestoneChatDetails
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                LiveChatMemberMilestoneChatDetails.prototype.toJSON = function() {
                    return LiveChatMemberMilestoneChatDetails.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for LiveChatMemberMilestoneChatDetails
                 * @function getTypeUrl
                 * @memberof youtube.api.v3.LiveChatMemberMilestoneChatDetails
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                LiveChatMemberMilestoneChatDetails.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/youtube.api.v3.LiveChatMemberMilestoneChatDetails";
                };

                return LiveChatMemberMilestoneChatDetails;
            })();

            v3.LiveChatMembershipGiftingDetails = (function() {

                /**
                 * Properties of a LiveChatMembershipGiftingDetails.
                 * @typedef {Object} youtube.api.v3.LiveChatMembershipGiftingDetails.$Properties
                 * @property {number|null} [giftMembershipsCount] LiveChatMembershipGiftingDetails giftMembershipsCount
                 * @property {string|null} [giftMembershipsLevelName] LiveChatMembershipGiftingDetails giftMembershipsLevelName
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a LiveChatMembershipGiftingDetails.
                 * @memberof youtube.api.v3
                 * @interface ILiveChatMembershipGiftingDetails
                 * @augments youtube.api.v3.LiveChatMembershipGiftingDetails.$Properties
                 * @deprecated Use youtube.api.v3.LiveChatMembershipGiftingDetails.$Properties instead.
                 */

                /**
                 * Shape of a LiveChatMembershipGiftingDetails.
                 * @typedef {youtube.api.v3.LiveChatMembershipGiftingDetails.$Properties} youtube.api.v3.LiveChatMembershipGiftingDetails.$Shape
                 */

                /**
                 * Constructs a new LiveChatMembershipGiftingDetails.
                 * @memberof youtube.api.v3
                 * @classdesc Represents a LiveChatMembershipGiftingDetails.
                 * @constructor
                 * @param {youtube.api.v3.LiveChatMembershipGiftingDetails.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                const LiveChatMembershipGiftingDetails = function LiveChatMembershipGiftingDetails(properties) {
                    if (properties)
                        for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * LiveChatMembershipGiftingDetails giftMembershipsCount.
                 * @member {number} giftMembershipsCount
                 * @memberof youtube.api.v3.LiveChatMembershipGiftingDetails
                 * @instance
                 */
                LiveChatMembershipGiftingDetails.prototype.giftMembershipsCount = 0;

                /**
                 * LiveChatMembershipGiftingDetails giftMembershipsLevelName.
                 * @member {string} giftMembershipsLevelName
                 * @memberof youtube.api.v3.LiveChatMembershipGiftingDetails
                 * @instance
                 */
                LiveChatMembershipGiftingDetails.prototype.giftMembershipsLevelName = "";

                /**
                 * Creates a new LiveChatMembershipGiftingDetails instance using the specified properties.
                 * @function create
                 * @memberof youtube.api.v3.LiveChatMembershipGiftingDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatMembershipGiftingDetails.$Properties=} [properties] Properties to set
                 * @returns {youtube.api.v3.LiveChatMembershipGiftingDetails} LiveChatMembershipGiftingDetails instance
                 * @type {{
                 *   (properties: youtube.api.v3.LiveChatMembershipGiftingDetails.$Shape): youtube.api.v3.LiveChatMembershipGiftingDetails & youtube.api.v3.LiveChatMembershipGiftingDetails.$Shape;
                 *   (properties?: youtube.api.v3.LiveChatMembershipGiftingDetails.$Properties): youtube.api.v3.LiveChatMembershipGiftingDetails;
                 * }}
                 */
                LiveChatMembershipGiftingDetails.create = function(properties) {
                    return new LiveChatMembershipGiftingDetails(properties);
                };

                /**
                 * Encodes the specified LiveChatMembershipGiftingDetails message. Does not implicitly {@link youtube.api.v3.LiveChatMembershipGiftingDetails.verify|verify} messages.
                 * @function encode
                 * @memberof youtube.api.v3.LiveChatMembershipGiftingDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatMembershipGiftingDetails.$Properties} message LiveChatMembershipGiftingDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatMembershipGiftingDetails.encode = function LiveChatMembershipGiftingDetails$encode(message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.giftMembershipsCount != null && $Object.hasOwnProperty.call(message, "giftMembershipsCount"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.giftMembershipsCount);
                    if (message.giftMembershipsLevelName != null && $Object.hasOwnProperty.call(message, "giftMembershipsLevelName"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.giftMembershipsLevelName);
                    return writer;
                };

                /**
                 * Encodes the specified LiveChatMembershipGiftingDetails message, length delimited. Does not implicitly {@link youtube.api.v3.LiveChatMembershipGiftingDetails.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof youtube.api.v3.LiveChatMembershipGiftingDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatMembershipGiftingDetails.$Properties} message LiveChatMembershipGiftingDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatMembershipGiftingDetails.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a LiveChatMembershipGiftingDetails message from the specified reader or buffer.
                 * @function decode
                 * @memberof youtube.api.v3.LiveChatMembershipGiftingDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {youtube.api.v3.LiveChatMembershipGiftingDetails & youtube.api.v3.LiveChatMembershipGiftingDetails.$Shape} LiveChatMembershipGiftingDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatMembershipGiftingDetails.decode = function LiveChatMembershipGiftingDetails$decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === $undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let end = length === $undefined ? reader.len : reader.pos + length, message = new this.ctor();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.giftMembershipsCount = reader.int32();
                                break;
                            }
                        case 2: {
                                message.giftMembershipsLevelName = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a LiveChatMembershipGiftingDetails message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof youtube.api.v3.LiveChatMembershipGiftingDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {youtube.api.v3.LiveChatMembershipGiftingDetails & youtube.api.v3.LiveChatMembershipGiftingDetails.$Shape} LiveChatMembershipGiftingDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatMembershipGiftingDetails.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a LiveChatMembershipGiftingDetails message.
                 * @function verify
                 * @memberof youtube.api.v3.LiveChatMembershipGiftingDetails
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LiveChatMembershipGiftingDetails.verify = function LiveChatMembershipGiftingDetails$verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.giftMembershipsCount != null && $Object.hasOwnProperty.call(message, "giftMembershipsCount"))
                        if (!$util.isInteger(message.giftMembershipsCount))
                            return "giftMembershipsCount: integer expected";
                    if (message.giftMembershipsLevelName != null && $Object.hasOwnProperty.call(message, "giftMembershipsLevelName"))
                        if (!$util.isString(message.giftMembershipsLevelName))
                            return "giftMembershipsLevelName: string expected";
                    return null;
                };

                /**
                 * Creates a LiveChatMembershipGiftingDetails message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof youtube.api.v3.LiveChatMembershipGiftingDetails
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {youtube.api.v3.LiveChatMembershipGiftingDetails} LiveChatMembershipGiftingDetails
                 */
                LiveChatMembershipGiftingDetails.fromObject = function LiveChatMembershipGiftingDetails$fromObject(object, long) {
                    if (object instanceof this.ctor)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".youtube.api.v3.LiveChatMembershipGiftingDetails: object expected");
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let message = new this.ctor();
                    if (object.giftMembershipsCount != null)
                        message.giftMembershipsCount = object.giftMembershipsCount | 0;
                    if (object.giftMembershipsLevelName != null)
                        message.giftMembershipsLevelName = $String(object.giftMembershipsLevelName);
                    return message;
                };

                /**
                 * Creates a plain object from a LiveChatMembershipGiftingDetails message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof youtube.api.v3.LiveChatMembershipGiftingDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatMembershipGiftingDetails} message LiveChatMembershipGiftingDetails
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LiveChatMembershipGiftingDetails.toObject = function LiveChatMembershipGiftingDetails$toObject(message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    let object = {};
                    if (options.defaults) {
                        object.giftMembershipsCount = 0;
                        object.giftMembershipsLevelName = "";
                    }
                    if (message.giftMembershipsCount != null && $Object.hasOwnProperty.call(message, "giftMembershipsCount"))
                        object.giftMembershipsCount = message.giftMembershipsCount;
                    if (message.giftMembershipsLevelName != null && $Object.hasOwnProperty.call(message, "giftMembershipsLevelName"))
                        object.giftMembershipsLevelName = message.giftMembershipsLevelName;
                    return object;
                };

                /**
                 * Converts this LiveChatMembershipGiftingDetails to JSON.
                 * @function toJSON
                 * @memberof youtube.api.v3.LiveChatMembershipGiftingDetails
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                LiveChatMembershipGiftingDetails.prototype.toJSON = function() {
                    return LiveChatMembershipGiftingDetails.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for LiveChatMembershipGiftingDetails
                 * @function getTypeUrl
                 * @memberof youtube.api.v3.LiveChatMembershipGiftingDetails
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                LiveChatMembershipGiftingDetails.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/youtube.api.v3.LiveChatMembershipGiftingDetails";
                };

                return LiveChatMembershipGiftingDetails;
            })();

            v3.LiveChatGiftMembershipReceivedDetails = (function() {

                /**
                 * Properties of a LiveChatGiftMembershipReceivedDetails.
                 * @typedef {Object} youtube.api.v3.LiveChatGiftMembershipReceivedDetails.$Properties
                 * @property {string|null} [memberLevelName] LiveChatGiftMembershipReceivedDetails memberLevelName
                 * @property {string|null} [gifterChannelId] LiveChatGiftMembershipReceivedDetails gifterChannelId
                 * @property {string|null} [associatedMembershipGiftingMessageId] LiveChatGiftMembershipReceivedDetails associatedMembershipGiftingMessageId
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a LiveChatGiftMembershipReceivedDetails.
                 * @memberof youtube.api.v3
                 * @interface ILiveChatGiftMembershipReceivedDetails
                 * @augments youtube.api.v3.LiveChatGiftMembershipReceivedDetails.$Properties
                 * @deprecated Use youtube.api.v3.LiveChatGiftMembershipReceivedDetails.$Properties instead.
                 */

                /**
                 * Shape of a LiveChatGiftMembershipReceivedDetails.
                 * @typedef {youtube.api.v3.LiveChatGiftMembershipReceivedDetails.$Properties} youtube.api.v3.LiveChatGiftMembershipReceivedDetails.$Shape
                 */

                /**
                 * Constructs a new LiveChatGiftMembershipReceivedDetails.
                 * @memberof youtube.api.v3
                 * @classdesc Represents a LiveChatGiftMembershipReceivedDetails.
                 * @constructor
                 * @param {youtube.api.v3.LiveChatGiftMembershipReceivedDetails.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                const LiveChatGiftMembershipReceivedDetails = function LiveChatGiftMembershipReceivedDetails(properties) {
                    if (properties)
                        for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * LiveChatGiftMembershipReceivedDetails memberLevelName.
                 * @member {string} memberLevelName
                 * @memberof youtube.api.v3.LiveChatGiftMembershipReceivedDetails
                 * @instance
                 */
                LiveChatGiftMembershipReceivedDetails.prototype.memberLevelName = "";

                /**
                 * LiveChatGiftMembershipReceivedDetails gifterChannelId.
                 * @member {string} gifterChannelId
                 * @memberof youtube.api.v3.LiveChatGiftMembershipReceivedDetails
                 * @instance
                 */
                LiveChatGiftMembershipReceivedDetails.prototype.gifterChannelId = "";

                /**
                 * LiveChatGiftMembershipReceivedDetails associatedMembershipGiftingMessageId.
                 * @member {string} associatedMembershipGiftingMessageId
                 * @memberof youtube.api.v3.LiveChatGiftMembershipReceivedDetails
                 * @instance
                 */
                LiveChatGiftMembershipReceivedDetails.prototype.associatedMembershipGiftingMessageId = "";

                /**
                 * Creates a new LiveChatGiftMembershipReceivedDetails instance using the specified properties.
                 * @function create
                 * @memberof youtube.api.v3.LiveChatGiftMembershipReceivedDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatGiftMembershipReceivedDetails.$Properties=} [properties] Properties to set
                 * @returns {youtube.api.v3.LiveChatGiftMembershipReceivedDetails} LiveChatGiftMembershipReceivedDetails instance
                 * @type {{
                 *   (properties: youtube.api.v3.LiveChatGiftMembershipReceivedDetails.$Shape): youtube.api.v3.LiveChatGiftMembershipReceivedDetails & youtube.api.v3.LiveChatGiftMembershipReceivedDetails.$Shape;
                 *   (properties?: youtube.api.v3.LiveChatGiftMembershipReceivedDetails.$Properties): youtube.api.v3.LiveChatGiftMembershipReceivedDetails;
                 * }}
                 */
                LiveChatGiftMembershipReceivedDetails.create = function(properties) {
                    return new LiveChatGiftMembershipReceivedDetails(properties);
                };

                /**
                 * Encodes the specified LiveChatGiftMembershipReceivedDetails message. Does not implicitly {@link youtube.api.v3.LiveChatGiftMembershipReceivedDetails.verify|verify} messages.
                 * @function encode
                 * @memberof youtube.api.v3.LiveChatGiftMembershipReceivedDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatGiftMembershipReceivedDetails.$Properties} message LiveChatGiftMembershipReceivedDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatGiftMembershipReceivedDetails.encode = function LiveChatGiftMembershipReceivedDetails$encode(message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.memberLevelName != null && $Object.hasOwnProperty.call(message, "memberLevelName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.memberLevelName);
                    if (message.gifterChannelId != null && $Object.hasOwnProperty.call(message, "gifterChannelId"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.gifterChannelId);
                    if (message.associatedMembershipGiftingMessageId != null && $Object.hasOwnProperty.call(message, "associatedMembershipGiftingMessageId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.associatedMembershipGiftingMessageId);
                    return writer;
                };

                /**
                 * Encodes the specified LiveChatGiftMembershipReceivedDetails message, length delimited. Does not implicitly {@link youtube.api.v3.LiveChatGiftMembershipReceivedDetails.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof youtube.api.v3.LiveChatGiftMembershipReceivedDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatGiftMembershipReceivedDetails.$Properties} message LiveChatGiftMembershipReceivedDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatGiftMembershipReceivedDetails.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a LiveChatGiftMembershipReceivedDetails message from the specified reader or buffer.
                 * @function decode
                 * @memberof youtube.api.v3.LiveChatGiftMembershipReceivedDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {youtube.api.v3.LiveChatGiftMembershipReceivedDetails & youtube.api.v3.LiveChatGiftMembershipReceivedDetails.$Shape} LiveChatGiftMembershipReceivedDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatGiftMembershipReceivedDetails.decode = function LiveChatGiftMembershipReceivedDetails$decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === $undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let end = length === $undefined ? reader.len : reader.pos + length, message = new this.ctor();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.memberLevelName = reader.string();
                                break;
                            }
                        case 2: {
                                message.gifterChannelId = reader.string();
                                break;
                            }
                        case 3: {
                                message.associatedMembershipGiftingMessageId = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a LiveChatGiftMembershipReceivedDetails message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof youtube.api.v3.LiveChatGiftMembershipReceivedDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {youtube.api.v3.LiveChatGiftMembershipReceivedDetails & youtube.api.v3.LiveChatGiftMembershipReceivedDetails.$Shape} LiveChatGiftMembershipReceivedDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatGiftMembershipReceivedDetails.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a LiveChatGiftMembershipReceivedDetails message.
                 * @function verify
                 * @memberof youtube.api.v3.LiveChatGiftMembershipReceivedDetails
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LiveChatGiftMembershipReceivedDetails.verify = function LiveChatGiftMembershipReceivedDetails$verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.memberLevelName != null && $Object.hasOwnProperty.call(message, "memberLevelName"))
                        if (!$util.isString(message.memberLevelName))
                            return "memberLevelName: string expected";
                    if (message.gifterChannelId != null && $Object.hasOwnProperty.call(message, "gifterChannelId"))
                        if (!$util.isString(message.gifterChannelId))
                            return "gifterChannelId: string expected";
                    if (message.associatedMembershipGiftingMessageId != null && $Object.hasOwnProperty.call(message, "associatedMembershipGiftingMessageId"))
                        if (!$util.isString(message.associatedMembershipGiftingMessageId))
                            return "associatedMembershipGiftingMessageId: string expected";
                    return null;
                };

                /**
                 * Creates a LiveChatGiftMembershipReceivedDetails message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof youtube.api.v3.LiveChatGiftMembershipReceivedDetails
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {youtube.api.v3.LiveChatGiftMembershipReceivedDetails} LiveChatGiftMembershipReceivedDetails
                 */
                LiveChatGiftMembershipReceivedDetails.fromObject = function LiveChatGiftMembershipReceivedDetails$fromObject(object, long) {
                    if (object instanceof this.ctor)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".youtube.api.v3.LiveChatGiftMembershipReceivedDetails: object expected");
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let message = new this.ctor();
                    if (object.memberLevelName != null)
                        message.memberLevelName = $String(object.memberLevelName);
                    if (object.gifterChannelId != null)
                        message.gifterChannelId = $String(object.gifterChannelId);
                    if (object.associatedMembershipGiftingMessageId != null)
                        message.associatedMembershipGiftingMessageId = $String(object.associatedMembershipGiftingMessageId);
                    return message;
                };

                /**
                 * Creates a plain object from a LiveChatGiftMembershipReceivedDetails message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof youtube.api.v3.LiveChatGiftMembershipReceivedDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatGiftMembershipReceivedDetails} message LiveChatGiftMembershipReceivedDetails
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LiveChatGiftMembershipReceivedDetails.toObject = function LiveChatGiftMembershipReceivedDetails$toObject(message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    let object = {};
                    if (options.defaults) {
                        object.memberLevelName = "";
                        object.gifterChannelId = "";
                        object.associatedMembershipGiftingMessageId = "";
                    }
                    if (message.memberLevelName != null && $Object.hasOwnProperty.call(message, "memberLevelName"))
                        object.memberLevelName = message.memberLevelName;
                    if (message.gifterChannelId != null && $Object.hasOwnProperty.call(message, "gifterChannelId"))
                        object.gifterChannelId = message.gifterChannelId;
                    if (message.associatedMembershipGiftingMessageId != null && $Object.hasOwnProperty.call(message, "associatedMembershipGiftingMessageId"))
                        object.associatedMembershipGiftingMessageId = message.associatedMembershipGiftingMessageId;
                    return object;
                };

                /**
                 * Converts this LiveChatGiftMembershipReceivedDetails to JSON.
                 * @function toJSON
                 * @memberof youtube.api.v3.LiveChatGiftMembershipReceivedDetails
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                LiveChatGiftMembershipReceivedDetails.prototype.toJSON = function() {
                    return LiveChatGiftMembershipReceivedDetails.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for LiveChatGiftMembershipReceivedDetails
                 * @function getTypeUrl
                 * @memberof youtube.api.v3.LiveChatGiftMembershipReceivedDetails
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                LiveChatGiftMembershipReceivedDetails.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/youtube.api.v3.LiveChatGiftMembershipReceivedDetails";
                };

                return LiveChatGiftMembershipReceivedDetails;
            })();

            v3.LiveChatPollDetails = (function() {

                /**
                 * Properties of a LiveChatPollDetails.
                 * @typedef {Object} youtube.api.v3.LiveChatPollDetails.$Properties
                 * @property {youtube.api.v3.LiveChatPollDetails.PollMetadata.$Properties|null} [metadata] LiveChatPollDetails metadata
                 * @property {youtube.api.v3.LiveChatPollDetails.PollStatusWrapper.PollStatus|null} [status] LiveChatPollDetails status
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a LiveChatPollDetails.
                 * @memberof youtube.api.v3
                 * @interface ILiveChatPollDetails
                 * @augments youtube.api.v3.LiveChatPollDetails.$Properties
                 * @deprecated Use youtube.api.v3.LiveChatPollDetails.$Properties instead.
                 */

                /**
                 * Shape of a LiveChatPollDetails.
                 * @typedef {youtube.api.v3.LiveChatPollDetails.$Properties} youtube.api.v3.LiveChatPollDetails.$Shape
                 */

                /**
                 * Constructs a new LiveChatPollDetails.
                 * @memberof youtube.api.v3
                 * @classdesc Represents a LiveChatPollDetails.
                 * @constructor
                 * @param {youtube.api.v3.LiveChatPollDetails.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                const LiveChatPollDetails = function LiveChatPollDetails(properties) {
                    if (properties)
                        for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * LiveChatPollDetails metadata.
                 * @member {youtube.api.v3.LiveChatPollDetails.PollMetadata.$Properties|null|undefined} metadata
                 * @memberof youtube.api.v3.LiveChatPollDetails
                 * @instance
                 */
                LiveChatPollDetails.prototype.metadata = null;

                /**
                 * LiveChatPollDetails status.
                 * @member {youtube.api.v3.LiveChatPollDetails.PollStatusWrapper.PollStatus} status
                 * @memberof youtube.api.v3.LiveChatPollDetails
                 * @instance
                 */
                LiveChatPollDetails.prototype.status = 0;

                /**
                 * Creates a new LiveChatPollDetails instance using the specified properties.
                 * @function create
                 * @memberof youtube.api.v3.LiveChatPollDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatPollDetails.$Properties=} [properties] Properties to set
                 * @returns {youtube.api.v3.LiveChatPollDetails} LiveChatPollDetails instance
                 * @type {{
                 *   (properties: youtube.api.v3.LiveChatPollDetails.$Shape): youtube.api.v3.LiveChatPollDetails & youtube.api.v3.LiveChatPollDetails.$Shape;
                 *   (properties?: youtube.api.v3.LiveChatPollDetails.$Properties): youtube.api.v3.LiveChatPollDetails;
                 * }}
                 */
                LiveChatPollDetails.create = function(properties) {
                    return new LiveChatPollDetails(properties);
                };

                /**
                 * Encodes the specified LiveChatPollDetails message. Does not implicitly {@link youtube.api.v3.LiveChatPollDetails.verify|verify} messages.
                 * @function encode
                 * @memberof youtube.api.v3.LiveChatPollDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatPollDetails.$Properties} message LiveChatPollDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatPollDetails.encode = function LiveChatPollDetails$encode(message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.metadata != null && $Object.hasOwnProperty.call(message, "metadata"))
                        $root.youtube.api.v3.LiveChatPollDetails.PollMetadata.encode(message.metadata, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                    if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
                    return writer;
                };

                /**
                 * Encodes the specified LiveChatPollDetails message, length delimited. Does not implicitly {@link youtube.api.v3.LiveChatPollDetails.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof youtube.api.v3.LiveChatPollDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatPollDetails.$Properties} message LiveChatPollDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatPollDetails.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a LiveChatPollDetails message from the specified reader or buffer.
                 * @function decode
                 * @memberof youtube.api.v3.LiveChatPollDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {youtube.api.v3.LiveChatPollDetails & youtube.api.v3.LiveChatPollDetails.$Shape} LiveChatPollDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatPollDetails.decode = function LiveChatPollDetails$decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === $undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let end = length === $undefined ? reader.len : reader.pos + length, message = new this.ctor();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.metadata = $root.youtube.api.v3.LiveChatPollDetails.PollMetadata.decode(reader, reader.uint32(), $undefined, long + 1);
                                break;
                            }
                        case 2: {
                                message.status = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a LiveChatPollDetails message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof youtube.api.v3.LiveChatPollDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {youtube.api.v3.LiveChatPollDetails & youtube.api.v3.LiveChatPollDetails.$Shape} LiveChatPollDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatPollDetails.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a LiveChatPollDetails message.
                 * @function verify
                 * @memberof youtube.api.v3.LiveChatPollDetails
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LiveChatPollDetails.verify = function LiveChatPollDetails$verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.metadata != null && $Object.hasOwnProperty.call(message, "metadata")) {
                        let error = $root.youtube.api.v3.LiveChatPollDetails.PollMetadata.verify(message.metadata, long + 1);
                        if (error)
                            return "metadata." + error;
                    }
                    if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                        switch (message.status) {
                        default:
                            return "status: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a LiveChatPollDetails message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof youtube.api.v3.LiveChatPollDetails
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {youtube.api.v3.LiveChatPollDetails} LiveChatPollDetails
                 */
                LiveChatPollDetails.fromObject = function LiveChatPollDetails$fromObject(object, long) {
                    if (object instanceof this.ctor)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".youtube.api.v3.LiveChatPollDetails: object expected");
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let message = new this.ctor();
                    if (object.metadata != null) {
                        if (!$util.isObject(object.metadata))
                            throw $TypeError(".youtube.api.v3.LiveChatPollDetails.metadata: object expected");
                        message.metadata = $root.youtube.api.v3.LiveChatPollDetails.PollMetadata.fromObject(object.metadata, long + 1);
                    }
                    switch (object.status) {
                    default:
                        if (typeof object.status === "number") {
                            message.status = object.status;
                            break;
                        }
                        break;
                    case "UNKNOWN":
                    case 0:
                        message.status = 0;
                        break;
                    case "ACTIVE":
                    case 1:
                        message.status = 1;
                        break;
                    case "CLOSED":
                    case 2:
                        message.status = 2;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a LiveChatPollDetails message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof youtube.api.v3.LiveChatPollDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatPollDetails} message LiveChatPollDetails
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LiveChatPollDetails.toObject = function LiveChatPollDetails$toObject(message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    let object = {};
                    if (options.defaults) {
                        object.metadata = null;
                        object.status = options.enums === $String ? "UNKNOWN" : 0;
                    }
                    if (message.metadata != null && $Object.hasOwnProperty.call(message, "metadata"))
                        object.metadata = $root.youtube.api.v3.LiveChatPollDetails.PollMetadata.toObject(message.metadata, options, _depth + 1);
                    if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                        object.status = options.enums === $String ? $root.youtube.api.v3.LiveChatPollDetails.PollStatusWrapper.PollStatus[message.status] === $undefined ? message.status : $root.youtube.api.v3.LiveChatPollDetails.PollStatusWrapper.PollStatus[message.status] : message.status;
                    return object;
                };

                /**
                 * Converts this LiveChatPollDetails to JSON.
                 * @function toJSON
                 * @memberof youtube.api.v3.LiveChatPollDetails
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                LiveChatPollDetails.prototype.toJSON = function() {
                    return LiveChatPollDetails.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for LiveChatPollDetails
                 * @function getTypeUrl
                 * @memberof youtube.api.v3.LiveChatPollDetails
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                LiveChatPollDetails.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/youtube.api.v3.LiveChatPollDetails";
                };

                LiveChatPollDetails.PollMetadata = (function() {

                    /**
                     * Properties of a PollMetadata.
                     * @typedef {Object} youtube.api.v3.LiveChatPollDetails.PollMetadata.$Properties
                     * @property {string|null} [questionText] PollMetadata questionText
                     * @property {Array.<youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption.$Properties>|null} [options] PollMetadata options
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a PollMetadata.
                     * @memberof youtube.api.v3.LiveChatPollDetails
                     * @interface IPollMetadata
                     * @augments youtube.api.v3.LiveChatPollDetails.PollMetadata.$Properties
                     * @deprecated Use youtube.api.v3.LiveChatPollDetails.PollMetadata.$Properties instead.
                     */

                    /**
                     * Shape of a PollMetadata.
                     * @typedef {youtube.api.v3.LiveChatPollDetails.PollMetadata.$Properties} youtube.api.v3.LiveChatPollDetails.PollMetadata.$Shape
                     */

                    /**
                     * Constructs a new PollMetadata.
                     * @memberof youtube.api.v3.LiveChatPollDetails
                     * @classdesc Represents a PollMetadata.
                     * @constructor
                     * @param {youtube.api.v3.LiveChatPollDetails.PollMetadata.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const PollMetadata = function PollMetadata(properties) {
                        this.options = [];
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * PollMetadata questionText.
                     * @member {string} questionText
                     * @memberof youtube.api.v3.LiveChatPollDetails.PollMetadata
                     * @instance
                     */
                    PollMetadata.prototype.questionText = "";

                    /**
                     * PollMetadata options.
                     * @member {Array.<youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption.$Properties>} options
                     * @memberof youtube.api.v3.LiveChatPollDetails.PollMetadata
                     * @instance
                     */
                    PollMetadata.prototype.options = $util.emptyArray;

                    /**
                     * Creates a new PollMetadata instance using the specified properties.
                     * @function create
                     * @memberof youtube.api.v3.LiveChatPollDetails.PollMetadata
                     * @static
                     * @param {youtube.api.v3.LiveChatPollDetails.PollMetadata.$Properties=} [properties] Properties to set
                     * @returns {youtube.api.v3.LiveChatPollDetails.PollMetadata} PollMetadata instance
                     * @type {{
                     *   (properties: youtube.api.v3.LiveChatPollDetails.PollMetadata.$Shape): youtube.api.v3.LiveChatPollDetails.PollMetadata & youtube.api.v3.LiveChatPollDetails.PollMetadata.$Shape;
                     *   (properties?: youtube.api.v3.LiveChatPollDetails.PollMetadata.$Properties): youtube.api.v3.LiveChatPollDetails.PollMetadata;
                     * }}
                     */
                    PollMetadata.create = function(properties) {
                        return new PollMetadata(properties);
                    };

                    /**
                     * Encodes the specified PollMetadata message. Does not implicitly {@link youtube.api.v3.LiveChatPollDetails.PollMetadata.verify|verify} messages.
                     * @function encode
                     * @memberof youtube.api.v3.LiveChatPollDetails.PollMetadata
                     * @static
                     * @param {youtube.api.v3.LiveChatPollDetails.PollMetadata.$Properties} message PollMetadata message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PollMetadata.encode = function PollMetadata$encode(message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.questionText != null && $Object.hasOwnProperty.call(message, "questionText"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.questionText);
                        if (message.options != null && message.options.length)
                            for (let i = 0; i < message.options.length; ++i)
                                $root.youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption.encode(message.options[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified PollMetadata message, length delimited. Does not implicitly {@link youtube.api.v3.LiveChatPollDetails.PollMetadata.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof youtube.api.v3.LiveChatPollDetails.PollMetadata
                     * @static
                     * @param {youtube.api.v3.LiveChatPollDetails.PollMetadata.$Properties} message PollMetadata message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PollMetadata.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a PollMetadata message from the specified reader or buffer.
                     * @function decode
                     * @memberof youtube.api.v3.LiveChatPollDetails.PollMetadata
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {youtube.api.v3.LiveChatPollDetails.PollMetadata & youtube.api.v3.LiveChatPollDetails.PollMetadata.$Shape} PollMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PollMetadata.decode = function PollMetadata$decode(reader, length, error, long) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (long === $undefined)
                            long = 0;
                        if (long > $Reader.recursionLimit)
                            throw $Error("maximum nesting depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = new this.ctor();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.questionText = reader.string();
                                    break;
                                }
                            case 2: {
                                    if (!(message.options && message.options.length))
                                        message.options = [];
                                    message.options.push($root.youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption.decode(reader, reader.uint32(), $undefined, long + 1));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7, long);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PollMetadata message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof youtube.api.v3.LiveChatPollDetails.PollMetadata
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {youtube.api.v3.LiveChatPollDetails.PollMetadata & youtube.api.v3.LiveChatPollDetails.PollMetadata.$Shape} PollMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PollMetadata.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PollMetadata message.
                     * @function verify
                     * @memberof youtube.api.v3.LiveChatPollDetails.PollMetadata
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PollMetadata.verify = function PollMetadata$verify(message, long) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (long === $undefined)
                            long = 0;
                        if (long > $util.recursionLimit)
                            return "maximum nesting depth exceeded";
                        if (message.questionText != null && $Object.hasOwnProperty.call(message, "questionText"))
                            if (!$util.isString(message.questionText))
                                return "questionText: string expected";
                        if (message.options != null && $Object.hasOwnProperty.call(message, "options")) {
                            if (!$Array.isArray(message.options))
                                return "options: array expected";
                            for (let i = 0; i < message.options.length; ++i) {
                                let error = $root.youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption.verify(message.options[i], long + 1);
                                if (error)
                                    return "options." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a PollMetadata message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof youtube.api.v3.LiveChatPollDetails.PollMetadata
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {youtube.api.v3.LiveChatPollDetails.PollMetadata} PollMetadata
                     */
                    PollMetadata.fromObject = function PollMetadata$fromObject(object, long) {
                        if (object instanceof this.ctor)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".youtube.api.v3.LiveChatPollDetails.PollMetadata: object expected");
                        if (long === $undefined)
                            long = 0;
                        if (long > $util.recursionLimit)
                            throw $Error("maximum nesting depth exceeded");
                        let message = new this.ctor();
                        if (object.questionText != null)
                            message.questionText = $String(object.questionText);
                        if (object.options) {
                            if (!$Array.isArray(object.options))
                                throw $TypeError(".youtube.api.v3.LiveChatPollDetails.PollMetadata.options: array expected");
                            message.options = [];
                            for (let i = 0; i < object.options.length; ++i) {
                                if (!$util.isObject(object.options[i]))
                                    throw $TypeError(".youtube.api.v3.LiveChatPollDetails.PollMetadata.options: object expected");
                                message.options[i] = $root.youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption.fromObject(object.options[i], long + 1);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a PollMetadata message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof youtube.api.v3.LiveChatPollDetails.PollMetadata
                     * @static
                     * @param {youtube.api.v3.LiveChatPollDetails.PollMetadata} message PollMetadata
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PollMetadata.toObject = function PollMetadata$toObject(message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.options = [];
                        if (options.defaults)
                            object.questionText = "";
                        if (message.questionText != null && $Object.hasOwnProperty.call(message, "questionText"))
                            object.questionText = message.questionText;
                        if (message.options && message.options.length) {
                            object.options = [];
                            for (let j = 0; j < message.options.length; ++j)
                                object.options[j] = $root.youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption.toObject(message.options[j], options, _depth + 1);
                        }
                        return object;
                    };

                    /**
                     * Converts this PollMetadata to JSON.
                     * @function toJSON
                     * @memberof youtube.api.v3.LiveChatPollDetails.PollMetadata
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PollMetadata.prototype.toJSON = function() {
                        return PollMetadata.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for PollMetadata
                     * @function getTypeUrl
                     * @memberof youtube.api.v3.LiveChatPollDetails.PollMetadata
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    PollMetadata.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/youtube.api.v3.LiveChatPollDetails.PollMetadata";
                    };

                    PollMetadata.PollOption = (function() {

                        /**
                         * Properties of a PollOption.
                         * @typedef {Object} youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption.$Properties
                         * @property {string|null} [optionText] PollOption optionText
                         * @property {number|Long|null} [tally] PollOption tally
                         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                         */

                        /**
                         * Properties of a PollOption.
                         * @memberof youtube.api.v3.LiveChatPollDetails.PollMetadata
                         * @interface IPollOption
                         * @augments youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption.$Properties
                         * @deprecated Use youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption.$Properties instead.
                         */

                        /**
                         * Shape of a PollOption.
                         * @typedef {youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption.$Properties} youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption.$Shape
                         */

                        /**
                         * Constructs a new PollOption.
                         * @memberof youtube.api.v3.LiveChatPollDetails.PollMetadata
                         * @classdesc Represents a PollOption.
                         * @constructor
                         * @param {youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption.$Properties=} [properties] Properties to set
                         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                         */
                        const PollOption = function PollOption(properties) {
                            if (properties)
                                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                        this[keys[i]] = properties[keys[i]];
                        };

                        /**
                         * PollOption optionText.
                         * @member {string} optionText
                         * @memberof youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption
                         * @instance
                         */
                        PollOption.prototype.optionText = "";

                        /**
                         * PollOption tally.
                         * @member {number|Long} tally
                         * @memberof youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption
                         * @instance
                         */
                        PollOption.prototype.tally = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Creates a new PollOption instance using the specified properties.
                         * @function create
                         * @memberof youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption
                         * @static
                         * @param {youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption.$Properties=} [properties] Properties to set
                         * @returns {youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption} PollOption instance
                         * @type {{
                         *   (properties: youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption.$Shape): youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption & youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption.$Shape;
                         *   (properties?: youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption.$Properties): youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption;
                         * }}
                         */
                        PollOption.create = function(properties) {
                            return new PollOption(properties);
                        };

                        /**
                         * Encodes the specified PollOption message. Does not implicitly {@link youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption.verify|verify} messages.
                         * @function encode
                         * @memberof youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption
                         * @static
                         * @param {youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption.$Properties} message PollOption message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PollOption.encode = function PollOption$encode(message, writer, _depth) {
                            if (!writer)
                                writer = $Writer.create();
                            if (_depth === $undefined)
                                _depth = 0;
                            if (_depth > $util.recursionLimit)
                                throw $Error("max depth exceeded");
                            if (message.optionText != null && $Object.hasOwnProperty.call(message, "optionText"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.optionText);
                            if (message.tally != null && $Object.hasOwnProperty.call(message, "tally"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.tally);
                            return writer;
                        };

                        /**
                         * Encodes the specified PollOption message, length delimited. Does not implicitly {@link youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption
                         * @static
                         * @param {youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption.$Properties} message PollOption message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PollOption.encodeDelimited = function(message, writer) {
                            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                        };

                        /**
                         * Decodes a PollOption message from the specified reader or buffer.
                         * @function decode
                         * @memberof youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption & youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption.$Shape} PollOption
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PollOption.decode = function PollOption$decode(reader, length, error, long) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            if (long === $undefined)
                                long = 0;
                            if (long > $Reader.recursionLimit)
                                throw $Error("maximum nesting depth exceeded");
                            let end = length === $undefined ? reader.len : reader.pos + length, message = new this.ctor();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.optionText = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.tally = reader.int64();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7, long);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a PollOption message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption & youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption.$Shape} PollOption
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PollOption.decodeDelimited = function(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a PollOption message.
                         * @function verify
                         * @memberof youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        PollOption.verify = function PollOption$verify(message, long) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (long === $undefined)
                                long = 0;
                            if (long > $util.recursionLimit)
                                return "maximum nesting depth exceeded";
                            if (message.optionText != null && $Object.hasOwnProperty.call(message, "optionText"))
                                if (!$util.isString(message.optionText))
                                    return "optionText: string expected";
                            if (message.tally != null && $Object.hasOwnProperty.call(message, "tally"))
                                if (!$util.isInteger(message.tally) && !(message.tally && $util.isInteger(message.tally.low) && $util.isInteger(message.tally.high)))
                                    return "tally: integer|Long expected";
                            return null;
                        };

                        /**
                         * Creates a PollOption message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption} PollOption
                         */
                        PollOption.fromObject = function PollOption$fromObject(object, long) {
                            if (object instanceof this.ctor)
                                return object;
                            if (!$util.isObject(object))
                                throw $TypeError(".youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption: object expected");
                            if (long === $undefined)
                                long = 0;
                            if (long > $util.recursionLimit)
                                throw $Error("maximum nesting depth exceeded");
                            let message = new this.ctor();
                            if (object.optionText != null)
                                message.optionText = $String(object.optionText);
                            if (object.tally != null)
                                if ($util.Long)
                                    message.tally = $util.Long.fromValue(object.tally, false);
                                else if (typeof object.tally === "string")
                                    message.tally = $parseInt(object.tally, 10);
                                else if (typeof object.tally === "number")
                                    message.tally = object.tally;
                                else if (typeof object.tally === "object")
                                    message.tally = new $util.LongBits(object.tally.low >>> 0, object.tally.high >>> 0).toNumber();
                            return message;
                        };

                        /**
                         * Creates a plain object from a PollOption message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption
                         * @static
                         * @param {youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption} message PollOption
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        PollOption.toObject = function PollOption$toObject(message, options, _depth) {
                            if (!options)
                                options = {};
                            if (_depth === $undefined)
                                _depth = 0;
                            if (_depth > $util.recursionLimit)
                                throw $Error("max depth exceeded");
                            let object = {};
                            if (options.defaults) {
                                object.optionText = "";
                                if ($util.Long) {
                                    let long = new $util.Long(0, 0, false);
                                    object.tally = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                                } else
                                    object.tally = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                            }
                            if (message.optionText != null && $Object.hasOwnProperty.call(message, "optionText"))
                                object.optionText = message.optionText;
                            if (message.tally != null && $Object.hasOwnProperty.call(message, "tally"))
                                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                                    object.tally = typeof message.tally === "number" ? $BigInt(message.tally) : $util.Long.fromBits(message.tally.low >>> 0, message.tally.high >>> 0, false).toBigInt();
                                else if (typeof message.tally === "number")
                                    object.tally = options.longs === $String ? $String(message.tally) : message.tally;
                                else
                                    object.tally = options.longs === $String ? $util.Long.prototype.toString.call(message.tally) : options.longs === $Number ? new $util.LongBits(message.tally.low >>> 0, message.tally.high >>> 0).toNumber() : message.tally;
                            return object;
                        };

                        /**
                         * Converts this PollOption to JSON.
                         * @function toJSON
                         * @memberof youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        PollOption.prototype.toJSON = function() {
                            return PollOption.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the type url for PollOption
                         * @function getTypeUrl
                         * @memberof youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption
                         * @static
                         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                         * @returns {string} The type url
                         */
                        PollOption.getTypeUrl = function(prefix) {
                            if (prefix === $undefined)
                                prefix = "type.googleapis.com";
                            return prefix + "/youtube.api.v3.LiveChatPollDetails.PollMetadata.PollOption";
                        };

                        return PollOption;
                    })();

                    return PollMetadata;
                })();

                LiveChatPollDetails.PollStatusWrapper = (function() {

                    /**
                     * Properties of a PollStatusWrapper.
                     * @typedef {Object} youtube.api.v3.LiveChatPollDetails.PollStatusWrapper.$Properties
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a PollStatusWrapper.
                     * @memberof youtube.api.v3.LiveChatPollDetails
                     * @interface IPollStatusWrapper
                     * @augments youtube.api.v3.LiveChatPollDetails.PollStatusWrapper.$Properties
                     * @deprecated Use youtube.api.v3.LiveChatPollDetails.PollStatusWrapper.$Properties instead.
                     */

                    /**
                     * Shape of a PollStatusWrapper.
                     * @typedef {youtube.api.v3.LiveChatPollDetails.PollStatusWrapper.$Properties} youtube.api.v3.LiveChatPollDetails.PollStatusWrapper.$Shape
                     */

                    /**
                     * Constructs a new PollStatusWrapper.
                     * @memberof youtube.api.v3.LiveChatPollDetails
                     * @classdesc Represents a PollStatusWrapper.
                     * @constructor
                     * @param {youtube.api.v3.LiveChatPollDetails.PollStatusWrapper.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const PollStatusWrapper = function PollStatusWrapper(properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * Creates a new PollStatusWrapper instance using the specified properties.
                     * @function create
                     * @memberof youtube.api.v3.LiveChatPollDetails.PollStatusWrapper
                     * @static
                     * @param {youtube.api.v3.LiveChatPollDetails.PollStatusWrapper.$Properties=} [properties] Properties to set
                     * @returns {youtube.api.v3.LiveChatPollDetails.PollStatusWrapper} PollStatusWrapper instance
                     * @type {{
                     *   (properties: youtube.api.v3.LiveChatPollDetails.PollStatusWrapper.$Shape): youtube.api.v3.LiveChatPollDetails.PollStatusWrapper & youtube.api.v3.LiveChatPollDetails.PollStatusWrapper.$Shape;
                     *   (properties?: youtube.api.v3.LiveChatPollDetails.PollStatusWrapper.$Properties): youtube.api.v3.LiveChatPollDetails.PollStatusWrapper;
                     * }}
                     */
                    PollStatusWrapper.create = function(properties) {
                        return new PollStatusWrapper(properties);
                    };

                    /**
                     * Encodes the specified PollStatusWrapper message. Does not implicitly {@link youtube.api.v3.LiveChatPollDetails.PollStatusWrapper.verify|verify} messages.
                     * @function encode
                     * @memberof youtube.api.v3.LiveChatPollDetails.PollStatusWrapper
                     * @static
                     * @param {youtube.api.v3.LiveChatPollDetails.PollStatusWrapper.$Properties} message PollStatusWrapper message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PollStatusWrapper.encode = function PollStatusWrapper$encode(message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        return writer;
                    };

                    /**
                     * Encodes the specified PollStatusWrapper message, length delimited. Does not implicitly {@link youtube.api.v3.LiveChatPollDetails.PollStatusWrapper.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof youtube.api.v3.LiveChatPollDetails.PollStatusWrapper
                     * @static
                     * @param {youtube.api.v3.LiveChatPollDetails.PollStatusWrapper.$Properties} message PollStatusWrapper message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PollStatusWrapper.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a PollStatusWrapper message from the specified reader or buffer.
                     * @function decode
                     * @memberof youtube.api.v3.LiveChatPollDetails.PollStatusWrapper
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {youtube.api.v3.LiveChatPollDetails.PollStatusWrapper & youtube.api.v3.LiveChatPollDetails.PollStatusWrapper.$Shape} PollStatusWrapper
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PollStatusWrapper.decode = function PollStatusWrapper$decode(reader, length, error, long) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (long === $undefined)
                            long = 0;
                        if (long > $Reader.recursionLimit)
                            throw $Error("maximum nesting depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = new this.ctor();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7, long);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PollStatusWrapper message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof youtube.api.v3.LiveChatPollDetails.PollStatusWrapper
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {youtube.api.v3.LiveChatPollDetails.PollStatusWrapper & youtube.api.v3.LiveChatPollDetails.PollStatusWrapper.$Shape} PollStatusWrapper
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PollStatusWrapper.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PollStatusWrapper message.
                     * @function verify
                     * @memberof youtube.api.v3.LiveChatPollDetails.PollStatusWrapper
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PollStatusWrapper.verify = function PollStatusWrapper$verify(message, long) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (long === $undefined)
                            long = 0;
                        if (long > $util.recursionLimit)
                            return "maximum nesting depth exceeded";
                        return null;
                    };

                    /**
                     * Creates a PollStatusWrapper message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof youtube.api.v3.LiveChatPollDetails.PollStatusWrapper
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {youtube.api.v3.LiveChatPollDetails.PollStatusWrapper} PollStatusWrapper
                     */
                    PollStatusWrapper.fromObject = function PollStatusWrapper$fromObject(object, long) {
                        if (object instanceof this.ctor)
                            return object;
                        return new this.ctor();
                    };

                    /**
                     * Creates a plain object from a PollStatusWrapper message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof youtube.api.v3.LiveChatPollDetails.PollStatusWrapper
                     * @static
                     * @param {youtube.api.v3.LiveChatPollDetails.PollStatusWrapper} message PollStatusWrapper
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PollStatusWrapper.toObject = function () {
                        return {};
                    };

                    /**
                     * Converts this PollStatusWrapper to JSON.
                     * @function toJSON
                     * @memberof youtube.api.v3.LiveChatPollDetails.PollStatusWrapper
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PollStatusWrapper.prototype.toJSON = function() {
                        return PollStatusWrapper.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for PollStatusWrapper
                     * @function getTypeUrl
                     * @memberof youtube.api.v3.LiveChatPollDetails.PollStatusWrapper
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    PollStatusWrapper.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/youtube.api.v3.LiveChatPollDetails.PollStatusWrapper";
                    };

                    /**
                     * PollStatus enum.
                     * @name youtube.api.v3.LiveChatPollDetails.PollStatusWrapper.PollStatus
                     * @enum {number}
                     * @property {number} UNKNOWN=0 UNKNOWN value
                     * @property {number} ACTIVE=1 ACTIVE value
                     * @property {number} CLOSED=2 CLOSED value
                     */
                    PollStatusWrapper.PollStatus = (function() {
                        const valuesById = $Object.create(null), values = $Object.create(valuesById);
                        values[valuesById[0] = "UNKNOWN"] = 0;
                        values[valuesById[1] = "ACTIVE"] = 1;
                        values[valuesById[2] = "CLOSED"] = 2;
                        return values;
                    })();

                    return PollStatusWrapper;
                })();

                return LiveChatPollDetails;
            })();

            v3.LiveChatGiftDetails = (function() {

                /**
                 * Properties of a LiveChatGiftDetails.
                 * @typedef {Object} youtube.api.v3.LiveChatGiftDetails.$Properties
                 * @property {string|null} [giftName] LiveChatGiftDetails giftName
                 * @property {number|null} [jewelsAmount] LiveChatGiftDetails jewelsAmount
                 * @property {string|null} [giftUrl] LiveChatGiftDetails giftUrl
                 * @property {string|null} [altText] LiveChatGiftDetails altText
                 * @property {string|null} [language] LiveChatGiftDetails language
                 * @property {boolean|null} [hasVisualEffect] LiveChatGiftDetails hasVisualEffect
                 * @property {number|null} [comboCount] LiveChatGiftDetails comboCount
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a LiveChatGiftDetails.
                 * @memberof youtube.api.v3
                 * @interface ILiveChatGiftDetails
                 * @augments youtube.api.v3.LiveChatGiftDetails.$Properties
                 * @deprecated Use youtube.api.v3.LiveChatGiftDetails.$Properties instead.
                 */

                /**
                 * Shape of a LiveChatGiftDetails.
                 * @typedef {youtube.api.v3.LiveChatGiftDetails.$Properties} youtube.api.v3.LiveChatGiftDetails.$Shape
                 */

                /**
                 * Constructs a new LiveChatGiftDetails.
                 * @memberof youtube.api.v3
                 * @classdesc Represents a LiveChatGiftDetails.
                 * @constructor
                 * @param {youtube.api.v3.LiveChatGiftDetails.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                const LiveChatGiftDetails = function LiveChatGiftDetails(properties) {
                    if (properties)
                        for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * LiveChatGiftDetails giftName.
                 * @member {string} giftName
                 * @memberof youtube.api.v3.LiveChatGiftDetails
                 * @instance
                 */
                LiveChatGiftDetails.prototype.giftName = "";

                /**
                 * LiveChatGiftDetails jewelsAmount.
                 * @member {number} jewelsAmount
                 * @memberof youtube.api.v3.LiveChatGiftDetails
                 * @instance
                 */
                LiveChatGiftDetails.prototype.jewelsAmount = 0;

                /**
                 * LiveChatGiftDetails giftUrl.
                 * @member {string} giftUrl
                 * @memberof youtube.api.v3.LiveChatGiftDetails
                 * @instance
                 */
                LiveChatGiftDetails.prototype.giftUrl = "";

                /**
                 * LiveChatGiftDetails altText.
                 * @member {string} altText
                 * @memberof youtube.api.v3.LiveChatGiftDetails
                 * @instance
                 */
                LiveChatGiftDetails.prototype.altText = "";

                /**
                 * LiveChatGiftDetails language.
                 * @member {string} language
                 * @memberof youtube.api.v3.LiveChatGiftDetails
                 * @instance
                 */
                LiveChatGiftDetails.prototype.language = "";

                /**
                 * LiveChatGiftDetails hasVisualEffect.
                 * @member {boolean} hasVisualEffect
                 * @memberof youtube.api.v3.LiveChatGiftDetails
                 * @instance
                 */
                LiveChatGiftDetails.prototype.hasVisualEffect = false;

                /**
                 * LiveChatGiftDetails comboCount.
                 * @member {number} comboCount
                 * @memberof youtube.api.v3.LiveChatGiftDetails
                 * @instance
                 */
                LiveChatGiftDetails.prototype.comboCount = 0;

                /**
                 * Creates a new LiveChatGiftDetails instance using the specified properties.
                 * @function create
                 * @memberof youtube.api.v3.LiveChatGiftDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatGiftDetails.$Properties=} [properties] Properties to set
                 * @returns {youtube.api.v3.LiveChatGiftDetails} LiveChatGiftDetails instance
                 * @type {{
                 *   (properties: youtube.api.v3.LiveChatGiftDetails.$Shape): youtube.api.v3.LiveChatGiftDetails & youtube.api.v3.LiveChatGiftDetails.$Shape;
                 *   (properties?: youtube.api.v3.LiveChatGiftDetails.$Properties): youtube.api.v3.LiveChatGiftDetails;
                 * }}
                 */
                LiveChatGiftDetails.create = function(properties) {
                    return new LiveChatGiftDetails(properties);
                };

                /**
                 * Encodes the specified LiveChatGiftDetails message. Does not implicitly {@link youtube.api.v3.LiveChatGiftDetails.verify|verify} messages.
                 * @function encode
                 * @memberof youtube.api.v3.LiveChatGiftDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatGiftDetails.$Properties} message LiveChatGiftDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatGiftDetails.encode = function LiveChatGiftDetails$encode(message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.giftName != null && $Object.hasOwnProperty.call(message, "giftName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.giftName);
                    if (message.jewelsAmount != null && $Object.hasOwnProperty.call(message, "jewelsAmount"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.jewelsAmount);
                    if (message.giftUrl != null && $Object.hasOwnProperty.call(message, "giftUrl"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.giftUrl);
                    if (message.altText != null && $Object.hasOwnProperty.call(message, "altText"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.altText);
                    if (message.language != null && $Object.hasOwnProperty.call(message, "language"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.language);
                    if (message.hasVisualEffect != null && $Object.hasOwnProperty.call(message, "hasVisualEffect"))
                        writer.uint32(/* id 7, wireType 0 =*/56).bool(message.hasVisualEffect);
                    if (message.comboCount != null && $Object.hasOwnProperty.call(message, "comboCount"))
                        writer.uint32(/* id 8, wireType 0 =*/64).int32(message.comboCount);
                    return writer;
                };

                /**
                 * Encodes the specified LiveChatGiftDetails message, length delimited. Does not implicitly {@link youtube.api.v3.LiveChatGiftDetails.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof youtube.api.v3.LiveChatGiftDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatGiftDetails.$Properties} message LiveChatGiftDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LiveChatGiftDetails.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a LiveChatGiftDetails message from the specified reader or buffer.
                 * @function decode
                 * @memberof youtube.api.v3.LiveChatGiftDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {youtube.api.v3.LiveChatGiftDetails & youtube.api.v3.LiveChatGiftDetails.$Shape} LiveChatGiftDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatGiftDetails.decode = function LiveChatGiftDetails$decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === $undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let end = length === $undefined ? reader.len : reader.pos + length, message = new this.ctor();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.giftName = reader.string();
                                break;
                            }
                        case 3: {
                                message.jewelsAmount = reader.int32();
                                break;
                            }
                        case 4: {
                                message.giftUrl = reader.string();
                                break;
                            }
                        case 5: {
                                message.altText = reader.string();
                                break;
                            }
                        case 6: {
                                message.language = reader.string();
                                break;
                            }
                        case 7: {
                                message.hasVisualEffect = reader.bool();
                                break;
                            }
                        case 8: {
                                message.comboCount = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a LiveChatGiftDetails message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof youtube.api.v3.LiveChatGiftDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {youtube.api.v3.LiveChatGiftDetails & youtube.api.v3.LiveChatGiftDetails.$Shape} LiveChatGiftDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LiveChatGiftDetails.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a LiveChatGiftDetails message.
                 * @function verify
                 * @memberof youtube.api.v3.LiveChatGiftDetails
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LiveChatGiftDetails.verify = function LiveChatGiftDetails$verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.giftName != null && $Object.hasOwnProperty.call(message, "giftName"))
                        if (!$util.isString(message.giftName))
                            return "giftName: string expected";
                    if (message.jewelsAmount != null && $Object.hasOwnProperty.call(message, "jewelsAmount"))
                        if (!$util.isInteger(message.jewelsAmount))
                            return "jewelsAmount: integer expected";
                    if (message.giftUrl != null && $Object.hasOwnProperty.call(message, "giftUrl"))
                        if (!$util.isString(message.giftUrl))
                            return "giftUrl: string expected";
                    if (message.altText != null && $Object.hasOwnProperty.call(message, "altText"))
                        if (!$util.isString(message.altText))
                            return "altText: string expected";
                    if (message.language != null && $Object.hasOwnProperty.call(message, "language"))
                        if (!$util.isString(message.language))
                            return "language: string expected";
                    if (message.hasVisualEffect != null && $Object.hasOwnProperty.call(message, "hasVisualEffect"))
                        if (typeof message.hasVisualEffect !== "boolean")
                            return "hasVisualEffect: boolean expected";
                    if (message.comboCount != null && $Object.hasOwnProperty.call(message, "comboCount"))
                        if (!$util.isInteger(message.comboCount))
                            return "comboCount: integer expected";
                    return null;
                };

                /**
                 * Creates a LiveChatGiftDetails message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof youtube.api.v3.LiveChatGiftDetails
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {youtube.api.v3.LiveChatGiftDetails} LiveChatGiftDetails
                 */
                LiveChatGiftDetails.fromObject = function LiveChatGiftDetails$fromObject(object, long) {
                    if (object instanceof this.ctor)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".youtube.api.v3.LiveChatGiftDetails: object expected");
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let message = new this.ctor();
                    if (object.giftName != null)
                        message.giftName = $String(object.giftName);
                    if (object.jewelsAmount != null)
                        message.jewelsAmount = object.jewelsAmount | 0;
                    if (object.giftUrl != null)
                        message.giftUrl = $String(object.giftUrl);
                    if (object.altText != null)
                        message.altText = $String(object.altText);
                    if (object.language != null)
                        message.language = $String(object.language);
                    if (object.hasVisualEffect != null)
                        message.hasVisualEffect = $Boolean(object.hasVisualEffect);
                    if (object.comboCount != null)
                        message.comboCount = object.comboCount | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a LiveChatGiftDetails message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof youtube.api.v3.LiveChatGiftDetails
                 * @static
                 * @param {youtube.api.v3.LiveChatGiftDetails} message LiveChatGiftDetails
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LiveChatGiftDetails.toObject = function LiveChatGiftDetails$toObject(message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    let object = {};
                    if (options.defaults) {
                        object.giftName = "";
                        object.jewelsAmount = 0;
                        object.giftUrl = "";
                        object.altText = "";
                        object.language = "";
                        object.hasVisualEffect = false;
                        object.comboCount = 0;
                    }
                    if (message.giftName != null && $Object.hasOwnProperty.call(message, "giftName"))
                        object.giftName = message.giftName;
                    if (message.jewelsAmount != null && $Object.hasOwnProperty.call(message, "jewelsAmount"))
                        object.jewelsAmount = message.jewelsAmount;
                    if (message.giftUrl != null && $Object.hasOwnProperty.call(message, "giftUrl"))
                        object.giftUrl = message.giftUrl;
                    if (message.altText != null && $Object.hasOwnProperty.call(message, "altText"))
                        object.altText = message.altText;
                    if (message.language != null && $Object.hasOwnProperty.call(message, "language"))
                        object.language = message.language;
                    if (message.hasVisualEffect != null && $Object.hasOwnProperty.call(message, "hasVisualEffect"))
                        object.hasVisualEffect = message.hasVisualEffect;
                    if (message.comboCount != null && $Object.hasOwnProperty.call(message, "comboCount"))
                        object.comboCount = message.comboCount;
                    return object;
                };

                /**
                 * Converts this LiveChatGiftDetails to JSON.
                 * @function toJSON
                 * @memberof youtube.api.v3.LiveChatGiftDetails
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                LiveChatGiftDetails.prototype.toJSON = function() {
                    return LiveChatGiftDetails.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for LiveChatGiftDetails
                 * @function getTypeUrl
                 * @memberof youtube.api.v3.LiveChatGiftDetails
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                LiveChatGiftDetails.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/youtube.api.v3.LiveChatGiftDetails";
                };

                return LiveChatGiftDetails;
            })();

            v3.SuperStickerMetadata = (function() {

                /**
                 * Properties of a SuperStickerMetadata.
                 * @typedef {Object} youtube.api.v3.SuperStickerMetadata.$Properties
                 * @property {string|null} [stickerId] SuperStickerMetadata stickerId
                 * @property {string|null} [altText] SuperStickerMetadata altText
                 * @property {string|null} [altTextLanguage] SuperStickerMetadata altTextLanguage
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a SuperStickerMetadata.
                 * @memberof youtube.api.v3
                 * @interface ISuperStickerMetadata
                 * @augments youtube.api.v3.SuperStickerMetadata.$Properties
                 * @deprecated Use youtube.api.v3.SuperStickerMetadata.$Properties instead.
                 */

                /**
                 * Shape of a SuperStickerMetadata.
                 * @typedef {youtube.api.v3.SuperStickerMetadata.$Properties} youtube.api.v3.SuperStickerMetadata.$Shape
                 */

                /**
                 * Constructs a new SuperStickerMetadata.
                 * @memberof youtube.api.v3
                 * @classdesc Represents a SuperStickerMetadata.
                 * @constructor
                 * @param {youtube.api.v3.SuperStickerMetadata.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                const SuperStickerMetadata = function SuperStickerMetadata(properties) {
                    if (properties)
                        for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * SuperStickerMetadata stickerId.
                 * @member {string} stickerId
                 * @memberof youtube.api.v3.SuperStickerMetadata
                 * @instance
                 */
                SuperStickerMetadata.prototype.stickerId = "";

                /**
                 * SuperStickerMetadata altText.
                 * @member {string} altText
                 * @memberof youtube.api.v3.SuperStickerMetadata
                 * @instance
                 */
                SuperStickerMetadata.prototype.altText = "";

                /**
                 * SuperStickerMetadata altTextLanguage.
                 * @member {string} altTextLanguage
                 * @memberof youtube.api.v3.SuperStickerMetadata
                 * @instance
                 */
                SuperStickerMetadata.prototype.altTextLanguage = "";

                /**
                 * Creates a new SuperStickerMetadata instance using the specified properties.
                 * @function create
                 * @memberof youtube.api.v3.SuperStickerMetadata
                 * @static
                 * @param {youtube.api.v3.SuperStickerMetadata.$Properties=} [properties] Properties to set
                 * @returns {youtube.api.v3.SuperStickerMetadata} SuperStickerMetadata instance
                 * @type {{
                 *   (properties: youtube.api.v3.SuperStickerMetadata.$Shape): youtube.api.v3.SuperStickerMetadata & youtube.api.v3.SuperStickerMetadata.$Shape;
                 *   (properties?: youtube.api.v3.SuperStickerMetadata.$Properties): youtube.api.v3.SuperStickerMetadata;
                 * }}
                 */
                SuperStickerMetadata.create = function(properties) {
                    return new SuperStickerMetadata(properties);
                };

                /**
                 * Encodes the specified SuperStickerMetadata message. Does not implicitly {@link youtube.api.v3.SuperStickerMetadata.verify|verify} messages.
                 * @function encode
                 * @memberof youtube.api.v3.SuperStickerMetadata
                 * @static
                 * @param {youtube.api.v3.SuperStickerMetadata.$Properties} message SuperStickerMetadata message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SuperStickerMetadata.encode = function SuperStickerMetadata$encode(message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.stickerId != null && $Object.hasOwnProperty.call(message, "stickerId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.stickerId);
                    if (message.altText != null && $Object.hasOwnProperty.call(message, "altText"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.altText);
                    if (message.altTextLanguage != null && $Object.hasOwnProperty.call(message, "altTextLanguage"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.altTextLanguage);
                    return writer;
                };

                /**
                 * Encodes the specified SuperStickerMetadata message, length delimited. Does not implicitly {@link youtube.api.v3.SuperStickerMetadata.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof youtube.api.v3.SuperStickerMetadata
                 * @static
                 * @param {youtube.api.v3.SuperStickerMetadata.$Properties} message SuperStickerMetadata message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SuperStickerMetadata.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a SuperStickerMetadata message from the specified reader or buffer.
                 * @function decode
                 * @memberof youtube.api.v3.SuperStickerMetadata
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {youtube.api.v3.SuperStickerMetadata & youtube.api.v3.SuperStickerMetadata.$Shape} SuperStickerMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SuperStickerMetadata.decode = function SuperStickerMetadata$decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === $undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let end = length === $undefined ? reader.len : reader.pos + length, message = new this.ctor();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.stickerId = reader.string();
                                break;
                            }
                        case 2: {
                                message.altText = reader.string();
                                break;
                            }
                        case 3: {
                                message.altTextLanguage = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SuperStickerMetadata message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof youtube.api.v3.SuperStickerMetadata
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {youtube.api.v3.SuperStickerMetadata & youtube.api.v3.SuperStickerMetadata.$Shape} SuperStickerMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SuperStickerMetadata.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SuperStickerMetadata message.
                 * @function verify
                 * @memberof youtube.api.v3.SuperStickerMetadata
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SuperStickerMetadata.verify = function SuperStickerMetadata$verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.stickerId != null && $Object.hasOwnProperty.call(message, "stickerId"))
                        if (!$util.isString(message.stickerId))
                            return "stickerId: string expected";
                    if (message.altText != null && $Object.hasOwnProperty.call(message, "altText"))
                        if (!$util.isString(message.altText))
                            return "altText: string expected";
                    if (message.altTextLanguage != null && $Object.hasOwnProperty.call(message, "altTextLanguage"))
                        if (!$util.isString(message.altTextLanguage))
                            return "altTextLanguage: string expected";
                    return null;
                };

                /**
                 * Creates a SuperStickerMetadata message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof youtube.api.v3.SuperStickerMetadata
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {youtube.api.v3.SuperStickerMetadata} SuperStickerMetadata
                 */
                SuperStickerMetadata.fromObject = function SuperStickerMetadata$fromObject(object, long) {
                    if (object instanceof this.ctor)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".youtube.api.v3.SuperStickerMetadata: object expected");
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let message = new this.ctor();
                    if (object.stickerId != null)
                        message.stickerId = $String(object.stickerId);
                    if (object.altText != null)
                        message.altText = $String(object.altText);
                    if (object.altTextLanguage != null)
                        message.altTextLanguage = $String(object.altTextLanguage);
                    return message;
                };

                /**
                 * Creates a plain object from a SuperStickerMetadata message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof youtube.api.v3.SuperStickerMetadata
                 * @static
                 * @param {youtube.api.v3.SuperStickerMetadata} message SuperStickerMetadata
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SuperStickerMetadata.toObject = function SuperStickerMetadata$toObject(message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    let object = {};
                    if (options.defaults) {
                        object.stickerId = "";
                        object.altText = "";
                        object.altTextLanguage = "";
                    }
                    if (message.stickerId != null && $Object.hasOwnProperty.call(message, "stickerId"))
                        object.stickerId = message.stickerId;
                    if (message.altText != null && $Object.hasOwnProperty.call(message, "altText"))
                        object.altText = message.altText;
                    if (message.altTextLanguage != null && $Object.hasOwnProperty.call(message, "altTextLanguage"))
                        object.altTextLanguage = message.altTextLanguage;
                    return object;
                };

                /**
                 * Converts this SuperStickerMetadata to JSON.
                 * @function toJSON
                 * @memberof youtube.api.v3.SuperStickerMetadata
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SuperStickerMetadata.prototype.toJSON = function() {
                    return SuperStickerMetadata.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for SuperStickerMetadata
                 * @function getTypeUrl
                 * @memberof youtube.api.v3.SuperStickerMetadata
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                SuperStickerMetadata.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/youtube.api.v3.SuperStickerMetadata";
                };

                return SuperStickerMetadata;
            })();

            v3.ChannelProfileDetails = (function() {

                /**
                 * Properties of a ChannelProfileDetails.
                 * @typedef {Object} youtube.api.v3.ChannelProfileDetails.$Properties
                 * @property {string|null} [channelId] ChannelProfileDetails channelId
                 * @property {string|null} [channelUrl] ChannelProfileDetails channelUrl
                 * @property {string|null} [displayName] ChannelProfileDetails displayName
                 * @property {string|null} [profileImageUrl] ChannelProfileDetails profileImageUrl
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a ChannelProfileDetails.
                 * @memberof youtube.api.v3
                 * @interface IChannelProfileDetails
                 * @augments youtube.api.v3.ChannelProfileDetails.$Properties
                 * @deprecated Use youtube.api.v3.ChannelProfileDetails.$Properties instead.
                 */

                /**
                 * Shape of a ChannelProfileDetails.
                 * @typedef {youtube.api.v3.ChannelProfileDetails.$Properties} youtube.api.v3.ChannelProfileDetails.$Shape
                 */

                /**
                 * Constructs a new ChannelProfileDetails.
                 * @memberof youtube.api.v3
                 * @classdesc Represents a ChannelProfileDetails.
                 * @constructor
                 * @param {youtube.api.v3.ChannelProfileDetails.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                const ChannelProfileDetails = function ChannelProfileDetails(properties) {
                    if (properties)
                        for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * ChannelProfileDetails channelId.
                 * @member {string} channelId
                 * @memberof youtube.api.v3.ChannelProfileDetails
                 * @instance
                 */
                ChannelProfileDetails.prototype.channelId = "";

                /**
                 * ChannelProfileDetails channelUrl.
                 * @member {string} channelUrl
                 * @memberof youtube.api.v3.ChannelProfileDetails
                 * @instance
                 */
                ChannelProfileDetails.prototype.channelUrl = "";

                /**
                 * ChannelProfileDetails displayName.
                 * @member {string} displayName
                 * @memberof youtube.api.v3.ChannelProfileDetails
                 * @instance
                 */
                ChannelProfileDetails.prototype.displayName = "";

                /**
                 * ChannelProfileDetails profileImageUrl.
                 * @member {string} profileImageUrl
                 * @memberof youtube.api.v3.ChannelProfileDetails
                 * @instance
                 */
                ChannelProfileDetails.prototype.profileImageUrl = "";

                /**
                 * Creates a new ChannelProfileDetails instance using the specified properties.
                 * @function create
                 * @memberof youtube.api.v3.ChannelProfileDetails
                 * @static
                 * @param {youtube.api.v3.ChannelProfileDetails.$Properties=} [properties] Properties to set
                 * @returns {youtube.api.v3.ChannelProfileDetails} ChannelProfileDetails instance
                 * @type {{
                 *   (properties: youtube.api.v3.ChannelProfileDetails.$Shape): youtube.api.v3.ChannelProfileDetails & youtube.api.v3.ChannelProfileDetails.$Shape;
                 *   (properties?: youtube.api.v3.ChannelProfileDetails.$Properties): youtube.api.v3.ChannelProfileDetails;
                 * }}
                 */
                ChannelProfileDetails.create = function(properties) {
                    return new ChannelProfileDetails(properties);
                };

                /**
                 * Encodes the specified ChannelProfileDetails message. Does not implicitly {@link youtube.api.v3.ChannelProfileDetails.verify|verify} messages.
                 * @function encode
                 * @memberof youtube.api.v3.ChannelProfileDetails
                 * @static
                 * @param {youtube.api.v3.ChannelProfileDetails.$Properties} message ChannelProfileDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ChannelProfileDetails.encode = function ChannelProfileDetails$encode(message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.channelUrl != null && $Object.hasOwnProperty.call(message, "channelUrl"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.channelUrl);
                    if (message.displayName != null && $Object.hasOwnProperty.call(message, "displayName"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.displayName);
                    if (message.profileImageUrl != null && $Object.hasOwnProperty.call(message, "profileImageUrl"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.profileImageUrl);
                    if (message.channelId != null && $Object.hasOwnProperty.call(message, "channelId"))
                        writer.uint32(/* id 101, wireType 2 =*/810).string(message.channelId);
                    return writer;
                };

                /**
                 * Encodes the specified ChannelProfileDetails message, length delimited. Does not implicitly {@link youtube.api.v3.ChannelProfileDetails.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof youtube.api.v3.ChannelProfileDetails
                 * @static
                 * @param {youtube.api.v3.ChannelProfileDetails.$Properties} message ChannelProfileDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ChannelProfileDetails.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a ChannelProfileDetails message from the specified reader or buffer.
                 * @function decode
                 * @memberof youtube.api.v3.ChannelProfileDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {youtube.api.v3.ChannelProfileDetails & youtube.api.v3.ChannelProfileDetails.$Shape} ChannelProfileDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ChannelProfileDetails.decode = function ChannelProfileDetails$decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === $undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let end = length === $undefined ? reader.len : reader.pos + length, message = new this.ctor();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 101: {
                                message.channelId = reader.string();
                                break;
                            }
                        case 2: {
                                message.channelUrl = reader.string();
                                break;
                            }
                        case 3: {
                                message.displayName = reader.string();
                                break;
                            }
                        case 4: {
                                message.profileImageUrl = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ChannelProfileDetails message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof youtube.api.v3.ChannelProfileDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {youtube.api.v3.ChannelProfileDetails & youtube.api.v3.ChannelProfileDetails.$Shape} ChannelProfileDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ChannelProfileDetails.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ChannelProfileDetails message.
                 * @function verify
                 * @memberof youtube.api.v3.ChannelProfileDetails
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ChannelProfileDetails.verify = function ChannelProfileDetails$verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.channelId != null && $Object.hasOwnProperty.call(message, "channelId"))
                        if (!$util.isString(message.channelId))
                            return "channelId: string expected";
                    if (message.channelUrl != null && $Object.hasOwnProperty.call(message, "channelUrl"))
                        if (!$util.isString(message.channelUrl))
                            return "channelUrl: string expected";
                    if (message.displayName != null && $Object.hasOwnProperty.call(message, "displayName"))
                        if (!$util.isString(message.displayName))
                            return "displayName: string expected";
                    if (message.profileImageUrl != null && $Object.hasOwnProperty.call(message, "profileImageUrl"))
                        if (!$util.isString(message.profileImageUrl))
                            return "profileImageUrl: string expected";
                    return null;
                };

                /**
                 * Creates a ChannelProfileDetails message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof youtube.api.v3.ChannelProfileDetails
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {youtube.api.v3.ChannelProfileDetails} ChannelProfileDetails
                 */
                ChannelProfileDetails.fromObject = function ChannelProfileDetails$fromObject(object, long) {
                    if (object instanceof this.ctor)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".youtube.api.v3.ChannelProfileDetails: object expected");
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let message = new this.ctor();
                    if (object.channelId != null)
                        message.channelId = $String(object.channelId);
                    if (object.channelUrl != null)
                        message.channelUrl = $String(object.channelUrl);
                    if (object.displayName != null)
                        message.displayName = $String(object.displayName);
                    if (object.profileImageUrl != null)
                        message.profileImageUrl = $String(object.profileImageUrl);
                    return message;
                };

                /**
                 * Creates a plain object from a ChannelProfileDetails message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof youtube.api.v3.ChannelProfileDetails
                 * @static
                 * @param {youtube.api.v3.ChannelProfileDetails} message ChannelProfileDetails
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ChannelProfileDetails.toObject = function ChannelProfileDetails$toObject(message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    let object = {};
                    if (options.defaults) {
                        object.channelUrl = "";
                        object.displayName = "";
                        object.profileImageUrl = "";
                        object.channelId = "";
                    }
                    if (message.channelUrl != null && $Object.hasOwnProperty.call(message, "channelUrl"))
                        object.channelUrl = message.channelUrl;
                    if (message.displayName != null && $Object.hasOwnProperty.call(message, "displayName"))
                        object.displayName = message.displayName;
                    if (message.profileImageUrl != null && $Object.hasOwnProperty.call(message, "profileImageUrl"))
                        object.profileImageUrl = message.profileImageUrl;
                    if (message.channelId != null && $Object.hasOwnProperty.call(message, "channelId"))
                        object.channelId = message.channelId;
                    return object;
                };

                /**
                 * Converts this ChannelProfileDetails to JSON.
                 * @function toJSON
                 * @memberof youtube.api.v3.ChannelProfileDetails
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ChannelProfileDetails.prototype.toJSON = function() {
                    return ChannelProfileDetails.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for ChannelProfileDetails
                 * @function getTypeUrl
                 * @memberof youtube.api.v3.ChannelProfileDetails
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                ChannelProfileDetails.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/youtube.api.v3.ChannelProfileDetails";
                };

                return ChannelProfileDetails;
            })();

            v3.PageInfo = (function() {

                /**
                 * Properties of a PageInfo.
                 * @typedef {Object} youtube.api.v3.PageInfo.$Properties
                 * @property {number|null} [totalResults] PageInfo totalResults
                 * @property {number|null} [resultsPerPage] PageInfo resultsPerPage
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a PageInfo.
                 * @memberof youtube.api.v3
                 * @interface IPageInfo
                 * @augments youtube.api.v3.PageInfo.$Properties
                 * @deprecated Use youtube.api.v3.PageInfo.$Properties instead.
                 */

                /**
                 * Shape of a PageInfo.
                 * @typedef {youtube.api.v3.PageInfo.$Properties} youtube.api.v3.PageInfo.$Shape
                 */

                /**
                 * Constructs a new PageInfo.
                 * @memberof youtube.api.v3
                 * @classdesc Represents a PageInfo.
                 * @constructor
                 * @param {youtube.api.v3.PageInfo.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                const PageInfo = function PageInfo(properties) {
                    if (properties)
                        for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * PageInfo totalResults.
                 * @member {number} totalResults
                 * @memberof youtube.api.v3.PageInfo
                 * @instance
                 */
                PageInfo.prototype.totalResults = 0;

                /**
                 * PageInfo resultsPerPage.
                 * @member {number} resultsPerPage
                 * @memberof youtube.api.v3.PageInfo
                 * @instance
                 */
                PageInfo.prototype.resultsPerPage = 0;

                /**
                 * Creates a new PageInfo instance using the specified properties.
                 * @function create
                 * @memberof youtube.api.v3.PageInfo
                 * @static
                 * @param {youtube.api.v3.PageInfo.$Properties=} [properties] Properties to set
                 * @returns {youtube.api.v3.PageInfo} PageInfo instance
                 * @type {{
                 *   (properties: youtube.api.v3.PageInfo.$Shape): youtube.api.v3.PageInfo & youtube.api.v3.PageInfo.$Shape;
                 *   (properties?: youtube.api.v3.PageInfo.$Properties): youtube.api.v3.PageInfo;
                 * }}
                 */
                PageInfo.create = function(properties) {
                    return new PageInfo(properties);
                };

                /**
                 * Encodes the specified PageInfo message. Does not implicitly {@link youtube.api.v3.PageInfo.verify|verify} messages.
                 * @function encode
                 * @memberof youtube.api.v3.PageInfo
                 * @static
                 * @param {youtube.api.v3.PageInfo.$Properties} message PageInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PageInfo.encode = function PageInfo$encode(message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.totalResults != null && $Object.hasOwnProperty.call(message, "totalResults"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.totalResults);
                    if (message.resultsPerPage != null && $Object.hasOwnProperty.call(message, "resultsPerPage"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.resultsPerPage);
                    return writer;
                };

                /**
                 * Encodes the specified PageInfo message, length delimited. Does not implicitly {@link youtube.api.v3.PageInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof youtube.api.v3.PageInfo
                 * @static
                 * @param {youtube.api.v3.PageInfo.$Properties} message PageInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PageInfo.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a PageInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof youtube.api.v3.PageInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {youtube.api.v3.PageInfo & youtube.api.v3.PageInfo.$Shape} PageInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PageInfo.decode = function PageInfo$decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === $undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let end = length === $undefined ? reader.len : reader.pos + length, message = new this.ctor();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.totalResults = reader.int32();
                                break;
                            }
                        case 2: {
                                message.resultsPerPage = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a PageInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof youtube.api.v3.PageInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {youtube.api.v3.PageInfo & youtube.api.v3.PageInfo.$Shape} PageInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PageInfo.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PageInfo message.
                 * @function verify
                 * @memberof youtube.api.v3.PageInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PageInfo.verify = function PageInfo$verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.totalResults != null && $Object.hasOwnProperty.call(message, "totalResults"))
                        if (!$util.isInteger(message.totalResults))
                            return "totalResults: integer expected";
                    if (message.resultsPerPage != null && $Object.hasOwnProperty.call(message, "resultsPerPage"))
                        if (!$util.isInteger(message.resultsPerPage))
                            return "resultsPerPage: integer expected";
                    return null;
                };

                /**
                 * Creates a PageInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof youtube.api.v3.PageInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {youtube.api.v3.PageInfo} PageInfo
                 */
                PageInfo.fromObject = function PageInfo$fromObject(object, long) {
                    if (object instanceof this.ctor)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".youtube.api.v3.PageInfo: object expected");
                    if (long === $undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw $Error("maximum nesting depth exceeded");
                    let message = new this.ctor();
                    if (object.totalResults != null)
                        message.totalResults = object.totalResults | 0;
                    if (object.resultsPerPage != null)
                        message.resultsPerPage = object.resultsPerPage | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a PageInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof youtube.api.v3.PageInfo
                 * @static
                 * @param {youtube.api.v3.PageInfo} message PageInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PageInfo.toObject = function PageInfo$toObject(message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    let object = {};
                    if (options.defaults) {
                        object.totalResults = 0;
                        object.resultsPerPage = 0;
                    }
                    if (message.totalResults != null && $Object.hasOwnProperty.call(message, "totalResults"))
                        object.totalResults = message.totalResults;
                    if (message.resultsPerPage != null && $Object.hasOwnProperty.call(message, "resultsPerPage"))
                        object.resultsPerPage = message.resultsPerPage;
                    return object;
                };

                /**
                 * Converts this PageInfo to JSON.
                 * @function toJSON
                 * @memberof youtube.api.v3.PageInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PageInfo.prototype.toJSON = function() {
                    return PageInfo.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for PageInfo
                 * @function getTypeUrl
                 * @memberof youtube.api.v3.PageInfo
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                PageInfo.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/youtube.api.v3.PageInfo";
                };

                return PageInfo;
            })();

            return v3;
        })();

        return api;
    })();

    return youtube;
})();

export {
  $root as default
};
