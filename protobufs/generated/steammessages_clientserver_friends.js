/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.CMsgClientFriendMsg = (function() {
    
        /**
         * Properties of a CMsgClientFriendMsg.
         * @exports ICMsgClientFriendMsg
         * @interface ICMsgClientFriendMsg
         * @property {number|Long|null} [steamid] CMsgClientFriendMsg steamid
         * @property {number|null} [chat_entry_type] CMsgClientFriendMsg chat_entry_type
         * @property {Uint8Array|null} [message] CMsgClientFriendMsg message
         * @property {number|null} [rtime32_server_timestamp] CMsgClientFriendMsg rtime32_server_timestamp
         * @property {boolean|null} [echo_to_sender] CMsgClientFriendMsg echo_to_sender
         */
    
        /**
         * Constructs a new CMsgClientFriendMsg.
         * @exports CMsgClientFriendMsg
         * @classdesc Represents a CMsgClientFriendMsg.
         * @implements ICMsgClientFriendMsg
         * @constructor
         * @param {ICMsgClientFriendMsg=} [properties] Properties to set
         */
        function CMsgClientFriendMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientFriendMsg steamid.
         * @member {number|Long} steamid
         * @memberof CMsgClientFriendMsg
         * @instance
         */
        CMsgClientFriendMsg.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgClientFriendMsg chat_entry_type.
         * @member {number} chat_entry_type
         * @memberof CMsgClientFriendMsg
         * @instance
         */
        CMsgClientFriendMsg.prototype.chat_entry_type = 0;
    
        /**
         * CMsgClientFriendMsg message.
         * @member {Uint8Array} message
         * @memberof CMsgClientFriendMsg
         * @instance
         */
        CMsgClientFriendMsg.prototype.message = $util.newBuffer([]);
    
        /**
         * CMsgClientFriendMsg rtime32_server_timestamp.
         * @member {number} rtime32_server_timestamp
         * @memberof CMsgClientFriendMsg
         * @instance
         */
        CMsgClientFriendMsg.prototype.rtime32_server_timestamp = 0;
    
        /**
         * CMsgClientFriendMsg echo_to_sender.
         * @member {boolean} echo_to_sender
         * @memberof CMsgClientFriendMsg
         * @instance
         */
        CMsgClientFriendMsg.prototype.echo_to_sender = false;
    
        /**
         * Creates a new CMsgClientFriendMsg instance using the specified properties.
         * @function create
         * @memberof CMsgClientFriendMsg
         * @static
         * @param {ICMsgClientFriendMsg=} [properties] Properties to set
         * @returns {CMsgClientFriendMsg} CMsgClientFriendMsg instance
         */
        CMsgClientFriendMsg.create = function create(properties) {
            return new CMsgClientFriendMsg(properties);
        };
    
        /**
         * Encodes the specified CMsgClientFriendMsg message. Does not implicitly {@link CMsgClientFriendMsg.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientFriendMsg
         * @static
         * @param {ICMsgClientFriendMsg} message CMsgClientFriendMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientFriendMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.chat_entry_type != null && message.hasOwnProperty("chat_entry_type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.chat_entry_type);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.message);
            if (message.rtime32_server_timestamp != null && message.hasOwnProperty("rtime32_server_timestamp"))
                writer.uint32(/* id 4, wireType 5 =*/37).fixed32(message.rtime32_server_timestamp);
            if (message.echo_to_sender != null && message.hasOwnProperty("echo_to_sender"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.echo_to_sender);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientFriendMsg message, length delimited. Does not implicitly {@link CMsgClientFriendMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientFriendMsg
         * @static
         * @param {ICMsgClientFriendMsg} message CMsgClientFriendMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientFriendMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientFriendMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientFriendMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientFriendMsg} CMsgClientFriendMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientFriendMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientFriendMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.chat_entry_type = reader.int32();
                    break;
                case 3:
                    message.message = reader.bytes();
                    break;
                case 4:
                    message.rtime32_server_timestamp = reader.fixed32();
                    break;
                case 5:
                    message.echo_to_sender = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientFriendMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientFriendMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientFriendMsg} CMsgClientFriendMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientFriendMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientFriendMsg message.
         * @function verify
         * @memberof CMsgClientFriendMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientFriendMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.chat_entry_type != null && message.hasOwnProperty("chat_entry_type"))
                if (!$util.isInteger(message.chat_entry_type))
                    return "chat_entry_type: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!(message.message && typeof message.message.length === "number" || $util.isString(message.message)))
                    return "message: buffer expected";
            if (message.rtime32_server_timestamp != null && message.hasOwnProperty("rtime32_server_timestamp"))
                if (!$util.isInteger(message.rtime32_server_timestamp))
                    return "rtime32_server_timestamp: integer expected";
            if (message.echo_to_sender != null && message.hasOwnProperty("echo_to_sender"))
                if (typeof message.echo_to_sender !== "boolean")
                    return "echo_to_sender: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientFriendMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientFriendMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientFriendMsg} CMsgClientFriendMsg
         */
        CMsgClientFriendMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientFriendMsg)
                return object;
            var message = new $root.CMsgClientFriendMsg();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.chat_entry_type != null)
                message.chat_entry_type = object.chat_entry_type | 0;
            if (object.message != null)
                if (typeof object.message === "string")
                    $util.base64.decode(object.message, message.message = $util.newBuffer($util.base64.length(object.message)), 0);
                else if (object.message.length)
                    message.message = object.message;
            if (object.rtime32_server_timestamp != null)
                message.rtime32_server_timestamp = object.rtime32_server_timestamp >>> 0;
            if (object.echo_to_sender != null)
                message.echo_to_sender = Boolean(object.echo_to_sender);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientFriendMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientFriendMsg
         * @static
         * @param {CMsgClientFriendMsg} message CMsgClientFriendMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientFriendMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                object.chat_entry_type = 0;
                if (options.bytes === String)
                    object.message = "";
                else {
                    object.message = [];
                    if (options.bytes !== Array)
                        object.message = $util.newBuffer(object.message);
                }
                object.rtime32_server_timestamp = 0;
                object.echo_to_sender = false;
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.chat_entry_type != null && message.hasOwnProperty("chat_entry_type"))
                object.chat_entry_type = message.chat_entry_type;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = options.bytes === String ? $util.base64.encode(message.message, 0, message.message.length) : options.bytes === Array ? Array.prototype.slice.call(message.message) : message.message;
            if (message.rtime32_server_timestamp != null && message.hasOwnProperty("rtime32_server_timestamp"))
                object.rtime32_server_timestamp = message.rtime32_server_timestamp;
            if (message.echo_to_sender != null && message.hasOwnProperty("echo_to_sender"))
                object.echo_to_sender = message.echo_to_sender;
            return object;
        };
    
        /**
         * Converts this CMsgClientFriendMsg to JSON.
         * @function toJSON
         * @memberof CMsgClientFriendMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientFriendMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientFriendMsg;
    })();
    
    $root.CMsgClientFriendMsgIncoming = (function() {
    
        /**
         * Properties of a CMsgClientFriendMsgIncoming.
         * @exports ICMsgClientFriendMsgIncoming
         * @interface ICMsgClientFriendMsgIncoming
         * @property {number|Long|null} [steamid_from] CMsgClientFriendMsgIncoming steamid_from
         * @property {number|null} [chat_entry_type] CMsgClientFriendMsgIncoming chat_entry_type
         * @property {boolean|null} [from_limited_account] CMsgClientFriendMsgIncoming from_limited_account
         * @property {Uint8Array|null} [message] CMsgClientFriendMsgIncoming message
         * @property {number|null} [rtime32_server_timestamp] CMsgClientFriendMsgIncoming rtime32_server_timestamp
         */
    
        /**
         * Constructs a new CMsgClientFriendMsgIncoming.
         * @exports CMsgClientFriendMsgIncoming
         * @classdesc Represents a CMsgClientFriendMsgIncoming.
         * @implements ICMsgClientFriendMsgIncoming
         * @constructor
         * @param {ICMsgClientFriendMsgIncoming=} [properties] Properties to set
         */
        function CMsgClientFriendMsgIncoming(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientFriendMsgIncoming steamid_from.
         * @member {number|Long} steamid_from
         * @memberof CMsgClientFriendMsgIncoming
         * @instance
         */
        CMsgClientFriendMsgIncoming.prototype.steamid_from = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgClientFriendMsgIncoming chat_entry_type.
         * @member {number} chat_entry_type
         * @memberof CMsgClientFriendMsgIncoming
         * @instance
         */
        CMsgClientFriendMsgIncoming.prototype.chat_entry_type = 0;
    
        /**
         * CMsgClientFriendMsgIncoming from_limited_account.
         * @member {boolean} from_limited_account
         * @memberof CMsgClientFriendMsgIncoming
         * @instance
         */
        CMsgClientFriendMsgIncoming.prototype.from_limited_account = false;
    
        /**
         * CMsgClientFriendMsgIncoming message.
         * @member {Uint8Array} message
         * @memberof CMsgClientFriendMsgIncoming
         * @instance
         */
        CMsgClientFriendMsgIncoming.prototype.message = $util.newBuffer([]);
    
        /**
         * CMsgClientFriendMsgIncoming rtime32_server_timestamp.
         * @member {number} rtime32_server_timestamp
         * @memberof CMsgClientFriendMsgIncoming
         * @instance
         */
        CMsgClientFriendMsgIncoming.prototype.rtime32_server_timestamp = 0;
    
        /**
         * Creates a new CMsgClientFriendMsgIncoming instance using the specified properties.
         * @function create
         * @memberof CMsgClientFriendMsgIncoming
         * @static
         * @param {ICMsgClientFriendMsgIncoming=} [properties] Properties to set
         * @returns {CMsgClientFriendMsgIncoming} CMsgClientFriendMsgIncoming instance
         */
        CMsgClientFriendMsgIncoming.create = function create(properties) {
            return new CMsgClientFriendMsgIncoming(properties);
        };
    
        /**
         * Encodes the specified CMsgClientFriendMsgIncoming message. Does not implicitly {@link CMsgClientFriendMsgIncoming.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientFriendMsgIncoming
         * @static
         * @param {ICMsgClientFriendMsgIncoming} message CMsgClientFriendMsgIncoming message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientFriendMsgIncoming.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid_from != null && message.hasOwnProperty("steamid_from"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid_from);
            if (message.chat_entry_type != null && message.hasOwnProperty("chat_entry_type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.chat_entry_type);
            if (message.from_limited_account != null && message.hasOwnProperty("from_limited_account"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.from_limited_account);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.message);
            if (message.rtime32_server_timestamp != null && message.hasOwnProperty("rtime32_server_timestamp"))
                writer.uint32(/* id 5, wireType 5 =*/45).fixed32(message.rtime32_server_timestamp);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientFriendMsgIncoming message, length delimited. Does not implicitly {@link CMsgClientFriendMsgIncoming.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientFriendMsgIncoming
         * @static
         * @param {ICMsgClientFriendMsgIncoming} message CMsgClientFriendMsgIncoming message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientFriendMsgIncoming.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientFriendMsgIncoming message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientFriendMsgIncoming
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientFriendMsgIncoming} CMsgClientFriendMsgIncoming
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientFriendMsgIncoming.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientFriendMsgIncoming();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid_from = reader.fixed64();
                    break;
                case 2:
                    message.chat_entry_type = reader.int32();
                    break;
                case 3:
                    message.from_limited_account = reader.bool();
                    break;
                case 4:
                    message.message = reader.bytes();
                    break;
                case 5:
                    message.rtime32_server_timestamp = reader.fixed32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientFriendMsgIncoming message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientFriendMsgIncoming
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientFriendMsgIncoming} CMsgClientFriendMsgIncoming
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientFriendMsgIncoming.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientFriendMsgIncoming message.
         * @function verify
         * @memberof CMsgClientFriendMsgIncoming
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientFriendMsgIncoming.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid_from != null && message.hasOwnProperty("steamid_from"))
                if (!$util.isInteger(message.steamid_from) && !(message.steamid_from && $util.isInteger(message.steamid_from.low) && $util.isInteger(message.steamid_from.high)))
                    return "steamid_from: integer|Long expected";
            if (message.chat_entry_type != null && message.hasOwnProperty("chat_entry_type"))
                if (!$util.isInteger(message.chat_entry_type))
                    return "chat_entry_type: integer expected";
            if (message.from_limited_account != null && message.hasOwnProperty("from_limited_account"))
                if (typeof message.from_limited_account !== "boolean")
                    return "from_limited_account: boolean expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!(message.message && typeof message.message.length === "number" || $util.isString(message.message)))
                    return "message: buffer expected";
            if (message.rtime32_server_timestamp != null && message.hasOwnProperty("rtime32_server_timestamp"))
                if (!$util.isInteger(message.rtime32_server_timestamp))
                    return "rtime32_server_timestamp: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientFriendMsgIncoming message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientFriendMsgIncoming
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientFriendMsgIncoming} CMsgClientFriendMsgIncoming
         */
        CMsgClientFriendMsgIncoming.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientFriendMsgIncoming)
                return object;
            var message = new $root.CMsgClientFriendMsgIncoming();
            if (object.steamid_from != null)
                if ($util.Long)
                    (message.steamid_from = $util.Long.fromValue(object.steamid_from)).unsigned = false;
                else if (typeof object.steamid_from === "string")
                    message.steamid_from = parseInt(object.steamid_from, 10);
                else if (typeof object.steamid_from === "number")
                    message.steamid_from = object.steamid_from;
                else if (typeof object.steamid_from === "object")
                    message.steamid_from = new $util.LongBits(object.steamid_from.low >>> 0, object.steamid_from.high >>> 0).toNumber();
            if (object.chat_entry_type != null)
                message.chat_entry_type = object.chat_entry_type | 0;
            if (object.from_limited_account != null)
                message.from_limited_account = Boolean(object.from_limited_account);
            if (object.message != null)
                if (typeof object.message === "string")
                    $util.base64.decode(object.message, message.message = $util.newBuffer($util.base64.length(object.message)), 0);
                else if (object.message.length)
                    message.message = object.message;
            if (object.rtime32_server_timestamp != null)
                message.rtime32_server_timestamp = object.rtime32_server_timestamp >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientFriendMsgIncoming message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientFriendMsgIncoming
         * @static
         * @param {CMsgClientFriendMsgIncoming} message CMsgClientFriendMsgIncoming
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientFriendMsgIncoming.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid_from = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid_from = options.longs === String ? "0" : 0;
                object.chat_entry_type = 0;
                object.from_limited_account = false;
                if (options.bytes === String)
                    object.message = "";
                else {
                    object.message = [];
                    if (options.bytes !== Array)
                        object.message = $util.newBuffer(object.message);
                }
                object.rtime32_server_timestamp = 0;
            }
            if (message.steamid_from != null && message.hasOwnProperty("steamid_from"))
                if (typeof message.steamid_from === "number")
                    object.steamid_from = options.longs === String ? String(message.steamid_from) : message.steamid_from;
                else
                    object.steamid_from = options.longs === String ? $util.Long.prototype.toString.call(message.steamid_from) : options.longs === Number ? new $util.LongBits(message.steamid_from.low >>> 0, message.steamid_from.high >>> 0).toNumber() : message.steamid_from;
            if (message.chat_entry_type != null && message.hasOwnProperty("chat_entry_type"))
                object.chat_entry_type = message.chat_entry_type;
            if (message.from_limited_account != null && message.hasOwnProperty("from_limited_account"))
                object.from_limited_account = message.from_limited_account;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = options.bytes === String ? $util.base64.encode(message.message, 0, message.message.length) : options.bytes === Array ? Array.prototype.slice.call(message.message) : message.message;
            if (message.rtime32_server_timestamp != null && message.hasOwnProperty("rtime32_server_timestamp"))
                object.rtime32_server_timestamp = message.rtime32_server_timestamp;
            return object;
        };
    
        /**
         * Converts this CMsgClientFriendMsgIncoming to JSON.
         * @function toJSON
         * @memberof CMsgClientFriendMsgIncoming
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientFriendMsgIncoming.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientFriendMsgIncoming;
    })();
    
    $root.CMsgClientAddFriend = (function() {
    
        /**
         * Properties of a CMsgClientAddFriend.
         * @exports ICMsgClientAddFriend
         * @interface ICMsgClientAddFriend
         * @property {number|Long|null} [steamid_to_add] CMsgClientAddFriend steamid_to_add
         * @property {string|null} [accountname_or_email_to_add] CMsgClientAddFriend accountname_or_email_to_add
         */
    
        /**
         * Constructs a new CMsgClientAddFriend.
         * @exports CMsgClientAddFriend
         * @classdesc Represents a CMsgClientAddFriend.
         * @implements ICMsgClientAddFriend
         * @constructor
         * @param {ICMsgClientAddFriend=} [properties] Properties to set
         */
        function CMsgClientAddFriend(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientAddFriend steamid_to_add.
         * @member {number|Long} steamid_to_add
         * @memberof CMsgClientAddFriend
         * @instance
         */
        CMsgClientAddFriend.prototype.steamid_to_add = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgClientAddFriend accountname_or_email_to_add.
         * @member {string} accountname_or_email_to_add
         * @memberof CMsgClientAddFriend
         * @instance
         */
        CMsgClientAddFriend.prototype.accountname_or_email_to_add = "";
    
        /**
         * Creates a new CMsgClientAddFriend instance using the specified properties.
         * @function create
         * @memberof CMsgClientAddFriend
         * @static
         * @param {ICMsgClientAddFriend=} [properties] Properties to set
         * @returns {CMsgClientAddFriend} CMsgClientAddFriend instance
         */
        CMsgClientAddFriend.create = function create(properties) {
            return new CMsgClientAddFriend(properties);
        };
    
        /**
         * Encodes the specified CMsgClientAddFriend message. Does not implicitly {@link CMsgClientAddFriend.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientAddFriend
         * @static
         * @param {ICMsgClientAddFriend} message CMsgClientAddFriend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientAddFriend.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid_to_add != null && message.hasOwnProperty("steamid_to_add"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid_to_add);
            if (message.accountname_or_email_to_add != null && message.hasOwnProperty("accountname_or_email_to_add"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.accountname_or_email_to_add);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientAddFriend message, length delimited. Does not implicitly {@link CMsgClientAddFriend.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientAddFriend
         * @static
         * @param {ICMsgClientAddFriend} message CMsgClientAddFriend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientAddFriend.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientAddFriend message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientAddFriend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientAddFriend} CMsgClientAddFriend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientAddFriend.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientAddFriend();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid_to_add = reader.fixed64();
                    break;
                case 2:
                    message.accountname_or_email_to_add = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientAddFriend message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientAddFriend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientAddFriend} CMsgClientAddFriend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientAddFriend.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientAddFriend message.
         * @function verify
         * @memberof CMsgClientAddFriend
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientAddFriend.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid_to_add != null && message.hasOwnProperty("steamid_to_add"))
                if (!$util.isInteger(message.steamid_to_add) && !(message.steamid_to_add && $util.isInteger(message.steamid_to_add.low) && $util.isInteger(message.steamid_to_add.high)))
                    return "steamid_to_add: integer|Long expected";
            if (message.accountname_or_email_to_add != null && message.hasOwnProperty("accountname_or_email_to_add"))
                if (!$util.isString(message.accountname_or_email_to_add))
                    return "accountname_or_email_to_add: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientAddFriend message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientAddFriend
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientAddFriend} CMsgClientAddFriend
         */
        CMsgClientAddFriend.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientAddFriend)
                return object;
            var message = new $root.CMsgClientAddFriend();
            if (object.steamid_to_add != null)
                if ($util.Long)
                    (message.steamid_to_add = $util.Long.fromValue(object.steamid_to_add)).unsigned = false;
                else if (typeof object.steamid_to_add === "string")
                    message.steamid_to_add = parseInt(object.steamid_to_add, 10);
                else if (typeof object.steamid_to_add === "number")
                    message.steamid_to_add = object.steamid_to_add;
                else if (typeof object.steamid_to_add === "object")
                    message.steamid_to_add = new $util.LongBits(object.steamid_to_add.low >>> 0, object.steamid_to_add.high >>> 0).toNumber();
            if (object.accountname_or_email_to_add != null)
                message.accountname_or_email_to_add = String(object.accountname_or_email_to_add);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientAddFriend message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientAddFriend
         * @static
         * @param {CMsgClientAddFriend} message CMsgClientAddFriend
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientAddFriend.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid_to_add = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid_to_add = options.longs === String ? "0" : 0;
                object.accountname_or_email_to_add = "";
            }
            if (message.steamid_to_add != null && message.hasOwnProperty("steamid_to_add"))
                if (typeof message.steamid_to_add === "number")
                    object.steamid_to_add = options.longs === String ? String(message.steamid_to_add) : message.steamid_to_add;
                else
                    object.steamid_to_add = options.longs === String ? $util.Long.prototype.toString.call(message.steamid_to_add) : options.longs === Number ? new $util.LongBits(message.steamid_to_add.low >>> 0, message.steamid_to_add.high >>> 0).toNumber() : message.steamid_to_add;
            if (message.accountname_or_email_to_add != null && message.hasOwnProperty("accountname_or_email_to_add"))
                object.accountname_or_email_to_add = message.accountname_or_email_to_add;
            return object;
        };
    
        /**
         * Converts this CMsgClientAddFriend to JSON.
         * @function toJSON
         * @memberof CMsgClientAddFriend
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientAddFriend.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientAddFriend;
    })();
    
    $root.CMsgClientAddFriendResponse = (function() {
    
        /**
         * Properties of a CMsgClientAddFriendResponse.
         * @exports ICMsgClientAddFriendResponse
         * @interface ICMsgClientAddFriendResponse
         * @property {number|null} [eresult] CMsgClientAddFriendResponse eresult
         * @property {number|Long|null} [steam_id_added] CMsgClientAddFriendResponse steam_id_added
         * @property {string|null} [persona_name_added] CMsgClientAddFriendResponse persona_name_added
         */
    
        /**
         * Constructs a new CMsgClientAddFriendResponse.
         * @exports CMsgClientAddFriendResponse
         * @classdesc Represents a CMsgClientAddFriendResponse.
         * @implements ICMsgClientAddFriendResponse
         * @constructor
         * @param {ICMsgClientAddFriendResponse=} [properties] Properties to set
         */
        function CMsgClientAddFriendResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientAddFriendResponse eresult.
         * @member {number} eresult
         * @memberof CMsgClientAddFriendResponse
         * @instance
         */
        CMsgClientAddFriendResponse.prototype.eresult = 2;
    
        /**
         * CMsgClientAddFriendResponse steam_id_added.
         * @member {number|Long} steam_id_added
         * @memberof CMsgClientAddFriendResponse
         * @instance
         */
        CMsgClientAddFriendResponse.prototype.steam_id_added = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgClientAddFriendResponse persona_name_added.
         * @member {string} persona_name_added
         * @memberof CMsgClientAddFriendResponse
         * @instance
         */
        CMsgClientAddFriendResponse.prototype.persona_name_added = "";
    
        /**
         * Creates a new CMsgClientAddFriendResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientAddFriendResponse
         * @static
         * @param {ICMsgClientAddFriendResponse=} [properties] Properties to set
         * @returns {CMsgClientAddFriendResponse} CMsgClientAddFriendResponse instance
         */
        CMsgClientAddFriendResponse.create = function create(properties) {
            return new CMsgClientAddFriendResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientAddFriendResponse message. Does not implicitly {@link CMsgClientAddFriendResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientAddFriendResponse
         * @static
         * @param {ICMsgClientAddFriendResponse} message CMsgClientAddFriendResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientAddFriendResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.eresult);
            if (message.steam_id_added != null && message.hasOwnProperty("steam_id_added"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.steam_id_added);
            if (message.persona_name_added != null && message.hasOwnProperty("persona_name_added"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.persona_name_added);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientAddFriendResponse message, length delimited. Does not implicitly {@link CMsgClientAddFriendResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientAddFriendResponse
         * @static
         * @param {ICMsgClientAddFriendResponse} message CMsgClientAddFriendResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientAddFriendResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientAddFriendResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientAddFriendResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientAddFriendResponse} CMsgClientAddFriendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientAddFriendResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientAddFriendResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eresult = reader.int32();
                    break;
                case 2:
                    message.steam_id_added = reader.fixed64();
                    break;
                case 3:
                    message.persona_name_added = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientAddFriendResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientAddFriendResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientAddFriendResponse} CMsgClientAddFriendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientAddFriendResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientAddFriendResponse message.
         * @function verify
         * @memberof CMsgClientAddFriendResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientAddFriendResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                if (!$util.isInteger(message.eresult))
                    return "eresult: integer expected";
            if (message.steam_id_added != null && message.hasOwnProperty("steam_id_added"))
                if (!$util.isInteger(message.steam_id_added) && !(message.steam_id_added && $util.isInteger(message.steam_id_added.low) && $util.isInteger(message.steam_id_added.high)))
                    return "steam_id_added: integer|Long expected";
            if (message.persona_name_added != null && message.hasOwnProperty("persona_name_added"))
                if (!$util.isString(message.persona_name_added))
                    return "persona_name_added: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientAddFriendResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientAddFriendResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientAddFriendResponse} CMsgClientAddFriendResponse
         */
        CMsgClientAddFriendResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientAddFriendResponse)
                return object;
            var message = new $root.CMsgClientAddFriendResponse();
            if (object.eresult != null)
                message.eresult = object.eresult | 0;
            if (object.steam_id_added != null)
                if ($util.Long)
                    (message.steam_id_added = $util.Long.fromValue(object.steam_id_added)).unsigned = false;
                else if (typeof object.steam_id_added === "string")
                    message.steam_id_added = parseInt(object.steam_id_added, 10);
                else if (typeof object.steam_id_added === "number")
                    message.steam_id_added = object.steam_id_added;
                else if (typeof object.steam_id_added === "object")
                    message.steam_id_added = new $util.LongBits(object.steam_id_added.low >>> 0, object.steam_id_added.high >>> 0).toNumber();
            if (object.persona_name_added != null)
                message.persona_name_added = String(object.persona_name_added);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientAddFriendResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientAddFriendResponse
         * @static
         * @param {CMsgClientAddFriendResponse} message CMsgClientAddFriendResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientAddFriendResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eresult = 2;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steam_id_added = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steam_id_added = options.longs === String ? "0" : 0;
                object.persona_name_added = "";
            }
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                object.eresult = message.eresult;
            if (message.steam_id_added != null && message.hasOwnProperty("steam_id_added"))
                if (typeof message.steam_id_added === "number")
                    object.steam_id_added = options.longs === String ? String(message.steam_id_added) : message.steam_id_added;
                else
                    object.steam_id_added = options.longs === String ? $util.Long.prototype.toString.call(message.steam_id_added) : options.longs === Number ? new $util.LongBits(message.steam_id_added.low >>> 0, message.steam_id_added.high >>> 0).toNumber() : message.steam_id_added;
            if (message.persona_name_added != null && message.hasOwnProperty("persona_name_added"))
                object.persona_name_added = message.persona_name_added;
            return object;
        };
    
        /**
         * Converts this CMsgClientAddFriendResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientAddFriendResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientAddFriendResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientAddFriendResponse;
    })();
    
    $root.CMsgClientRemoveFriend = (function() {
    
        /**
         * Properties of a CMsgClientRemoveFriend.
         * @exports ICMsgClientRemoveFriend
         * @interface ICMsgClientRemoveFriend
         * @property {number|Long|null} [friendid] CMsgClientRemoveFriend friendid
         */
    
        /**
         * Constructs a new CMsgClientRemoveFriend.
         * @exports CMsgClientRemoveFriend
         * @classdesc Represents a CMsgClientRemoveFriend.
         * @implements ICMsgClientRemoveFriend
         * @constructor
         * @param {ICMsgClientRemoveFriend=} [properties] Properties to set
         */
        function CMsgClientRemoveFriend(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientRemoveFriend friendid.
         * @member {number|Long} friendid
         * @memberof CMsgClientRemoveFriend
         * @instance
         */
        CMsgClientRemoveFriend.prototype.friendid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CMsgClientRemoveFriend instance using the specified properties.
         * @function create
         * @memberof CMsgClientRemoveFriend
         * @static
         * @param {ICMsgClientRemoveFriend=} [properties] Properties to set
         * @returns {CMsgClientRemoveFriend} CMsgClientRemoveFriend instance
         */
        CMsgClientRemoveFriend.create = function create(properties) {
            return new CMsgClientRemoveFriend(properties);
        };
    
        /**
         * Encodes the specified CMsgClientRemoveFriend message. Does not implicitly {@link CMsgClientRemoveFriend.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientRemoveFriend
         * @static
         * @param {ICMsgClientRemoveFriend} message CMsgClientRemoveFriend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientRemoveFriend.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.friendid != null && message.hasOwnProperty("friendid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.friendid);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientRemoveFriend message, length delimited. Does not implicitly {@link CMsgClientRemoveFriend.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientRemoveFriend
         * @static
         * @param {ICMsgClientRemoveFriend} message CMsgClientRemoveFriend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientRemoveFriend.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientRemoveFriend message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientRemoveFriend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientRemoveFriend} CMsgClientRemoveFriend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientRemoveFriend.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientRemoveFriend();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.friendid = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientRemoveFriend message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientRemoveFriend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientRemoveFriend} CMsgClientRemoveFriend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientRemoveFriend.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientRemoveFriend message.
         * @function verify
         * @memberof CMsgClientRemoveFriend
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientRemoveFriend.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.friendid != null && message.hasOwnProperty("friendid"))
                if (!$util.isInteger(message.friendid) && !(message.friendid && $util.isInteger(message.friendid.low) && $util.isInteger(message.friendid.high)))
                    return "friendid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientRemoveFriend message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientRemoveFriend
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientRemoveFriend} CMsgClientRemoveFriend
         */
        CMsgClientRemoveFriend.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientRemoveFriend)
                return object;
            var message = new $root.CMsgClientRemoveFriend();
            if (object.friendid != null)
                if ($util.Long)
                    (message.friendid = $util.Long.fromValue(object.friendid)).unsigned = false;
                else if (typeof object.friendid === "string")
                    message.friendid = parseInt(object.friendid, 10);
                else if (typeof object.friendid === "number")
                    message.friendid = object.friendid;
                else if (typeof object.friendid === "object")
                    message.friendid = new $util.LongBits(object.friendid.low >>> 0, object.friendid.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientRemoveFriend message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientRemoveFriend
         * @static
         * @param {CMsgClientRemoveFriend} message CMsgClientRemoveFriend
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientRemoveFriend.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.friendid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.friendid = options.longs === String ? "0" : 0;
            if (message.friendid != null && message.hasOwnProperty("friendid"))
                if (typeof message.friendid === "number")
                    object.friendid = options.longs === String ? String(message.friendid) : message.friendid;
                else
                    object.friendid = options.longs === String ? $util.Long.prototype.toString.call(message.friendid) : options.longs === Number ? new $util.LongBits(message.friendid.low >>> 0, message.friendid.high >>> 0).toNumber() : message.friendid;
            return object;
        };
    
        /**
         * Converts this CMsgClientRemoveFriend to JSON.
         * @function toJSON
         * @memberof CMsgClientRemoveFriend
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientRemoveFriend.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientRemoveFriend;
    })();
    
    $root.CMsgClientHideFriend = (function() {
    
        /**
         * Properties of a CMsgClientHideFriend.
         * @exports ICMsgClientHideFriend
         * @interface ICMsgClientHideFriend
         * @property {number|Long|null} [friendid] CMsgClientHideFriend friendid
         * @property {boolean|null} [hide] CMsgClientHideFriend hide
         */
    
        /**
         * Constructs a new CMsgClientHideFriend.
         * @exports CMsgClientHideFriend
         * @classdesc Represents a CMsgClientHideFriend.
         * @implements ICMsgClientHideFriend
         * @constructor
         * @param {ICMsgClientHideFriend=} [properties] Properties to set
         */
        function CMsgClientHideFriend(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientHideFriend friendid.
         * @member {number|Long} friendid
         * @memberof CMsgClientHideFriend
         * @instance
         */
        CMsgClientHideFriend.prototype.friendid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgClientHideFriend hide.
         * @member {boolean} hide
         * @memberof CMsgClientHideFriend
         * @instance
         */
        CMsgClientHideFriend.prototype.hide = false;
    
        /**
         * Creates a new CMsgClientHideFriend instance using the specified properties.
         * @function create
         * @memberof CMsgClientHideFriend
         * @static
         * @param {ICMsgClientHideFriend=} [properties] Properties to set
         * @returns {CMsgClientHideFriend} CMsgClientHideFriend instance
         */
        CMsgClientHideFriend.create = function create(properties) {
            return new CMsgClientHideFriend(properties);
        };
    
        /**
         * Encodes the specified CMsgClientHideFriend message. Does not implicitly {@link CMsgClientHideFriend.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientHideFriend
         * @static
         * @param {ICMsgClientHideFriend} message CMsgClientHideFriend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientHideFriend.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.friendid != null && message.hasOwnProperty("friendid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.friendid);
            if (message.hide != null && message.hasOwnProperty("hide"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.hide);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientHideFriend message, length delimited. Does not implicitly {@link CMsgClientHideFriend.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientHideFriend
         * @static
         * @param {ICMsgClientHideFriend} message CMsgClientHideFriend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientHideFriend.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientHideFriend message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientHideFriend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientHideFriend} CMsgClientHideFriend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientHideFriend.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientHideFriend();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.friendid = reader.fixed64();
                    break;
                case 2:
                    message.hide = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientHideFriend message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientHideFriend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientHideFriend} CMsgClientHideFriend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientHideFriend.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientHideFriend message.
         * @function verify
         * @memberof CMsgClientHideFriend
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientHideFriend.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.friendid != null && message.hasOwnProperty("friendid"))
                if (!$util.isInteger(message.friendid) && !(message.friendid && $util.isInteger(message.friendid.low) && $util.isInteger(message.friendid.high)))
                    return "friendid: integer|Long expected";
            if (message.hide != null && message.hasOwnProperty("hide"))
                if (typeof message.hide !== "boolean")
                    return "hide: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientHideFriend message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientHideFriend
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientHideFriend} CMsgClientHideFriend
         */
        CMsgClientHideFriend.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientHideFriend)
                return object;
            var message = new $root.CMsgClientHideFriend();
            if (object.friendid != null)
                if ($util.Long)
                    (message.friendid = $util.Long.fromValue(object.friendid)).unsigned = false;
                else if (typeof object.friendid === "string")
                    message.friendid = parseInt(object.friendid, 10);
                else if (typeof object.friendid === "number")
                    message.friendid = object.friendid;
                else if (typeof object.friendid === "object")
                    message.friendid = new $util.LongBits(object.friendid.low >>> 0, object.friendid.high >>> 0).toNumber();
            if (object.hide != null)
                message.hide = Boolean(object.hide);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientHideFriend message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientHideFriend
         * @static
         * @param {CMsgClientHideFriend} message CMsgClientHideFriend
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientHideFriend.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.friendid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.friendid = options.longs === String ? "0" : 0;
                object.hide = false;
            }
            if (message.friendid != null && message.hasOwnProperty("friendid"))
                if (typeof message.friendid === "number")
                    object.friendid = options.longs === String ? String(message.friendid) : message.friendid;
                else
                    object.friendid = options.longs === String ? $util.Long.prototype.toString.call(message.friendid) : options.longs === Number ? new $util.LongBits(message.friendid.low >>> 0, message.friendid.high >>> 0).toNumber() : message.friendid;
            if (message.hide != null && message.hasOwnProperty("hide"))
                object.hide = message.hide;
            return object;
        };
    
        /**
         * Converts this CMsgClientHideFriend to JSON.
         * @function toJSON
         * @memberof CMsgClientHideFriend
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientHideFriend.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientHideFriend;
    })();
    
    $root.CMsgClientFriendsList = (function() {
    
        /**
         * Properties of a CMsgClientFriendsList.
         * @exports ICMsgClientFriendsList
         * @interface ICMsgClientFriendsList
         * @property {boolean|null} [bincremental] CMsgClientFriendsList bincremental
         * @property {Array.<CMsgClientFriendsList.IFriend>|null} [friends] CMsgClientFriendsList friends
         * @property {number|null} [max_friend_count] CMsgClientFriendsList max_friend_count
         * @property {number|null} [active_friend_count] CMsgClientFriendsList active_friend_count
         * @property {boolean|null} [friends_limit_hit] CMsgClientFriendsList friends_limit_hit
         */
    
        /**
         * Constructs a new CMsgClientFriendsList.
         * @exports CMsgClientFriendsList
         * @classdesc Represents a CMsgClientFriendsList.
         * @implements ICMsgClientFriendsList
         * @constructor
         * @param {ICMsgClientFriendsList=} [properties] Properties to set
         */
        function CMsgClientFriendsList(properties) {
            this.friends = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientFriendsList bincremental.
         * @member {boolean} bincremental
         * @memberof CMsgClientFriendsList
         * @instance
         */
        CMsgClientFriendsList.prototype.bincremental = false;
    
        /**
         * CMsgClientFriendsList friends.
         * @member {Array.<CMsgClientFriendsList.IFriend>} friends
         * @memberof CMsgClientFriendsList
         * @instance
         */
        CMsgClientFriendsList.prototype.friends = $util.emptyArray;
    
        /**
         * CMsgClientFriendsList max_friend_count.
         * @member {number} max_friend_count
         * @memberof CMsgClientFriendsList
         * @instance
         */
        CMsgClientFriendsList.prototype.max_friend_count = 0;
    
        /**
         * CMsgClientFriendsList active_friend_count.
         * @member {number} active_friend_count
         * @memberof CMsgClientFriendsList
         * @instance
         */
        CMsgClientFriendsList.prototype.active_friend_count = 0;
    
        /**
         * CMsgClientFriendsList friends_limit_hit.
         * @member {boolean} friends_limit_hit
         * @memberof CMsgClientFriendsList
         * @instance
         */
        CMsgClientFriendsList.prototype.friends_limit_hit = false;
    
        /**
         * Creates a new CMsgClientFriendsList instance using the specified properties.
         * @function create
         * @memberof CMsgClientFriendsList
         * @static
         * @param {ICMsgClientFriendsList=} [properties] Properties to set
         * @returns {CMsgClientFriendsList} CMsgClientFriendsList instance
         */
        CMsgClientFriendsList.create = function create(properties) {
            return new CMsgClientFriendsList(properties);
        };
    
        /**
         * Encodes the specified CMsgClientFriendsList message. Does not implicitly {@link CMsgClientFriendsList.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientFriendsList
         * @static
         * @param {ICMsgClientFriendsList} message CMsgClientFriendsList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientFriendsList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bincremental != null && message.hasOwnProperty("bincremental"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.bincremental);
            if (message.friends != null && message.friends.length)
                for (var i = 0; i < message.friends.length; ++i)
                    $root.CMsgClientFriendsList.Friend.encode(message.friends[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.max_friend_count != null && message.hasOwnProperty("max_friend_count"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.max_friend_count);
            if (message.active_friend_count != null && message.hasOwnProperty("active_friend_count"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.active_friend_count);
            if (message.friends_limit_hit != null && message.hasOwnProperty("friends_limit_hit"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.friends_limit_hit);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientFriendsList message, length delimited. Does not implicitly {@link CMsgClientFriendsList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientFriendsList
         * @static
         * @param {ICMsgClientFriendsList} message CMsgClientFriendsList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientFriendsList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientFriendsList message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientFriendsList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientFriendsList} CMsgClientFriendsList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientFriendsList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientFriendsList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bincremental = reader.bool();
                    break;
                case 2:
                    if (!(message.friends && message.friends.length))
                        message.friends = [];
                    message.friends.push($root.CMsgClientFriendsList.Friend.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.max_friend_count = reader.uint32();
                    break;
                case 4:
                    message.active_friend_count = reader.uint32();
                    break;
                case 5:
                    message.friends_limit_hit = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientFriendsList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientFriendsList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientFriendsList} CMsgClientFriendsList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientFriendsList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientFriendsList message.
         * @function verify
         * @memberof CMsgClientFriendsList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientFriendsList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bincremental != null && message.hasOwnProperty("bincremental"))
                if (typeof message.bincremental !== "boolean")
                    return "bincremental: boolean expected";
            if (message.friends != null && message.hasOwnProperty("friends")) {
                if (!Array.isArray(message.friends))
                    return "friends: array expected";
                for (var i = 0; i < message.friends.length; ++i) {
                    var error = $root.CMsgClientFriendsList.Friend.verify(message.friends[i]);
                    if (error)
                        return "friends." + error;
                }
            }
            if (message.max_friend_count != null && message.hasOwnProperty("max_friend_count"))
                if (!$util.isInteger(message.max_friend_count))
                    return "max_friend_count: integer expected";
            if (message.active_friend_count != null && message.hasOwnProperty("active_friend_count"))
                if (!$util.isInteger(message.active_friend_count))
                    return "active_friend_count: integer expected";
            if (message.friends_limit_hit != null && message.hasOwnProperty("friends_limit_hit"))
                if (typeof message.friends_limit_hit !== "boolean")
                    return "friends_limit_hit: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientFriendsList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientFriendsList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientFriendsList} CMsgClientFriendsList
         */
        CMsgClientFriendsList.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientFriendsList)
                return object;
            var message = new $root.CMsgClientFriendsList();
            if (object.bincremental != null)
                message.bincremental = Boolean(object.bincremental);
            if (object.friends) {
                if (!Array.isArray(object.friends))
                    throw TypeError(".CMsgClientFriendsList.friends: array expected");
                message.friends = [];
                for (var i = 0; i < object.friends.length; ++i) {
                    if (typeof object.friends[i] !== "object")
                        throw TypeError(".CMsgClientFriendsList.friends: object expected");
                    message.friends[i] = $root.CMsgClientFriendsList.Friend.fromObject(object.friends[i]);
                }
            }
            if (object.max_friend_count != null)
                message.max_friend_count = object.max_friend_count >>> 0;
            if (object.active_friend_count != null)
                message.active_friend_count = object.active_friend_count >>> 0;
            if (object.friends_limit_hit != null)
                message.friends_limit_hit = Boolean(object.friends_limit_hit);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientFriendsList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientFriendsList
         * @static
         * @param {CMsgClientFriendsList} message CMsgClientFriendsList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientFriendsList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.friends = [];
            if (options.defaults) {
                object.bincremental = false;
                object.max_friend_count = 0;
                object.active_friend_count = 0;
                object.friends_limit_hit = false;
            }
            if (message.bincremental != null && message.hasOwnProperty("bincremental"))
                object.bincremental = message.bincremental;
            if (message.friends && message.friends.length) {
                object.friends = [];
                for (var j = 0; j < message.friends.length; ++j)
                    object.friends[j] = $root.CMsgClientFriendsList.Friend.toObject(message.friends[j], options);
            }
            if (message.max_friend_count != null && message.hasOwnProperty("max_friend_count"))
                object.max_friend_count = message.max_friend_count;
            if (message.active_friend_count != null && message.hasOwnProperty("active_friend_count"))
                object.active_friend_count = message.active_friend_count;
            if (message.friends_limit_hit != null && message.hasOwnProperty("friends_limit_hit"))
                object.friends_limit_hit = message.friends_limit_hit;
            return object;
        };
    
        /**
         * Converts this CMsgClientFriendsList to JSON.
         * @function toJSON
         * @memberof CMsgClientFriendsList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientFriendsList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgClientFriendsList.Friend = (function() {
    
            /**
             * Properties of a Friend.
             * @memberof CMsgClientFriendsList
             * @interface IFriend
             * @property {number|Long|null} [ulfriendid] Friend ulfriendid
             * @property {number|null} [efriendrelationship] Friend efriendrelationship
             */
    
            /**
             * Constructs a new Friend.
             * @memberof CMsgClientFriendsList
             * @classdesc Represents a Friend.
             * @implements IFriend
             * @constructor
             * @param {CMsgClientFriendsList.IFriend=} [properties] Properties to set
             */
            function Friend(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Friend ulfriendid.
             * @member {number|Long} ulfriendid
             * @memberof CMsgClientFriendsList.Friend
             * @instance
             */
            Friend.prototype.ulfriendid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Friend efriendrelationship.
             * @member {number} efriendrelationship
             * @memberof CMsgClientFriendsList.Friend
             * @instance
             */
            Friend.prototype.efriendrelationship = 0;
    
            /**
             * Creates a new Friend instance using the specified properties.
             * @function create
             * @memberof CMsgClientFriendsList.Friend
             * @static
             * @param {CMsgClientFriendsList.IFriend=} [properties] Properties to set
             * @returns {CMsgClientFriendsList.Friend} Friend instance
             */
            Friend.create = function create(properties) {
                return new Friend(properties);
            };
    
            /**
             * Encodes the specified Friend message. Does not implicitly {@link CMsgClientFriendsList.Friend.verify|verify} messages.
             * @function encode
             * @memberof CMsgClientFriendsList.Friend
             * @static
             * @param {CMsgClientFriendsList.IFriend} message Friend message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Friend.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ulfriendid != null && message.hasOwnProperty("ulfriendid"))
                    writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.ulfriendid);
                if (message.efriendrelationship != null && message.hasOwnProperty("efriendrelationship"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.efriendrelationship);
                return writer;
            };
    
            /**
             * Encodes the specified Friend message, length delimited. Does not implicitly {@link CMsgClientFriendsList.Friend.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgClientFriendsList.Friend
             * @static
             * @param {CMsgClientFriendsList.IFriend} message Friend message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Friend.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Friend message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgClientFriendsList.Friend
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgClientFriendsList.Friend} Friend
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Friend.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientFriendsList.Friend();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ulfriendid = reader.fixed64();
                        break;
                    case 2:
                        message.efriendrelationship = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Friend message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgClientFriendsList.Friend
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgClientFriendsList.Friend} Friend
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Friend.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Friend message.
             * @function verify
             * @memberof CMsgClientFriendsList.Friend
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Friend.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ulfriendid != null && message.hasOwnProperty("ulfriendid"))
                    if (!$util.isInteger(message.ulfriendid) && !(message.ulfriendid && $util.isInteger(message.ulfriendid.low) && $util.isInteger(message.ulfriendid.high)))
                        return "ulfriendid: integer|Long expected";
                if (message.efriendrelationship != null && message.hasOwnProperty("efriendrelationship"))
                    if (!$util.isInteger(message.efriendrelationship))
                        return "efriendrelationship: integer expected";
                return null;
            };
    
            /**
             * Creates a Friend message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgClientFriendsList.Friend
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgClientFriendsList.Friend} Friend
             */
            Friend.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgClientFriendsList.Friend)
                    return object;
                var message = new $root.CMsgClientFriendsList.Friend();
                if (object.ulfriendid != null)
                    if ($util.Long)
                        (message.ulfriendid = $util.Long.fromValue(object.ulfriendid)).unsigned = false;
                    else if (typeof object.ulfriendid === "string")
                        message.ulfriendid = parseInt(object.ulfriendid, 10);
                    else if (typeof object.ulfriendid === "number")
                        message.ulfriendid = object.ulfriendid;
                    else if (typeof object.ulfriendid === "object")
                        message.ulfriendid = new $util.LongBits(object.ulfriendid.low >>> 0, object.ulfriendid.high >>> 0).toNumber();
                if (object.efriendrelationship != null)
                    message.efriendrelationship = object.efriendrelationship >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Friend message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgClientFriendsList.Friend
             * @static
             * @param {CMsgClientFriendsList.Friend} message Friend
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Friend.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.ulfriendid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.ulfriendid = options.longs === String ? "0" : 0;
                    object.efriendrelationship = 0;
                }
                if (message.ulfriendid != null && message.hasOwnProperty("ulfriendid"))
                    if (typeof message.ulfriendid === "number")
                        object.ulfriendid = options.longs === String ? String(message.ulfriendid) : message.ulfriendid;
                    else
                        object.ulfriendid = options.longs === String ? $util.Long.prototype.toString.call(message.ulfriendid) : options.longs === Number ? new $util.LongBits(message.ulfriendid.low >>> 0, message.ulfriendid.high >>> 0).toNumber() : message.ulfriendid;
                if (message.efriendrelationship != null && message.hasOwnProperty("efriendrelationship"))
                    object.efriendrelationship = message.efriendrelationship;
                return object;
            };
    
            /**
             * Converts this Friend to JSON.
             * @function toJSON
             * @memberof CMsgClientFriendsList.Friend
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Friend.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Friend;
        })();
    
        return CMsgClientFriendsList;
    })();
    
    $root.CMsgClientFriendsGroupsList = (function() {
    
        /**
         * Properties of a CMsgClientFriendsGroupsList.
         * @exports ICMsgClientFriendsGroupsList
         * @interface ICMsgClientFriendsGroupsList
         * @property {boolean|null} [bremoval] CMsgClientFriendsGroupsList bremoval
         * @property {boolean|null} [bincremental] CMsgClientFriendsGroupsList bincremental
         * @property {Array.<CMsgClientFriendsGroupsList.IFriendGroup>|null} [friendGroups] CMsgClientFriendsGroupsList friendGroups
         * @property {Array.<CMsgClientFriendsGroupsList.IFriendGroupsMembership>|null} [memberships] CMsgClientFriendsGroupsList memberships
         */
    
        /**
         * Constructs a new CMsgClientFriendsGroupsList.
         * @exports CMsgClientFriendsGroupsList
         * @classdesc Represents a CMsgClientFriendsGroupsList.
         * @implements ICMsgClientFriendsGroupsList
         * @constructor
         * @param {ICMsgClientFriendsGroupsList=} [properties] Properties to set
         */
        function CMsgClientFriendsGroupsList(properties) {
            this.friendGroups = [];
            this.memberships = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientFriendsGroupsList bremoval.
         * @member {boolean} bremoval
         * @memberof CMsgClientFriendsGroupsList
         * @instance
         */
        CMsgClientFriendsGroupsList.prototype.bremoval = false;
    
        /**
         * CMsgClientFriendsGroupsList bincremental.
         * @member {boolean} bincremental
         * @memberof CMsgClientFriendsGroupsList
         * @instance
         */
        CMsgClientFriendsGroupsList.prototype.bincremental = false;
    
        /**
         * CMsgClientFriendsGroupsList friendGroups.
         * @member {Array.<CMsgClientFriendsGroupsList.IFriendGroup>} friendGroups
         * @memberof CMsgClientFriendsGroupsList
         * @instance
         */
        CMsgClientFriendsGroupsList.prototype.friendGroups = $util.emptyArray;
    
        /**
         * CMsgClientFriendsGroupsList memberships.
         * @member {Array.<CMsgClientFriendsGroupsList.IFriendGroupsMembership>} memberships
         * @memberof CMsgClientFriendsGroupsList
         * @instance
         */
        CMsgClientFriendsGroupsList.prototype.memberships = $util.emptyArray;
    
        /**
         * Creates a new CMsgClientFriendsGroupsList instance using the specified properties.
         * @function create
         * @memberof CMsgClientFriendsGroupsList
         * @static
         * @param {ICMsgClientFriendsGroupsList=} [properties] Properties to set
         * @returns {CMsgClientFriendsGroupsList} CMsgClientFriendsGroupsList instance
         */
        CMsgClientFriendsGroupsList.create = function create(properties) {
            return new CMsgClientFriendsGroupsList(properties);
        };
    
        /**
         * Encodes the specified CMsgClientFriendsGroupsList message. Does not implicitly {@link CMsgClientFriendsGroupsList.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientFriendsGroupsList
         * @static
         * @param {ICMsgClientFriendsGroupsList} message CMsgClientFriendsGroupsList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientFriendsGroupsList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bremoval != null && message.hasOwnProperty("bremoval"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.bremoval);
            if (message.bincremental != null && message.hasOwnProperty("bincremental"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.bincremental);
            if (message.friendGroups != null && message.friendGroups.length)
                for (var i = 0; i < message.friendGroups.length; ++i)
                    $root.CMsgClientFriendsGroupsList.FriendGroup.encode(message.friendGroups[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.memberships != null && message.memberships.length)
                for (var i = 0; i < message.memberships.length; ++i)
                    $root.CMsgClientFriendsGroupsList.FriendGroupsMembership.encode(message.memberships[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientFriendsGroupsList message, length delimited. Does not implicitly {@link CMsgClientFriendsGroupsList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientFriendsGroupsList
         * @static
         * @param {ICMsgClientFriendsGroupsList} message CMsgClientFriendsGroupsList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientFriendsGroupsList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientFriendsGroupsList message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientFriendsGroupsList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientFriendsGroupsList} CMsgClientFriendsGroupsList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientFriendsGroupsList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientFriendsGroupsList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bremoval = reader.bool();
                    break;
                case 2:
                    message.bincremental = reader.bool();
                    break;
                case 3:
                    if (!(message.friendGroups && message.friendGroups.length))
                        message.friendGroups = [];
                    message.friendGroups.push($root.CMsgClientFriendsGroupsList.FriendGroup.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.memberships && message.memberships.length))
                        message.memberships = [];
                    message.memberships.push($root.CMsgClientFriendsGroupsList.FriendGroupsMembership.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientFriendsGroupsList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientFriendsGroupsList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientFriendsGroupsList} CMsgClientFriendsGroupsList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientFriendsGroupsList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientFriendsGroupsList message.
         * @function verify
         * @memberof CMsgClientFriendsGroupsList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientFriendsGroupsList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bremoval != null && message.hasOwnProperty("bremoval"))
                if (typeof message.bremoval !== "boolean")
                    return "bremoval: boolean expected";
            if (message.bincremental != null && message.hasOwnProperty("bincremental"))
                if (typeof message.bincremental !== "boolean")
                    return "bincremental: boolean expected";
            if (message.friendGroups != null && message.hasOwnProperty("friendGroups")) {
                if (!Array.isArray(message.friendGroups))
                    return "friendGroups: array expected";
                for (var i = 0; i < message.friendGroups.length; ++i) {
                    var error = $root.CMsgClientFriendsGroupsList.FriendGroup.verify(message.friendGroups[i]);
                    if (error)
                        return "friendGroups." + error;
                }
            }
            if (message.memberships != null && message.hasOwnProperty("memberships")) {
                if (!Array.isArray(message.memberships))
                    return "memberships: array expected";
                for (var i = 0; i < message.memberships.length; ++i) {
                    var error = $root.CMsgClientFriendsGroupsList.FriendGroupsMembership.verify(message.memberships[i]);
                    if (error)
                        return "memberships." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgClientFriendsGroupsList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientFriendsGroupsList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientFriendsGroupsList} CMsgClientFriendsGroupsList
         */
        CMsgClientFriendsGroupsList.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientFriendsGroupsList)
                return object;
            var message = new $root.CMsgClientFriendsGroupsList();
            if (object.bremoval != null)
                message.bremoval = Boolean(object.bremoval);
            if (object.bincremental != null)
                message.bincremental = Boolean(object.bincremental);
            if (object.friendGroups) {
                if (!Array.isArray(object.friendGroups))
                    throw TypeError(".CMsgClientFriendsGroupsList.friendGroups: array expected");
                message.friendGroups = [];
                for (var i = 0; i < object.friendGroups.length; ++i) {
                    if (typeof object.friendGroups[i] !== "object")
                        throw TypeError(".CMsgClientFriendsGroupsList.friendGroups: object expected");
                    message.friendGroups[i] = $root.CMsgClientFriendsGroupsList.FriendGroup.fromObject(object.friendGroups[i]);
                }
            }
            if (object.memberships) {
                if (!Array.isArray(object.memberships))
                    throw TypeError(".CMsgClientFriendsGroupsList.memberships: array expected");
                message.memberships = [];
                for (var i = 0; i < object.memberships.length; ++i) {
                    if (typeof object.memberships[i] !== "object")
                        throw TypeError(".CMsgClientFriendsGroupsList.memberships: object expected");
                    message.memberships[i] = $root.CMsgClientFriendsGroupsList.FriendGroupsMembership.fromObject(object.memberships[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientFriendsGroupsList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientFriendsGroupsList
         * @static
         * @param {CMsgClientFriendsGroupsList} message CMsgClientFriendsGroupsList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientFriendsGroupsList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.friendGroups = [];
                object.memberships = [];
            }
            if (options.defaults) {
                object.bremoval = false;
                object.bincremental = false;
            }
            if (message.bremoval != null && message.hasOwnProperty("bremoval"))
                object.bremoval = message.bremoval;
            if (message.bincremental != null && message.hasOwnProperty("bincremental"))
                object.bincremental = message.bincremental;
            if (message.friendGroups && message.friendGroups.length) {
                object.friendGroups = [];
                for (var j = 0; j < message.friendGroups.length; ++j)
                    object.friendGroups[j] = $root.CMsgClientFriendsGroupsList.FriendGroup.toObject(message.friendGroups[j], options);
            }
            if (message.memberships && message.memberships.length) {
                object.memberships = [];
                for (var j = 0; j < message.memberships.length; ++j)
                    object.memberships[j] = $root.CMsgClientFriendsGroupsList.FriendGroupsMembership.toObject(message.memberships[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgClientFriendsGroupsList to JSON.
         * @function toJSON
         * @memberof CMsgClientFriendsGroupsList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientFriendsGroupsList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgClientFriendsGroupsList.FriendGroup = (function() {
    
            /**
             * Properties of a FriendGroup.
             * @memberof CMsgClientFriendsGroupsList
             * @interface IFriendGroup
             * @property {number|null} [nGroupID] FriendGroup nGroupID
             * @property {string|null} [strGroupName] FriendGroup strGroupName
             */
    
            /**
             * Constructs a new FriendGroup.
             * @memberof CMsgClientFriendsGroupsList
             * @classdesc Represents a FriendGroup.
             * @implements IFriendGroup
             * @constructor
             * @param {CMsgClientFriendsGroupsList.IFriendGroup=} [properties] Properties to set
             */
            function FriendGroup(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * FriendGroup nGroupID.
             * @member {number} nGroupID
             * @memberof CMsgClientFriendsGroupsList.FriendGroup
             * @instance
             */
            FriendGroup.prototype.nGroupID = 0;
    
            /**
             * FriendGroup strGroupName.
             * @member {string} strGroupName
             * @memberof CMsgClientFriendsGroupsList.FriendGroup
             * @instance
             */
            FriendGroup.prototype.strGroupName = "";
    
            /**
             * Creates a new FriendGroup instance using the specified properties.
             * @function create
             * @memberof CMsgClientFriendsGroupsList.FriendGroup
             * @static
             * @param {CMsgClientFriendsGroupsList.IFriendGroup=} [properties] Properties to set
             * @returns {CMsgClientFriendsGroupsList.FriendGroup} FriendGroup instance
             */
            FriendGroup.create = function create(properties) {
                return new FriendGroup(properties);
            };
    
            /**
             * Encodes the specified FriendGroup message. Does not implicitly {@link CMsgClientFriendsGroupsList.FriendGroup.verify|verify} messages.
             * @function encode
             * @memberof CMsgClientFriendsGroupsList.FriendGroup
             * @static
             * @param {CMsgClientFriendsGroupsList.IFriendGroup} message FriendGroup message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FriendGroup.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.nGroupID != null && message.hasOwnProperty("nGroupID"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nGroupID);
                if (message.strGroupName != null && message.hasOwnProperty("strGroupName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.strGroupName);
                return writer;
            };
    
            /**
             * Encodes the specified FriendGroup message, length delimited. Does not implicitly {@link CMsgClientFriendsGroupsList.FriendGroup.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgClientFriendsGroupsList.FriendGroup
             * @static
             * @param {CMsgClientFriendsGroupsList.IFriendGroup} message FriendGroup message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FriendGroup.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a FriendGroup message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgClientFriendsGroupsList.FriendGroup
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgClientFriendsGroupsList.FriendGroup} FriendGroup
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FriendGroup.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientFriendsGroupsList.FriendGroup();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.nGroupID = reader.int32();
                        break;
                    case 2:
                        message.strGroupName = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a FriendGroup message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgClientFriendsGroupsList.FriendGroup
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgClientFriendsGroupsList.FriendGroup} FriendGroup
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FriendGroup.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a FriendGroup message.
             * @function verify
             * @memberof CMsgClientFriendsGroupsList.FriendGroup
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FriendGroup.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.nGroupID != null && message.hasOwnProperty("nGroupID"))
                    if (!$util.isInteger(message.nGroupID))
                        return "nGroupID: integer expected";
                if (message.strGroupName != null && message.hasOwnProperty("strGroupName"))
                    if (!$util.isString(message.strGroupName))
                        return "strGroupName: string expected";
                return null;
            };
    
            /**
             * Creates a FriendGroup message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgClientFriendsGroupsList.FriendGroup
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgClientFriendsGroupsList.FriendGroup} FriendGroup
             */
            FriendGroup.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgClientFriendsGroupsList.FriendGroup)
                    return object;
                var message = new $root.CMsgClientFriendsGroupsList.FriendGroup();
                if (object.nGroupID != null)
                    message.nGroupID = object.nGroupID | 0;
                if (object.strGroupName != null)
                    message.strGroupName = String(object.strGroupName);
                return message;
            };
    
            /**
             * Creates a plain object from a FriendGroup message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgClientFriendsGroupsList.FriendGroup
             * @static
             * @param {CMsgClientFriendsGroupsList.FriendGroup} message FriendGroup
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FriendGroup.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.nGroupID = 0;
                    object.strGroupName = "";
                }
                if (message.nGroupID != null && message.hasOwnProperty("nGroupID"))
                    object.nGroupID = message.nGroupID;
                if (message.strGroupName != null && message.hasOwnProperty("strGroupName"))
                    object.strGroupName = message.strGroupName;
                return object;
            };
    
            /**
             * Converts this FriendGroup to JSON.
             * @function toJSON
             * @memberof CMsgClientFriendsGroupsList.FriendGroup
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FriendGroup.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return FriendGroup;
        })();
    
        CMsgClientFriendsGroupsList.FriendGroupsMembership = (function() {
    
            /**
             * Properties of a FriendGroupsMembership.
             * @memberof CMsgClientFriendsGroupsList
             * @interface IFriendGroupsMembership
             * @property {number|Long|null} [ulSteamID] FriendGroupsMembership ulSteamID
             * @property {number|null} [nGroupID] FriendGroupsMembership nGroupID
             */
    
            /**
             * Constructs a new FriendGroupsMembership.
             * @memberof CMsgClientFriendsGroupsList
             * @classdesc Represents a FriendGroupsMembership.
             * @implements IFriendGroupsMembership
             * @constructor
             * @param {CMsgClientFriendsGroupsList.IFriendGroupsMembership=} [properties] Properties to set
             */
            function FriendGroupsMembership(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * FriendGroupsMembership ulSteamID.
             * @member {number|Long} ulSteamID
             * @memberof CMsgClientFriendsGroupsList.FriendGroupsMembership
             * @instance
             */
            FriendGroupsMembership.prototype.ulSteamID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * FriendGroupsMembership nGroupID.
             * @member {number} nGroupID
             * @memberof CMsgClientFriendsGroupsList.FriendGroupsMembership
             * @instance
             */
            FriendGroupsMembership.prototype.nGroupID = 0;
    
            /**
             * Creates a new FriendGroupsMembership instance using the specified properties.
             * @function create
             * @memberof CMsgClientFriendsGroupsList.FriendGroupsMembership
             * @static
             * @param {CMsgClientFriendsGroupsList.IFriendGroupsMembership=} [properties] Properties to set
             * @returns {CMsgClientFriendsGroupsList.FriendGroupsMembership} FriendGroupsMembership instance
             */
            FriendGroupsMembership.create = function create(properties) {
                return new FriendGroupsMembership(properties);
            };
    
            /**
             * Encodes the specified FriendGroupsMembership message. Does not implicitly {@link CMsgClientFriendsGroupsList.FriendGroupsMembership.verify|verify} messages.
             * @function encode
             * @memberof CMsgClientFriendsGroupsList.FriendGroupsMembership
             * @static
             * @param {CMsgClientFriendsGroupsList.IFriendGroupsMembership} message FriendGroupsMembership message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FriendGroupsMembership.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ulSteamID != null && message.hasOwnProperty("ulSteamID"))
                    writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.ulSteamID);
                if (message.nGroupID != null && message.hasOwnProperty("nGroupID"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nGroupID);
                return writer;
            };
    
            /**
             * Encodes the specified FriendGroupsMembership message, length delimited. Does not implicitly {@link CMsgClientFriendsGroupsList.FriendGroupsMembership.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgClientFriendsGroupsList.FriendGroupsMembership
             * @static
             * @param {CMsgClientFriendsGroupsList.IFriendGroupsMembership} message FriendGroupsMembership message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FriendGroupsMembership.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a FriendGroupsMembership message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgClientFriendsGroupsList.FriendGroupsMembership
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgClientFriendsGroupsList.FriendGroupsMembership} FriendGroupsMembership
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FriendGroupsMembership.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientFriendsGroupsList.FriendGroupsMembership();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ulSteamID = reader.fixed64();
                        break;
                    case 2:
                        message.nGroupID = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a FriendGroupsMembership message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgClientFriendsGroupsList.FriendGroupsMembership
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgClientFriendsGroupsList.FriendGroupsMembership} FriendGroupsMembership
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FriendGroupsMembership.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a FriendGroupsMembership message.
             * @function verify
             * @memberof CMsgClientFriendsGroupsList.FriendGroupsMembership
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FriendGroupsMembership.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ulSteamID != null && message.hasOwnProperty("ulSteamID"))
                    if (!$util.isInteger(message.ulSteamID) && !(message.ulSteamID && $util.isInteger(message.ulSteamID.low) && $util.isInteger(message.ulSteamID.high)))
                        return "ulSteamID: integer|Long expected";
                if (message.nGroupID != null && message.hasOwnProperty("nGroupID"))
                    if (!$util.isInteger(message.nGroupID))
                        return "nGroupID: integer expected";
                return null;
            };
    
            /**
             * Creates a FriendGroupsMembership message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgClientFriendsGroupsList.FriendGroupsMembership
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgClientFriendsGroupsList.FriendGroupsMembership} FriendGroupsMembership
             */
            FriendGroupsMembership.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgClientFriendsGroupsList.FriendGroupsMembership)
                    return object;
                var message = new $root.CMsgClientFriendsGroupsList.FriendGroupsMembership();
                if (object.ulSteamID != null)
                    if ($util.Long)
                        (message.ulSteamID = $util.Long.fromValue(object.ulSteamID)).unsigned = false;
                    else if (typeof object.ulSteamID === "string")
                        message.ulSteamID = parseInt(object.ulSteamID, 10);
                    else if (typeof object.ulSteamID === "number")
                        message.ulSteamID = object.ulSteamID;
                    else if (typeof object.ulSteamID === "object")
                        message.ulSteamID = new $util.LongBits(object.ulSteamID.low >>> 0, object.ulSteamID.high >>> 0).toNumber();
                if (object.nGroupID != null)
                    message.nGroupID = object.nGroupID | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a FriendGroupsMembership message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgClientFriendsGroupsList.FriendGroupsMembership
             * @static
             * @param {CMsgClientFriendsGroupsList.FriendGroupsMembership} message FriendGroupsMembership
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FriendGroupsMembership.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.ulSteamID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.ulSteamID = options.longs === String ? "0" : 0;
                    object.nGroupID = 0;
                }
                if (message.ulSteamID != null && message.hasOwnProperty("ulSteamID"))
                    if (typeof message.ulSteamID === "number")
                        object.ulSteamID = options.longs === String ? String(message.ulSteamID) : message.ulSteamID;
                    else
                        object.ulSteamID = options.longs === String ? $util.Long.prototype.toString.call(message.ulSteamID) : options.longs === Number ? new $util.LongBits(message.ulSteamID.low >>> 0, message.ulSteamID.high >>> 0).toNumber() : message.ulSteamID;
                if (message.nGroupID != null && message.hasOwnProperty("nGroupID"))
                    object.nGroupID = message.nGroupID;
                return object;
            };
    
            /**
             * Converts this FriendGroupsMembership to JSON.
             * @function toJSON
             * @memberof CMsgClientFriendsGroupsList.FriendGroupsMembership
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FriendGroupsMembership.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return FriendGroupsMembership;
        })();
    
        return CMsgClientFriendsGroupsList;
    })();
    
    $root.CMsgClientPlayerNicknameList = (function() {
    
        /**
         * Properties of a CMsgClientPlayerNicknameList.
         * @exports ICMsgClientPlayerNicknameList
         * @interface ICMsgClientPlayerNicknameList
         * @property {boolean|null} [removal] CMsgClientPlayerNicknameList removal
         * @property {boolean|null} [incremental] CMsgClientPlayerNicknameList incremental
         * @property {Array.<CMsgClientPlayerNicknameList.IPlayerNickname>|null} [nicknames] CMsgClientPlayerNicknameList nicknames
         */
    
        /**
         * Constructs a new CMsgClientPlayerNicknameList.
         * @exports CMsgClientPlayerNicknameList
         * @classdesc Represents a CMsgClientPlayerNicknameList.
         * @implements ICMsgClientPlayerNicknameList
         * @constructor
         * @param {ICMsgClientPlayerNicknameList=} [properties] Properties to set
         */
        function CMsgClientPlayerNicknameList(properties) {
            this.nicknames = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientPlayerNicknameList removal.
         * @member {boolean} removal
         * @memberof CMsgClientPlayerNicknameList
         * @instance
         */
        CMsgClientPlayerNicknameList.prototype.removal = false;
    
        /**
         * CMsgClientPlayerNicknameList incremental.
         * @member {boolean} incremental
         * @memberof CMsgClientPlayerNicknameList
         * @instance
         */
        CMsgClientPlayerNicknameList.prototype.incremental = false;
    
        /**
         * CMsgClientPlayerNicknameList nicknames.
         * @member {Array.<CMsgClientPlayerNicknameList.IPlayerNickname>} nicknames
         * @memberof CMsgClientPlayerNicknameList
         * @instance
         */
        CMsgClientPlayerNicknameList.prototype.nicknames = $util.emptyArray;
    
        /**
         * Creates a new CMsgClientPlayerNicknameList instance using the specified properties.
         * @function create
         * @memberof CMsgClientPlayerNicknameList
         * @static
         * @param {ICMsgClientPlayerNicknameList=} [properties] Properties to set
         * @returns {CMsgClientPlayerNicknameList} CMsgClientPlayerNicknameList instance
         */
        CMsgClientPlayerNicknameList.create = function create(properties) {
            return new CMsgClientPlayerNicknameList(properties);
        };
    
        /**
         * Encodes the specified CMsgClientPlayerNicknameList message. Does not implicitly {@link CMsgClientPlayerNicknameList.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientPlayerNicknameList
         * @static
         * @param {ICMsgClientPlayerNicknameList} message CMsgClientPlayerNicknameList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientPlayerNicknameList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.removal != null && message.hasOwnProperty("removal"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.removal);
            if (message.incremental != null && message.hasOwnProperty("incremental"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.incremental);
            if (message.nicknames != null && message.nicknames.length)
                for (var i = 0; i < message.nicknames.length; ++i)
                    $root.CMsgClientPlayerNicknameList.PlayerNickname.encode(message.nicknames[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientPlayerNicknameList message, length delimited. Does not implicitly {@link CMsgClientPlayerNicknameList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientPlayerNicknameList
         * @static
         * @param {ICMsgClientPlayerNicknameList} message CMsgClientPlayerNicknameList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientPlayerNicknameList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientPlayerNicknameList message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientPlayerNicknameList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientPlayerNicknameList} CMsgClientPlayerNicknameList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientPlayerNicknameList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientPlayerNicknameList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.removal = reader.bool();
                    break;
                case 2:
                    message.incremental = reader.bool();
                    break;
                case 3:
                    if (!(message.nicknames && message.nicknames.length))
                        message.nicknames = [];
                    message.nicknames.push($root.CMsgClientPlayerNicknameList.PlayerNickname.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientPlayerNicknameList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientPlayerNicknameList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientPlayerNicknameList} CMsgClientPlayerNicknameList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientPlayerNicknameList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientPlayerNicknameList message.
         * @function verify
         * @memberof CMsgClientPlayerNicknameList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientPlayerNicknameList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.removal != null && message.hasOwnProperty("removal"))
                if (typeof message.removal !== "boolean")
                    return "removal: boolean expected";
            if (message.incremental != null && message.hasOwnProperty("incremental"))
                if (typeof message.incremental !== "boolean")
                    return "incremental: boolean expected";
            if (message.nicknames != null && message.hasOwnProperty("nicknames")) {
                if (!Array.isArray(message.nicknames))
                    return "nicknames: array expected";
                for (var i = 0; i < message.nicknames.length; ++i) {
                    var error = $root.CMsgClientPlayerNicknameList.PlayerNickname.verify(message.nicknames[i]);
                    if (error)
                        return "nicknames." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgClientPlayerNicknameList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientPlayerNicknameList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientPlayerNicknameList} CMsgClientPlayerNicknameList
         */
        CMsgClientPlayerNicknameList.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientPlayerNicknameList)
                return object;
            var message = new $root.CMsgClientPlayerNicknameList();
            if (object.removal != null)
                message.removal = Boolean(object.removal);
            if (object.incremental != null)
                message.incremental = Boolean(object.incremental);
            if (object.nicknames) {
                if (!Array.isArray(object.nicknames))
                    throw TypeError(".CMsgClientPlayerNicknameList.nicknames: array expected");
                message.nicknames = [];
                for (var i = 0; i < object.nicknames.length; ++i) {
                    if (typeof object.nicknames[i] !== "object")
                        throw TypeError(".CMsgClientPlayerNicknameList.nicknames: object expected");
                    message.nicknames[i] = $root.CMsgClientPlayerNicknameList.PlayerNickname.fromObject(object.nicknames[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientPlayerNicknameList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientPlayerNicknameList
         * @static
         * @param {CMsgClientPlayerNicknameList} message CMsgClientPlayerNicknameList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientPlayerNicknameList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.nicknames = [];
            if (options.defaults) {
                object.removal = false;
                object.incremental = false;
            }
            if (message.removal != null && message.hasOwnProperty("removal"))
                object.removal = message.removal;
            if (message.incremental != null && message.hasOwnProperty("incremental"))
                object.incremental = message.incremental;
            if (message.nicknames && message.nicknames.length) {
                object.nicknames = [];
                for (var j = 0; j < message.nicknames.length; ++j)
                    object.nicknames[j] = $root.CMsgClientPlayerNicknameList.PlayerNickname.toObject(message.nicknames[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgClientPlayerNicknameList to JSON.
         * @function toJSON
         * @memberof CMsgClientPlayerNicknameList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientPlayerNicknameList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgClientPlayerNicknameList.PlayerNickname = (function() {
    
            /**
             * Properties of a PlayerNickname.
             * @memberof CMsgClientPlayerNicknameList
             * @interface IPlayerNickname
             * @property {number|Long|null} [steamid] PlayerNickname steamid
             * @property {string|null} [nickname] PlayerNickname nickname
             */
    
            /**
             * Constructs a new PlayerNickname.
             * @memberof CMsgClientPlayerNicknameList
             * @classdesc Represents a PlayerNickname.
             * @implements IPlayerNickname
             * @constructor
             * @param {CMsgClientPlayerNicknameList.IPlayerNickname=} [properties] Properties to set
             */
            function PlayerNickname(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PlayerNickname steamid.
             * @member {number|Long} steamid
             * @memberof CMsgClientPlayerNicknameList.PlayerNickname
             * @instance
             */
            PlayerNickname.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * PlayerNickname nickname.
             * @member {string} nickname
             * @memberof CMsgClientPlayerNicknameList.PlayerNickname
             * @instance
             */
            PlayerNickname.prototype.nickname = "";
    
            /**
             * Creates a new PlayerNickname instance using the specified properties.
             * @function create
             * @memberof CMsgClientPlayerNicknameList.PlayerNickname
             * @static
             * @param {CMsgClientPlayerNicknameList.IPlayerNickname=} [properties] Properties to set
             * @returns {CMsgClientPlayerNicknameList.PlayerNickname} PlayerNickname instance
             */
            PlayerNickname.create = function create(properties) {
                return new PlayerNickname(properties);
            };
    
            /**
             * Encodes the specified PlayerNickname message. Does not implicitly {@link CMsgClientPlayerNicknameList.PlayerNickname.verify|verify} messages.
             * @function encode
             * @memberof CMsgClientPlayerNicknameList.PlayerNickname
             * @static
             * @param {CMsgClientPlayerNicknameList.IPlayerNickname} message PlayerNickname message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerNickname.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.steamid != null && message.hasOwnProperty("steamid"))
                    writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
                return writer;
            };
    
            /**
             * Encodes the specified PlayerNickname message, length delimited. Does not implicitly {@link CMsgClientPlayerNicknameList.PlayerNickname.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgClientPlayerNicknameList.PlayerNickname
             * @static
             * @param {CMsgClientPlayerNicknameList.IPlayerNickname} message PlayerNickname message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerNickname.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PlayerNickname message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgClientPlayerNicknameList.PlayerNickname
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgClientPlayerNicknameList.PlayerNickname} PlayerNickname
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerNickname.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientPlayerNicknameList.PlayerNickname();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.steamid = reader.fixed64();
                        break;
                    case 3:
                        message.nickname = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PlayerNickname message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgClientPlayerNicknameList.PlayerNickname
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgClientPlayerNicknameList.PlayerNickname} PlayerNickname
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerNickname.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PlayerNickname message.
             * @function verify
             * @memberof CMsgClientPlayerNicknameList.PlayerNickname
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerNickname.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.steamid != null && message.hasOwnProperty("steamid"))
                    if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                        return "steamid: integer|Long expected";
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    if (!$util.isString(message.nickname))
                        return "nickname: string expected";
                return null;
            };
    
            /**
             * Creates a PlayerNickname message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgClientPlayerNicknameList.PlayerNickname
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgClientPlayerNicknameList.PlayerNickname} PlayerNickname
             */
            PlayerNickname.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgClientPlayerNicknameList.PlayerNickname)
                    return object;
                var message = new $root.CMsgClientPlayerNicknameList.PlayerNickname();
                if (object.steamid != null)
                    if ($util.Long)
                        (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                    else if (typeof object.steamid === "string")
                        message.steamid = parseInt(object.steamid, 10);
                    else if (typeof object.steamid === "number")
                        message.steamid = object.steamid;
                    else if (typeof object.steamid === "object")
                        message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
                if (object.nickname != null)
                    message.nickname = String(object.nickname);
                return message;
            };
    
            /**
             * Creates a plain object from a PlayerNickname message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgClientPlayerNicknameList.PlayerNickname
             * @static
             * @param {CMsgClientPlayerNicknameList.PlayerNickname} message PlayerNickname
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerNickname.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.steamid = options.longs === String ? "0" : 0;
                    object.nickname = "";
                }
                if (message.steamid != null && message.hasOwnProperty("steamid"))
                    if (typeof message.steamid === "number")
                        object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                    else
                        object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    object.nickname = message.nickname;
                return object;
            };
    
            /**
             * Converts this PlayerNickname to JSON.
             * @function toJSON
             * @memberof CMsgClientPlayerNicknameList.PlayerNickname
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerNickname.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PlayerNickname;
        })();
    
        return CMsgClientPlayerNicknameList;
    })();
    
    $root.CMsgClientSetPlayerNickname = (function() {
    
        /**
         * Properties of a CMsgClientSetPlayerNickname.
         * @exports ICMsgClientSetPlayerNickname
         * @interface ICMsgClientSetPlayerNickname
         * @property {number|Long|null} [steamid] CMsgClientSetPlayerNickname steamid
         * @property {string|null} [nickname] CMsgClientSetPlayerNickname nickname
         */
    
        /**
         * Constructs a new CMsgClientSetPlayerNickname.
         * @exports CMsgClientSetPlayerNickname
         * @classdesc Represents a CMsgClientSetPlayerNickname.
         * @implements ICMsgClientSetPlayerNickname
         * @constructor
         * @param {ICMsgClientSetPlayerNickname=} [properties] Properties to set
         */
        function CMsgClientSetPlayerNickname(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientSetPlayerNickname steamid.
         * @member {number|Long} steamid
         * @memberof CMsgClientSetPlayerNickname
         * @instance
         */
        CMsgClientSetPlayerNickname.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgClientSetPlayerNickname nickname.
         * @member {string} nickname
         * @memberof CMsgClientSetPlayerNickname
         * @instance
         */
        CMsgClientSetPlayerNickname.prototype.nickname = "";
    
        /**
         * Creates a new CMsgClientSetPlayerNickname instance using the specified properties.
         * @function create
         * @memberof CMsgClientSetPlayerNickname
         * @static
         * @param {ICMsgClientSetPlayerNickname=} [properties] Properties to set
         * @returns {CMsgClientSetPlayerNickname} CMsgClientSetPlayerNickname instance
         */
        CMsgClientSetPlayerNickname.create = function create(properties) {
            return new CMsgClientSetPlayerNickname(properties);
        };
    
        /**
         * Encodes the specified CMsgClientSetPlayerNickname message. Does not implicitly {@link CMsgClientSetPlayerNickname.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientSetPlayerNickname
         * @static
         * @param {ICMsgClientSetPlayerNickname} message CMsgClientSetPlayerNickname message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientSetPlayerNickname.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientSetPlayerNickname message, length delimited. Does not implicitly {@link CMsgClientSetPlayerNickname.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientSetPlayerNickname
         * @static
         * @param {ICMsgClientSetPlayerNickname} message CMsgClientSetPlayerNickname message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientSetPlayerNickname.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientSetPlayerNickname message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientSetPlayerNickname
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientSetPlayerNickname} CMsgClientSetPlayerNickname
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientSetPlayerNickname.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientSetPlayerNickname();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.nickname = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientSetPlayerNickname message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientSetPlayerNickname
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientSetPlayerNickname} CMsgClientSetPlayerNickname
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientSetPlayerNickname.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientSetPlayerNickname message.
         * @function verify
         * @memberof CMsgClientSetPlayerNickname
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientSetPlayerNickname.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientSetPlayerNickname message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientSetPlayerNickname
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientSetPlayerNickname} CMsgClientSetPlayerNickname
         */
        CMsgClientSetPlayerNickname.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientSetPlayerNickname)
                return object;
            var message = new $root.CMsgClientSetPlayerNickname();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientSetPlayerNickname message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientSetPlayerNickname
         * @static
         * @param {CMsgClientSetPlayerNickname} message CMsgClientSetPlayerNickname
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientSetPlayerNickname.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                object.nickname = "";
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            return object;
        };
    
        /**
         * Converts this CMsgClientSetPlayerNickname to JSON.
         * @function toJSON
         * @memberof CMsgClientSetPlayerNickname
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientSetPlayerNickname.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientSetPlayerNickname;
    })();
    
    $root.CMsgClientSetPlayerNicknameResponse = (function() {
    
        /**
         * Properties of a CMsgClientSetPlayerNicknameResponse.
         * @exports ICMsgClientSetPlayerNicknameResponse
         * @interface ICMsgClientSetPlayerNicknameResponse
         * @property {number|null} [eresult] CMsgClientSetPlayerNicknameResponse eresult
         */
    
        /**
         * Constructs a new CMsgClientSetPlayerNicknameResponse.
         * @exports CMsgClientSetPlayerNicknameResponse
         * @classdesc Represents a CMsgClientSetPlayerNicknameResponse.
         * @implements ICMsgClientSetPlayerNicknameResponse
         * @constructor
         * @param {ICMsgClientSetPlayerNicknameResponse=} [properties] Properties to set
         */
        function CMsgClientSetPlayerNicknameResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientSetPlayerNicknameResponse eresult.
         * @member {number} eresult
         * @memberof CMsgClientSetPlayerNicknameResponse
         * @instance
         */
        CMsgClientSetPlayerNicknameResponse.prototype.eresult = 0;
    
        /**
         * Creates a new CMsgClientSetPlayerNicknameResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientSetPlayerNicknameResponse
         * @static
         * @param {ICMsgClientSetPlayerNicknameResponse=} [properties] Properties to set
         * @returns {CMsgClientSetPlayerNicknameResponse} CMsgClientSetPlayerNicknameResponse instance
         */
        CMsgClientSetPlayerNicknameResponse.create = function create(properties) {
            return new CMsgClientSetPlayerNicknameResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientSetPlayerNicknameResponse message. Does not implicitly {@link CMsgClientSetPlayerNicknameResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientSetPlayerNicknameResponse
         * @static
         * @param {ICMsgClientSetPlayerNicknameResponse} message CMsgClientSetPlayerNicknameResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientSetPlayerNicknameResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.eresult);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientSetPlayerNicknameResponse message, length delimited. Does not implicitly {@link CMsgClientSetPlayerNicknameResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientSetPlayerNicknameResponse
         * @static
         * @param {ICMsgClientSetPlayerNicknameResponse} message CMsgClientSetPlayerNicknameResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientSetPlayerNicknameResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientSetPlayerNicknameResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientSetPlayerNicknameResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientSetPlayerNicknameResponse} CMsgClientSetPlayerNicknameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientSetPlayerNicknameResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientSetPlayerNicknameResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eresult = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientSetPlayerNicknameResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientSetPlayerNicknameResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientSetPlayerNicknameResponse} CMsgClientSetPlayerNicknameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientSetPlayerNicknameResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientSetPlayerNicknameResponse message.
         * @function verify
         * @memberof CMsgClientSetPlayerNicknameResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientSetPlayerNicknameResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                if (!$util.isInteger(message.eresult))
                    return "eresult: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientSetPlayerNicknameResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientSetPlayerNicknameResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientSetPlayerNicknameResponse} CMsgClientSetPlayerNicknameResponse
         */
        CMsgClientSetPlayerNicknameResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientSetPlayerNicknameResponse)
                return object;
            var message = new $root.CMsgClientSetPlayerNicknameResponse();
            if (object.eresult != null)
                message.eresult = object.eresult >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientSetPlayerNicknameResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientSetPlayerNicknameResponse
         * @static
         * @param {CMsgClientSetPlayerNicknameResponse} message CMsgClientSetPlayerNicknameResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientSetPlayerNicknameResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.eresult = 0;
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                object.eresult = message.eresult;
            return object;
        };
    
        /**
         * Converts this CMsgClientSetPlayerNicknameResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientSetPlayerNicknameResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientSetPlayerNicknameResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientSetPlayerNicknameResponse;
    })();
    
    $root.CMsgClientRequestFriendData = (function() {
    
        /**
         * Properties of a CMsgClientRequestFriendData.
         * @exports ICMsgClientRequestFriendData
         * @interface ICMsgClientRequestFriendData
         * @property {number|null} [persona_state_requested] CMsgClientRequestFriendData persona_state_requested
         * @property {Array.<number|Long>|null} [friends] CMsgClientRequestFriendData friends
         */
    
        /**
         * Constructs a new CMsgClientRequestFriendData.
         * @exports CMsgClientRequestFriendData
         * @classdesc Represents a CMsgClientRequestFriendData.
         * @implements ICMsgClientRequestFriendData
         * @constructor
         * @param {ICMsgClientRequestFriendData=} [properties] Properties to set
         */
        function CMsgClientRequestFriendData(properties) {
            this.friends = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientRequestFriendData persona_state_requested.
         * @member {number} persona_state_requested
         * @memberof CMsgClientRequestFriendData
         * @instance
         */
        CMsgClientRequestFriendData.prototype.persona_state_requested = 0;
    
        /**
         * CMsgClientRequestFriendData friends.
         * @member {Array.<number|Long>} friends
         * @memberof CMsgClientRequestFriendData
         * @instance
         */
        CMsgClientRequestFriendData.prototype.friends = $util.emptyArray;
    
        /**
         * Creates a new CMsgClientRequestFriendData instance using the specified properties.
         * @function create
         * @memberof CMsgClientRequestFriendData
         * @static
         * @param {ICMsgClientRequestFriendData=} [properties] Properties to set
         * @returns {CMsgClientRequestFriendData} CMsgClientRequestFriendData instance
         */
        CMsgClientRequestFriendData.create = function create(properties) {
            return new CMsgClientRequestFriendData(properties);
        };
    
        /**
         * Encodes the specified CMsgClientRequestFriendData message. Does not implicitly {@link CMsgClientRequestFriendData.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientRequestFriendData
         * @static
         * @param {ICMsgClientRequestFriendData} message CMsgClientRequestFriendData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientRequestFriendData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.persona_state_requested != null && message.hasOwnProperty("persona_state_requested"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.persona_state_requested);
            if (message.friends != null && message.friends.length)
                for (var i = 0; i < message.friends.length; ++i)
                    writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.friends[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientRequestFriendData message, length delimited. Does not implicitly {@link CMsgClientRequestFriendData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientRequestFriendData
         * @static
         * @param {ICMsgClientRequestFriendData} message CMsgClientRequestFriendData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientRequestFriendData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientRequestFriendData message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientRequestFriendData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientRequestFriendData} CMsgClientRequestFriendData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientRequestFriendData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientRequestFriendData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.persona_state_requested = reader.uint32();
                    break;
                case 2:
                    if (!(message.friends && message.friends.length))
                        message.friends = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.friends.push(reader.fixed64());
                    } else
                        message.friends.push(reader.fixed64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientRequestFriendData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientRequestFriendData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientRequestFriendData} CMsgClientRequestFriendData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientRequestFriendData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientRequestFriendData message.
         * @function verify
         * @memberof CMsgClientRequestFriendData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientRequestFriendData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.persona_state_requested != null && message.hasOwnProperty("persona_state_requested"))
                if (!$util.isInteger(message.persona_state_requested))
                    return "persona_state_requested: integer expected";
            if (message.friends != null && message.hasOwnProperty("friends")) {
                if (!Array.isArray(message.friends))
                    return "friends: array expected";
                for (var i = 0; i < message.friends.length; ++i)
                    if (!$util.isInteger(message.friends[i]) && !(message.friends[i] && $util.isInteger(message.friends[i].low) && $util.isInteger(message.friends[i].high)))
                        return "friends: integer|Long[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CMsgClientRequestFriendData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientRequestFriendData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientRequestFriendData} CMsgClientRequestFriendData
         */
        CMsgClientRequestFriendData.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientRequestFriendData)
                return object;
            var message = new $root.CMsgClientRequestFriendData();
            if (object.persona_state_requested != null)
                message.persona_state_requested = object.persona_state_requested >>> 0;
            if (object.friends) {
                if (!Array.isArray(object.friends))
                    throw TypeError(".CMsgClientRequestFriendData.friends: array expected");
                message.friends = [];
                for (var i = 0; i < object.friends.length; ++i)
                    if ($util.Long)
                        (message.friends[i] = $util.Long.fromValue(object.friends[i])).unsigned = false;
                    else if (typeof object.friends[i] === "string")
                        message.friends[i] = parseInt(object.friends[i], 10);
                    else if (typeof object.friends[i] === "number")
                        message.friends[i] = object.friends[i];
                    else if (typeof object.friends[i] === "object")
                        message.friends[i] = new $util.LongBits(object.friends[i].low >>> 0, object.friends[i].high >>> 0).toNumber();
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientRequestFriendData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientRequestFriendData
         * @static
         * @param {CMsgClientRequestFriendData} message CMsgClientRequestFriendData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientRequestFriendData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.friends = [];
            if (options.defaults)
                object.persona_state_requested = 0;
            if (message.persona_state_requested != null && message.hasOwnProperty("persona_state_requested"))
                object.persona_state_requested = message.persona_state_requested;
            if (message.friends && message.friends.length) {
                object.friends = [];
                for (var j = 0; j < message.friends.length; ++j)
                    if (typeof message.friends[j] === "number")
                        object.friends[j] = options.longs === String ? String(message.friends[j]) : message.friends[j];
                    else
                        object.friends[j] = options.longs === String ? $util.Long.prototype.toString.call(message.friends[j]) : options.longs === Number ? new $util.LongBits(message.friends[j].low >>> 0, message.friends[j].high >>> 0).toNumber() : message.friends[j];
            }
            return object;
        };
    
        /**
         * Converts this CMsgClientRequestFriendData to JSON.
         * @function toJSON
         * @memberof CMsgClientRequestFriendData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientRequestFriendData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientRequestFriendData;
    })();
    
    $root.CMsgClientChangeStatus = (function() {
    
        /**
         * Properties of a CMsgClientChangeStatus.
         * @exports ICMsgClientChangeStatus
         * @interface ICMsgClientChangeStatus
         * @property {number|null} [persona_state] CMsgClientChangeStatus persona_state
         * @property {string|null} [player_name] CMsgClientChangeStatus player_name
         * @property {boolean|null} [is_auto_generated_name] CMsgClientChangeStatus is_auto_generated_name
         * @property {boolean|null} [high_priority] CMsgClientChangeStatus high_priority
         * @property {boolean|null} [persona_set_by_user] CMsgClientChangeStatus persona_set_by_user
         * @property {number|null} [persona_state_flags] CMsgClientChangeStatus persona_state_flags
         */
    
        /**
         * Constructs a new CMsgClientChangeStatus.
         * @exports CMsgClientChangeStatus
         * @classdesc Represents a CMsgClientChangeStatus.
         * @implements ICMsgClientChangeStatus
         * @constructor
         * @param {ICMsgClientChangeStatus=} [properties] Properties to set
         */
        function CMsgClientChangeStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientChangeStatus persona_state.
         * @member {number} persona_state
         * @memberof CMsgClientChangeStatus
         * @instance
         */
        CMsgClientChangeStatus.prototype.persona_state = 0;
    
        /**
         * CMsgClientChangeStatus player_name.
         * @member {string} player_name
         * @memberof CMsgClientChangeStatus
         * @instance
         */
        CMsgClientChangeStatus.prototype.player_name = "";
    
        /**
         * CMsgClientChangeStatus is_auto_generated_name.
         * @member {boolean} is_auto_generated_name
         * @memberof CMsgClientChangeStatus
         * @instance
         */
        CMsgClientChangeStatus.prototype.is_auto_generated_name = false;
    
        /**
         * CMsgClientChangeStatus high_priority.
         * @member {boolean} high_priority
         * @memberof CMsgClientChangeStatus
         * @instance
         */
        CMsgClientChangeStatus.prototype.high_priority = false;
    
        /**
         * CMsgClientChangeStatus persona_set_by_user.
         * @member {boolean} persona_set_by_user
         * @memberof CMsgClientChangeStatus
         * @instance
         */
        CMsgClientChangeStatus.prototype.persona_set_by_user = false;
    
        /**
         * CMsgClientChangeStatus persona_state_flags.
         * @member {number} persona_state_flags
         * @memberof CMsgClientChangeStatus
         * @instance
         */
        CMsgClientChangeStatus.prototype.persona_state_flags = 0;
    
        /**
         * Creates a new CMsgClientChangeStatus instance using the specified properties.
         * @function create
         * @memberof CMsgClientChangeStatus
         * @static
         * @param {ICMsgClientChangeStatus=} [properties] Properties to set
         * @returns {CMsgClientChangeStatus} CMsgClientChangeStatus instance
         */
        CMsgClientChangeStatus.create = function create(properties) {
            return new CMsgClientChangeStatus(properties);
        };
    
        /**
         * Encodes the specified CMsgClientChangeStatus message. Does not implicitly {@link CMsgClientChangeStatus.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientChangeStatus
         * @static
         * @param {ICMsgClientChangeStatus} message CMsgClientChangeStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientChangeStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.persona_state != null && message.hasOwnProperty("persona_state"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.persona_state);
            if (message.player_name != null && message.hasOwnProperty("player_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.player_name);
            if (message.is_auto_generated_name != null && message.hasOwnProperty("is_auto_generated_name"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.is_auto_generated_name);
            if (message.high_priority != null && message.hasOwnProperty("high_priority"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.high_priority);
            if (message.persona_set_by_user != null && message.hasOwnProperty("persona_set_by_user"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.persona_set_by_user);
            if (message.persona_state_flags != null && message.hasOwnProperty("persona_state_flags"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.persona_state_flags);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientChangeStatus message, length delimited. Does not implicitly {@link CMsgClientChangeStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientChangeStatus
         * @static
         * @param {ICMsgClientChangeStatus} message CMsgClientChangeStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientChangeStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientChangeStatus message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientChangeStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientChangeStatus} CMsgClientChangeStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientChangeStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientChangeStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.persona_state = reader.uint32();
                    break;
                case 2:
                    message.player_name = reader.string();
                    break;
                case 3:
                    message.is_auto_generated_name = reader.bool();
                    break;
                case 4:
                    message.high_priority = reader.bool();
                    break;
                case 5:
                    message.persona_set_by_user = reader.bool();
                    break;
                case 6:
                    message.persona_state_flags = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientChangeStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientChangeStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientChangeStatus} CMsgClientChangeStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientChangeStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientChangeStatus message.
         * @function verify
         * @memberof CMsgClientChangeStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientChangeStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.persona_state != null && message.hasOwnProperty("persona_state"))
                if (!$util.isInteger(message.persona_state))
                    return "persona_state: integer expected";
            if (message.player_name != null && message.hasOwnProperty("player_name"))
                if (!$util.isString(message.player_name))
                    return "player_name: string expected";
            if (message.is_auto_generated_name != null && message.hasOwnProperty("is_auto_generated_name"))
                if (typeof message.is_auto_generated_name !== "boolean")
                    return "is_auto_generated_name: boolean expected";
            if (message.high_priority != null && message.hasOwnProperty("high_priority"))
                if (typeof message.high_priority !== "boolean")
                    return "high_priority: boolean expected";
            if (message.persona_set_by_user != null && message.hasOwnProperty("persona_set_by_user"))
                if (typeof message.persona_set_by_user !== "boolean")
                    return "persona_set_by_user: boolean expected";
            if (message.persona_state_flags != null && message.hasOwnProperty("persona_state_flags"))
                if (!$util.isInteger(message.persona_state_flags))
                    return "persona_state_flags: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientChangeStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientChangeStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientChangeStatus} CMsgClientChangeStatus
         */
        CMsgClientChangeStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientChangeStatus)
                return object;
            var message = new $root.CMsgClientChangeStatus();
            if (object.persona_state != null)
                message.persona_state = object.persona_state >>> 0;
            if (object.player_name != null)
                message.player_name = String(object.player_name);
            if (object.is_auto_generated_name != null)
                message.is_auto_generated_name = Boolean(object.is_auto_generated_name);
            if (object.high_priority != null)
                message.high_priority = Boolean(object.high_priority);
            if (object.persona_set_by_user != null)
                message.persona_set_by_user = Boolean(object.persona_set_by_user);
            if (object.persona_state_flags != null)
                message.persona_state_flags = object.persona_state_flags >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientChangeStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientChangeStatus
         * @static
         * @param {CMsgClientChangeStatus} message CMsgClientChangeStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientChangeStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.persona_state = 0;
                object.player_name = "";
                object.is_auto_generated_name = false;
                object.high_priority = false;
                object.persona_set_by_user = false;
                object.persona_state_flags = 0;
            }
            if (message.persona_state != null && message.hasOwnProperty("persona_state"))
                object.persona_state = message.persona_state;
            if (message.player_name != null && message.hasOwnProperty("player_name"))
                object.player_name = message.player_name;
            if (message.is_auto_generated_name != null && message.hasOwnProperty("is_auto_generated_name"))
                object.is_auto_generated_name = message.is_auto_generated_name;
            if (message.high_priority != null && message.hasOwnProperty("high_priority"))
                object.high_priority = message.high_priority;
            if (message.persona_set_by_user != null && message.hasOwnProperty("persona_set_by_user"))
                object.persona_set_by_user = message.persona_set_by_user;
            if (message.persona_state_flags != null && message.hasOwnProperty("persona_state_flags"))
                object.persona_state_flags = message.persona_state_flags;
            return object;
        };
    
        /**
         * Converts this CMsgClientChangeStatus to JSON.
         * @function toJSON
         * @memberof CMsgClientChangeStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientChangeStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientChangeStatus;
    })();
    
    $root.CMsgPersonaChangeResponse = (function() {
    
        /**
         * Properties of a CMsgPersonaChangeResponse.
         * @exports ICMsgPersonaChangeResponse
         * @interface ICMsgPersonaChangeResponse
         * @property {number|null} [result] CMsgPersonaChangeResponse result
         * @property {string|null} [player_name] CMsgPersonaChangeResponse player_name
         */
    
        /**
         * Constructs a new CMsgPersonaChangeResponse.
         * @exports CMsgPersonaChangeResponse
         * @classdesc Represents a CMsgPersonaChangeResponse.
         * @implements ICMsgPersonaChangeResponse
         * @constructor
         * @param {ICMsgPersonaChangeResponse=} [properties] Properties to set
         */
        function CMsgPersonaChangeResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgPersonaChangeResponse result.
         * @member {number} result
         * @memberof CMsgPersonaChangeResponse
         * @instance
         */
        CMsgPersonaChangeResponse.prototype.result = 0;
    
        /**
         * CMsgPersonaChangeResponse player_name.
         * @member {string} player_name
         * @memberof CMsgPersonaChangeResponse
         * @instance
         */
        CMsgPersonaChangeResponse.prototype.player_name = "";
    
        /**
         * Creates a new CMsgPersonaChangeResponse instance using the specified properties.
         * @function create
         * @memberof CMsgPersonaChangeResponse
         * @static
         * @param {ICMsgPersonaChangeResponse=} [properties] Properties to set
         * @returns {CMsgPersonaChangeResponse} CMsgPersonaChangeResponse instance
         */
        CMsgPersonaChangeResponse.create = function create(properties) {
            return new CMsgPersonaChangeResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgPersonaChangeResponse message. Does not implicitly {@link CMsgPersonaChangeResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgPersonaChangeResponse
         * @static
         * @param {ICMsgPersonaChangeResponse} message CMsgPersonaChangeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgPersonaChangeResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.result);
            if (message.player_name != null && message.hasOwnProperty("player_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.player_name);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgPersonaChangeResponse message, length delimited. Does not implicitly {@link CMsgPersonaChangeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgPersonaChangeResponse
         * @static
         * @param {ICMsgPersonaChangeResponse} message CMsgPersonaChangeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgPersonaChangeResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgPersonaChangeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgPersonaChangeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgPersonaChangeResponse} CMsgPersonaChangeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgPersonaChangeResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgPersonaChangeResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.uint32();
                    break;
                case 2:
                    message.player_name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgPersonaChangeResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgPersonaChangeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgPersonaChangeResponse} CMsgPersonaChangeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgPersonaChangeResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgPersonaChangeResponse message.
         * @function verify
         * @memberof CMsgPersonaChangeResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgPersonaChangeResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.player_name != null && message.hasOwnProperty("player_name"))
                if (!$util.isString(message.player_name))
                    return "player_name: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgPersonaChangeResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgPersonaChangeResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgPersonaChangeResponse} CMsgPersonaChangeResponse
         */
        CMsgPersonaChangeResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgPersonaChangeResponse)
                return object;
            var message = new $root.CMsgPersonaChangeResponse();
            if (object.result != null)
                message.result = object.result >>> 0;
            if (object.player_name != null)
                message.player_name = String(object.player_name);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgPersonaChangeResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgPersonaChangeResponse
         * @static
         * @param {CMsgPersonaChangeResponse} message CMsgPersonaChangeResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgPersonaChangeResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = 0;
                object.player_name = "";
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.player_name != null && message.hasOwnProperty("player_name"))
                object.player_name = message.player_name;
            return object;
        };
    
        /**
         * Converts this CMsgPersonaChangeResponse to JSON.
         * @function toJSON
         * @memberof CMsgPersonaChangeResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgPersonaChangeResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgPersonaChangeResponse;
    })();
    
    $root.CMsgClientPersonaState = (function() {
    
        /**
         * Properties of a CMsgClientPersonaState.
         * @exports ICMsgClientPersonaState
         * @interface ICMsgClientPersonaState
         * @property {number|null} [status_flags] CMsgClientPersonaState status_flags
         * @property {Array.<CMsgClientPersonaState.IFriend>|null} [friends] CMsgClientPersonaState friends
         */
    
        /**
         * Constructs a new CMsgClientPersonaState.
         * @exports CMsgClientPersonaState
         * @classdesc Represents a CMsgClientPersonaState.
         * @implements ICMsgClientPersonaState
         * @constructor
         * @param {ICMsgClientPersonaState=} [properties] Properties to set
         */
        function CMsgClientPersonaState(properties) {
            this.friends = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientPersonaState status_flags.
         * @member {number} status_flags
         * @memberof CMsgClientPersonaState
         * @instance
         */
        CMsgClientPersonaState.prototype.status_flags = 0;
    
        /**
         * CMsgClientPersonaState friends.
         * @member {Array.<CMsgClientPersonaState.IFriend>} friends
         * @memberof CMsgClientPersonaState
         * @instance
         */
        CMsgClientPersonaState.prototype.friends = $util.emptyArray;
    
        /**
         * Creates a new CMsgClientPersonaState instance using the specified properties.
         * @function create
         * @memberof CMsgClientPersonaState
         * @static
         * @param {ICMsgClientPersonaState=} [properties] Properties to set
         * @returns {CMsgClientPersonaState} CMsgClientPersonaState instance
         */
        CMsgClientPersonaState.create = function create(properties) {
            return new CMsgClientPersonaState(properties);
        };
    
        /**
         * Encodes the specified CMsgClientPersonaState message. Does not implicitly {@link CMsgClientPersonaState.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientPersonaState
         * @static
         * @param {ICMsgClientPersonaState} message CMsgClientPersonaState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientPersonaState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status_flags != null && message.hasOwnProperty("status_flags"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status_flags);
            if (message.friends != null && message.friends.length)
                for (var i = 0; i < message.friends.length; ++i)
                    $root.CMsgClientPersonaState.Friend.encode(message.friends[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientPersonaState message, length delimited. Does not implicitly {@link CMsgClientPersonaState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientPersonaState
         * @static
         * @param {ICMsgClientPersonaState} message CMsgClientPersonaState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientPersonaState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientPersonaState message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientPersonaState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientPersonaState} CMsgClientPersonaState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientPersonaState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientPersonaState();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status_flags = reader.uint32();
                    break;
                case 2:
                    if (!(message.friends && message.friends.length))
                        message.friends = [];
                    message.friends.push($root.CMsgClientPersonaState.Friend.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientPersonaState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientPersonaState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientPersonaState} CMsgClientPersonaState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientPersonaState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientPersonaState message.
         * @function verify
         * @memberof CMsgClientPersonaState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientPersonaState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status_flags != null && message.hasOwnProperty("status_flags"))
                if (!$util.isInteger(message.status_flags))
                    return "status_flags: integer expected";
            if (message.friends != null && message.hasOwnProperty("friends")) {
                if (!Array.isArray(message.friends))
                    return "friends: array expected";
                for (var i = 0; i < message.friends.length; ++i) {
                    var error = $root.CMsgClientPersonaState.Friend.verify(message.friends[i]);
                    if (error)
                        return "friends." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgClientPersonaState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientPersonaState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientPersonaState} CMsgClientPersonaState
         */
        CMsgClientPersonaState.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientPersonaState)
                return object;
            var message = new $root.CMsgClientPersonaState();
            if (object.status_flags != null)
                message.status_flags = object.status_flags >>> 0;
            if (object.friends) {
                if (!Array.isArray(object.friends))
                    throw TypeError(".CMsgClientPersonaState.friends: array expected");
                message.friends = [];
                for (var i = 0; i < object.friends.length; ++i) {
                    if (typeof object.friends[i] !== "object")
                        throw TypeError(".CMsgClientPersonaState.friends: object expected");
                    message.friends[i] = $root.CMsgClientPersonaState.Friend.fromObject(object.friends[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientPersonaState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientPersonaState
         * @static
         * @param {CMsgClientPersonaState} message CMsgClientPersonaState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientPersonaState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.friends = [];
            if (options.defaults)
                object.status_flags = 0;
            if (message.status_flags != null && message.hasOwnProperty("status_flags"))
                object.status_flags = message.status_flags;
            if (message.friends && message.friends.length) {
                object.friends = [];
                for (var j = 0; j < message.friends.length; ++j)
                    object.friends[j] = $root.CMsgClientPersonaState.Friend.toObject(message.friends[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgClientPersonaState to JSON.
         * @function toJSON
         * @memberof CMsgClientPersonaState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientPersonaState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgClientPersonaState.Friend = (function() {
    
            /**
             * Properties of a Friend.
             * @memberof CMsgClientPersonaState
             * @interface IFriend
             * @property {number|Long|null} [friendid] Friend friendid
             * @property {number|null} [persona_state] Friend persona_state
             * @property {number|null} [game_played_app_id] Friend game_played_app_id
             * @property {number|null} [game_server_ip] Friend game_server_ip
             * @property {number|null} [game_server_port] Friend game_server_port
             * @property {number|null} [persona_state_flags] Friend persona_state_flags
             * @property {number|null} [online_session_instances] Friend online_session_instances
             * @property {number|null} [published_instance_id] Friend published_instance_id
             * @property {boolean|null} [persona_set_by_user] Friend persona_set_by_user
             * @property {string|null} [player_name] Friend player_name
             * @property {number|null} [query_port] Friend query_port
             * @property {number|Long|null} [steamid_source] Friend steamid_source
             * @property {Uint8Array|null} [avatar_hash] Friend avatar_hash
             * @property {number|null} [last_logoff] Friend last_logoff
             * @property {number|null} [last_logon] Friend last_logon
             * @property {number|null} [clan_rank] Friend clan_rank
             * @property {string|null} [game_name] Friend game_name
             * @property {number|Long|null} [gameid] Friend gameid
             * @property {Uint8Array|null} [game_data_blob] Friend game_data_blob
             * @property {CMsgClientPersonaState.Friend.IClanData|null} [clan_data] Friend clan_data
             * @property {string|null} [clan_tag] Friend clan_tag
             * @property {Array.<CMsgClientPersonaState.Friend.IKV>|null} [rich_presence] Friend rich_presence
             * @property {number|Long|null} [broadcast_id] Friend broadcast_id
             * @property {number|Long|null} [game_lobby_id] Friend game_lobby_id
             */
    
            /**
             * Constructs a new Friend.
             * @memberof CMsgClientPersonaState
             * @classdesc Represents a Friend.
             * @implements IFriend
             * @constructor
             * @param {CMsgClientPersonaState.IFriend=} [properties] Properties to set
             */
            function Friend(properties) {
                this.rich_presence = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Friend friendid.
             * @member {number|Long} friendid
             * @memberof CMsgClientPersonaState.Friend
             * @instance
             */
            Friend.prototype.friendid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Friend persona_state.
             * @member {number} persona_state
             * @memberof CMsgClientPersonaState.Friend
             * @instance
             */
            Friend.prototype.persona_state = 0;
    
            /**
             * Friend game_played_app_id.
             * @member {number} game_played_app_id
             * @memberof CMsgClientPersonaState.Friend
             * @instance
             */
            Friend.prototype.game_played_app_id = 0;
    
            /**
             * Friend game_server_ip.
             * @member {number} game_server_ip
             * @memberof CMsgClientPersonaState.Friend
             * @instance
             */
            Friend.prototype.game_server_ip = 0;
    
            /**
             * Friend game_server_port.
             * @member {number} game_server_port
             * @memberof CMsgClientPersonaState.Friend
             * @instance
             */
            Friend.prototype.game_server_port = 0;
    
            /**
             * Friend persona_state_flags.
             * @member {number} persona_state_flags
             * @memberof CMsgClientPersonaState.Friend
             * @instance
             */
            Friend.prototype.persona_state_flags = 0;
    
            /**
             * Friend online_session_instances.
             * @member {number} online_session_instances
             * @memberof CMsgClientPersonaState.Friend
             * @instance
             */
            Friend.prototype.online_session_instances = 0;
    
            /**
             * Friend published_instance_id.
             * @member {number} published_instance_id
             * @memberof CMsgClientPersonaState.Friend
             * @instance
             */
            Friend.prototype.published_instance_id = 0;
    
            /**
             * Friend persona_set_by_user.
             * @member {boolean} persona_set_by_user
             * @memberof CMsgClientPersonaState.Friend
             * @instance
             */
            Friend.prototype.persona_set_by_user = false;
    
            /**
             * Friend player_name.
             * @member {string} player_name
             * @memberof CMsgClientPersonaState.Friend
             * @instance
             */
            Friend.prototype.player_name = "";
    
            /**
             * Friend query_port.
             * @member {number} query_port
             * @memberof CMsgClientPersonaState.Friend
             * @instance
             */
            Friend.prototype.query_port = 0;
    
            /**
             * Friend steamid_source.
             * @member {number|Long} steamid_source
             * @memberof CMsgClientPersonaState.Friend
             * @instance
             */
            Friend.prototype.steamid_source = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Friend avatar_hash.
             * @member {Uint8Array} avatar_hash
             * @memberof CMsgClientPersonaState.Friend
             * @instance
             */
            Friend.prototype.avatar_hash = $util.newBuffer([]);
    
            /**
             * Friend last_logoff.
             * @member {number} last_logoff
             * @memberof CMsgClientPersonaState.Friend
             * @instance
             */
            Friend.prototype.last_logoff = 0;
    
            /**
             * Friend last_logon.
             * @member {number} last_logon
             * @memberof CMsgClientPersonaState.Friend
             * @instance
             */
            Friend.prototype.last_logon = 0;
    
            /**
             * Friend clan_rank.
             * @member {number} clan_rank
             * @memberof CMsgClientPersonaState.Friend
             * @instance
             */
            Friend.prototype.clan_rank = 0;
    
            /**
             * Friend game_name.
             * @member {string} game_name
             * @memberof CMsgClientPersonaState.Friend
             * @instance
             */
            Friend.prototype.game_name = "";
    
            /**
             * Friend gameid.
             * @member {number|Long} gameid
             * @memberof CMsgClientPersonaState.Friend
             * @instance
             */
            Friend.prototype.gameid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Friend game_data_blob.
             * @member {Uint8Array} game_data_blob
             * @memberof CMsgClientPersonaState.Friend
             * @instance
             */
            Friend.prototype.game_data_blob = $util.newBuffer([]);
    
            /**
             * Friend clan_data.
             * @member {CMsgClientPersonaState.Friend.IClanData|null|undefined} clan_data
             * @memberof CMsgClientPersonaState.Friend
             * @instance
             */
            Friend.prototype.clan_data = null;
    
            /**
             * Friend clan_tag.
             * @member {string} clan_tag
             * @memberof CMsgClientPersonaState.Friend
             * @instance
             */
            Friend.prototype.clan_tag = "";
    
            /**
             * Friend rich_presence.
             * @member {Array.<CMsgClientPersonaState.Friend.IKV>} rich_presence
             * @memberof CMsgClientPersonaState.Friend
             * @instance
             */
            Friend.prototype.rich_presence = $util.emptyArray;
    
            /**
             * Friend broadcast_id.
             * @member {number|Long} broadcast_id
             * @memberof CMsgClientPersonaState.Friend
             * @instance
             */
            Friend.prototype.broadcast_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Friend game_lobby_id.
             * @member {number|Long} game_lobby_id
             * @memberof CMsgClientPersonaState.Friend
             * @instance
             */
            Friend.prototype.game_lobby_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Creates a new Friend instance using the specified properties.
             * @function create
             * @memberof CMsgClientPersonaState.Friend
             * @static
             * @param {CMsgClientPersonaState.IFriend=} [properties] Properties to set
             * @returns {CMsgClientPersonaState.Friend} Friend instance
             */
            Friend.create = function create(properties) {
                return new Friend(properties);
            };
    
            /**
             * Encodes the specified Friend message. Does not implicitly {@link CMsgClientPersonaState.Friend.verify|verify} messages.
             * @function encode
             * @memberof CMsgClientPersonaState.Friend
             * @static
             * @param {CMsgClientPersonaState.IFriend} message Friend message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Friend.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.friendid != null && message.hasOwnProperty("friendid"))
                    writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.friendid);
                if (message.persona_state != null && message.hasOwnProperty("persona_state"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.persona_state);
                if (message.game_played_app_id != null && message.hasOwnProperty("game_played_app_id"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.game_played_app_id);
                if (message.game_server_ip != null && message.hasOwnProperty("game_server_ip"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.game_server_ip);
                if (message.game_server_port != null && message.hasOwnProperty("game_server_port"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.game_server_port);
                if (message.persona_state_flags != null && message.hasOwnProperty("persona_state_flags"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.persona_state_flags);
                if (message.online_session_instances != null && message.hasOwnProperty("online_session_instances"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.online_session_instances);
                if (message.published_instance_id != null && message.hasOwnProperty("published_instance_id"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.published_instance_id);
                if (message.persona_set_by_user != null && message.hasOwnProperty("persona_set_by_user"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.persona_set_by_user);
                if (message.player_name != null && message.hasOwnProperty("player_name"))
                    writer.uint32(/* id 15, wireType 2 =*/122).string(message.player_name);
                if (message.query_port != null && message.hasOwnProperty("query_port"))
                    writer.uint32(/* id 20, wireType 0 =*/160).uint32(message.query_port);
                if (message.steamid_source != null && message.hasOwnProperty("steamid_source"))
                    writer.uint32(/* id 25, wireType 1 =*/201).fixed64(message.steamid_source);
                if (message.avatar_hash != null && message.hasOwnProperty("avatar_hash"))
                    writer.uint32(/* id 31, wireType 2 =*/250).bytes(message.avatar_hash);
                if (message.last_logoff != null && message.hasOwnProperty("last_logoff"))
                    writer.uint32(/* id 45, wireType 0 =*/360).uint32(message.last_logoff);
                if (message.last_logon != null && message.hasOwnProperty("last_logon"))
                    writer.uint32(/* id 46, wireType 0 =*/368).uint32(message.last_logon);
                if (message.clan_rank != null && message.hasOwnProperty("clan_rank"))
                    writer.uint32(/* id 50, wireType 0 =*/400).uint32(message.clan_rank);
                if (message.game_name != null && message.hasOwnProperty("game_name"))
                    writer.uint32(/* id 55, wireType 2 =*/442).string(message.game_name);
                if (message.gameid != null && message.hasOwnProperty("gameid"))
                    writer.uint32(/* id 56, wireType 1 =*/449).fixed64(message.gameid);
                if (message.game_data_blob != null && message.hasOwnProperty("game_data_blob"))
                    writer.uint32(/* id 60, wireType 2 =*/482).bytes(message.game_data_blob);
                if (message.clan_data != null && message.hasOwnProperty("clan_data"))
                    $root.CMsgClientPersonaState.Friend.ClanData.encode(message.clan_data, writer.uint32(/* id 64, wireType 2 =*/514).fork()).ldelim();
                if (message.clan_tag != null && message.hasOwnProperty("clan_tag"))
                    writer.uint32(/* id 65, wireType 2 =*/522).string(message.clan_tag);
                if (message.rich_presence != null && message.rich_presence.length)
                    for (var i = 0; i < message.rich_presence.length; ++i)
                        $root.CMsgClientPersonaState.Friend.KV.encode(message.rich_presence[i], writer.uint32(/* id 71, wireType 2 =*/570).fork()).ldelim();
                if (message.broadcast_id != null && message.hasOwnProperty("broadcast_id"))
                    writer.uint32(/* id 72, wireType 1 =*/577).fixed64(message.broadcast_id);
                if (message.game_lobby_id != null && message.hasOwnProperty("game_lobby_id"))
                    writer.uint32(/* id 73, wireType 1 =*/585).fixed64(message.game_lobby_id);
                return writer;
            };
    
            /**
             * Encodes the specified Friend message, length delimited. Does not implicitly {@link CMsgClientPersonaState.Friend.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgClientPersonaState.Friend
             * @static
             * @param {CMsgClientPersonaState.IFriend} message Friend message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Friend.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Friend message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgClientPersonaState.Friend
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgClientPersonaState.Friend} Friend
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Friend.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientPersonaState.Friend();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.friendid = reader.fixed64();
                        break;
                    case 2:
                        message.persona_state = reader.uint32();
                        break;
                    case 3:
                        message.game_played_app_id = reader.uint32();
                        break;
                    case 4:
                        message.game_server_ip = reader.uint32();
                        break;
                    case 5:
                        message.game_server_port = reader.uint32();
                        break;
                    case 6:
                        message.persona_state_flags = reader.uint32();
                        break;
                    case 7:
                        message.online_session_instances = reader.uint32();
                        break;
                    case 8:
                        message.published_instance_id = reader.uint32();
                        break;
                    case 10:
                        message.persona_set_by_user = reader.bool();
                        break;
                    case 15:
                        message.player_name = reader.string();
                        break;
                    case 20:
                        message.query_port = reader.uint32();
                        break;
                    case 25:
                        message.steamid_source = reader.fixed64();
                        break;
                    case 31:
                        message.avatar_hash = reader.bytes();
                        break;
                    case 45:
                        message.last_logoff = reader.uint32();
                        break;
                    case 46:
                        message.last_logon = reader.uint32();
                        break;
                    case 50:
                        message.clan_rank = reader.uint32();
                        break;
                    case 55:
                        message.game_name = reader.string();
                        break;
                    case 56:
                        message.gameid = reader.fixed64();
                        break;
                    case 60:
                        message.game_data_blob = reader.bytes();
                        break;
                    case 64:
                        message.clan_data = $root.CMsgClientPersonaState.Friend.ClanData.decode(reader, reader.uint32());
                        break;
                    case 65:
                        message.clan_tag = reader.string();
                        break;
                    case 71:
                        if (!(message.rich_presence && message.rich_presence.length))
                            message.rich_presence = [];
                        message.rich_presence.push($root.CMsgClientPersonaState.Friend.KV.decode(reader, reader.uint32()));
                        break;
                    case 72:
                        message.broadcast_id = reader.fixed64();
                        break;
                    case 73:
                        message.game_lobby_id = reader.fixed64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Friend message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgClientPersonaState.Friend
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgClientPersonaState.Friend} Friend
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Friend.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Friend message.
             * @function verify
             * @memberof CMsgClientPersonaState.Friend
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Friend.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.friendid != null && message.hasOwnProperty("friendid"))
                    if (!$util.isInteger(message.friendid) && !(message.friendid && $util.isInteger(message.friendid.low) && $util.isInteger(message.friendid.high)))
                        return "friendid: integer|Long expected";
                if (message.persona_state != null && message.hasOwnProperty("persona_state"))
                    if (!$util.isInteger(message.persona_state))
                        return "persona_state: integer expected";
                if (message.game_played_app_id != null && message.hasOwnProperty("game_played_app_id"))
                    if (!$util.isInteger(message.game_played_app_id))
                        return "game_played_app_id: integer expected";
                if (message.game_server_ip != null && message.hasOwnProperty("game_server_ip"))
                    if (!$util.isInteger(message.game_server_ip))
                        return "game_server_ip: integer expected";
                if (message.game_server_port != null && message.hasOwnProperty("game_server_port"))
                    if (!$util.isInteger(message.game_server_port))
                        return "game_server_port: integer expected";
                if (message.persona_state_flags != null && message.hasOwnProperty("persona_state_flags"))
                    if (!$util.isInteger(message.persona_state_flags))
                        return "persona_state_flags: integer expected";
                if (message.online_session_instances != null && message.hasOwnProperty("online_session_instances"))
                    if (!$util.isInteger(message.online_session_instances))
                        return "online_session_instances: integer expected";
                if (message.published_instance_id != null && message.hasOwnProperty("published_instance_id"))
                    if (!$util.isInteger(message.published_instance_id))
                        return "published_instance_id: integer expected";
                if (message.persona_set_by_user != null && message.hasOwnProperty("persona_set_by_user"))
                    if (typeof message.persona_set_by_user !== "boolean")
                        return "persona_set_by_user: boolean expected";
                if (message.player_name != null && message.hasOwnProperty("player_name"))
                    if (!$util.isString(message.player_name))
                        return "player_name: string expected";
                if (message.query_port != null && message.hasOwnProperty("query_port"))
                    if (!$util.isInteger(message.query_port))
                        return "query_port: integer expected";
                if (message.steamid_source != null && message.hasOwnProperty("steamid_source"))
                    if (!$util.isInteger(message.steamid_source) && !(message.steamid_source && $util.isInteger(message.steamid_source.low) && $util.isInteger(message.steamid_source.high)))
                        return "steamid_source: integer|Long expected";
                if (message.avatar_hash != null && message.hasOwnProperty("avatar_hash"))
                    if (!(message.avatar_hash && typeof message.avatar_hash.length === "number" || $util.isString(message.avatar_hash)))
                        return "avatar_hash: buffer expected";
                if (message.last_logoff != null && message.hasOwnProperty("last_logoff"))
                    if (!$util.isInteger(message.last_logoff))
                        return "last_logoff: integer expected";
                if (message.last_logon != null && message.hasOwnProperty("last_logon"))
                    if (!$util.isInteger(message.last_logon))
                        return "last_logon: integer expected";
                if (message.clan_rank != null && message.hasOwnProperty("clan_rank"))
                    if (!$util.isInteger(message.clan_rank))
                        return "clan_rank: integer expected";
                if (message.game_name != null && message.hasOwnProperty("game_name"))
                    if (!$util.isString(message.game_name))
                        return "game_name: string expected";
                if (message.gameid != null && message.hasOwnProperty("gameid"))
                    if (!$util.isInteger(message.gameid) && !(message.gameid && $util.isInteger(message.gameid.low) && $util.isInteger(message.gameid.high)))
                        return "gameid: integer|Long expected";
                if (message.game_data_blob != null && message.hasOwnProperty("game_data_blob"))
                    if (!(message.game_data_blob && typeof message.game_data_blob.length === "number" || $util.isString(message.game_data_blob)))
                        return "game_data_blob: buffer expected";
                if (message.clan_data != null && message.hasOwnProperty("clan_data")) {
                    var error = $root.CMsgClientPersonaState.Friend.ClanData.verify(message.clan_data);
                    if (error)
                        return "clan_data." + error;
                }
                if (message.clan_tag != null && message.hasOwnProperty("clan_tag"))
                    if (!$util.isString(message.clan_tag))
                        return "clan_tag: string expected";
                if (message.rich_presence != null && message.hasOwnProperty("rich_presence")) {
                    if (!Array.isArray(message.rich_presence))
                        return "rich_presence: array expected";
                    for (var i = 0; i < message.rich_presence.length; ++i) {
                        var error = $root.CMsgClientPersonaState.Friend.KV.verify(message.rich_presence[i]);
                        if (error)
                            return "rich_presence." + error;
                    }
                }
                if (message.broadcast_id != null && message.hasOwnProperty("broadcast_id"))
                    if (!$util.isInteger(message.broadcast_id) && !(message.broadcast_id && $util.isInteger(message.broadcast_id.low) && $util.isInteger(message.broadcast_id.high)))
                        return "broadcast_id: integer|Long expected";
                if (message.game_lobby_id != null && message.hasOwnProperty("game_lobby_id"))
                    if (!$util.isInteger(message.game_lobby_id) && !(message.game_lobby_id && $util.isInteger(message.game_lobby_id.low) && $util.isInteger(message.game_lobby_id.high)))
                        return "game_lobby_id: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a Friend message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgClientPersonaState.Friend
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgClientPersonaState.Friend} Friend
             */
            Friend.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgClientPersonaState.Friend)
                    return object;
                var message = new $root.CMsgClientPersonaState.Friend();
                if (object.friendid != null)
                    if ($util.Long)
                        (message.friendid = $util.Long.fromValue(object.friendid)).unsigned = false;
                    else if (typeof object.friendid === "string")
                        message.friendid = parseInt(object.friendid, 10);
                    else if (typeof object.friendid === "number")
                        message.friendid = object.friendid;
                    else if (typeof object.friendid === "object")
                        message.friendid = new $util.LongBits(object.friendid.low >>> 0, object.friendid.high >>> 0).toNumber();
                if (object.persona_state != null)
                    message.persona_state = object.persona_state >>> 0;
                if (object.game_played_app_id != null)
                    message.game_played_app_id = object.game_played_app_id >>> 0;
                if (object.game_server_ip != null)
                    message.game_server_ip = object.game_server_ip >>> 0;
                if (object.game_server_port != null)
                    message.game_server_port = object.game_server_port >>> 0;
                if (object.persona_state_flags != null)
                    message.persona_state_flags = object.persona_state_flags >>> 0;
                if (object.online_session_instances != null)
                    message.online_session_instances = object.online_session_instances >>> 0;
                if (object.published_instance_id != null)
                    message.published_instance_id = object.published_instance_id >>> 0;
                if (object.persona_set_by_user != null)
                    message.persona_set_by_user = Boolean(object.persona_set_by_user);
                if (object.player_name != null)
                    message.player_name = String(object.player_name);
                if (object.query_port != null)
                    message.query_port = object.query_port >>> 0;
                if (object.steamid_source != null)
                    if ($util.Long)
                        (message.steamid_source = $util.Long.fromValue(object.steamid_source)).unsigned = false;
                    else if (typeof object.steamid_source === "string")
                        message.steamid_source = parseInt(object.steamid_source, 10);
                    else if (typeof object.steamid_source === "number")
                        message.steamid_source = object.steamid_source;
                    else if (typeof object.steamid_source === "object")
                        message.steamid_source = new $util.LongBits(object.steamid_source.low >>> 0, object.steamid_source.high >>> 0).toNumber();
                if (object.avatar_hash != null)
                    if (typeof object.avatar_hash === "string")
                        $util.base64.decode(object.avatar_hash, message.avatar_hash = $util.newBuffer($util.base64.length(object.avatar_hash)), 0);
                    else if (object.avatar_hash.length)
                        message.avatar_hash = object.avatar_hash;
                if (object.last_logoff != null)
                    message.last_logoff = object.last_logoff >>> 0;
                if (object.last_logon != null)
                    message.last_logon = object.last_logon >>> 0;
                if (object.clan_rank != null)
                    message.clan_rank = object.clan_rank >>> 0;
                if (object.game_name != null)
                    message.game_name = String(object.game_name);
                if (object.gameid != null)
                    if ($util.Long)
                        (message.gameid = $util.Long.fromValue(object.gameid)).unsigned = false;
                    else if (typeof object.gameid === "string")
                        message.gameid = parseInt(object.gameid, 10);
                    else if (typeof object.gameid === "number")
                        message.gameid = object.gameid;
                    else if (typeof object.gameid === "object")
                        message.gameid = new $util.LongBits(object.gameid.low >>> 0, object.gameid.high >>> 0).toNumber();
                if (object.game_data_blob != null)
                    if (typeof object.game_data_blob === "string")
                        $util.base64.decode(object.game_data_blob, message.game_data_blob = $util.newBuffer($util.base64.length(object.game_data_blob)), 0);
                    else if (object.game_data_blob.length)
                        message.game_data_blob = object.game_data_blob;
                if (object.clan_data != null) {
                    if (typeof object.clan_data !== "object")
                        throw TypeError(".CMsgClientPersonaState.Friend.clan_data: object expected");
                    message.clan_data = $root.CMsgClientPersonaState.Friend.ClanData.fromObject(object.clan_data);
                }
                if (object.clan_tag != null)
                    message.clan_tag = String(object.clan_tag);
                if (object.rich_presence) {
                    if (!Array.isArray(object.rich_presence))
                        throw TypeError(".CMsgClientPersonaState.Friend.rich_presence: array expected");
                    message.rich_presence = [];
                    for (var i = 0; i < object.rich_presence.length; ++i) {
                        if (typeof object.rich_presence[i] !== "object")
                            throw TypeError(".CMsgClientPersonaState.Friend.rich_presence: object expected");
                        message.rich_presence[i] = $root.CMsgClientPersonaState.Friend.KV.fromObject(object.rich_presence[i]);
                    }
                }
                if (object.broadcast_id != null)
                    if ($util.Long)
                        (message.broadcast_id = $util.Long.fromValue(object.broadcast_id)).unsigned = false;
                    else if (typeof object.broadcast_id === "string")
                        message.broadcast_id = parseInt(object.broadcast_id, 10);
                    else if (typeof object.broadcast_id === "number")
                        message.broadcast_id = object.broadcast_id;
                    else if (typeof object.broadcast_id === "object")
                        message.broadcast_id = new $util.LongBits(object.broadcast_id.low >>> 0, object.broadcast_id.high >>> 0).toNumber();
                if (object.game_lobby_id != null)
                    if ($util.Long)
                        (message.game_lobby_id = $util.Long.fromValue(object.game_lobby_id)).unsigned = false;
                    else if (typeof object.game_lobby_id === "string")
                        message.game_lobby_id = parseInt(object.game_lobby_id, 10);
                    else if (typeof object.game_lobby_id === "number")
                        message.game_lobby_id = object.game_lobby_id;
                    else if (typeof object.game_lobby_id === "object")
                        message.game_lobby_id = new $util.LongBits(object.game_lobby_id.low >>> 0, object.game_lobby_id.high >>> 0).toNumber();
                return message;
            };
    
            /**
             * Creates a plain object from a Friend message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgClientPersonaState.Friend
             * @static
             * @param {CMsgClientPersonaState.Friend} message Friend
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Friend.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.rich_presence = [];
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.friendid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.friendid = options.longs === String ? "0" : 0;
                    object.persona_state = 0;
                    object.game_played_app_id = 0;
                    object.game_server_ip = 0;
                    object.game_server_port = 0;
                    object.persona_state_flags = 0;
                    object.online_session_instances = 0;
                    object.published_instance_id = 0;
                    object.persona_set_by_user = false;
                    object.player_name = "";
                    object.query_port = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.steamid_source = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.steamid_source = options.longs === String ? "0" : 0;
                    if (options.bytes === String)
                        object.avatar_hash = "";
                    else {
                        object.avatar_hash = [];
                        if (options.bytes !== Array)
                            object.avatar_hash = $util.newBuffer(object.avatar_hash);
                    }
                    object.last_logoff = 0;
                    object.last_logon = 0;
                    object.clan_rank = 0;
                    object.game_name = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.gameid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.gameid = options.longs === String ? "0" : 0;
                    if (options.bytes === String)
                        object.game_data_blob = "";
                    else {
                        object.game_data_blob = [];
                        if (options.bytes !== Array)
                            object.game_data_blob = $util.newBuffer(object.game_data_blob);
                    }
                    object.clan_data = null;
                    object.clan_tag = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.broadcast_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.broadcast_id = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.game_lobby_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.game_lobby_id = options.longs === String ? "0" : 0;
                }
                if (message.friendid != null && message.hasOwnProperty("friendid"))
                    if (typeof message.friendid === "number")
                        object.friendid = options.longs === String ? String(message.friendid) : message.friendid;
                    else
                        object.friendid = options.longs === String ? $util.Long.prototype.toString.call(message.friendid) : options.longs === Number ? new $util.LongBits(message.friendid.low >>> 0, message.friendid.high >>> 0).toNumber() : message.friendid;
                if (message.persona_state != null && message.hasOwnProperty("persona_state"))
                    object.persona_state = message.persona_state;
                if (message.game_played_app_id != null && message.hasOwnProperty("game_played_app_id"))
                    object.game_played_app_id = message.game_played_app_id;
                if (message.game_server_ip != null && message.hasOwnProperty("game_server_ip"))
                    object.game_server_ip = message.game_server_ip;
                if (message.game_server_port != null && message.hasOwnProperty("game_server_port"))
                    object.game_server_port = message.game_server_port;
                if (message.persona_state_flags != null && message.hasOwnProperty("persona_state_flags"))
                    object.persona_state_flags = message.persona_state_flags;
                if (message.online_session_instances != null && message.hasOwnProperty("online_session_instances"))
                    object.online_session_instances = message.online_session_instances;
                if (message.published_instance_id != null && message.hasOwnProperty("published_instance_id"))
                    object.published_instance_id = message.published_instance_id;
                if (message.persona_set_by_user != null && message.hasOwnProperty("persona_set_by_user"))
                    object.persona_set_by_user = message.persona_set_by_user;
                if (message.player_name != null && message.hasOwnProperty("player_name"))
                    object.player_name = message.player_name;
                if (message.query_port != null && message.hasOwnProperty("query_port"))
                    object.query_port = message.query_port;
                if (message.steamid_source != null && message.hasOwnProperty("steamid_source"))
                    if (typeof message.steamid_source === "number")
                        object.steamid_source = options.longs === String ? String(message.steamid_source) : message.steamid_source;
                    else
                        object.steamid_source = options.longs === String ? $util.Long.prototype.toString.call(message.steamid_source) : options.longs === Number ? new $util.LongBits(message.steamid_source.low >>> 0, message.steamid_source.high >>> 0).toNumber() : message.steamid_source;
                if (message.avatar_hash != null && message.hasOwnProperty("avatar_hash"))
                    object.avatar_hash = options.bytes === String ? $util.base64.encode(message.avatar_hash, 0, message.avatar_hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.avatar_hash) : message.avatar_hash;
                if (message.last_logoff != null && message.hasOwnProperty("last_logoff"))
                    object.last_logoff = message.last_logoff;
                if (message.last_logon != null && message.hasOwnProperty("last_logon"))
                    object.last_logon = message.last_logon;
                if (message.clan_rank != null && message.hasOwnProperty("clan_rank"))
                    object.clan_rank = message.clan_rank;
                if (message.game_name != null && message.hasOwnProperty("game_name"))
                    object.game_name = message.game_name;
                if (message.gameid != null && message.hasOwnProperty("gameid"))
                    if (typeof message.gameid === "number")
                        object.gameid = options.longs === String ? String(message.gameid) : message.gameid;
                    else
                        object.gameid = options.longs === String ? $util.Long.prototype.toString.call(message.gameid) : options.longs === Number ? new $util.LongBits(message.gameid.low >>> 0, message.gameid.high >>> 0).toNumber() : message.gameid;
                if (message.game_data_blob != null && message.hasOwnProperty("game_data_blob"))
                    object.game_data_blob = options.bytes === String ? $util.base64.encode(message.game_data_blob, 0, message.game_data_blob.length) : options.bytes === Array ? Array.prototype.slice.call(message.game_data_blob) : message.game_data_blob;
                if (message.clan_data != null && message.hasOwnProperty("clan_data"))
                    object.clan_data = $root.CMsgClientPersonaState.Friend.ClanData.toObject(message.clan_data, options);
                if (message.clan_tag != null && message.hasOwnProperty("clan_tag"))
                    object.clan_tag = message.clan_tag;
                if (message.rich_presence && message.rich_presence.length) {
                    object.rich_presence = [];
                    for (var j = 0; j < message.rich_presence.length; ++j)
                        object.rich_presence[j] = $root.CMsgClientPersonaState.Friend.KV.toObject(message.rich_presence[j], options);
                }
                if (message.broadcast_id != null && message.hasOwnProperty("broadcast_id"))
                    if (typeof message.broadcast_id === "number")
                        object.broadcast_id = options.longs === String ? String(message.broadcast_id) : message.broadcast_id;
                    else
                        object.broadcast_id = options.longs === String ? $util.Long.prototype.toString.call(message.broadcast_id) : options.longs === Number ? new $util.LongBits(message.broadcast_id.low >>> 0, message.broadcast_id.high >>> 0).toNumber() : message.broadcast_id;
                if (message.game_lobby_id != null && message.hasOwnProperty("game_lobby_id"))
                    if (typeof message.game_lobby_id === "number")
                        object.game_lobby_id = options.longs === String ? String(message.game_lobby_id) : message.game_lobby_id;
                    else
                        object.game_lobby_id = options.longs === String ? $util.Long.prototype.toString.call(message.game_lobby_id) : options.longs === Number ? new $util.LongBits(message.game_lobby_id.low >>> 0, message.game_lobby_id.high >>> 0).toNumber() : message.game_lobby_id;
                return object;
            };
    
            /**
             * Converts this Friend to JSON.
             * @function toJSON
             * @memberof CMsgClientPersonaState.Friend
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Friend.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            Friend.ClanData = (function() {
    
                /**
                 * Properties of a ClanData.
                 * @memberof CMsgClientPersonaState.Friend
                 * @interface IClanData
                 * @property {number|null} [ogg_app_id] ClanData ogg_app_id
                 * @property {number|Long|null} [chat_group_id] ClanData chat_group_id
                 */
    
                /**
                 * Constructs a new ClanData.
                 * @memberof CMsgClientPersonaState.Friend
                 * @classdesc Represents a ClanData.
                 * @implements IClanData
                 * @constructor
                 * @param {CMsgClientPersonaState.Friend.IClanData=} [properties] Properties to set
                 */
                function ClanData(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ClanData ogg_app_id.
                 * @member {number} ogg_app_id
                 * @memberof CMsgClientPersonaState.Friend.ClanData
                 * @instance
                 */
                ClanData.prototype.ogg_app_id = 0;
    
                /**
                 * ClanData chat_group_id.
                 * @member {number|Long} chat_group_id
                 * @memberof CMsgClientPersonaState.Friend.ClanData
                 * @instance
                 */
                ClanData.prototype.chat_group_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * Creates a new ClanData instance using the specified properties.
                 * @function create
                 * @memberof CMsgClientPersonaState.Friend.ClanData
                 * @static
                 * @param {CMsgClientPersonaState.Friend.IClanData=} [properties] Properties to set
                 * @returns {CMsgClientPersonaState.Friend.ClanData} ClanData instance
                 */
                ClanData.create = function create(properties) {
                    return new ClanData(properties);
                };
    
                /**
                 * Encodes the specified ClanData message. Does not implicitly {@link CMsgClientPersonaState.Friend.ClanData.verify|verify} messages.
                 * @function encode
                 * @memberof CMsgClientPersonaState.Friend.ClanData
                 * @static
                 * @param {CMsgClientPersonaState.Friend.IClanData} message ClanData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ClanData.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ogg_app_id != null && message.hasOwnProperty("ogg_app_id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ogg_app_id);
                    if (message.chat_group_id != null && message.hasOwnProperty("chat_group_id"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.chat_group_id);
                    return writer;
                };
    
                /**
                 * Encodes the specified ClanData message, length delimited. Does not implicitly {@link CMsgClientPersonaState.Friend.ClanData.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof CMsgClientPersonaState.Friend.ClanData
                 * @static
                 * @param {CMsgClientPersonaState.Friend.IClanData} message ClanData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ClanData.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ClanData message from the specified reader or buffer.
                 * @function decode
                 * @memberof CMsgClientPersonaState.Friend.ClanData
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {CMsgClientPersonaState.Friend.ClanData} ClanData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ClanData.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientPersonaState.Friend.ClanData();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.ogg_app_id = reader.uint32();
                            break;
                        case 2:
                            message.chat_group_id = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ClanData message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof CMsgClientPersonaState.Friend.ClanData
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {CMsgClientPersonaState.Friend.ClanData} ClanData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ClanData.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ClanData message.
                 * @function verify
                 * @memberof CMsgClientPersonaState.Friend.ClanData
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ClanData.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.ogg_app_id != null && message.hasOwnProperty("ogg_app_id"))
                        if (!$util.isInteger(message.ogg_app_id))
                            return "ogg_app_id: integer expected";
                    if (message.chat_group_id != null && message.hasOwnProperty("chat_group_id"))
                        if (!$util.isInteger(message.chat_group_id) && !(message.chat_group_id && $util.isInteger(message.chat_group_id.low) && $util.isInteger(message.chat_group_id.high)))
                            return "chat_group_id: integer|Long expected";
                    return null;
                };
    
                /**
                 * Creates a ClanData message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof CMsgClientPersonaState.Friend.ClanData
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {CMsgClientPersonaState.Friend.ClanData} ClanData
                 */
                ClanData.fromObject = function fromObject(object) {
                    if (object instanceof $root.CMsgClientPersonaState.Friend.ClanData)
                        return object;
                    var message = new $root.CMsgClientPersonaState.Friend.ClanData();
                    if (object.ogg_app_id != null)
                        message.ogg_app_id = object.ogg_app_id >>> 0;
                    if (object.chat_group_id != null)
                        if ($util.Long)
                            (message.chat_group_id = $util.Long.fromValue(object.chat_group_id)).unsigned = true;
                        else if (typeof object.chat_group_id === "string")
                            message.chat_group_id = parseInt(object.chat_group_id, 10);
                        else if (typeof object.chat_group_id === "number")
                            message.chat_group_id = object.chat_group_id;
                        else if (typeof object.chat_group_id === "object")
                            message.chat_group_id = new $util.LongBits(object.chat_group_id.low >>> 0, object.chat_group_id.high >>> 0).toNumber(true);
                    return message;
                };
    
                /**
                 * Creates a plain object from a ClanData message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof CMsgClientPersonaState.Friend.ClanData
                 * @static
                 * @param {CMsgClientPersonaState.Friend.ClanData} message ClanData
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ClanData.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.ogg_app_id = 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.chat_group_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.chat_group_id = options.longs === String ? "0" : 0;
                    }
                    if (message.ogg_app_id != null && message.hasOwnProperty("ogg_app_id"))
                        object.ogg_app_id = message.ogg_app_id;
                    if (message.chat_group_id != null && message.hasOwnProperty("chat_group_id"))
                        if (typeof message.chat_group_id === "number")
                            object.chat_group_id = options.longs === String ? String(message.chat_group_id) : message.chat_group_id;
                        else
                            object.chat_group_id = options.longs === String ? $util.Long.prototype.toString.call(message.chat_group_id) : options.longs === Number ? new $util.LongBits(message.chat_group_id.low >>> 0, message.chat_group_id.high >>> 0).toNumber(true) : message.chat_group_id;
                    return object;
                };
    
                /**
                 * Converts this ClanData to JSON.
                 * @function toJSON
                 * @memberof CMsgClientPersonaState.Friend.ClanData
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ClanData.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ClanData;
            })();
    
            Friend.KV = (function() {
    
                /**
                 * Properties of a KV.
                 * @memberof CMsgClientPersonaState.Friend
                 * @interface IKV
                 * @property {string|null} [key] KV key
                 * @property {string|null} [value] KV value
                 */
    
                /**
                 * Constructs a new KV.
                 * @memberof CMsgClientPersonaState.Friend
                 * @classdesc Represents a KV.
                 * @implements IKV
                 * @constructor
                 * @param {CMsgClientPersonaState.Friend.IKV=} [properties] Properties to set
                 */
                function KV(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * KV key.
                 * @member {string} key
                 * @memberof CMsgClientPersonaState.Friend.KV
                 * @instance
                 */
                KV.prototype.key = "";
    
                /**
                 * KV value.
                 * @member {string} value
                 * @memberof CMsgClientPersonaState.Friend.KV
                 * @instance
                 */
                KV.prototype.value = "";
    
                /**
                 * Creates a new KV instance using the specified properties.
                 * @function create
                 * @memberof CMsgClientPersonaState.Friend.KV
                 * @static
                 * @param {CMsgClientPersonaState.Friend.IKV=} [properties] Properties to set
                 * @returns {CMsgClientPersonaState.Friend.KV} KV instance
                 */
                KV.create = function create(properties) {
                    return new KV(properties);
                };
    
                /**
                 * Encodes the specified KV message. Does not implicitly {@link CMsgClientPersonaState.Friend.KV.verify|verify} messages.
                 * @function encode
                 * @memberof CMsgClientPersonaState.Friend.KV
                 * @static
                 * @param {CMsgClientPersonaState.Friend.IKV} message KV message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                KV.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.key != null && message.hasOwnProperty("key"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
                    if (message.value != null && message.hasOwnProperty("value"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified KV message, length delimited. Does not implicitly {@link CMsgClientPersonaState.Friend.KV.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof CMsgClientPersonaState.Friend.KV
                 * @static
                 * @param {CMsgClientPersonaState.Friend.IKV} message KV message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                KV.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a KV message from the specified reader or buffer.
                 * @function decode
                 * @memberof CMsgClientPersonaState.Friend.KV
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {CMsgClientPersonaState.Friend.KV} KV
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                KV.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientPersonaState.Friend.KV();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.key = reader.string();
                            break;
                        case 2:
                            message.value = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a KV message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof CMsgClientPersonaState.Friend.KV
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {CMsgClientPersonaState.Friend.KV} KV
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                KV.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a KV message.
                 * @function verify
                 * @memberof CMsgClientPersonaState.Friend.KV
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                KV.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.key != null && message.hasOwnProperty("key"))
                        if (!$util.isString(message.key))
                            return "key: string expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isString(message.value))
                            return "value: string expected";
                    return null;
                };
    
                /**
                 * Creates a KV message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof CMsgClientPersonaState.Friend.KV
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {CMsgClientPersonaState.Friend.KV} KV
                 */
                KV.fromObject = function fromObject(object) {
                    if (object instanceof $root.CMsgClientPersonaState.Friend.KV)
                        return object;
                    var message = new $root.CMsgClientPersonaState.Friend.KV();
                    if (object.key != null)
                        message.key = String(object.key);
                    if (object.value != null)
                        message.value = String(object.value);
                    return message;
                };
    
                /**
                 * Creates a plain object from a KV message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof CMsgClientPersonaState.Friend.KV
                 * @static
                 * @param {CMsgClientPersonaState.Friend.KV} message KV
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                KV.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.key = "";
                        object.value = "";
                    }
                    if (message.key != null && message.hasOwnProperty("key"))
                        object.key = message.key;
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = message.value;
                    return object;
                };
    
                /**
                 * Converts this KV to JSON.
                 * @function toJSON
                 * @memberof CMsgClientPersonaState.Friend.KV
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                KV.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return KV;
            })();
    
            return Friend;
        })();
    
        return CMsgClientPersonaState;
    })();
    
    $root.CMsgClientFriendProfileInfo = (function() {
    
        /**
         * Properties of a CMsgClientFriendProfileInfo.
         * @exports ICMsgClientFriendProfileInfo
         * @interface ICMsgClientFriendProfileInfo
         * @property {number|Long|null} [steamid_friend] CMsgClientFriendProfileInfo steamid_friend
         */
    
        /**
         * Constructs a new CMsgClientFriendProfileInfo.
         * @exports CMsgClientFriendProfileInfo
         * @classdesc Represents a CMsgClientFriendProfileInfo.
         * @implements ICMsgClientFriendProfileInfo
         * @constructor
         * @param {ICMsgClientFriendProfileInfo=} [properties] Properties to set
         */
        function CMsgClientFriendProfileInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientFriendProfileInfo steamid_friend.
         * @member {number|Long} steamid_friend
         * @memberof CMsgClientFriendProfileInfo
         * @instance
         */
        CMsgClientFriendProfileInfo.prototype.steamid_friend = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CMsgClientFriendProfileInfo instance using the specified properties.
         * @function create
         * @memberof CMsgClientFriendProfileInfo
         * @static
         * @param {ICMsgClientFriendProfileInfo=} [properties] Properties to set
         * @returns {CMsgClientFriendProfileInfo} CMsgClientFriendProfileInfo instance
         */
        CMsgClientFriendProfileInfo.create = function create(properties) {
            return new CMsgClientFriendProfileInfo(properties);
        };
    
        /**
         * Encodes the specified CMsgClientFriendProfileInfo message. Does not implicitly {@link CMsgClientFriendProfileInfo.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientFriendProfileInfo
         * @static
         * @param {ICMsgClientFriendProfileInfo} message CMsgClientFriendProfileInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientFriendProfileInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid_friend != null && message.hasOwnProperty("steamid_friend"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid_friend);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientFriendProfileInfo message, length delimited. Does not implicitly {@link CMsgClientFriendProfileInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientFriendProfileInfo
         * @static
         * @param {ICMsgClientFriendProfileInfo} message CMsgClientFriendProfileInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientFriendProfileInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientFriendProfileInfo message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientFriendProfileInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientFriendProfileInfo} CMsgClientFriendProfileInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientFriendProfileInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientFriendProfileInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid_friend = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientFriendProfileInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientFriendProfileInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientFriendProfileInfo} CMsgClientFriendProfileInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientFriendProfileInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientFriendProfileInfo message.
         * @function verify
         * @memberof CMsgClientFriendProfileInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientFriendProfileInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid_friend != null && message.hasOwnProperty("steamid_friend"))
                if (!$util.isInteger(message.steamid_friend) && !(message.steamid_friend && $util.isInteger(message.steamid_friend.low) && $util.isInteger(message.steamid_friend.high)))
                    return "steamid_friend: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientFriendProfileInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientFriendProfileInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientFriendProfileInfo} CMsgClientFriendProfileInfo
         */
        CMsgClientFriendProfileInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientFriendProfileInfo)
                return object;
            var message = new $root.CMsgClientFriendProfileInfo();
            if (object.steamid_friend != null)
                if ($util.Long)
                    (message.steamid_friend = $util.Long.fromValue(object.steamid_friend)).unsigned = false;
                else if (typeof object.steamid_friend === "string")
                    message.steamid_friend = parseInt(object.steamid_friend, 10);
                else if (typeof object.steamid_friend === "number")
                    message.steamid_friend = object.steamid_friend;
                else if (typeof object.steamid_friend === "object")
                    message.steamid_friend = new $util.LongBits(object.steamid_friend.low >>> 0, object.steamid_friend.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientFriendProfileInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientFriendProfileInfo
         * @static
         * @param {CMsgClientFriendProfileInfo} message CMsgClientFriendProfileInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientFriendProfileInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid_friend = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid_friend = options.longs === String ? "0" : 0;
            if (message.steamid_friend != null && message.hasOwnProperty("steamid_friend"))
                if (typeof message.steamid_friend === "number")
                    object.steamid_friend = options.longs === String ? String(message.steamid_friend) : message.steamid_friend;
                else
                    object.steamid_friend = options.longs === String ? $util.Long.prototype.toString.call(message.steamid_friend) : options.longs === Number ? new $util.LongBits(message.steamid_friend.low >>> 0, message.steamid_friend.high >>> 0).toNumber() : message.steamid_friend;
            return object;
        };
    
        /**
         * Converts this CMsgClientFriendProfileInfo to JSON.
         * @function toJSON
         * @memberof CMsgClientFriendProfileInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientFriendProfileInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientFriendProfileInfo;
    })();
    
    $root.CMsgClientFriendProfileInfoResponse = (function() {
    
        /**
         * Properties of a CMsgClientFriendProfileInfoResponse.
         * @exports ICMsgClientFriendProfileInfoResponse
         * @interface ICMsgClientFriendProfileInfoResponse
         * @property {number|null} [eresult] CMsgClientFriendProfileInfoResponse eresult
         * @property {number|Long|null} [steamid_friend] CMsgClientFriendProfileInfoResponse steamid_friend
         * @property {number|null} [time_created] CMsgClientFriendProfileInfoResponse time_created
         * @property {string|null} [real_name] CMsgClientFriendProfileInfoResponse real_name
         * @property {string|null} [city_name] CMsgClientFriendProfileInfoResponse city_name
         * @property {string|null} [state_name] CMsgClientFriendProfileInfoResponse state_name
         * @property {string|null} [country_name] CMsgClientFriendProfileInfoResponse country_name
         * @property {string|null} [headline] CMsgClientFriendProfileInfoResponse headline
         * @property {string|null} [summary] CMsgClientFriendProfileInfoResponse summary
         */
    
        /**
         * Constructs a new CMsgClientFriendProfileInfoResponse.
         * @exports CMsgClientFriendProfileInfoResponse
         * @classdesc Represents a CMsgClientFriendProfileInfoResponse.
         * @implements ICMsgClientFriendProfileInfoResponse
         * @constructor
         * @param {ICMsgClientFriendProfileInfoResponse=} [properties] Properties to set
         */
        function CMsgClientFriendProfileInfoResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientFriendProfileInfoResponse eresult.
         * @member {number} eresult
         * @memberof CMsgClientFriendProfileInfoResponse
         * @instance
         */
        CMsgClientFriendProfileInfoResponse.prototype.eresult = 2;
    
        /**
         * CMsgClientFriendProfileInfoResponse steamid_friend.
         * @member {number|Long} steamid_friend
         * @memberof CMsgClientFriendProfileInfoResponse
         * @instance
         */
        CMsgClientFriendProfileInfoResponse.prototype.steamid_friend = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgClientFriendProfileInfoResponse time_created.
         * @member {number} time_created
         * @memberof CMsgClientFriendProfileInfoResponse
         * @instance
         */
        CMsgClientFriendProfileInfoResponse.prototype.time_created = 0;
    
        /**
         * CMsgClientFriendProfileInfoResponse real_name.
         * @member {string} real_name
         * @memberof CMsgClientFriendProfileInfoResponse
         * @instance
         */
        CMsgClientFriendProfileInfoResponse.prototype.real_name = "";
    
        /**
         * CMsgClientFriendProfileInfoResponse city_name.
         * @member {string} city_name
         * @memberof CMsgClientFriendProfileInfoResponse
         * @instance
         */
        CMsgClientFriendProfileInfoResponse.prototype.city_name = "";
    
        /**
         * CMsgClientFriendProfileInfoResponse state_name.
         * @member {string} state_name
         * @memberof CMsgClientFriendProfileInfoResponse
         * @instance
         */
        CMsgClientFriendProfileInfoResponse.prototype.state_name = "";
    
        /**
         * CMsgClientFriendProfileInfoResponse country_name.
         * @member {string} country_name
         * @memberof CMsgClientFriendProfileInfoResponse
         * @instance
         */
        CMsgClientFriendProfileInfoResponse.prototype.country_name = "";
    
        /**
         * CMsgClientFriendProfileInfoResponse headline.
         * @member {string} headline
         * @memberof CMsgClientFriendProfileInfoResponse
         * @instance
         */
        CMsgClientFriendProfileInfoResponse.prototype.headline = "";
    
        /**
         * CMsgClientFriendProfileInfoResponse summary.
         * @member {string} summary
         * @memberof CMsgClientFriendProfileInfoResponse
         * @instance
         */
        CMsgClientFriendProfileInfoResponse.prototype.summary = "";
    
        /**
         * Creates a new CMsgClientFriendProfileInfoResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientFriendProfileInfoResponse
         * @static
         * @param {ICMsgClientFriendProfileInfoResponse=} [properties] Properties to set
         * @returns {CMsgClientFriendProfileInfoResponse} CMsgClientFriendProfileInfoResponse instance
         */
        CMsgClientFriendProfileInfoResponse.create = function create(properties) {
            return new CMsgClientFriendProfileInfoResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientFriendProfileInfoResponse message. Does not implicitly {@link CMsgClientFriendProfileInfoResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientFriendProfileInfoResponse
         * @static
         * @param {ICMsgClientFriendProfileInfoResponse} message CMsgClientFriendProfileInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientFriendProfileInfoResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.eresult);
            if (message.steamid_friend != null && message.hasOwnProperty("steamid_friend"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.steamid_friend);
            if (message.time_created != null && message.hasOwnProperty("time_created"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.time_created);
            if (message.real_name != null && message.hasOwnProperty("real_name"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.real_name);
            if (message.city_name != null && message.hasOwnProperty("city_name"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.city_name);
            if (message.state_name != null && message.hasOwnProperty("state_name"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.state_name);
            if (message.country_name != null && message.hasOwnProperty("country_name"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.country_name);
            if (message.headline != null && message.hasOwnProperty("headline"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.headline);
            if (message.summary != null && message.hasOwnProperty("summary"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.summary);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientFriendProfileInfoResponse message, length delimited. Does not implicitly {@link CMsgClientFriendProfileInfoResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientFriendProfileInfoResponse
         * @static
         * @param {ICMsgClientFriendProfileInfoResponse} message CMsgClientFriendProfileInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientFriendProfileInfoResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientFriendProfileInfoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientFriendProfileInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientFriendProfileInfoResponse} CMsgClientFriendProfileInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientFriendProfileInfoResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientFriendProfileInfoResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eresult = reader.int32();
                    break;
                case 2:
                    message.steamid_friend = reader.fixed64();
                    break;
                case 3:
                    message.time_created = reader.uint32();
                    break;
                case 4:
                    message.real_name = reader.string();
                    break;
                case 5:
                    message.city_name = reader.string();
                    break;
                case 6:
                    message.state_name = reader.string();
                    break;
                case 7:
                    message.country_name = reader.string();
                    break;
                case 8:
                    message.headline = reader.string();
                    break;
                case 9:
                    message.summary = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientFriendProfileInfoResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientFriendProfileInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientFriendProfileInfoResponse} CMsgClientFriendProfileInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientFriendProfileInfoResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientFriendProfileInfoResponse message.
         * @function verify
         * @memberof CMsgClientFriendProfileInfoResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientFriendProfileInfoResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                if (!$util.isInteger(message.eresult))
                    return "eresult: integer expected";
            if (message.steamid_friend != null && message.hasOwnProperty("steamid_friend"))
                if (!$util.isInteger(message.steamid_friend) && !(message.steamid_friend && $util.isInteger(message.steamid_friend.low) && $util.isInteger(message.steamid_friend.high)))
                    return "steamid_friend: integer|Long expected";
            if (message.time_created != null && message.hasOwnProperty("time_created"))
                if (!$util.isInteger(message.time_created))
                    return "time_created: integer expected";
            if (message.real_name != null && message.hasOwnProperty("real_name"))
                if (!$util.isString(message.real_name))
                    return "real_name: string expected";
            if (message.city_name != null && message.hasOwnProperty("city_name"))
                if (!$util.isString(message.city_name))
                    return "city_name: string expected";
            if (message.state_name != null && message.hasOwnProperty("state_name"))
                if (!$util.isString(message.state_name))
                    return "state_name: string expected";
            if (message.country_name != null && message.hasOwnProperty("country_name"))
                if (!$util.isString(message.country_name))
                    return "country_name: string expected";
            if (message.headline != null && message.hasOwnProperty("headline"))
                if (!$util.isString(message.headline))
                    return "headline: string expected";
            if (message.summary != null && message.hasOwnProperty("summary"))
                if (!$util.isString(message.summary))
                    return "summary: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientFriendProfileInfoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientFriendProfileInfoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientFriendProfileInfoResponse} CMsgClientFriendProfileInfoResponse
         */
        CMsgClientFriendProfileInfoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientFriendProfileInfoResponse)
                return object;
            var message = new $root.CMsgClientFriendProfileInfoResponse();
            if (object.eresult != null)
                message.eresult = object.eresult | 0;
            if (object.steamid_friend != null)
                if ($util.Long)
                    (message.steamid_friend = $util.Long.fromValue(object.steamid_friend)).unsigned = false;
                else if (typeof object.steamid_friend === "string")
                    message.steamid_friend = parseInt(object.steamid_friend, 10);
                else if (typeof object.steamid_friend === "number")
                    message.steamid_friend = object.steamid_friend;
                else if (typeof object.steamid_friend === "object")
                    message.steamid_friend = new $util.LongBits(object.steamid_friend.low >>> 0, object.steamid_friend.high >>> 0).toNumber();
            if (object.time_created != null)
                message.time_created = object.time_created >>> 0;
            if (object.real_name != null)
                message.real_name = String(object.real_name);
            if (object.city_name != null)
                message.city_name = String(object.city_name);
            if (object.state_name != null)
                message.state_name = String(object.state_name);
            if (object.country_name != null)
                message.country_name = String(object.country_name);
            if (object.headline != null)
                message.headline = String(object.headline);
            if (object.summary != null)
                message.summary = String(object.summary);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientFriendProfileInfoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientFriendProfileInfoResponse
         * @static
         * @param {CMsgClientFriendProfileInfoResponse} message CMsgClientFriendProfileInfoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientFriendProfileInfoResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eresult = 2;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid_friend = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid_friend = options.longs === String ? "0" : 0;
                object.time_created = 0;
                object.real_name = "";
                object.city_name = "";
                object.state_name = "";
                object.country_name = "";
                object.headline = "";
                object.summary = "";
            }
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                object.eresult = message.eresult;
            if (message.steamid_friend != null && message.hasOwnProperty("steamid_friend"))
                if (typeof message.steamid_friend === "number")
                    object.steamid_friend = options.longs === String ? String(message.steamid_friend) : message.steamid_friend;
                else
                    object.steamid_friend = options.longs === String ? $util.Long.prototype.toString.call(message.steamid_friend) : options.longs === Number ? new $util.LongBits(message.steamid_friend.low >>> 0, message.steamid_friend.high >>> 0).toNumber() : message.steamid_friend;
            if (message.time_created != null && message.hasOwnProperty("time_created"))
                object.time_created = message.time_created;
            if (message.real_name != null && message.hasOwnProperty("real_name"))
                object.real_name = message.real_name;
            if (message.city_name != null && message.hasOwnProperty("city_name"))
                object.city_name = message.city_name;
            if (message.state_name != null && message.hasOwnProperty("state_name"))
                object.state_name = message.state_name;
            if (message.country_name != null && message.hasOwnProperty("country_name"))
                object.country_name = message.country_name;
            if (message.headline != null && message.hasOwnProperty("headline"))
                object.headline = message.headline;
            if (message.summary != null && message.hasOwnProperty("summary"))
                object.summary = message.summary;
            return object;
        };
    
        /**
         * Converts this CMsgClientFriendProfileInfoResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientFriendProfileInfoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientFriendProfileInfoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientFriendProfileInfoResponse;
    })();
    
    $root.CMsgClientCreateFriendsGroup = (function() {
    
        /**
         * Properties of a CMsgClientCreateFriendsGroup.
         * @exports ICMsgClientCreateFriendsGroup
         * @interface ICMsgClientCreateFriendsGroup
         * @property {number|Long|null} [steamid] CMsgClientCreateFriendsGroup steamid
         * @property {string|null} [groupname] CMsgClientCreateFriendsGroup groupname
         * @property {Array.<number|Long>|null} [steamid_friends] CMsgClientCreateFriendsGroup steamid_friends
         */
    
        /**
         * Constructs a new CMsgClientCreateFriendsGroup.
         * @exports CMsgClientCreateFriendsGroup
         * @classdesc Represents a CMsgClientCreateFriendsGroup.
         * @implements ICMsgClientCreateFriendsGroup
         * @constructor
         * @param {ICMsgClientCreateFriendsGroup=} [properties] Properties to set
         */
        function CMsgClientCreateFriendsGroup(properties) {
            this.steamid_friends = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientCreateFriendsGroup steamid.
         * @member {number|Long} steamid
         * @memberof CMsgClientCreateFriendsGroup
         * @instance
         */
        CMsgClientCreateFriendsGroup.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgClientCreateFriendsGroup groupname.
         * @member {string} groupname
         * @memberof CMsgClientCreateFriendsGroup
         * @instance
         */
        CMsgClientCreateFriendsGroup.prototype.groupname = "";
    
        /**
         * CMsgClientCreateFriendsGroup steamid_friends.
         * @member {Array.<number|Long>} steamid_friends
         * @memberof CMsgClientCreateFriendsGroup
         * @instance
         */
        CMsgClientCreateFriendsGroup.prototype.steamid_friends = $util.emptyArray;
    
        /**
         * Creates a new CMsgClientCreateFriendsGroup instance using the specified properties.
         * @function create
         * @memberof CMsgClientCreateFriendsGroup
         * @static
         * @param {ICMsgClientCreateFriendsGroup=} [properties] Properties to set
         * @returns {CMsgClientCreateFriendsGroup} CMsgClientCreateFriendsGroup instance
         */
        CMsgClientCreateFriendsGroup.create = function create(properties) {
            return new CMsgClientCreateFriendsGroup(properties);
        };
    
        /**
         * Encodes the specified CMsgClientCreateFriendsGroup message. Does not implicitly {@link CMsgClientCreateFriendsGroup.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientCreateFriendsGroup
         * @static
         * @param {ICMsgClientCreateFriendsGroup} message CMsgClientCreateFriendsGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientCreateFriendsGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.groupname != null && message.hasOwnProperty("groupname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.groupname);
            if (message.steamid_friends != null && message.steamid_friends.length)
                for (var i = 0; i < message.steamid_friends.length; ++i)
                    writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.steamid_friends[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientCreateFriendsGroup message, length delimited. Does not implicitly {@link CMsgClientCreateFriendsGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientCreateFriendsGroup
         * @static
         * @param {ICMsgClientCreateFriendsGroup} message CMsgClientCreateFriendsGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientCreateFriendsGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientCreateFriendsGroup message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientCreateFriendsGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientCreateFriendsGroup} CMsgClientCreateFriendsGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientCreateFriendsGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientCreateFriendsGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.groupname = reader.string();
                    break;
                case 3:
                    if (!(message.steamid_friends && message.steamid_friends.length))
                        message.steamid_friends = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.steamid_friends.push(reader.fixed64());
                    } else
                        message.steamid_friends.push(reader.fixed64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientCreateFriendsGroup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientCreateFriendsGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientCreateFriendsGroup} CMsgClientCreateFriendsGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientCreateFriendsGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientCreateFriendsGroup message.
         * @function verify
         * @memberof CMsgClientCreateFriendsGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientCreateFriendsGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.groupname != null && message.hasOwnProperty("groupname"))
                if (!$util.isString(message.groupname))
                    return "groupname: string expected";
            if (message.steamid_friends != null && message.hasOwnProperty("steamid_friends")) {
                if (!Array.isArray(message.steamid_friends))
                    return "steamid_friends: array expected";
                for (var i = 0; i < message.steamid_friends.length; ++i)
                    if (!$util.isInteger(message.steamid_friends[i]) && !(message.steamid_friends[i] && $util.isInteger(message.steamid_friends[i].low) && $util.isInteger(message.steamid_friends[i].high)))
                        return "steamid_friends: integer|Long[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CMsgClientCreateFriendsGroup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientCreateFriendsGroup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientCreateFriendsGroup} CMsgClientCreateFriendsGroup
         */
        CMsgClientCreateFriendsGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientCreateFriendsGroup)
                return object;
            var message = new $root.CMsgClientCreateFriendsGroup();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.groupname != null)
                message.groupname = String(object.groupname);
            if (object.steamid_friends) {
                if (!Array.isArray(object.steamid_friends))
                    throw TypeError(".CMsgClientCreateFriendsGroup.steamid_friends: array expected");
                message.steamid_friends = [];
                for (var i = 0; i < object.steamid_friends.length; ++i)
                    if ($util.Long)
                        (message.steamid_friends[i] = $util.Long.fromValue(object.steamid_friends[i])).unsigned = false;
                    else if (typeof object.steamid_friends[i] === "string")
                        message.steamid_friends[i] = parseInt(object.steamid_friends[i], 10);
                    else if (typeof object.steamid_friends[i] === "number")
                        message.steamid_friends[i] = object.steamid_friends[i];
                    else if (typeof object.steamid_friends[i] === "object")
                        message.steamid_friends[i] = new $util.LongBits(object.steamid_friends[i].low >>> 0, object.steamid_friends[i].high >>> 0).toNumber();
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientCreateFriendsGroup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientCreateFriendsGroup
         * @static
         * @param {CMsgClientCreateFriendsGroup} message CMsgClientCreateFriendsGroup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientCreateFriendsGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.steamid_friends = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                object.groupname = "";
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.groupname != null && message.hasOwnProperty("groupname"))
                object.groupname = message.groupname;
            if (message.steamid_friends && message.steamid_friends.length) {
                object.steamid_friends = [];
                for (var j = 0; j < message.steamid_friends.length; ++j)
                    if (typeof message.steamid_friends[j] === "number")
                        object.steamid_friends[j] = options.longs === String ? String(message.steamid_friends[j]) : message.steamid_friends[j];
                    else
                        object.steamid_friends[j] = options.longs === String ? $util.Long.prototype.toString.call(message.steamid_friends[j]) : options.longs === Number ? new $util.LongBits(message.steamid_friends[j].low >>> 0, message.steamid_friends[j].high >>> 0).toNumber() : message.steamid_friends[j];
            }
            return object;
        };
    
        /**
         * Converts this CMsgClientCreateFriendsGroup to JSON.
         * @function toJSON
         * @memberof CMsgClientCreateFriendsGroup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientCreateFriendsGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientCreateFriendsGroup;
    })();
    
    $root.CMsgClientCreateFriendsGroupResponse = (function() {
    
        /**
         * Properties of a CMsgClientCreateFriendsGroupResponse.
         * @exports ICMsgClientCreateFriendsGroupResponse
         * @interface ICMsgClientCreateFriendsGroupResponse
         * @property {number|null} [eresult] CMsgClientCreateFriendsGroupResponse eresult
         * @property {number|null} [groupid] CMsgClientCreateFriendsGroupResponse groupid
         */
    
        /**
         * Constructs a new CMsgClientCreateFriendsGroupResponse.
         * @exports CMsgClientCreateFriendsGroupResponse
         * @classdesc Represents a CMsgClientCreateFriendsGroupResponse.
         * @implements ICMsgClientCreateFriendsGroupResponse
         * @constructor
         * @param {ICMsgClientCreateFriendsGroupResponse=} [properties] Properties to set
         */
        function CMsgClientCreateFriendsGroupResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientCreateFriendsGroupResponse eresult.
         * @member {number} eresult
         * @memberof CMsgClientCreateFriendsGroupResponse
         * @instance
         */
        CMsgClientCreateFriendsGroupResponse.prototype.eresult = 0;
    
        /**
         * CMsgClientCreateFriendsGroupResponse groupid.
         * @member {number} groupid
         * @memberof CMsgClientCreateFriendsGroupResponse
         * @instance
         */
        CMsgClientCreateFriendsGroupResponse.prototype.groupid = 0;
    
        /**
         * Creates a new CMsgClientCreateFriendsGroupResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientCreateFriendsGroupResponse
         * @static
         * @param {ICMsgClientCreateFriendsGroupResponse=} [properties] Properties to set
         * @returns {CMsgClientCreateFriendsGroupResponse} CMsgClientCreateFriendsGroupResponse instance
         */
        CMsgClientCreateFriendsGroupResponse.create = function create(properties) {
            return new CMsgClientCreateFriendsGroupResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientCreateFriendsGroupResponse message. Does not implicitly {@link CMsgClientCreateFriendsGroupResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientCreateFriendsGroupResponse
         * @static
         * @param {ICMsgClientCreateFriendsGroupResponse} message CMsgClientCreateFriendsGroupResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientCreateFriendsGroupResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.eresult);
            if (message.groupid != null && message.hasOwnProperty("groupid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.groupid);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientCreateFriendsGroupResponse message, length delimited. Does not implicitly {@link CMsgClientCreateFriendsGroupResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientCreateFriendsGroupResponse
         * @static
         * @param {ICMsgClientCreateFriendsGroupResponse} message CMsgClientCreateFriendsGroupResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientCreateFriendsGroupResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientCreateFriendsGroupResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientCreateFriendsGroupResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientCreateFriendsGroupResponse} CMsgClientCreateFriendsGroupResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientCreateFriendsGroupResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientCreateFriendsGroupResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eresult = reader.uint32();
                    break;
                case 2:
                    message.groupid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientCreateFriendsGroupResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientCreateFriendsGroupResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientCreateFriendsGroupResponse} CMsgClientCreateFriendsGroupResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientCreateFriendsGroupResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientCreateFriendsGroupResponse message.
         * @function verify
         * @memberof CMsgClientCreateFriendsGroupResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientCreateFriendsGroupResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                if (!$util.isInteger(message.eresult))
                    return "eresult: integer expected";
            if (message.groupid != null && message.hasOwnProperty("groupid"))
                if (!$util.isInteger(message.groupid))
                    return "groupid: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientCreateFriendsGroupResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientCreateFriendsGroupResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientCreateFriendsGroupResponse} CMsgClientCreateFriendsGroupResponse
         */
        CMsgClientCreateFriendsGroupResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientCreateFriendsGroupResponse)
                return object;
            var message = new $root.CMsgClientCreateFriendsGroupResponse();
            if (object.eresult != null)
                message.eresult = object.eresult >>> 0;
            if (object.groupid != null)
                message.groupid = object.groupid | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientCreateFriendsGroupResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientCreateFriendsGroupResponse
         * @static
         * @param {CMsgClientCreateFriendsGroupResponse} message CMsgClientCreateFriendsGroupResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientCreateFriendsGroupResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eresult = 0;
                object.groupid = 0;
            }
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                object.eresult = message.eresult;
            if (message.groupid != null && message.hasOwnProperty("groupid"))
                object.groupid = message.groupid;
            return object;
        };
    
        /**
         * Converts this CMsgClientCreateFriendsGroupResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientCreateFriendsGroupResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientCreateFriendsGroupResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientCreateFriendsGroupResponse;
    })();
    
    $root.CMsgClientDeleteFriendsGroup = (function() {
    
        /**
         * Properties of a CMsgClientDeleteFriendsGroup.
         * @exports ICMsgClientDeleteFriendsGroup
         * @interface ICMsgClientDeleteFriendsGroup
         * @property {number|Long|null} [steamid] CMsgClientDeleteFriendsGroup steamid
         * @property {number|null} [groupid] CMsgClientDeleteFriendsGroup groupid
         */
    
        /**
         * Constructs a new CMsgClientDeleteFriendsGroup.
         * @exports CMsgClientDeleteFriendsGroup
         * @classdesc Represents a CMsgClientDeleteFriendsGroup.
         * @implements ICMsgClientDeleteFriendsGroup
         * @constructor
         * @param {ICMsgClientDeleteFriendsGroup=} [properties] Properties to set
         */
        function CMsgClientDeleteFriendsGroup(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientDeleteFriendsGroup steamid.
         * @member {number|Long} steamid
         * @memberof CMsgClientDeleteFriendsGroup
         * @instance
         */
        CMsgClientDeleteFriendsGroup.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgClientDeleteFriendsGroup groupid.
         * @member {number} groupid
         * @memberof CMsgClientDeleteFriendsGroup
         * @instance
         */
        CMsgClientDeleteFriendsGroup.prototype.groupid = 0;
    
        /**
         * Creates a new CMsgClientDeleteFriendsGroup instance using the specified properties.
         * @function create
         * @memberof CMsgClientDeleteFriendsGroup
         * @static
         * @param {ICMsgClientDeleteFriendsGroup=} [properties] Properties to set
         * @returns {CMsgClientDeleteFriendsGroup} CMsgClientDeleteFriendsGroup instance
         */
        CMsgClientDeleteFriendsGroup.create = function create(properties) {
            return new CMsgClientDeleteFriendsGroup(properties);
        };
    
        /**
         * Encodes the specified CMsgClientDeleteFriendsGroup message. Does not implicitly {@link CMsgClientDeleteFriendsGroup.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientDeleteFriendsGroup
         * @static
         * @param {ICMsgClientDeleteFriendsGroup} message CMsgClientDeleteFriendsGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientDeleteFriendsGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.groupid != null && message.hasOwnProperty("groupid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.groupid);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientDeleteFriendsGroup message, length delimited. Does not implicitly {@link CMsgClientDeleteFriendsGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientDeleteFriendsGroup
         * @static
         * @param {ICMsgClientDeleteFriendsGroup} message CMsgClientDeleteFriendsGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientDeleteFriendsGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientDeleteFriendsGroup message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientDeleteFriendsGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientDeleteFriendsGroup} CMsgClientDeleteFriendsGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientDeleteFriendsGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientDeleteFriendsGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.groupid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientDeleteFriendsGroup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientDeleteFriendsGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientDeleteFriendsGroup} CMsgClientDeleteFriendsGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientDeleteFriendsGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientDeleteFriendsGroup message.
         * @function verify
         * @memberof CMsgClientDeleteFriendsGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientDeleteFriendsGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.groupid != null && message.hasOwnProperty("groupid"))
                if (!$util.isInteger(message.groupid))
                    return "groupid: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientDeleteFriendsGroup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientDeleteFriendsGroup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientDeleteFriendsGroup} CMsgClientDeleteFriendsGroup
         */
        CMsgClientDeleteFriendsGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientDeleteFriendsGroup)
                return object;
            var message = new $root.CMsgClientDeleteFriendsGroup();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.groupid != null)
                message.groupid = object.groupid | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientDeleteFriendsGroup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientDeleteFriendsGroup
         * @static
         * @param {CMsgClientDeleteFriendsGroup} message CMsgClientDeleteFriendsGroup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientDeleteFriendsGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                object.groupid = 0;
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.groupid != null && message.hasOwnProperty("groupid"))
                object.groupid = message.groupid;
            return object;
        };
    
        /**
         * Converts this CMsgClientDeleteFriendsGroup to JSON.
         * @function toJSON
         * @memberof CMsgClientDeleteFriendsGroup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientDeleteFriendsGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientDeleteFriendsGroup;
    })();
    
    $root.CMsgClientDeleteFriendsGroupResponse = (function() {
    
        /**
         * Properties of a CMsgClientDeleteFriendsGroupResponse.
         * @exports ICMsgClientDeleteFriendsGroupResponse
         * @interface ICMsgClientDeleteFriendsGroupResponse
         * @property {number|null} [eresult] CMsgClientDeleteFriendsGroupResponse eresult
         */
    
        /**
         * Constructs a new CMsgClientDeleteFriendsGroupResponse.
         * @exports CMsgClientDeleteFriendsGroupResponse
         * @classdesc Represents a CMsgClientDeleteFriendsGroupResponse.
         * @implements ICMsgClientDeleteFriendsGroupResponse
         * @constructor
         * @param {ICMsgClientDeleteFriendsGroupResponse=} [properties] Properties to set
         */
        function CMsgClientDeleteFriendsGroupResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientDeleteFriendsGroupResponse eresult.
         * @member {number} eresult
         * @memberof CMsgClientDeleteFriendsGroupResponse
         * @instance
         */
        CMsgClientDeleteFriendsGroupResponse.prototype.eresult = 0;
    
        /**
         * Creates a new CMsgClientDeleteFriendsGroupResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientDeleteFriendsGroupResponse
         * @static
         * @param {ICMsgClientDeleteFriendsGroupResponse=} [properties] Properties to set
         * @returns {CMsgClientDeleteFriendsGroupResponse} CMsgClientDeleteFriendsGroupResponse instance
         */
        CMsgClientDeleteFriendsGroupResponse.create = function create(properties) {
            return new CMsgClientDeleteFriendsGroupResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientDeleteFriendsGroupResponse message. Does not implicitly {@link CMsgClientDeleteFriendsGroupResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientDeleteFriendsGroupResponse
         * @static
         * @param {ICMsgClientDeleteFriendsGroupResponse} message CMsgClientDeleteFriendsGroupResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientDeleteFriendsGroupResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.eresult);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientDeleteFriendsGroupResponse message, length delimited. Does not implicitly {@link CMsgClientDeleteFriendsGroupResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientDeleteFriendsGroupResponse
         * @static
         * @param {ICMsgClientDeleteFriendsGroupResponse} message CMsgClientDeleteFriendsGroupResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientDeleteFriendsGroupResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientDeleteFriendsGroupResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientDeleteFriendsGroupResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientDeleteFriendsGroupResponse} CMsgClientDeleteFriendsGroupResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientDeleteFriendsGroupResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientDeleteFriendsGroupResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eresult = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientDeleteFriendsGroupResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientDeleteFriendsGroupResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientDeleteFriendsGroupResponse} CMsgClientDeleteFriendsGroupResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientDeleteFriendsGroupResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientDeleteFriendsGroupResponse message.
         * @function verify
         * @memberof CMsgClientDeleteFriendsGroupResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientDeleteFriendsGroupResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                if (!$util.isInteger(message.eresult))
                    return "eresult: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientDeleteFriendsGroupResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientDeleteFriendsGroupResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientDeleteFriendsGroupResponse} CMsgClientDeleteFriendsGroupResponse
         */
        CMsgClientDeleteFriendsGroupResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientDeleteFriendsGroupResponse)
                return object;
            var message = new $root.CMsgClientDeleteFriendsGroupResponse();
            if (object.eresult != null)
                message.eresult = object.eresult >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientDeleteFriendsGroupResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientDeleteFriendsGroupResponse
         * @static
         * @param {CMsgClientDeleteFriendsGroupResponse} message CMsgClientDeleteFriendsGroupResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientDeleteFriendsGroupResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.eresult = 0;
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                object.eresult = message.eresult;
            return object;
        };
    
        /**
         * Converts this CMsgClientDeleteFriendsGroupResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientDeleteFriendsGroupResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientDeleteFriendsGroupResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientDeleteFriendsGroupResponse;
    })();
    
    $root.CMsgClientManageFriendsGroup = (function() {
    
        /**
         * Properties of a CMsgClientManageFriendsGroup.
         * @exports ICMsgClientManageFriendsGroup
         * @interface ICMsgClientManageFriendsGroup
         * @property {number|null} [groupid] CMsgClientManageFriendsGroup groupid
         * @property {string|null} [groupname] CMsgClientManageFriendsGroup groupname
         * @property {Array.<number|Long>|null} [steamid_friends_added] CMsgClientManageFriendsGroup steamid_friends_added
         * @property {Array.<number|Long>|null} [steamid_friends_removed] CMsgClientManageFriendsGroup steamid_friends_removed
         */
    
        /**
         * Constructs a new CMsgClientManageFriendsGroup.
         * @exports CMsgClientManageFriendsGroup
         * @classdesc Represents a CMsgClientManageFriendsGroup.
         * @implements ICMsgClientManageFriendsGroup
         * @constructor
         * @param {ICMsgClientManageFriendsGroup=} [properties] Properties to set
         */
        function CMsgClientManageFriendsGroup(properties) {
            this.steamid_friends_added = [];
            this.steamid_friends_removed = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientManageFriendsGroup groupid.
         * @member {number} groupid
         * @memberof CMsgClientManageFriendsGroup
         * @instance
         */
        CMsgClientManageFriendsGroup.prototype.groupid = 0;
    
        /**
         * CMsgClientManageFriendsGroup groupname.
         * @member {string} groupname
         * @memberof CMsgClientManageFriendsGroup
         * @instance
         */
        CMsgClientManageFriendsGroup.prototype.groupname = "";
    
        /**
         * CMsgClientManageFriendsGroup steamid_friends_added.
         * @member {Array.<number|Long>} steamid_friends_added
         * @memberof CMsgClientManageFriendsGroup
         * @instance
         */
        CMsgClientManageFriendsGroup.prototype.steamid_friends_added = $util.emptyArray;
    
        /**
         * CMsgClientManageFriendsGroup steamid_friends_removed.
         * @member {Array.<number|Long>} steamid_friends_removed
         * @memberof CMsgClientManageFriendsGroup
         * @instance
         */
        CMsgClientManageFriendsGroup.prototype.steamid_friends_removed = $util.emptyArray;
    
        /**
         * Creates a new CMsgClientManageFriendsGroup instance using the specified properties.
         * @function create
         * @memberof CMsgClientManageFriendsGroup
         * @static
         * @param {ICMsgClientManageFriendsGroup=} [properties] Properties to set
         * @returns {CMsgClientManageFriendsGroup} CMsgClientManageFriendsGroup instance
         */
        CMsgClientManageFriendsGroup.create = function create(properties) {
            return new CMsgClientManageFriendsGroup(properties);
        };
    
        /**
         * Encodes the specified CMsgClientManageFriendsGroup message. Does not implicitly {@link CMsgClientManageFriendsGroup.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientManageFriendsGroup
         * @static
         * @param {ICMsgClientManageFriendsGroup} message CMsgClientManageFriendsGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientManageFriendsGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupid != null && message.hasOwnProperty("groupid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.groupid);
            if (message.groupname != null && message.hasOwnProperty("groupname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.groupname);
            if (message.steamid_friends_added != null && message.steamid_friends_added.length)
                for (var i = 0; i < message.steamid_friends_added.length; ++i)
                    writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.steamid_friends_added[i]);
            if (message.steamid_friends_removed != null && message.steamid_friends_removed.length)
                for (var i = 0; i < message.steamid_friends_removed.length; ++i)
                    writer.uint32(/* id 4, wireType 1 =*/33).fixed64(message.steamid_friends_removed[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientManageFriendsGroup message, length delimited. Does not implicitly {@link CMsgClientManageFriendsGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientManageFriendsGroup
         * @static
         * @param {ICMsgClientManageFriendsGroup} message CMsgClientManageFriendsGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientManageFriendsGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientManageFriendsGroup message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientManageFriendsGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientManageFriendsGroup} CMsgClientManageFriendsGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientManageFriendsGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientManageFriendsGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.groupid = reader.int32();
                    break;
                case 2:
                    message.groupname = reader.string();
                    break;
                case 3:
                    if (!(message.steamid_friends_added && message.steamid_friends_added.length))
                        message.steamid_friends_added = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.steamid_friends_added.push(reader.fixed64());
                    } else
                        message.steamid_friends_added.push(reader.fixed64());
                    break;
                case 4:
                    if (!(message.steamid_friends_removed && message.steamid_friends_removed.length))
                        message.steamid_friends_removed = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.steamid_friends_removed.push(reader.fixed64());
                    } else
                        message.steamid_friends_removed.push(reader.fixed64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientManageFriendsGroup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientManageFriendsGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientManageFriendsGroup} CMsgClientManageFriendsGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientManageFriendsGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientManageFriendsGroup message.
         * @function verify
         * @memberof CMsgClientManageFriendsGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientManageFriendsGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupid != null && message.hasOwnProperty("groupid"))
                if (!$util.isInteger(message.groupid))
                    return "groupid: integer expected";
            if (message.groupname != null && message.hasOwnProperty("groupname"))
                if (!$util.isString(message.groupname))
                    return "groupname: string expected";
            if (message.steamid_friends_added != null && message.hasOwnProperty("steamid_friends_added")) {
                if (!Array.isArray(message.steamid_friends_added))
                    return "steamid_friends_added: array expected";
                for (var i = 0; i < message.steamid_friends_added.length; ++i)
                    if (!$util.isInteger(message.steamid_friends_added[i]) && !(message.steamid_friends_added[i] && $util.isInteger(message.steamid_friends_added[i].low) && $util.isInteger(message.steamid_friends_added[i].high)))
                        return "steamid_friends_added: integer|Long[] expected";
            }
            if (message.steamid_friends_removed != null && message.hasOwnProperty("steamid_friends_removed")) {
                if (!Array.isArray(message.steamid_friends_removed))
                    return "steamid_friends_removed: array expected";
                for (var i = 0; i < message.steamid_friends_removed.length; ++i)
                    if (!$util.isInteger(message.steamid_friends_removed[i]) && !(message.steamid_friends_removed[i] && $util.isInteger(message.steamid_friends_removed[i].low) && $util.isInteger(message.steamid_friends_removed[i].high)))
                        return "steamid_friends_removed: integer|Long[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CMsgClientManageFriendsGroup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientManageFriendsGroup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientManageFriendsGroup} CMsgClientManageFriendsGroup
         */
        CMsgClientManageFriendsGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientManageFriendsGroup)
                return object;
            var message = new $root.CMsgClientManageFriendsGroup();
            if (object.groupid != null)
                message.groupid = object.groupid | 0;
            if (object.groupname != null)
                message.groupname = String(object.groupname);
            if (object.steamid_friends_added) {
                if (!Array.isArray(object.steamid_friends_added))
                    throw TypeError(".CMsgClientManageFriendsGroup.steamid_friends_added: array expected");
                message.steamid_friends_added = [];
                for (var i = 0; i < object.steamid_friends_added.length; ++i)
                    if ($util.Long)
                        (message.steamid_friends_added[i] = $util.Long.fromValue(object.steamid_friends_added[i])).unsigned = false;
                    else if (typeof object.steamid_friends_added[i] === "string")
                        message.steamid_friends_added[i] = parseInt(object.steamid_friends_added[i], 10);
                    else if (typeof object.steamid_friends_added[i] === "number")
                        message.steamid_friends_added[i] = object.steamid_friends_added[i];
                    else if (typeof object.steamid_friends_added[i] === "object")
                        message.steamid_friends_added[i] = new $util.LongBits(object.steamid_friends_added[i].low >>> 0, object.steamid_friends_added[i].high >>> 0).toNumber();
            }
            if (object.steamid_friends_removed) {
                if (!Array.isArray(object.steamid_friends_removed))
                    throw TypeError(".CMsgClientManageFriendsGroup.steamid_friends_removed: array expected");
                message.steamid_friends_removed = [];
                for (var i = 0; i < object.steamid_friends_removed.length; ++i)
                    if ($util.Long)
                        (message.steamid_friends_removed[i] = $util.Long.fromValue(object.steamid_friends_removed[i])).unsigned = false;
                    else if (typeof object.steamid_friends_removed[i] === "string")
                        message.steamid_friends_removed[i] = parseInt(object.steamid_friends_removed[i], 10);
                    else if (typeof object.steamid_friends_removed[i] === "number")
                        message.steamid_friends_removed[i] = object.steamid_friends_removed[i];
                    else if (typeof object.steamid_friends_removed[i] === "object")
                        message.steamid_friends_removed[i] = new $util.LongBits(object.steamid_friends_removed[i].low >>> 0, object.steamid_friends_removed[i].high >>> 0).toNumber();
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientManageFriendsGroup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientManageFriendsGroup
         * @static
         * @param {CMsgClientManageFriendsGroup} message CMsgClientManageFriendsGroup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientManageFriendsGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.steamid_friends_added = [];
                object.steamid_friends_removed = [];
            }
            if (options.defaults) {
                object.groupid = 0;
                object.groupname = "";
            }
            if (message.groupid != null && message.hasOwnProperty("groupid"))
                object.groupid = message.groupid;
            if (message.groupname != null && message.hasOwnProperty("groupname"))
                object.groupname = message.groupname;
            if (message.steamid_friends_added && message.steamid_friends_added.length) {
                object.steamid_friends_added = [];
                for (var j = 0; j < message.steamid_friends_added.length; ++j)
                    if (typeof message.steamid_friends_added[j] === "number")
                        object.steamid_friends_added[j] = options.longs === String ? String(message.steamid_friends_added[j]) : message.steamid_friends_added[j];
                    else
                        object.steamid_friends_added[j] = options.longs === String ? $util.Long.prototype.toString.call(message.steamid_friends_added[j]) : options.longs === Number ? new $util.LongBits(message.steamid_friends_added[j].low >>> 0, message.steamid_friends_added[j].high >>> 0).toNumber() : message.steamid_friends_added[j];
            }
            if (message.steamid_friends_removed && message.steamid_friends_removed.length) {
                object.steamid_friends_removed = [];
                for (var j = 0; j < message.steamid_friends_removed.length; ++j)
                    if (typeof message.steamid_friends_removed[j] === "number")
                        object.steamid_friends_removed[j] = options.longs === String ? String(message.steamid_friends_removed[j]) : message.steamid_friends_removed[j];
                    else
                        object.steamid_friends_removed[j] = options.longs === String ? $util.Long.prototype.toString.call(message.steamid_friends_removed[j]) : options.longs === Number ? new $util.LongBits(message.steamid_friends_removed[j].low >>> 0, message.steamid_friends_removed[j].high >>> 0).toNumber() : message.steamid_friends_removed[j];
            }
            return object;
        };
    
        /**
         * Converts this CMsgClientManageFriendsGroup to JSON.
         * @function toJSON
         * @memberof CMsgClientManageFriendsGroup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientManageFriendsGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientManageFriendsGroup;
    })();
    
    $root.CMsgClientManageFriendsGroupResponse = (function() {
    
        /**
         * Properties of a CMsgClientManageFriendsGroupResponse.
         * @exports ICMsgClientManageFriendsGroupResponse
         * @interface ICMsgClientManageFriendsGroupResponse
         * @property {number|null} [eresult] CMsgClientManageFriendsGroupResponse eresult
         */
    
        /**
         * Constructs a new CMsgClientManageFriendsGroupResponse.
         * @exports CMsgClientManageFriendsGroupResponse
         * @classdesc Represents a CMsgClientManageFriendsGroupResponse.
         * @implements ICMsgClientManageFriendsGroupResponse
         * @constructor
         * @param {ICMsgClientManageFriendsGroupResponse=} [properties] Properties to set
         */
        function CMsgClientManageFriendsGroupResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientManageFriendsGroupResponse eresult.
         * @member {number} eresult
         * @memberof CMsgClientManageFriendsGroupResponse
         * @instance
         */
        CMsgClientManageFriendsGroupResponse.prototype.eresult = 0;
    
        /**
         * Creates a new CMsgClientManageFriendsGroupResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientManageFriendsGroupResponse
         * @static
         * @param {ICMsgClientManageFriendsGroupResponse=} [properties] Properties to set
         * @returns {CMsgClientManageFriendsGroupResponse} CMsgClientManageFriendsGroupResponse instance
         */
        CMsgClientManageFriendsGroupResponse.create = function create(properties) {
            return new CMsgClientManageFriendsGroupResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientManageFriendsGroupResponse message. Does not implicitly {@link CMsgClientManageFriendsGroupResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientManageFriendsGroupResponse
         * @static
         * @param {ICMsgClientManageFriendsGroupResponse} message CMsgClientManageFriendsGroupResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientManageFriendsGroupResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.eresult);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientManageFriendsGroupResponse message, length delimited. Does not implicitly {@link CMsgClientManageFriendsGroupResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientManageFriendsGroupResponse
         * @static
         * @param {ICMsgClientManageFriendsGroupResponse} message CMsgClientManageFriendsGroupResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientManageFriendsGroupResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientManageFriendsGroupResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientManageFriendsGroupResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientManageFriendsGroupResponse} CMsgClientManageFriendsGroupResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientManageFriendsGroupResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientManageFriendsGroupResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eresult = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientManageFriendsGroupResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientManageFriendsGroupResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientManageFriendsGroupResponse} CMsgClientManageFriendsGroupResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientManageFriendsGroupResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientManageFriendsGroupResponse message.
         * @function verify
         * @memberof CMsgClientManageFriendsGroupResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientManageFriendsGroupResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                if (!$util.isInteger(message.eresult))
                    return "eresult: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientManageFriendsGroupResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientManageFriendsGroupResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientManageFriendsGroupResponse} CMsgClientManageFriendsGroupResponse
         */
        CMsgClientManageFriendsGroupResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientManageFriendsGroupResponse)
                return object;
            var message = new $root.CMsgClientManageFriendsGroupResponse();
            if (object.eresult != null)
                message.eresult = object.eresult >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientManageFriendsGroupResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientManageFriendsGroupResponse
         * @static
         * @param {CMsgClientManageFriendsGroupResponse} message CMsgClientManageFriendsGroupResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientManageFriendsGroupResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.eresult = 0;
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                object.eresult = message.eresult;
            return object;
        };
    
        /**
         * Converts this CMsgClientManageFriendsGroupResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientManageFriendsGroupResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientManageFriendsGroupResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientManageFriendsGroupResponse;
    })();
    
    $root.CMsgClientAddFriendToGroup = (function() {
    
        /**
         * Properties of a CMsgClientAddFriendToGroup.
         * @exports ICMsgClientAddFriendToGroup
         * @interface ICMsgClientAddFriendToGroup
         * @property {number|null} [groupid] CMsgClientAddFriendToGroup groupid
         * @property {number|Long|null} [steamiduser] CMsgClientAddFriendToGroup steamiduser
         */
    
        /**
         * Constructs a new CMsgClientAddFriendToGroup.
         * @exports CMsgClientAddFriendToGroup
         * @classdesc Represents a CMsgClientAddFriendToGroup.
         * @implements ICMsgClientAddFriendToGroup
         * @constructor
         * @param {ICMsgClientAddFriendToGroup=} [properties] Properties to set
         */
        function CMsgClientAddFriendToGroup(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientAddFriendToGroup groupid.
         * @member {number} groupid
         * @memberof CMsgClientAddFriendToGroup
         * @instance
         */
        CMsgClientAddFriendToGroup.prototype.groupid = 0;
    
        /**
         * CMsgClientAddFriendToGroup steamiduser.
         * @member {number|Long} steamiduser
         * @memberof CMsgClientAddFriendToGroup
         * @instance
         */
        CMsgClientAddFriendToGroup.prototype.steamiduser = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CMsgClientAddFriendToGroup instance using the specified properties.
         * @function create
         * @memberof CMsgClientAddFriendToGroup
         * @static
         * @param {ICMsgClientAddFriendToGroup=} [properties] Properties to set
         * @returns {CMsgClientAddFriendToGroup} CMsgClientAddFriendToGroup instance
         */
        CMsgClientAddFriendToGroup.create = function create(properties) {
            return new CMsgClientAddFriendToGroup(properties);
        };
    
        /**
         * Encodes the specified CMsgClientAddFriendToGroup message. Does not implicitly {@link CMsgClientAddFriendToGroup.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientAddFriendToGroup
         * @static
         * @param {ICMsgClientAddFriendToGroup} message CMsgClientAddFriendToGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientAddFriendToGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupid != null && message.hasOwnProperty("groupid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.groupid);
            if (message.steamiduser != null && message.hasOwnProperty("steamiduser"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.steamiduser);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientAddFriendToGroup message, length delimited. Does not implicitly {@link CMsgClientAddFriendToGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientAddFriendToGroup
         * @static
         * @param {ICMsgClientAddFriendToGroup} message CMsgClientAddFriendToGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientAddFriendToGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientAddFriendToGroup message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientAddFriendToGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientAddFriendToGroup} CMsgClientAddFriendToGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientAddFriendToGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientAddFriendToGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.groupid = reader.int32();
                    break;
                case 2:
                    message.steamiduser = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientAddFriendToGroup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientAddFriendToGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientAddFriendToGroup} CMsgClientAddFriendToGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientAddFriendToGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientAddFriendToGroup message.
         * @function verify
         * @memberof CMsgClientAddFriendToGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientAddFriendToGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupid != null && message.hasOwnProperty("groupid"))
                if (!$util.isInteger(message.groupid))
                    return "groupid: integer expected";
            if (message.steamiduser != null && message.hasOwnProperty("steamiduser"))
                if (!$util.isInteger(message.steamiduser) && !(message.steamiduser && $util.isInteger(message.steamiduser.low) && $util.isInteger(message.steamiduser.high)))
                    return "steamiduser: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientAddFriendToGroup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientAddFriendToGroup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientAddFriendToGroup} CMsgClientAddFriendToGroup
         */
        CMsgClientAddFriendToGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientAddFriendToGroup)
                return object;
            var message = new $root.CMsgClientAddFriendToGroup();
            if (object.groupid != null)
                message.groupid = object.groupid | 0;
            if (object.steamiduser != null)
                if ($util.Long)
                    (message.steamiduser = $util.Long.fromValue(object.steamiduser)).unsigned = false;
                else if (typeof object.steamiduser === "string")
                    message.steamiduser = parseInt(object.steamiduser, 10);
                else if (typeof object.steamiduser === "number")
                    message.steamiduser = object.steamiduser;
                else if (typeof object.steamiduser === "object")
                    message.steamiduser = new $util.LongBits(object.steamiduser.low >>> 0, object.steamiduser.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientAddFriendToGroup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientAddFriendToGroup
         * @static
         * @param {CMsgClientAddFriendToGroup} message CMsgClientAddFriendToGroup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientAddFriendToGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.groupid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamiduser = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamiduser = options.longs === String ? "0" : 0;
            }
            if (message.groupid != null && message.hasOwnProperty("groupid"))
                object.groupid = message.groupid;
            if (message.steamiduser != null && message.hasOwnProperty("steamiduser"))
                if (typeof message.steamiduser === "number")
                    object.steamiduser = options.longs === String ? String(message.steamiduser) : message.steamiduser;
                else
                    object.steamiduser = options.longs === String ? $util.Long.prototype.toString.call(message.steamiduser) : options.longs === Number ? new $util.LongBits(message.steamiduser.low >>> 0, message.steamiduser.high >>> 0).toNumber() : message.steamiduser;
            return object;
        };
    
        /**
         * Converts this CMsgClientAddFriendToGroup to JSON.
         * @function toJSON
         * @memberof CMsgClientAddFriendToGroup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientAddFriendToGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientAddFriendToGroup;
    })();
    
    $root.CMsgClientAddFriendToGroupResponse = (function() {
    
        /**
         * Properties of a CMsgClientAddFriendToGroupResponse.
         * @exports ICMsgClientAddFriendToGroupResponse
         * @interface ICMsgClientAddFriendToGroupResponse
         * @property {number|null} [eresult] CMsgClientAddFriendToGroupResponse eresult
         */
    
        /**
         * Constructs a new CMsgClientAddFriendToGroupResponse.
         * @exports CMsgClientAddFriendToGroupResponse
         * @classdesc Represents a CMsgClientAddFriendToGroupResponse.
         * @implements ICMsgClientAddFriendToGroupResponse
         * @constructor
         * @param {ICMsgClientAddFriendToGroupResponse=} [properties] Properties to set
         */
        function CMsgClientAddFriendToGroupResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientAddFriendToGroupResponse eresult.
         * @member {number} eresult
         * @memberof CMsgClientAddFriendToGroupResponse
         * @instance
         */
        CMsgClientAddFriendToGroupResponse.prototype.eresult = 0;
    
        /**
         * Creates a new CMsgClientAddFriendToGroupResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientAddFriendToGroupResponse
         * @static
         * @param {ICMsgClientAddFriendToGroupResponse=} [properties] Properties to set
         * @returns {CMsgClientAddFriendToGroupResponse} CMsgClientAddFriendToGroupResponse instance
         */
        CMsgClientAddFriendToGroupResponse.create = function create(properties) {
            return new CMsgClientAddFriendToGroupResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientAddFriendToGroupResponse message. Does not implicitly {@link CMsgClientAddFriendToGroupResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientAddFriendToGroupResponse
         * @static
         * @param {ICMsgClientAddFriendToGroupResponse} message CMsgClientAddFriendToGroupResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientAddFriendToGroupResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.eresult);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientAddFriendToGroupResponse message, length delimited. Does not implicitly {@link CMsgClientAddFriendToGroupResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientAddFriendToGroupResponse
         * @static
         * @param {ICMsgClientAddFriendToGroupResponse} message CMsgClientAddFriendToGroupResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientAddFriendToGroupResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientAddFriendToGroupResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientAddFriendToGroupResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientAddFriendToGroupResponse} CMsgClientAddFriendToGroupResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientAddFriendToGroupResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientAddFriendToGroupResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eresult = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientAddFriendToGroupResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientAddFriendToGroupResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientAddFriendToGroupResponse} CMsgClientAddFriendToGroupResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientAddFriendToGroupResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientAddFriendToGroupResponse message.
         * @function verify
         * @memberof CMsgClientAddFriendToGroupResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientAddFriendToGroupResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                if (!$util.isInteger(message.eresult))
                    return "eresult: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientAddFriendToGroupResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientAddFriendToGroupResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientAddFriendToGroupResponse} CMsgClientAddFriendToGroupResponse
         */
        CMsgClientAddFriendToGroupResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientAddFriendToGroupResponse)
                return object;
            var message = new $root.CMsgClientAddFriendToGroupResponse();
            if (object.eresult != null)
                message.eresult = object.eresult >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientAddFriendToGroupResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientAddFriendToGroupResponse
         * @static
         * @param {CMsgClientAddFriendToGroupResponse} message CMsgClientAddFriendToGroupResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientAddFriendToGroupResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.eresult = 0;
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                object.eresult = message.eresult;
            return object;
        };
    
        /**
         * Converts this CMsgClientAddFriendToGroupResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientAddFriendToGroupResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientAddFriendToGroupResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientAddFriendToGroupResponse;
    })();
    
    $root.CMsgClientRemoveFriendFromGroup = (function() {
    
        /**
         * Properties of a CMsgClientRemoveFriendFromGroup.
         * @exports ICMsgClientRemoveFriendFromGroup
         * @interface ICMsgClientRemoveFriendFromGroup
         * @property {number|null} [groupid] CMsgClientRemoveFriendFromGroup groupid
         * @property {number|Long|null} [steamiduser] CMsgClientRemoveFriendFromGroup steamiduser
         */
    
        /**
         * Constructs a new CMsgClientRemoveFriendFromGroup.
         * @exports CMsgClientRemoveFriendFromGroup
         * @classdesc Represents a CMsgClientRemoveFriendFromGroup.
         * @implements ICMsgClientRemoveFriendFromGroup
         * @constructor
         * @param {ICMsgClientRemoveFriendFromGroup=} [properties] Properties to set
         */
        function CMsgClientRemoveFriendFromGroup(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientRemoveFriendFromGroup groupid.
         * @member {number} groupid
         * @memberof CMsgClientRemoveFriendFromGroup
         * @instance
         */
        CMsgClientRemoveFriendFromGroup.prototype.groupid = 0;
    
        /**
         * CMsgClientRemoveFriendFromGroup steamiduser.
         * @member {number|Long} steamiduser
         * @memberof CMsgClientRemoveFriendFromGroup
         * @instance
         */
        CMsgClientRemoveFriendFromGroup.prototype.steamiduser = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CMsgClientRemoveFriendFromGroup instance using the specified properties.
         * @function create
         * @memberof CMsgClientRemoveFriendFromGroup
         * @static
         * @param {ICMsgClientRemoveFriendFromGroup=} [properties] Properties to set
         * @returns {CMsgClientRemoveFriendFromGroup} CMsgClientRemoveFriendFromGroup instance
         */
        CMsgClientRemoveFriendFromGroup.create = function create(properties) {
            return new CMsgClientRemoveFriendFromGroup(properties);
        };
    
        /**
         * Encodes the specified CMsgClientRemoveFriendFromGroup message. Does not implicitly {@link CMsgClientRemoveFriendFromGroup.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientRemoveFriendFromGroup
         * @static
         * @param {ICMsgClientRemoveFriendFromGroup} message CMsgClientRemoveFriendFromGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientRemoveFriendFromGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupid != null && message.hasOwnProperty("groupid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.groupid);
            if (message.steamiduser != null && message.hasOwnProperty("steamiduser"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.steamiduser);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientRemoveFriendFromGroup message, length delimited. Does not implicitly {@link CMsgClientRemoveFriendFromGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientRemoveFriendFromGroup
         * @static
         * @param {ICMsgClientRemoveFriendFromGroup} message CMsgClientRemoveFriendFromGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientRemoveFriendFromGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientRemoveFriendFromGroup message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientRemoveFriendFromGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientRemoveFriendFromGroup} CMsgClientRemoveFriendFromGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientRemoveFriendFromGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientRemoveFriendFromGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.groupid = reader.int32();
                    break;
                case 2:
                    message.steamiduser = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientRemoveFriendFromGroup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientRemoveFriendFromGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientRemoveFriendFromGroup} CMsgClientRemoveFriendFromGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientRemoveFriendFromGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientRemoveFriendFromGroup message.
         * @function verify
         * @memberof CMsgClientRemoveFriendFromGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientRemoveFriendFromGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupid != null && message.hasOwnProperty("groupid"))
                if (!$util.isInteger(message.groupid))
                    return "groupid: integer expected";
            if (message.steamiduser != null && message.hasOwnProperty("steamiduser"))
                if (!$util.isInteger(message.steamiduser) && !(message.steamiduser && $util.isInteger(message.steamiduser.low) && $util.isInteger(message.steamiduser.high)))
                    return "steamiduser: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientRemoveFriendFromGroup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientRemoveFriendFromGroup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientRemoveFriendFromGroup} CMsgClientRemoveFriendFromGroup
         */
        CMsgClientRemoveFriendFromGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientRemoveFriendFromGroup)
                return object;
            var message = new $root.CMsgClientRemoveFriendFromGroup();
            if (object.groupid != null)
                message.groupid = object.groupid | 0;
            if (object.steamiduser != null)
                if ($util.Long)
                    (message.steamiduser = $util.Long.fromValue(object.steamiduser)).unsigned = false;
                else if (typeof object.steamiduser === "string")
                    message.steamiduser = parseInt(object.steamiduser, 10);
                else if (typeof object.steamiduser === "number")
                    message.steamiduser = object.steamiduser;
                else if (typeof object.steamiduser === "object")
                    message.steamiduser = new $util.LongBits(object.steamiduser.low >>> 0, object.steamiduser.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientRemoveFriendFromGroup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientRemoveFriendFromGroup
         * @static
         * @param {CMsgClientRemoveFriendFromGroup} message CMsgClientRemoveFriendFromGroup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientRemoveFriendFromGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.groupid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamiduser = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamiduser = options.longs === String ? "0" : 0;
            }
            if (message.groupid != null && message.hasOwnProperty("groupid"))
                object.groupid = message.groupid;
            if (message.steamiduser != null && message.hasOwnProperty("steamiduser"))
                if (typeof message.steamiduser === "number")
                    object.steamiduser = options.longs === String ? String(message.steamiduser) : message.steamiduser;
                else
                    object.steamiduser = options.longs === String ? $util.Long.prototype.toString.call(message.steamiduser) : options.longs === Number ? new $util.LongBits(message.steamiduser.low >>> 0, message.steamiduser.high >>> 0).toNumber() : message.steamiduser;
            return object;
        };
    
        /**
         * Converts this CMsgClientRemoveFriendFromGroup to JSON.
         * @function toJSON
         * @memberof CMsgClientRemoveFriendFromGroup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientRemoveFriendFromGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientRemoveFriendFromGroup;
    })();
    
    $root.CMsgClientRemoveFriendFromGroupResponse = (function() {
    
        /**
         * Properties of a CMsgClientRemoveFriendFromGroupResponse.
         * @exports ICMsgClientRemoveFriendFromGroupResponse
         * @interface ICMsgClientRemoveFriendFromGroupResponse
         * @property {number|null} [eresult] CMsgClientRemoveFriendFromGroupResponse eresult
         */
    
        /**
         * Constructs a new CMsgClientRemoveFriendFromGroupResponse.
         * @exports CMsgClientRemoveFriendFromGroupResponse
         * @classdesc Represents a CMsgClientRemoveFriendFromGroupResponse.
         * @implements ICMsgClientRemoveFriendFromGroupResponse
         * @constructor
         * @param {ICMsgClientRemoveFriendFromGroupResponse=} [properties] Properties to set
         */
        function CMsgClientRemoveFriendFromGroupResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientRemoveFriendFromGroupResponse eresult.
         * @member {number} eresult
         * @memberof CMsgClientRemoveFriendFromGroupResponse
         * @instance
         */
        CMsgClientRemoveFriendFromGroupResponse.prototype.eresult = 0;
    
        /**
         * Creates a new CMsgClientRemoveFriendFromGroupResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientRemoveFriendFromGroupResponse
         * @static
         * @param {ICMsgClientRemoveFriendFromGroupResponse=} [properties] Properties to set
         * @returns {CMsgClientRemoveFriendFromGroupResponse} CMsgClientRemoveFriendFromGroupResponse instance
         */
        CMsgClientRemoveFriendFromGroupResponse.create = function create(properties) {
            return new CMsgClientRemoveFriendFromGroupResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientRemoveFriendFromGroupResponse message. Does not implicitly {@link CMsgClientRemoveFriendFromGroupResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientRemoveFriendFromGroupResponse
         * @static
         * @param {ICMsgClientRemoveFriendFromGroupResponse} message CMsgClientRemoveFriendFromGroupResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientRemoveFriendFromGroupResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.eresult);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientRemoveFriendFromGroupResponse message, length delimited. Does not implicitly {@link CMsgClientRemoveFriendFromGroupResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientRemoveFriendFromGroupResponse
         * @static
         * @param {ICMsgClientRemoveFriendFromGroupResponse} message CMsgClientRemoveFriendFromGroupResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientRemoveFriendFromGroupResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientRemoveFriendFromGroupResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientRemoveFriendFromGroupResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientRemoveFriendFromGroupResponse} CMsgClientRemoveFriendFromGroupResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientRemoveFriendFromGroupResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientRemoveFriendFromGroupResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eresult = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientRemoveFriendFromGroupResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientRemoveFriendFromGroupResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientRemoveFriendFromGroupResponse} CMsgClientRemoveFriendFromGroupResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientRemoveFriendFromGroupResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientRemoveFriendFromGroupResponse message.
         * @function verify
         * @memberof CMsgClientRemoveFriendFromGroupResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientRemoveFriendFromGroupResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                if (!$util.isInteger(message.eresult))
                    return "eresult: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientRemoveFriendFromGroupResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientRemoveFriendFromGroupResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientRemoveFriendFromGroupResponse} CMsgClientRemoveFriendFromGroupResponse
         */
        CMsgClientRemoveFriendFromGroupResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientRemoveFriendFromGroupResponse)
                return object;
            var message = new $root.CMsgClientRemoveFriendFromGroupResponse();
            if (object.eresult != null)
                message.eresult = object.eresult >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientRemoveFriendFromGroupResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientRemoveFriendFromGroupResponse
         * @static
         * @param {CMsgClientRemoveFriendFromGroupResponse} message CMsgClientRemoveFriendFromGroupResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientRemoveFriendFromGroupResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.eresult = 0;
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                object.eresult = message.eresult;
            return object;
        };
    
        /**
         * Converts this CMsgClientRemoveFriendFromGroupResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientRemoveFriendFromGroupResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientRemoveFriendFromGroupResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientRemoveFriendFromGroupResponse;
    })();
    
    $root.CMsgClientGetEmoticonList = (function() {
    
        /**
         * Properties of a CMsgClientGetEmoticonList.
         * @exports ICMsgClientGetEmoticonList
         * @interface ICMsgClientGetEmoticonList
         */
    
        /**
         * Constructs a new CMsgClientGetEmoticonList.
         * @exports CMsgClientGetEmoticonList
         * @classdesc Represents a CMsgClientGetEmoticonList.
         * @implements ICMsgClientGetEmoticonList
         * @constructor
         * @param {ICMsgClientGetEmoticonList=} [properties] Properties to set
         */
        function CMsgClientGetEmoticonList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CMsgClientGetEmoticonList instance using the specified properties.
         * @function create
         * @memberof CMsgClientGetEmoticonList
         * @static
         * @param {ICMsgClientGetEmoticonList=} [properties] Properties to set
         * @returns {CMsgClientGetEmoticonList} CMsgClientGetEmoticonList instance
         */
        CMsgClientGetEmoticonList.create = function create(properties) {
            return new CMsgClientGetEmoticonList(properties);
        };
    
        /**
         * Encodes the specified CMsgClientGetEmoticonList message. Does not implicitly {@link CMsgClientGetEmoticonList.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientGetEmoticonList
         * @static
         * @param {ICMsgClientGetEmoticonList} message CMsgClientGetEmoticonList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientGetEmoticonList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientGetEmoticonList message, length delimited. Does not implicitly {@link CMsgClientGetEmoticonList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientGetEmoticonList
         * @static
         * @param {ICMsgClientGetEmoticonList} message CMsgClientGetEmoticonList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientGetEmoticonList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientGetEmoticonList message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientGetEmoticonList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientGetEmoticonList} CMsgClientGetEmoticonList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientGetEmoticonList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientGetEmoticonList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientGetEmoticonList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientGetEmoticonList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientGetEmoticonList} CMsgClientGetEmoticonList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientGetEmoticonList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientGetEmoticonList message.
         * @function verify
         * @memberof CMsgClientGetEmoticonList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientGetEmoticonList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientGetEmoticonList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientGetEmoticonList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientGetEmoticonList} CMsgClientGetEmoticonList
         */
        CMsgClientGetEmoticonList.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientGetEmoticonList)
                return object;
            return new $root.CMsgClientGetEmoticonList();
        };
    
        /**
         * Creates a plain object from a CMsgClientGetEmoticonList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientGetEmoticonList
         * @static
         * @param {CMsgClientGetEmoticonList} message CMsgClientGetEmoticonList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientGetEmoticonList.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CMsgClientGetEmoticonList to JSON.
         * @function toJSON
         * @memberof CMsgClientGetEmoticonList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientGetEmoticonList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientGetEmoticonList;
    })();
    
    $root.CMsgClientEmoticonList = (function() {
    
        /**
         * Properties of a CMsgClientEmoticonList.
         * @exports ICMsgClientEmoticonList
         * @interface ICMsgClientEmoticonList
         * @property {Array.<CMsgClientEmoticonList.IEmoticon>|null} [emoticons] CMsgClientEmoticonList emoticons
         */
    
        /**
         * Constructs a new CMsgClientEmoticonList.
         * @exports CMsgClientEmoticonList
         * @classdesc Represents a CMsgClientEmoticonList.
         * @implements ICMsgClientEmoticonList
         * @constructor
         * @param {ICMsgClientEmoticonList=} [properties] Properties to set
         */
        function CMsgClientEmoticonList(properties) {
            this.emoticons = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientEmoticonList emoticons.
         * @member {Array.<CMsgClientEmoticonList.IEmoticon>} emoticons
         * @memberof CMsgClientEmoticonList
         * @instance
         */
        CMsgClientEmoticonList.prototype.emoticons = $util.emptyArray;
    
        /**
         * Creates a new CMsgClientEmoticonList instance using the specified properties.
         * @function create
         * @memberof CMsgClientEmoticonList
         * @static
         * @param {ICMsgClientEmoticonList=} [properties] Properties to set
         * @returns {CMsgClientEmoticonList} CMsgClientEmoticonList instance
         */
        CMsgClientEmoticonList.create = function create(properties) {
            return new CMsgClientEmoticonList(properties);
        };
    
        /**
         * Encodes the specified CMsgClientEmoticonList message. Does not implicitly {@link CMsgClientEmoticonList.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientEmoticonList
         * @static
         * @param {ICMsgClientEmoticonList} message CMsgClientEmoticonList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientEmoticonList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.emoticons != null && message.emoticons.length)
                for (var i = 0; i < message.emoticons.length; ++i)
                    $root.CMsgClientEmoticonList.Emoticon.encode(message.emoticons[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientEmoticonList message, length delimited. Does not implicitly {@link CMsgClientEmoticonList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientEmoticonList
         * @static
         * @param {ICMsgClientEmoticonList} message CMsgClientEmoticonList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientEmoticonList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientEmoticonList message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientEmoticonList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientEmoticonList} CMsgClientEmoticonList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientEmoticonList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientEmoticonList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.emoticons && message.emoticons.length))
                        message.emoticons = [];
                    message.emoticons.push($root.CMsgClientEmoticonList.Emoticon.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientEmoticonList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientEmoticonList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientEmoticonList} CMsgClientEmoticonList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientEmoticonList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientEmoticonList message.
         * @function verify
         * @memberof CMsgClientEmoticonList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientEmoticonList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.emoticons != null && message.hasOwnProperty("emoticons")) {
                if (!Array.isArray(message.emoticons))
                    return "emoticons: array expected";
                for (var i = 0; i < message.emoticons.length; ++i) {
                    var error = $root.CMsgClientEmoticonList.Emoticon.verify(message.emoticons[i]);
                    if (error)
                        return "emoticons." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgClientEmoticonList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientEmoticonList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientEmoticonList} CMsgClientEmoticonList
         */
        CMsgClientEmoticonList.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientEmoticonList)
                return object;
            var message = new $root.CMsgClientEmoticonList();
            if (object.emoticons) {
                if (!Array.isArray(object.emoticons))
                    throw TypeError(".CMsgClientEmoticonList.emoticons: array expected");
                message.emoticons = [];
                for (var i = 0; i < object.emoticons.length; ++i) {
                    if (typeof object.emoticons[i] !== "object")
                        throw TypeError(".CMsgClientEmoticonList.emoticons: object expected");
                    message.emoticons[i] = $root.CMsgClientEmoticonList.Emoticon.fromObject(object.emoticons[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientEmoticonList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientEmoticonList
         * @static
         * @param {CMsgClientEmoticonList} message CMsgClientEmoticonList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientEmoticonList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.emoticons = [];
            if (message.emoticons && message.emoticons.length) {
                object.emoticons = [];
                for (var j = 0; j < message.emoticons.length; ++j)
                    object.emoticons[j] = $root.CMsgClientEmoticonList.Emoticon.toObject(message.emoticons[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgClientEmoticonList to JSON.
         * @function toJSON
         * @memberof CMsgClientEmoticonList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientEmoticonList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgClientEmoticonList.Emoticon = (function() {
    
            /**
             * Properties of an Emoticon.
             * @memberof CMsgClientEmoticonList
             * @interface IEmoticon
             * @property {string|null} [name] Emoticon name
             * @property {number|null} [count] Emoticon count
             * @property {number|null} [time_last_used] Emoticon time_last_used
             * @property {number|null} [use_count] Emoticon use_count
             */
    
            /**
             * Constructs a new Emoticon.
             * @memberof CMsgClientEmoticonList
             * @classdesc Represents an Emoticon.
             * @implements IEmoticon
             * @constructor
             * @param {CMsgClientEmoticonList.IEmoticon=} [properties] Properties to set
             */
            function Emoticon(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Emoticon name.
             * @member {string} name
             * @memberof CMsgClientEmoticonList.Emoticon
             * @instance
             */
            Emoticon.prototype.name = "";
    
            /**
             * Emoticon count.
             * @member {number} count
             * @memberof CMsgClientEmoticonList.Emoticon
             * @instance
             */
            Emoticon.prototype.count = 0;
    
            /**
             * Emoticon time_last_used.
             * @member {number} time_last_used
             * @memberof CMsgClientEmoticonList.Emoticon
             * @instance
             */
            Emoticon.prototype.time_last_used = 0;
    
            /**
             * Emoticon use_count.
             * @member {number} use_count
             * @memberof CMsgClientEmoticonList.Emoticon
             * @instance
             */
            Emoticon.prototype.use_count = 0;
    
            /**
             * Creates a new Emoticon instance using the specified properties.
             * @function create
             * @memberof CMsgClientEmoticonList.Emoticon
             * @static
             * @param {CMsgClientEmoticonList.IEmoticon=} [properties] Properties to set
             * @returns {CMsgClientEmoticonList.Emoticon} Emoticon instance
             */
            Emoticon.create = function create(properties) {
                return new Emoticon(properties);
            };
    
            /**
             * Encodes the specified Emoticon message. Does not implicitly {@link CMsgClientEmoticonList.Emoticon.verify|verify} messages.
             * @function encode
             * @memberof CMsgClientEmoticonList.Emoticon
             * @static
             * @param {CMsgClientEmoticonList.IEmoticon} message Emoticon message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Emoticon.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.count != null && message.hasOwnProperty("count"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.count);
                if (message.time_last_used != null && message.hasOwnProperty("time_last_used"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.time_last_used);
                if (message.use_count != null && message.hasOwnProperty("use_count"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.use_count);
                return writer;
            };
    
            /**
             * Encodes the specified Emoticon message, length delimited. Does not implicitly {@link CMsgClientEmoticonList.Emoticon.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgClientEmoticonList.Emoticon
             * @static
             * @param {CMsgClientEmoticonList.IEmoticon} message Emoticon message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Emoticon.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Emoticon message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgClientEmoticonList.Emoticon
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgClientEmoticonList.Emoticon} Emoticon
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Emoticon.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientEmoticonList.Emoticon();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.count = reader.int32();
                        break;
                    case 3:
                        message.time_last_used = reader.uint32();
                        break;
                    case 4:
                        message.use_count = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Emoticon message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgClientEmoticonList.Emoticon
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgClientEmoticonList.Emoticon} Emoticon
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Emoticon.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Emoticon message.
             * @function verify
             * @memberof CMsgClientEmoticonList.Emoticon
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Emoticon.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.count != null && message.hasOwnProperty("count"))
                    if (!$util.isInteger(message.count))
                        return "count: integer expected";
                if (message.time_last_used != null && message.hasOwnProperty("time_last_used"))
                    if (!$util.isInteger(message.time_last_used))
                        return "time_last_used: integer expected";
                if (message.use_count != null && message.hasOwnProperty("use_count"))
                    if (!$util.isInteger(message.use_count))
                        return "use_count: integer expected";
                return null;
            };
    
            /**
             * Creates an Emoticon message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgClientEmoticonList.Emoticon
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgClientEmoticonList.Emoticon} Emoticon
             */
            Emoticon.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgClientEmoticonList.Emoticon)
                    return object;
                var message = new $root.CMsgClientEmoticonList.Emoticon();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.count != null)
                    message.count = object.count | 0;
                if (object.time_last_used != null)
                    message.time_last_used = object.time_last_used >>> 0;
                if (object.use_count != null)
                    message.use_count = object.use_count >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from an Emoticon message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgClientEmoticonList.Emoticon
             * @static
             * @param {CMsgClientEmoticonList.Emoticon} message Emoticon
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Emoticon.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.count = 0;
                    object.time_last_used = 0;
                    object.use_count = 0;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.count != null && message.hasOwnProperty("count"))
                    object.count = message.count;
                if (message.time_last_used != null && message.hasOwnProperty("time_last_used"))
                    object.time_last_used = message.time_last_used;
                if (message.use_count != null && message.hasOwnProperty("use_count"))
                    object.use_count = message.use_count;
                return object;
            };
    
            /**
             * Converts this Emoticon to JSON.
             * @function toJSON
             * @memberof CMsgClientEmoticonList.Emoticon
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Emoticon.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Emoticon;
        })();
    
        return CMsgClientEmoticonList;
    })();
    
    $root.CMsgProtoBufHeader = (function() {
    
        /**
         * Properties of a CMsgProtoBufHeader.
         * @exports ICMsgProtoBufHeader
         * @interface ICMsgProtoBufHeader
         * @property {number|Long|null} [steamid] CMsgProtoBufHeader steamid
         * @property {number|null} [client_sessionid] CMsgProtoBufHeader client_sessionid
         * @property {number|null} [routing_appid] CMsgProtoBufHeader routing_appid
         * @property {number|Long|null} [jobid_source] CMsgProtoBufHeader jobid_source
         * @property {number|Long|null} [jobid_target] CMsgProtoBufHeader jobid_target
         * @property {string|null} [target_job_name] CMsgProtoBufHeader target_job_name
         * @property {number|null} [seq_num] CMsgProtoBufHeader seq_num
         * @property {number|null} [eresult] CMsgProtoBufHeader eresult
         * @property {string|null} [error_message] CMsgProtoBufHeader error_message
         * @property {number|null} [ip] CMsgProtoBufHeader ip
         * @property {number|null} [auth_account_flags] CMsgProtoBufHeader auth_account_flags
         * @property {number|null} [token_source] CMsgProtoBufHeader token_source
         * @property {boolean|null} [admin_spoofing_user] CMsgProtoBufHeader admin_spoofing_user
         * @property {number|null} [transport_error] CMsgProtoBufHeader transport_error
         * @property {number|Long|null} [messageid] CMsgProtoBufHeader messageid
         * @property {number|null} [publisher_group_id] CMsgProtoBufHeader publisher_group_id
         * @property {number|null} [sysid] CMsgProtoBufHeader sysid
         * @property {number|Long|null} [trace_tag] CMsgProtoBufHeader trace_tag
         * @property {number|null} [webapi_key_id] CMsgProtoBufHeader webapi_key_id
         * @property {boolean|null} [is_from_external_source] CMsgProtoBufHeader is_from_external_source
         * @property {Array.<number>|null} [forward_to_sysid] CMsgProtoBufHeader forward_to_sysid
         * @property {number|null} [cm_sysid] CMsgProtoBufHeader cm_sysid
         */
    
        /**
         * Constructs a new CMsgProtoBufHeader.
         * @exports CMsgProtoBufHeader
         * @classdesc Represents a CMsgProtoBufHeader.
         * @implements ICMsgProtoBufHeader
         * @constructor
         * @param {ICMsgProtoBufHeader=} [properties] Properties to set
         */
        function CMsgProtoBufHeader(properties) {
            this.forward_to_sysid = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgProtoBufHeader steamid.
         * @member {number|Long} steamid
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgProtoBufHeader client_sessionid.
         * @member {number} client_sessionid
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.client_sessionid = 0;
    
        /**
         * CMsgProtoBufHeader routing_appid.
         * @member {number} routing_appid
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.routing_appid = 0;
    
        /**
         * CMsgProtoBufHeader jobid_source.
         * @member {number|Long} jobid_source
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.jobid_source = $util.Long ? $util.Long.fromBits(-1,2147483647,false) : 9223372036854776000;
    
        /**
         * CMsgProtoBufHeader jobid_target.
         * @member {number|Long} jobid_target
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.jobid_target = $util.Long ? $util.Long.fromBits(-1,2147483647,false) : 9223372036854776000;
    
        /**
         * CMsgProtoBufHeader target_job_name.
         * @member {string} target_job_name
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.target_job_name = "";
    
        /**
         * CMsgProtoBufHeader seq_num.
         * @member {number} seq_num
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.seq_num = 0;
    
        /**
         * CMsgProtoBufHeader eresult.
         * @member {number} eresult
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.eresult = 2;
    
        /**
         * CMsgProtoBufHeader error_message.
         * @member {string} error_message
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.error_message = "";
    
        /**
         * CMsgProtoBufHeader ip.
         * @member {number} ip
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.ip = 0;
    
        /**
         * CMsgProtoBufHeader auth_account_flags.
         * @member {number} auth_account_flags
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.auth_account_flags = 0;
    
        /**
         * CMsgProtoBufHeader token_source.
         * @member {number} token_source
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.token_source = 0;
    
        /**
         * CMsgProtoBufHeader admin_spoofing_user.
         * @member {boolean} admin_spoofing_user
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.admin_spoofing_user = false;
    
        /**
         * CMsgProtoBufHeader transport_error.
         * @member {number} transport_error
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.transport_error = 1;
    
        /**
         * CMsgProtoBufHeader messageid.
         * @member {number|Long} messageid
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.messageid = $util.Long ? $util.Long.fromBits(-1,-1,true) : 18446744073709552000;
    
        /**
         * CMsgProtoBufHeader publisher_group_id.
         * @member {number} publisher_group_id
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.publisher_group_id = 0;
    
        /**
         * CMsgProtoBufHeader sysid.
         * @member {number} sysid
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.sysid = 0;
    
        /**
         * CMsgProtoBufHeader trace_tag.
         * @member {number|Long} trace_tag
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.trace_tag = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgProtoBufHeader webapi_key_id.
         * @member {number} webapi_key_id
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.webapi_key_id = 0;
    
        /**
         * CMsgProtoBufHeader is_from_external_source.
         * @member {boolean} is_from_external_source
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.is_from_external_source = false;
    
        /**
         * CMsgProtoBufHeader forward_to_sysid.
         * @member {Array.<number>} forward_to_sysid
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.forward_to_sysid = $util.emptyArray;
    
        /**
         * CMsgProtoBufHeader cm_sysid.
         * @member {number} cm_sysid
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.cm_sysid = 0;
    
        /**
         * Creates a new CMsgProtoBufHeader instance using the specified properties.
         * @function create
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {ICMsgProtoBufHeader=} [properties] Properties to set
         * @returns {CMsgProtoBufHeader} CMsgProtoBufHeader instance
         */
        CMsgProtoBufHeader.create = function create(properties) {
            return new CMsgProtoBufHeader(properties);
        };
    
        /**
         * Encodes the specified CMsgProtoBufHeader message. Does not implicitly {@link CMsgProtoBufHeader.verify|verify} messages.
         * @function encode
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {ICMsgProtoBufHeader} message CMsgProtoBufHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgProtoBufHeader.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.client_sessionid != null && message.hasOwnProperty("client_sessionid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.client_sessionid);
            if (message.routing_appid != null && message.hasOwnProperty("routing_appid"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.routing_appid);
            if (message.jobid_source != null && message.hasOwnProperty("jobid_source"))
                writer.uint32(/* id 10, wireType 1 =*/81).fixed64(message.jobid_source);
            if (message.jobid_target != null && message.hasOwnProperty("jobid_target"))
                writer.uint32(/* id 11, wireType 1 =*/89).fixed64(message.jobid_target);
            if (message.target_job_name != null && message.hasOwnProperty("target_job_name"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.target_job_name);
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.eresult);
            if (message.error_message != null && message.hasOwnProperty("error_message"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.error_message);
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ip);
            if (message.auth_account_flags != null && message.hasOwnProperty("auth_account_flags"))
                writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.auth_account_flags);
            if (message.transport_error != null && message.hasOwnProperty("transport_error"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.transport_error);
            if (message.messageid != null && message.hasOwnProperty("messageid"))
                writer.uint32(/* id 18, wireType 0 =*/144).uint64(message.messageid);
            if (message.publisher_group_id != null && message.hasOwnProperty("publisher_group_id"))
                writer.uint32(/* id 19, wireType 0 =*/152).uint32(message.publisher_group_id);
            if (message.sysid != null && message.hasOwnProperty("sysid"))
                writer.uint32(/* id 20, wireType 0 =*/160).uint32(message.sysid);
            if (message.trace_tag != null && message.hasOwnProperty("trace_tag"))
                writer.uint32(/* id 21, wireType 0 =*/168).uint64(message.trace_tag);
            if (message.token_source != null && message.hasOwnProperty("token_source"))
                writer.uint32(/* id 22, wireType 0 =*/176).uint32(message.token_source);
            if (message.admin_spoofing_user != null && message.hasOwnProperty("admin_spoofing_user"))
                writer.uint32(/* id 23, wireType 0 =*/184).bool(message.admin_spoofing_user);
            if (message.seq_num != null && message.hasOwnProperty("seq_num"))
                writer.uint32(/* id 24, wireType 0 =*/192).int32(message.seq_num);
            if (message.webapi_key_id != null && message.hasOwnProperty("webapi_key_id"))
                writer.uint32(/* id 25, wireType 0 =*/200).uint32(message.webapi_key_id);
            if (message.is_from_external_source != null && message.hasOwnProperty("is_from_external_source"))
                writer.uint32(/* id 26, wireType 0 =*/208).bool(message.is_from_external_source);
            if (message.forward_to_sysid != null && message.forward_to_sysid.length)
                for (var i = 0; i < message.forward_to_sysid.length; ++i)
                    writer.uint32(/* id 27, wireType 0 =*/216).uint32(message.forward_to_sysid[i]);
            if (message.cm_sysid != null && message.hasOwnProperty("cm_sysid"))
                writer.uint32(/* id 28, wireType 0 =*/224).uint32(message.cm_sysid);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgProtoBufHeader message, length delimited. Does not implicitly {@link CMsgProtoBufHeader.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {ICMsgProtoBufHeader} message CMsgProtoBufHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgProtoBufHeader.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgProtoBufHeader message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgProtoBufHeader} CMsgProtoBufHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgProtoBufHeader.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgProtoBufHeader();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.client_sessionid = reader.int32();
                    break;
                case 3:
                    message.routing_appid = reader.uint32();
                    break;
                case 10:
                    message.jobid_source = reader.fixed64();
                    break;
                case 11:
                    message.jobid_target = reader.fixed64();
                    break;
                case 12:
                    message.target_job_name = reader.string();
                    break;
                case 24:
                    message.seq_num = reader.int32();
                    break;
                case 13:
                    message.eresult = reader.int32();
                    break;
                case 14:
                    message.error_message = reader.string();
                    break;
                case 15:
                    message.ip = reader.uint32();
                    break;
                case 16:
                    message.auth_account_flags = reader.uint32();
                    break;
                case 22:
                    message.token_source = reader.uint32();
                    break;
                case 23:
                    message.admin_spoofing_user = reader.bool();
                    break;
                case 17:
                    message.transport_error = reader.int32();
                    break;
                case 18:
                    message.messageid = reader.uint64();
                    break;
                case 19:
                    message.publisher_group_id = reader.uint32();
                    break;
                case 20:
                    message.sysid = reader.uint32();
                    break;
                case 21:
                    message.trace_tag = reader.uint64();
                    break;
                case 25:
                    message.webapi_key_id = reader.uint32();
                    break;
                case 26:
                    message.is_from_external_source = reader.bool();
                    break;
                case 27:
                    if (!(message.forward_to_sysid && message.forward_to_sysid.length))
                        message.forward_to_sysid = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.forward_to_sysid.push(reader.uint32());
                    } else
                        message.forward_to_sysid.push(reader.uint32());
                    break;
                case 28:
                    message.cm_sysid = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgProtoBufHeader message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgProtoBufHeader} CMsgProtoBufHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgProtoBufHeader.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgProtoBufHeader message.
         * @function verify
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgProtoBufHeader.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.client_sessionid != null && message.hasOwnProperty("client_sessionid"))
                if (!$util.isInteger(message.client_sessionid))
                    return "client_sessionid: integer expected";
            if (message.routing_appid != null && message.hasOwnProperty("routing_appid"))
                if (!$util.isInteger(message.routing_appid))
                    return "routing_appid: integer expected";
            if (message.jobid_source != null && message.hasOwnProperty("jobid_source"))
                if (!$util.isInteger(message.jobid_source) && !(message.jobid_source && $util.isInteger(message.jobid_source.low) && $util.isInteger(message.jobid_source.high)))
                    return "jobid_source: integer|Long expected";
            if (message.jobid_target != null && message.hasOwnProperty("jobid_target"))
                if (!$util.isInteger(message.jobid_target) && !(message.jobid_target && $util.isInteger(message.jobid_target.low) && $util.isInteger(message.jobid_target.high)))
                    return "jobid_target: integer|Long expected";
            if (message.target_job_name != null && message.hasOwnProperty("target_job_name"))
                if (!$util.isString(message.target_job_name))
                    return "target_job_name: string expected";
            if (message.seq_num != null && message.hasOwnProperty("seq_num"))
                if (!$util.isInteger(message.seq_num))
                    return "seq_num: integer expected";
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                if (!$util.isInteger(message.eresult))
                    return "eresult: integer expected";
            if (message.error_message != null && message.hasOwnProperty("error_message"))
                if (!$util.isString(message.error_message))
                    return "error_message: string expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isInteger(message.ip))
                    return "ip: integer expected";
            if (message.auth_account_flags != null && message.hasOwnProperty("auth_account_flags"))
                if (!$util.isInteger(message.auth_account_flags))
                    return "auth_account_flags: integer expected";
            if (message.token_source != null && message.hasOwnProperty("token_source"))
                if (!$util.isInteger(message.token_source))
                    return "token_source: integer expected";
            if (message.admin_spoofing_user != null && message.hasOwnProperty("admin_spoofing_user"))
                if (typeof message.admin_spoofing_user !== "boolean")
                    return "admin_spoofing_user: boolean expected";
            if (message.transport_error != null && message.hasOwnProperty("transport_error"))
                if (!$util.isInteger(message.transport_error))
                    return "transport_error: integer expected";
            if (message.messageid != null && message.hasOwnProperty("messageid"))
                if (!$util.isInteger(message.messageid) && !(message.messageid && $util.isInteger(message.messageid.low) && $util.isInteger(message.messageid.high)))
                    return "messageid: integer|Long expected";
            if (message.publisher_group_id != null && message.hasOwnProperty("publisher_group_id"))
                if (!$util.isInteger(message.publisher_group_id))
                    return "publisher_group_id: integer expected";
            if (message.sysid != null && message.hasOwnProperty("sysid"))
                if (!$util.isInteger(message.sysid))
                    return "sysid: integer expected";
            if (message.trace_tag != null && message.hasOwnProperty("trace_tag"))
                if (!$util.isInteger(message.trace_tag) && !(message.trace_tag && $util.isInteger(message.trace_tag.low) && $util.isInteger(message.trace_tag.high)))
                    return "trace_tag: integer|Long expected";
            if (message.webapi_key_id != null && message.hasOwnProperty("webapi_key_id"))
                if (!$util.isInteger(message.webapi_key_id))
                    return "webapi_key_id: integer expected";
            if (message.is_from_external_source != null && message.hasOwnProperty("is_from_external_source"))
                if (typeof message.is_from_external_source !== "boolean")
                    return "is_from_external_source: boolean expected";
            if (message.forward_to_sysid != null && message.hasOwnProperty("forward_to_sysid")) {
                if (!Array.isArray(message.forward_to_sysid))
                    return "forward_to_sysid: array expected";
                for (var i = 0; i < message.forward_to_sysid.length; ++i)
                    if (!$util.isInteger(message.forward_to_sysid[i]))
                        return "forward_to_sysid: integer[] expected";
            }
            if (message.cm_sysid != null && message.hasOwnProperty("cm_sysid"))
                if (!$util.isInteger(message.cm_sysid))
                    return "cm_sysid: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgProtoBufHeader message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgProtoBufHeader} CMsgProtoBufHeader
         */
        CMsgProtoBufHeader.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgProtoBufHeader)
                return object;
            var message = new $root.CMsgProtoBufHeader();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.client_sessionid != null)
                message.client_sessionid = object.client_sessionid | 0;
            if (object.routing_appid != null)
                message.routing_appid = object.routing_appid >>> 0;
            if (object.jobid_source != null)
                if ($util.Long)
                    (message.jobid_source = $util.Long.fromValue(object.jobid_source)).unsigned = false;
                else if (typeof object.jobid_source === "string")
                    message.jobid_source = parseInt(object.jobid_source, 10);
                else if (typeof object.jobid_source === "number")
                    message.jobid_source = object.jobid_source;
                else if (typeof object.jobid_source === "object")
                    message.jobid_source = new $util.LongBits(object.jobid_source.low >>> 0, object.jobid_source.high >>> 0).toNumber();
            if (object.jobid_target != null)
                if ($util.Long)
                    (message.jobid_target = $util.Long.fromValue(object.jobid_target)).unsigned = false;
                else if (typeof object.jobid_target === "string")
                    message.jobid_target = parseInt(object.jobid_target, 10);
                else if (typeof object.jobid_target === "number")
                    message.jobid_target = object.jobid_target;
                else if (typeof object.jobid_target === "object")
                    message.jobid_target = new $util.LongBits(object.jobid_target.low >>> 0, object.jobid_target.high >>> 0).toNumber();
            if (object.target_job_name != null)
                message.target_job_name = String(object.target_job_name);
            if (object.seq_num != null)
                message.seq_num = object.seq_num | 0;
            if (object.eresult != null)
                message.eresult = object.eresult | 0;
            if (object.error_message != null)
                message.error_message = String(object.error_message);
            if (object.ip != null)
                message.ip = object.ip >>> 0;
            if (object.auth_account_flags != null)
                message.auth_account_flags = object.auth_account_flags >>> 0;
            if (object.token_source != null)
                message.token_source = object.token_source >>> 0;
            if (object.admin_spoofing_user != null)
                message.admin_spoofing_user = Boolean(object.admin_spoofing_user);
            if (object.transport_error != null)
                message.transport_error = object.transport_error | 0;
            if (object.messageid != null)
                if ($util.Long)
                    (message.messageid = $util.Long.fromValue(object.messageid)).unsigned = true;
                else if (typeof object.messageid === "string")
                    message.messageid = parseInt(object.messageid, 10);
                else if (typeof object.messageid === "number")
                    message.messageid = object.messageid;
                else if (typeof object.messageid === "object")
                    message.messageid = new $util.LongBits(object.messageid.low >>> 0, object.messageid.high >>> 0).toNumber(true);
            if (object.publisher_group_id != null)
                message.publisher_group_id = object.publisher_group_id >>> 0;
            if (object.sysid != null)
                message.sysid = object.sysid >>> 0;
            if (object.trace_tag != null)
                if ($util.Long)
                    (message.trace_tag = $util.Long.fromValue(object.trace_tag)).unsigned = true;
                else if (typeof object.trace_tag === "string")
                    message.trace_tag = parseInt(object.trace_tag, 10);
                else if (typeof object.trace_tag === "number")
                    message.trace_tag = object.trace_tag;
                else if (typeof object.trace_tag === "object")
                    message.trace_tag = new $util.LongBits(object.trace_tag.low >>> 0, object.trace_tag.high >>> 0).toNumber(true);
            if (object.webapi_key_id != null)
                message.webapi_key_id = object.webapi_key_id >>> 0;
            if (object.is_from_external_source != null)
                message.is_from_external_source = Boolean(object.is_from_external_source);
            if (object.forward_to_sysid) {
                if (!Array.isArray(object.forward_to_sysid))
                    throw TypeError(".CMsgProtoBufHeader.forward_to_sysid: array expected");
                message.forward_to_sysid = [];
                for (var i = 0; i < object.forward_to_sysid.length; ++i)
                    message.forward_to_sysid[i] = object.forward_to_sysid[i] >>> 0;
            }
            if (object.cm_sysid != null)
                message.cm_sysid = object.cm_sysid >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgProtoBufHeader message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {CMsgProtoBufHeader} message CMsgProtoBufHeader
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgProtoBufHeader.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.forward_to_sysid = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                object.client_sessionid = 0;
                object.routing_appid = 0;
                if ($util.Long) {
                    var long = new $util.Long(-1, 2147483647, false);
                    object.jobid_source = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.jobid_source = options.longs === String ? "9223372036854775807" : 9223372036854776000;
                if ($util.Long) {
                    var long = new $util.Long(-1, 2147483647, false);
                    object.jobid_target = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.jobid_target = options.longs === String ? "9223372036854775807" : 9223372036854776000;
                object.target_job_name = "";
                object.eresult = 2;
                object.error_message = "";
                object.ip = 0;
                object.auth_account_flags = 0;
                object.transport_error = 1;
                if ($util.Long) {
                    var long = new $util.Long(-1, -1, true);
                    object.messageid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.messageid = options.longs === String ? "18446744073709551615" : 18446744073709552000;
                object.publisher_group_id = 0;
                object.sysid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.trace_tag = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.trace_tag = options.longs === String ? "0" : 0;
                object.token_source = 0;
                object.admin_spoofing_user = false;
                object.seq_num = 0;
                object.webapi_key_id = 0;
                object.is_from_external_source = false;
                object.cm_sysid = 0;
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.client_sessionid != null && message.hasOwnProperty("client_sessionid"))
                object.client_sessionid = message.client_sessionid;
            if (message.routing_appid != null && message.hasOwnProperty("routing_appid"))
                object.routing_appid = message.routing_appid;
            if (message.jobid_source != null && message.hasOwnProperty("jobid_source"))
                if (typeof message.jobid_source === "number")
                    object.jobid_source = options.longs === String ? String(message.jobid_source) : message.jobid_source;
                else
                    object.jobid_source = options.longs === String ? $util.Long.prototype.toString.call(message.jobid_source) : options.longs === Number ? new $util.LongBits(message.jobid_source.low >>> 0, message.jobid_source.high >>> 0).toNumber() : message.jobid_source;
            if (message.jobid_target != null && message.hasOwnProperty("jobid_target"))
                if (typeof message.jobid_target === "number")
                    object.jobid_target = options.longs === String ? String(message.jobid_target) : message.jobid_target;
                else
                    object.jobid_target = options.longs === String ? $util.Long.prototype.toString.call(message.jobid_target) : options.longs === Number ? new $util.LongBits(message.jobid_target.low >>> 0, message.jobid_target.high >>> 0).toNumber() : message.jobid_target;
            if (message.target_job_name != null && message.hasOwnProperty("target_job_name"))
                object.target_job_name = message.target_job_name;
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                object.eresult = message.eresult;
            if (message.error_message != null && message.hasOwnProperty("error_message"))
                object.error_message = message.error_message;
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.auth_account_flags != null && message.hasOwnProperty("auth_account_flags"))
                object.auth_account_flags = message.auth_account_flags;
            if (message.transport_error != null && message.hasOwnProperty("transport_error"))
                object.transport_error = message.transport_error;
            if (message.messageid != null && message.hasOwnProperty("messageid"))
                if (typeof message.messageid === "number")
                    object.messageid = options.longs === String ? String(message.messageid) : message.messageid;
                else
                    object.messageid = options.longs === String ? $util.Long.prototype.toString.call(message.messageid) : options.longs === Number ? new $util.LongBits(message.messageid.low >>> 0, message.messageid.high >>> 0).toNumber(true) : message.messageid;
            if (message.publisher_group_id != null && message.hasOwnProperty("publisher_group_id"))
                object.publisher_group_id = message.publisher_group_id;
            if (message.sysid != null && message.hasOwnProperty("sysid"))
                object.sysid = message.sysid;
            if (message.trace_tag != null && message.hasOwnProperty("trace_tag"))
                if (typeof message.trace_tag === "number")
                    object.trace_tag = options.longs === String ? String(message.trace_tag) : message.trace_tag;
                else
                    object.trace_tag = options.longs === String ? $util.Long.prototype.toString.call(message.trace_tag) : options.longs === Number ? new $util.LongBits(message.trace_tag.low >>> 0, message.trace_tag.high >>> 0).toNumber(true) : message.trace_tag;
            if (message.token_source != null && message.hasOwnProperty("token_source"))
                object.token_source = message.token_source;
            if (message.admin_spoofing_user != null && message.hasOwnProperty("admin_spoofing_user"))
                object.admin_spoofing_user = message.admin_spoofing_user;
            if (message.seq_num != null && message.hasOwnProperty("seq_num"))
                object.seq_num = message.seq_num;
            if (message.webapi_key_id != null && message.hasOwnProperty("webapi_key_id"))
                object.webapi_key_id = message.webapi_key_id;
            if (message.is_from_external_source != null && message.hasOwnProperty("is_from_external_source"))
                object.is_from_external_source = message.is_from_external_source;
            if (message.forward_to_sysid && message.forward_to_sysid.length) {
                object.forward_to_sysid = [];
                for (var j = 0; j < message.forward_to_sysid.length; ++j)
                    object.forward_to_sysid[j] = message.forward_to_sysid[j];
            }
            if (message.cm_sysid != null && message.hasOwnProperty("cm_sysid"))
                object.cm_sysid = message.cm_sysid;
            return object;
        };
    
        /**
         * Converts this CMsgProtoBufHeader to JSON.
         * @function toJSON
         * @memberof CMsgProtoBufHeader
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgProtoBufHeader.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgProtoBufHeader;
    })();
    
    $root.CMsgMulti = (function() {
    
        /**
         * Properties of a CMsgMulti.
         * @exports ICMsgMulti
         * @interface ICMsgMulti
         * @property {number|null} [size_unzipped] CMsgMulti size_unzipped
         * @property {Uint8Array|null} [message_body] CMsgMulti message_body
         */
    
        /**
         * Constructs a new CMsgMulti.
         * @exports CMsgMulti
         * @classdesc Represents a CMsgMulti.
         * @implements ICMsgMulti
         * @constructor
         * @param {ICMsgMulti=} [properties] Properties to set
         */
        function CMsgMulti(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgMulti size_unzipped.
         * @member {number} size_unzipped
         * @memberof CMsgMulti
         * @instance
         */
        CMsgMulti.prototype.size_unzipped = 0;
    
        /**
         * CMsgMulti message_body.
         * @member {Uint8Array} message_body
         * @memberof CMsgMulti
         * @instance
         */
        CMsgMulti.prototype.message_body = $util.newBuffer([]);
    
        /**
         * Creates a new CMsgMulti instance using the specified properties.
         * @function create
         * @memberof CMsgMulti
         * @static
         * @param {ICMsgMulti=} [properties] Properties to set
         * @returns {CMsgMulti} CMsgMulti instance
         */
        CMsgMulti.create = function create(properties) {
            return new CMsgMulti(properties);
        };
    
        /**
         * Encodes the specified CMsgMulti message. Does not implicitly {@link CMsgMulti.verify|verify} messages.
         * @function encode
         * @memberof CMsgMulti
         * @static
         * @param {ICMsgMulti} message CMsgMulti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgMulti.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.size_unzipped != null && message.hasOwnProperty("size_unzipped"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.size_unzipped);
            if (message.message_body != null && message.hasOwnProperty("message_body"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.message_body);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgMulti message, length delimited. Does not implicitly {@link CMsgMulti.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgMulti
         * @static
         * @param {ICMsgMulti} message CMsgMulti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgMulti.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgMulti message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgMulti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgMulti} CMsgMulti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgMulti.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgMulti();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.size_unzipped = reader.uint32();
                    break;
                case 2:
                    message.message_body = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgMulti message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgMulti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgMulti} CMsgMulti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgMulti.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgMulti message.
         * @function verify
         * @memberof CMsgMulti
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgMulti.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.size_unzipped != null && message.hasOwnProperty("size_unzipped"))
                if (!$util.isInteger(message.size_unzipped))
                    return "size_unzipped: integer expected";
            if (message.message_body != null && message.hasOwnProperty("message_body"))
                if (!(message.message_body && typeof message.message_body.length === "number" || $util.isString(message.message_body)))
                    return "message_body: buffer expected";
            return null;
        };
    
        /**
         * Creates a CMsgMulti message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgMulti
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgMulti} CMsgMulti
         */
        CMsgMulti.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgMulti)
                return object;
            var message = new $root.CMsgMulti();
            if (object.size_unzipped != null)
                message.size_unzipped = object.size_unzipped >>> 0;
            if (object.message_body != null)
                if (typeof object.message_body === "string")
                    $util.base64.decode(object.message_body, message.message_body = $util.newBuffer($util.base64.length(object.message_body)), 0);
                else if (object.message_body.length)
                    message.message_body = object.message_body;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgMulti message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgMulti
         * @static
         * @param {CMsgMulti} message CMsgMulti
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgMulti.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.size_unzipped = 0;
                if (options.bytes === String)
                    object.message_body = "";
                else {
                    object.message_body = [];
                    if (options.bytes !== Array)
                        object.message_body = $util.newBuffer(object.message_body);
                }
            }
            if (message.size_unzipped != null && message.hasOwnProperty("size_unzipped"))
                object.size_unzipped = message.size_unzipped;
            if (message.message_body != null && message.hasOwnProperty("message_body"))
                object.message_body = options.bytes === String ? $util.base64.encode(message.message_body, 0, message.message_body.length) : options.bytes === Array ? Array.prototype.slice.call(message.message_body) : message.message_body;
            return object;
        };
    
        /**
         * Converts this CMsgMulti to JSON.
         * @function toJSON
         * @memberof CMsgMulti
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgMulti.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgMulti;
    })();
    
    $root.CMsgProtobufWrapped = (function() {
    
        /**
         * Properties of a CMsgProtobufWrapped.
         * @exports ICMsgProtobufWrapped
         * @interface ICMsgProtobufWrapped
         * @property {Uint8Array|null} [message_body] CMsgProtobufWrapped message_body
         */
    
        /**
         * Constructs a new CMsgProtobufWrapped.
         * @exports CMsgProtobufWrapped
         * @classdesc Represents a CMsgProtobufWrapped.
         * @implements ICMsgProtobufWrapped
         * @constructor
         * @param {ICMsgProtobufWrapped=} [properties] Properties to set
         */
        function CMsgProtobufWrapped(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgProtobufWrapped message_body.
         * @member {Uint8Array} message_body
         * @memberof CMsgProtobufWrapped
         * @instance
         */
        CMsgProtobufWrapped.prototype.message_body = $util.newBuffer([]);
    
        /**
         * Creates a new CMsgProtobufWrapped instance using the specified properties.
         * @function create
         * @memberof CMsgProtobufWrapped
         * @static
         * @param {ICMsgProtobufWrapped=} [properties] Properties to set
         * @returns {CMsgProtobufWrapped} CMsgProtobufWrapped instance
         */
        CMsgProtobufWrapped.create = function create(properties) {
            return new CMsgProtobufWrapped(properties);
        };
    
        /**
         * Encodes the specified CMsgProtobufWrapped message. Does not implicitly {@link CMsgProtobufWrapped.verify|verify} messages.
         * @function encode
         * @memberof CMsgProtobufWrapped
         * @static
         * @param {ICMsgProtobufWrapped} message CMsgProtobufWrapped message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgProtobufWrapped.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message_body != null && message.hasOwnProperty("message_body"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.message_body);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgProtobufWrapped message, length delimited. Does not implicitly {@link CMsgProtobufWrapped.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgProtobufWrapped
         * @static
         * @param {ICMsgProtobufWrapped} message CMsgProtobufWrapped message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgProtobufWrapped.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgProtobufWrapped message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgProtobufWrapped
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgProtobufWrapped} CMsgProtobufWrapped
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgProtobufWrapped.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgProtobufWrapped();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message_body = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgProtobufWrapped message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgProtobufWrapped
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgProtobufWrapped} CMsgProtobufWrapped
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgProtobufWrapped.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgProtobufWrapped message.
         * @function verify
         * @memberof CMsgProtobufWrapped
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgProtobufWrapped.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message_body != null && message.hasOwnProperty("message_body"))
                if (!(message.message_body && typeof message.message_body.length === "number" || $util.isString(message.message_body)))
                    return "message_body: buffer expected";
            return null;
        };
    
        /**
         * Creates a CMsgProtobufWrapped message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgProtobufWrapped
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgProtobufWrapped} CMsgProtobufWrapped
         */
        CMsgProtobufWrapped.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgProtobufWrapped)
                return object;
            var message = new $root.CMsgProtobufWrapped();
            if (object.message_body != null)
                if (typeof object.message_body === "string")
                    $util.base64.decode(object.message_body, message.message_body = $util.newBuffer($util.base64.length(object.message_body)), 0);
                else if (object.message_body.length)
                    message.message_body = object.message_body;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgProtobufWrapped message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgProtobufWrapped
         * @static
         * @param {CMsgProtobufWrapped} message CMsgProtobufWrapped
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgProtobufWrapped.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.message_body = "";
                else {
                    object.message_body = [];
                    if (options.bytes !== Array)
                        object.message_body = $util.newBuffer(object.message_body);
                }
            if (message.message_body != null && message.hasOwnProperty("message_body"))
                object.message_body = options.bytes === String ? $util.base64.encode(message.message_body, 0, message.message_body.length) : options.bytes === Array ? Array.prototype.slice.call(message.message_body) : message.message_body;
            return object;
        };
    
        /**
         * Converts this CMsgProtobufWrapped to JSON.
         * @function toJSON
         * @memberof CMsgProtobufWrapped
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgProtobufWrapped.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgProtobufWrapped;
    })();
    
    $root.CMsgAuthTicket = (function() {
    
        /**
         * Properties of a CMsgAuthTicket.
         * @exports ICMsgAuthTicket
         * @interface ICMsgAuthTicket
         * @property {number|null} [estate] CMsgAuthTicket estate
         * @property {number|null} [eresult] CMsgAuthTicket eresult
         * @property {number|Long|null} [steamid] CMsgAuthTicket steamid
         * @property {number|Long|null} [gameid] CMsgAuthTicket gameid
         * @property {number|null} [h_steam_pipe] CMsgAuthTicket h_steam_pipe
         * @property {number|null} [ticket_crc] CMsgAuthTicket ticket_crc
         * @property {Uint8Array|null} [ticket] CMsgAuthTicket ticket
         */
    
        /**
         * Constructs a new CMsgAuthTicket.
         * @exports CMsgAuthTicket
         * @classdesc Represents a CMsgAuthTicket.
         * @implements ICMsgAuthTicket
         * @constructor
         * @param {ICMsgAuthTicket=} [properties] Properties to set
         */
        function CMsgAuthTicket(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgAuthTicket estate.
         * @member {number} estate
         * @memberof CMsgAuthTicket
         * @instance
         */
        CMsgAuthTicket.prototype.estate = 0;
    
        /**
         * CMsgAuthTicket eresult.
         * @member {number} eresult
         * @memberof CMsgAuthTicket
         * @instance
         */
        CMsgAuthTicket.prototype.eresult = 2;
    
        /**
         * CMsgAuthTicket steamid.
         * @member {number|Long} steamid
         * @memberof CMsgAuthTicket
         * @instance
         */
        CMsgAuthTicket.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgAuthTicket gameid.
         * @member {number|Long} gameid
         * @memberof CMsgAuthTicket
         * @instance
         */
        CMsgAuthTicket.prototype.gameid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgAuthTicket h_steam_pipe.
         * @member {number} h_steam_pipe
         * @memberof CMsgAuthTicket
         * @instance
         */
        CMsgAuthTicket.prototype.h_steam_pipe = 0;
    
        /**
         * CMsgAuthTicket ticket_crc.
         * @member {number} ticket_crc
         * @memberof CMsgAuthTicket
         * @instance
         */
        CMsgAuthTicket.prototype.ticket_crc = 0;
    
        /**
         * CMsgAuthTicket ticket.
         * @member {Uint8Array} ticket
         * @memberof CMsgAuthTicket
         * @instance
         */
        CMsgAuthTicket.prototype.ticket = $util.newBuffer([]);
    
        /**
         * Creates a new CMsgAuthTicket instance using the specified properties.
         * @function create
         * @memberof CMsgAuthTicket
         * @static
         * @param {ICMsgAuthTicket=} [properties] Properties to set
         * @returns {CMsgAuthTicket} CMsgAuthTicket instance
         */
        CMsgAuthTicket.create = function create(properties) {
            return new CMsgAuthTicket(properties);
        };
    
        /**
         * Encodes the specified CMsgAuthTicket message. Does not implicitly {@link CMsgAuthTicket.verify|verify} messages.
         * @function encode
         * @memberof CMsgAuthTicket
         * @static
         * @param {ICMsgAuthTicket} message CMsgAuthTicket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgAuthTicket.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.estate != null && message.hasOwnProperty("estate"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.estate);
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.eresult);
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.steamid);
            if (message.gameid != null && message.hasOwnProperty("gameid"))
                writer.uint32(/* id 4, wireType 1 =*/33).fixed64(message.gameid);
            if (message.h_steam_pipe != null && message.hasOwnProperty("h_steam_pipe"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.h_steam_pipe);
            if (message.ticket_crc != null && message.hasOwnProperty("ticket_crc"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.ticket_crc);
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.ticket);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgAuthTicket message, length delimited. Does not implicitly {@link CMsgAuthTicket.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgAuthTicket
         * @static
         * @param {ICMsgAuthTicket} message CMsgAuthTicket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgAuthTicket.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgAuthTicket message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgAuthTicket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgAuthTicket} CMsgAuthTicket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgAuthTicket.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgAuthTicket();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.estate = reader.uint32();
                    break;
                case 2:
                    message.eresult = reader.uint32();
                    break;
                case 3:
                    message.steamid = reader.fixed64();
                    break;
                case 4:
                    message.gameid = reader.fixed64();
                    break;
                case 5:
                    message.h_steam_pipe = reader.uint32();
                    break;
                case 6:
                    message.ticket_crc = reader.uint32();
                    break;
                case 7:
                    message.ticket = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgAuthTicket message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgAuthTicket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgAuthTicket} CMsgAuthTicket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgAuthTicket.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgAuthTicket message.
         * @function verify
         * @memberof CMsgAuthTicket
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgAuthTicket.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.estate != null && message.hasOwnProperty("estate"))
                if (!$util.isInteger(message.estate))
                    return "estate: integer expected";
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                if (!$util.isInteger(message.eresult))
                    return "eresult: integer expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.gameid != null && message.hasOwnProperty("gameid"))
                if (!$util.isInteger(message.gameid) && !(message.gameid && $util.isInteger(message.gameid.low) && $util.isInteger(message.gameid.high)))
                    return "gameid: integer|Long expected";
            if (message.h_steam_pipe != null && message.hasOwnProperty("h_steam_pipe"))
                if (!$util.isInteger(message.h_steam_pipe))
                    return "h_steam_pipe: integer expected";
            if (message.ticket_crc != null && message.hasOwnProperty("ticket_crc"))
                if (!$util.isInteger(message.ticket_crc))
                    return "ticket_crc: integer expected";
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                if (!(message.ticket && typeof message.ticket.length === "number" || $util.isString(message.ticket)))
                    return "ticket: buffer expected";
            return null;
        };
    
        /**
         * Creates a CMsgAuthTicket message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgAuthTicket
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgAuthTicket} CMsgAuthTicket
         */
        CMsgAuthTicket.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgAuthTicket)
                return object;
            var message = new $root.CMsgAuthTicket();
            if (object.estate != null)
                message.estate = object.estate >>> 0;
            if (object.eresult != null)
                message.eresult = object.eresult >>> 0;
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.gameid != null)
                if ($util.Long)
                    (message.gameid = $util.Long.fromValue(object.gameid)).unsigned = false;
                else if (typeof object.gameid === "string")
                    message.gameid = parseInt(object.gameid, 10);
                else if (typeof object.gameid === "number")
                    message.gameid = object.gameid;
                else if (typeof object.gameid === "object")
                    message.gameid = new $util.LongBits(object.gameid.low >>> 0, object.gameid.high >>> 0).toNumber();
            if (object.h_steam_pipe != null)
                message.h_steam_pipe = object.h_steam_pipe >>> 0;
            if (object.ticket_crc != null)
                message.ticket_crc = object.ticket_crc >>> 0;
            if (object.ticket != null)
                if (typeof object.ticket === "string")
                    $util.base64.decode(object.ticket, message.ticket = $util.newBuffer($util.base64.length(object.ticket)), 0);
                else if (object.ticket.length)
                    message.ticket = object.ticket;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgAuthTicket message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgAuthTicket
         * @static
         * @param {CMsgAuthTicket} message CMsgAuthTicket
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgAuthTicket.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.estate = 0;
                object.eresult = 2;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.gameid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gameid = options.longs === String ? "0" : 0;
                object.h_steam_pipe = 0;
                object.ticket_crc = 0;
                if (options.bytes === String)
                    object.ticket = "";
                else {
                    object.ticket = [];
                    if (options.bytes !== Array)
                        object.ticket = $util.newBuffer(object.ticket);
                }
            }
            if (message.estate != null && message.hasOwnProperty("estate"))
                object.estate = message.estate;
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                object.eresult = message.eresult;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.gameid != null && message.hasOwnProperty("gameid"))
                if (typeof message.gameid === "number")
                    object.gameid = options.longs === String ? String(message.gameid) : message.gameid;
                else
                    object.gameid = options.longs === String ? $util.Long.prototype.toString.call(message.gameid) : options.longs === Number ? new $util.LongBits(message.gameid.low >>> 0, message.gameid.high >>> 0).toNumber() : message.gameid;
            if (message.h_steam_pipe != null && message.hasOwnProperty("h_steam_pipe"))
                object.h_steam_pipe = message.h_steam_pipe;
            if (message.ticket_crc != null && message.hasOwnProperty("ticket_crc"))
                object.ticket_crc = message.ticket_crc;
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                object.ticket = options.bytes === String ? $util.base64.encode(message.ticket, 0, message.ticket.length) : options.bytes === Array ? Array.prototype.slice.call(message.ticket) : message.ticket;
            return object;
        };
    
        /**
         * Converts this CMsgAuthTicket to JSON.
         * @function toJSON
         * @memberof CMsgAuthTicket
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgAuthTicket.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgAuthTicket;
    })();
    
    $root.CCDDBAppDetailCommon = (function() {
    
        /**
         * Properties of a CCDDBAppDetailCommon.
         * @exports ICCDDBAppDetailCommon
         * @interface ICCDDBAppDetailCommon
         * @property {number|null} [appid] CCDDBAppDetailCommon appid
         * @property {string|null} [name] CCDDBAppDetailCommon name
         * @property {string|null} [icon] CCDDBAppDetailCommon icon
         * @property {string|null} [logo] CCDDBAppDetailCommon logo
         * @property {string|null} [logo_small] CCDDBAppDetailCommon logo_small
         * @property {boolean|null} [tool] CCDDBAppDetailCommon tool
         * @property {boolean|null} [demo] CCDDBAppDetailCommon demo
         * @property {boolean|null} [media] CCDDBAppDetailCommon media
         * @property {boolean|null} [community_visible_stats] CCDDBAppDetailCommon community_visible_stats
         * @property {string|null} [friendly_name] CCDDBAppDetailCommon friendly_name
         * @property {string|null} [propagation] CCDDBAppDetailCommon propagation
         * @property {boolean|null} [has_adult_content] CCDDBAppDetailCommon has_adult_content
         */
    
        /**
         * Constructs a new CCDDBAppDetailCommon.
         * @exports CCDDBAppDetailCommon
         * @classdesc Represents a CCDDBAppDetailCommon.
         * @implements ICCDDBAppDetailCommon
         * @constructor
         * @param {ICCDDBAppDetailCommon=} [properties] Properties to set
         */
        function CCDDBAppDetailCommon(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCDDBAppDetailCommon appid.
         * @member {number} appid
         * @memberof CCDDBAppDetailCommon
         * @instance
         */
        CCDDBAppDetailCommon.prototype.appid = 0;
    
        /**
         * CCDDBAppDetailCommon name.
         * @member {string} name
         * @memberof CCDDBAppDetailCommon
         * @instance
         */
        CCDDBAppDetailCommon.prototype.name = "";
    
        /**
         * CCDDBAppDetailCommon icon.
         * @member {string} icon
         * @memberof CCDDBAppDetailCommon
         * @instance
         */
        CCDDBAppDetailCommon.prototype.icon = "";
    
        /**
         * CCDDBAppDetailCommon logo.
         * @member {string} logo
         * @memberof CCDDBAppDetailCommon
         * @instance
         */
        CCDDBAppDetailCommon.prototype.logo = "";
    
        /**
         * CCDDBAppDetailCommon logo_small.
         * @member {string} logo_small
         * @memberof CCDDBAppDetailCommon
         * @instance
         */
        CCDDBAppDetailCommon.prototype.logo_small = "";
    
        /**
         * CCDDBAppDetailCommon tool.
         * @member {boolean} tool
         * @memberof CCDDBAppDetailCommon
         * @instance
         */
        CCDDBAppDetailCommon.prototype.tool = false;
    
        /**
         * CCDDBAppDetailCommon demo.
         * @member {boolean} demo
         * @memberof CCDDBAppDetailCommon
         * @instance
         */
        CCDDBAppDetailCommon.prototype.demo = false;
    
        /**
         * CCDDBAppDetailCommon media.
         * @member {boolean} media
         * @memberof CCDDBAppDetailCommon
         * @instance
         */
        CCDDBAppDetailCommon.prototype.media = false;
    
        /**
         * CCDDBAppDetailCommon community_visible_stats.
         * @member {boolean} community_visible_stats
         * @memberof CCDDBAppDetailCommon
         * @instance
         */
        CCDDBAppDetailCommon.prototype.community_visible_stats = false;
    
        /**
         * CCDDBAppDetailCommon friendly_name.
         * @member {string} friendly_name
         * @memberof CCDDBAppDetailCommon
         * @instance
         */
        CCDDBAppDetailCommon.prototype.friendly_name = "";
    
        /**
         * CCDDBAppDetailCommon propagation.
         * @member {string} propagation
         * @memberof CCDDBAppDetailCommon
         * @instance
         */
        CCDDBAppDetailCommon.prototype.propagation = "";
    
        /**
         * CCDDBAppDetailCommon has_adult_content.
         * @member {boolean} has_adult_content
         * @memberof CCDDBAppDetailCommon
         * @instance
         */
        CCDDBAppDetailCommon.prototype.has_adult_content = false;
    
        /**
         * Creates a new CCDDBAppDetailCommon instance using the specified properties.
         * @function create
         * @memberof CCDDBAppDetailCommon
         * @static
         * @param {ICCDDBAppDetailCommon=} [properties] Properties to set
         * @returns {CCDDBAppDetailCommon} CCDDBAppDetailCommon instance
         */
        CCDDBAppDetailCommon.create = function create(properties) {
            return new CCDDBAppDetailCommon(properties);
        };
    
        /**
         * Encodes the specified CCDDBAppDetailCommon message. Does not implicitly {@link CCDDBAppDetailCommon.verify|verify} messages.
         * @function encode
         * @memberof CCDDBAppDetailCommon
         * @static
         * @param {ICCDDBAppDetailCommon} message CCDDBAppDetailCommon message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCDDBAppDetailCommon.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.icon != null && message.hasOwnProperty("icon"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.icon);
            if (message.logo != null && message.hasOwnProperty("logo"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.logo);
            if (message.logo_small != null && message.hasOwnProperty("logo_small"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.logo_small);
            if (message.tool != null && message.hasOwnProperty("tool"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.tool);
            if (message.demo != null && message.hasOwnProperty("demo"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.demo);
            if (message.media != null && message.hasOwnProperty("media"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.media);
            if (message.community_visible_stats != null && message.hasOwnProperty("community_visible_stats"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.community_visible_stats);
            if (message.friendly_name != null && message.hasOwnProperty("friendly_name"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.friendly_name);
            if (message.propagation != null && message.hasOwnProperty("propagation"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.propagation);
            if (message.has_adult_content != null && message.hasOwnProperty("has_adult_content"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.has_adult_content);
            return writer;
        };
    
        /**
         * Encodes the specified CCDDBAppDetailCommon message, length delimited. Does not implicitly {@link CCDDBAppDetailCommon.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCDDBAppDetailCommon
         * @static
         * @param {ICCDDBAppDetailCommon} message CCDDBAppDetailCommon message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCDDBAppDetailCommon.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCDDBAppDetailCommon message from the specified reader or buffer.
         * @function decode
         * @memberof CCDDBAppDetailCommon
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCDDBAppDetailCommon} CCDDBAppDetailCommon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCDDBAppDetailCommon.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCDDBAppDetailCommon();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.icon = reader.string();
                    break;
                case 4:
                    message.logo = reader.string();
                    break;
                case 5:
                    message.logo_small = reader.string();
                    break;
                case 6:
                    message.tool = reader.bool();
                    break;
                case 7:
                    message.demo = reader.bool();
                    break;
                case 8:
                    message.media = reader.bool();
                    break;
                case 9:
                    message.community_visible_stats = reader.bool();
                    break;
                case 10:
                    message.friendly_name = reader.string();
                    break;
                case 11:
                    message.propagation = reader.string();
                    break;
                case 12:
                    message.has_adult_content = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCDDBAppDetailCommon message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCDDBAppDetailCommon
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCDDBAppDetailCommon} CCDDBAppDetailCommon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCDDBAppDetailCommon.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCDDBAppDetailCommon message.
         * @function verify
         * @memberof CCDDBAppDetailCommon
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCDDBAppDetailCommon.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.logo != null && message.hasOwnProperty("logo"))
                if (!$util.isString(message.logo))
                    return "logo: string expected";
            if (message.logo_small != null && message.hasOwnProperty("logo_small"))
                if (!$util.isString(message.logo_small))
                    return "logo_small: string expected";
            if (message.tool != null && message.hasOwnProperty("tool"))
                if (typeof message.tool !== "boolean")
                    return "tool: boolean expected";
            if (message.demo != null && message.hasOwnProperty("demo"))
                if (typeof message.demo !== "boolean")
                    return "demo: boolean expected";
            if (message.media != null && message.hasOwnProperty("media"))
                if (typeof message.media !== "boolean")
                    return "media: boolean expected";
            if (message.community_visible_stats != null && message.hasOwnProperty("community_visible_stats"))
                if (typeof message.community_visible_stats !== "boolean")
                    return "community_visible_stats: boolean expected";
            if (message.friendly_name != null && message.hasOwnProperty("friendly_name"))
                if (!$util.isString(message.friendly_name))
                    return "friendly_name: string expected";
            if (message.propagation != null && message.hasOwnProperty("propagation"))
                if (!$util.isString(message.propagation))
                    return "propagation: string expected";
            if (message.has_adult_content != null && message.hasOwnProperty("has_adult_content"))
                if (typeof message.has_adult_content !== "boolean")
                    return "has_adult_content: boolean expected";
            return null;
        };
    
        /**
         * Creates a CCDDBAppDetailCommon message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCDDBAppDetailCommon
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCDDBAppDetailCommon} CCDDBAppDetailCommon
         */
        CCDDBAppDetailCommon.fromObject = function fromObject(object) {
            if (object instanceof $root.CCDDBAppDetailCommon)
                return object;
            var message = new $root.CCDDBAppDetailCommon();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.logo != null)
                message.logo = String(object.logo);
            if (object.logo_small != null)
                message.logo_small = String(object.logo_small);
            if (object.tool != null)
                message.tool = Boolean(object.tool);
            if (object.demo != null)
                message.demo = Boolean(object.demo);
            if (object.media != null)
                message.media = Boolean(object.media);
            if (object.community_visible_stats != null)
                message.community_visible_stats = Boolean(object.community_visible_stats);
            if (object.friendly_name != null)
                message.friendly_name = String(object.friendly_name);
            if (object.propagation != null)
                message.propagation = String(object.propagation);
            if (object.has_adult_content != null)
                message.has_adult_content = Boolean(object.has_adult_content);
            return message;
        };
    
        /**
         * Creates a plain object from a CCDDBAppDetailCommon message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCDDBAppDetailCommon
         * @static
         * @param {CCDDBAppDetailCommon} message CCDDBAppDetailCommon
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCDDBAppDetailCommon.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                object.name = "";
                object.icon = "";
                object.logo = "";
                object.logo_small = "";
                object.tool = false;
                object.demo = false;
                object.media = false;
                object.community_visible_stats = false;
                object.friendly_name = "";
                object.propagation = "";
                object.has_adult_content = false;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.logo != null && message.hasOwnProperty("logo"))
                object.logo = message.logo;
            if (message.logo_small != null && message.hasOwnProperty("logo_small"))
                object.logo_small = message.logo_small;
            if (message.tool != null && message.hasOwnProperty("tool"))
                object.tool = message.tool;
            if (message.demo != null && message.hasOwnProperty("demo"))
                object.demo = message.demo;
            if (message.media != null && message.hasOwnProperty("media"))
                object.media = message.media;
            if (message.community_visible_stats != null && message.hasOwnProperty("community_visible_stats"))
                object.community_visible_stats = message.community_visible_stats;
            if (message.friendly_name != null && message.hasOwnProperty("friendly_name"))
                object.friendly_name = message.friendly_name;
            if (message.propagation != null && message.hasOwnProperty("propagation"))
                object.propagation = message.propagation;
            if (message.has_adult_content != null && message.hasOwnProperty("has_adult_content"))
                object.has_adult_content = message.has_adult_content;
            return object;
        };
    
        /**
         * Converts this CCDDBAppDetailCommon to JSON.
         * @function toJSON
         * @memberof CCDDBAppDetailCommon
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCDDBAppDetailCommon.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCDDBAppDetailCommon;
    })();
    
    $root.CMsgAppRights = (function() {
    
        /**
         * Properties of a CMsgAppRights.
         * @exports ICMsgAppRights
         * @interface ICMsgAppRights
         * @property {boolean|null} [edit_info] CMsgAppRights edit_info
         * @property {boolean|null} [publish] CMsgAppRights publish
         * @property {boolean|null} [view_error_data] CMsgAppRights view_error_data
         * @property {boolean|null} [download] CMsgAppRights download
         * @property {boolean|null} [upload_cdkeys] CMsgAppRights upload_cdkeys
         * @property {boolean|null} [generate_cdkeys] CMsgAppRights generate_cdkeys
         * @property {boolean|null} [view_financials] CMsgAppRights view_financials
         * @property {boolean|null} [manage_ceg] CMsgAppRights manage_ceg
         * @property {boolean|null} [manage_signing] CMsgAppRights manage_signing
         * @property {boolean|null} [manage_cdkeys] CMsgAppRights manage_cdkeys
         * @property {boolean|null} [edit_marketing] CMsgAppRights edit_marketing
         * @property {boolean|null} [economy_support] CMsgAppRights economy_support
         * @property {boolean|null} [economy_support_supervisor] CMsgAppRights economy_support_supervisor
         * @property {boolean|null} [manage_pricing] CMsgAppRights manage_pricing
         * @property {boolean|null} [broadcast_live] CMsgAppRights broadcast_live
         */
    
        /**
         * Constructs a new CMsgAppRights.
         * @exports CMsgAppRights
         * @classdesc Represents a CMsgAppRights.
         * @implements ICMsgAppRights
         * @constructor
         * @param {ICMsgAppRights=} [properties] Properties to set
         */
        function CMsgAppRights(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgAppRights edit_info.
         * @member {boolean} edit_info
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.edit_info = false;
    
        /**
         * CMsgAppRights publish.
         * @member {boolean} publish
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.publish = false;
    
        /**
         * CMsgAppRights view_error_data.
         * @member {boolean} view_error_data
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.view_error_data = false;
    
        /**
         * CMsgAppRights download.
         * @member {boolean} download
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.download = false;
    
        /**
         * CMsgAppRights upload_cdkeys.
         * @member {boolean} upload_cdkeys
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.upload_cdkeys = false;
    
        /**
         * CMsgAppRights generate_cdkeys.
         * @member {boolean} generate_cdkeys
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.generate_cdkeys = false;
    
        /**
         * CMsgAppRights view_financials.
         * @member {boolean} view_financials
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.view_financials = false;
    
        /**
         * CMsgAppRights manage_ceg.
         * @member {boolean} manage_ceg
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.manage_ceg = false;
    
        /**
         * CMsgAppRights manage_signing.
         * @member {boolean} manage_signing
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.manage_signing = false;
    
        /**
         * CMsgAppRights manage_cdkeys.
         * @member {boolean} manage_cdkeys
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.manage_cdkeys = false;
    
        /**
         * CMsgAppRights edit_marketing.
         * @member {boolean} edit_marketing
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.edit_marketing = false;
    
        /**
         * CMsgAppRights economy_support.
         * @member {boolean} economy_support
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.economy_support = false;
    
        /**
         * CMsgAppRights economy_support_supervisor.
         * @member {boolean} economy_support_supervisor
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.economy_support_supervisor = false;
    
        /**
         * CMsgAppRights manage_pricing.
         * @member {boolean} manage_pricing
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.manage_pricing = false;
    
        /**
         * CMsgAppRights broadcast_live.
         * @member {boolean} broadcast_live
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.broadcast_live = false;
    
        /**
         * Creates a new CMsgAppRights instance using the specified properties.
         * @function create
         * @memberof CMsgAppRights
         * @static
         * @param {ICMsgAppRights=} [properties] Properties to set
         * @returns {CMsgAppRights} CMsgAppRights instance
         */
        CMsgAppRights.create = function create(properties) {
            return new CMsgAppRights(properties);
        };
    
        /**
         * Encodes the specified CMsgAppRights message. Does not implicitly {@link CMsgAppRights.verify|verify} messages.
         * @function encode
         * @memberof CMsgAppRights
         * @static
         * @param {ICMsgAppRights} message CMsgAppRights message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgAppRights.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.edit_info != null && message.hasOwnProperty("edit_info"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.edit_info);
            if (message.publish != null && message.hasOwnProperty("publish"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.publish);
            if (message.view_error_data != null && message.hasOwnProperty("view_error_data"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.view_error_data);
            if (message.download != null && message.hasOwnProperty("download"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.download);
            if (message.upload_cdkeys != null && message.hasOwnProperty("upload_cdkeys"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.upload_cdkeys);
            if (message.generate_cdkeys != null && message.hasOwnProperty("generate_cdkeys"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.generate_cdkeys);
            if (message.view_financials != null && message.hasOwnProperty("view_financials"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.view_financials);
            if (message.manage_ceg != null && message.hasOwnProperty("manage_ceg"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.manage_ceg);
            if (message.manage_signing != null && message.hasOwnProperty("manage_signing"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.manage_signing);
            if (message.manage_cdkeys != null && message.hasOwnProperty("manage_cdkeys"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.manage_cdkeys);
            if (message.edit_marketing != null && message.hasOwnProperty("edit_marketing"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.edit_marketing);
            if (message.economy_support != null && message.hasOwnProperty("economy_support"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.economy_support);
            if (message.economy_support_supervisor != null && message.hasOwnProperty("economy_support_supervisor"))
                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.economy_support_supervisor);
            if (message.manage_pricing != null && message.hasOwnProperty("manage_pricing"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.manage_pricing);
            if (message.broadcast_live != null && message.hasOwnProperty("broadcast_live"))
                writer.uint32(/* id 15, wireType 0 =*/120).bool(message.broadcast_live);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgAppRights message, length delimited. Does not implicitly {@link CMsgAppRights.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgAppRights
         * @static
         * @param {ICMsgAppRights} message CMsgAppRights message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgAppRights.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgAppRights message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgAppRights
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgAppRights} CMsgAppRights
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgAppRights.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgAppRights();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.edit_info = reader.bool();
                    break;
                case 2:
                    message.publish = reader.bool();
                    break;
                case 3:
                    message.view_error_data = reader.bool();
                    break;
                case 4:
                    message.download = reader.bool();
                    break;
                case 5:
                    message.upload_cdkeys = reader.bool();
                    break;
                case 6:
                    message.generate_cdkeys = reader.bool();
                    break;
                case 7:
                    message.view_financials = reader.bool();
                    break;
                case 8:
                    message.manage_ceg = reader.bool();
                    break;
                case 9:
                    message.manage_signing = reader.bool();
                    break;
                case 10:
                    message.manage_cdkeys = reader.bool();
                    break;
                case 11:
                    message.edit_marketing = reader.bool();
                    break;
                case 12:
                    message.economy_support = reader.bool();
                    break;
                case 13:
                    message.economy_support_supervisor = reader.bool();
                    break;
                case 14:
                    message.manage_pricing = reader.bool();
                    break;
                case 15:
                    message.broadcast_live = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgAppRights message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgAppRights
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgAppRights} CMsgAppRights
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgAppRights.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgAppRights message.
         * @function verify
         * @memberof CMsgAppRights
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgAppRights.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.edit_info != null && message.hasOwnProperty("edit_info"))
                if (typeof message.edit_info !== "boolean")
                    return "edit_info: boolean expected";
            if (message.publish != null && message.hasOwnProperty("publish"))
                if (typeof message.publish !== "boolean")
                    return "publish: boolean expected";
            if (message.view_error_data != null && message.hasOwnProperty("view_error_data"))
                if (typeof message.view_error_data !== "boolean")
                    return "view_error_data: boolean expected";
            if (message.download != null && message.hasOwnProperty("download"))
                if (typeof message.download !== "boolean")
                    return "download: boolean expected";
            if (message.upload_cdkeys != null && message.hasOwnProperty("upload_cdkeys"))
                if (typeof message.upload_cdkeys !== "boolean")
                    return "upload_cdkeys: boolean expected";
            if (message.generate_cdkeys != null && message.hasOwnProperty("generate_cdkeys"))
                if (typeof message.generate_cdkeys !== "boolean")
                    return "generate_cdkeys: boolean expected";
            if (message.view_financials != null && message.hasOwnProperty("view_financials"))
                if (typeof message.view_financials !== "boolean")
                    return "view_financials: boolean expected";
            if (message.manage_ceg != null && message.hasOwnProperty("manage_ceg"))
                if (typeof message.manage_ceg !== "boolean")
                    return "manage_ceg: boolean expected";
            if (message.manage_signing != null && message.hasOwnProperty("manage_signing"))
                if (typeof message.manage_signing !== "boolean")
                    return "manage_signing: boolean expected";
            if (message.manage_cdkeys != null && message.hasOwnProperty("manage_cdkeys"))
                if (typeof message.manage_cdkeys !== "boolean")
                    return "manage_cdkeys: boolean expected";
            if (message.edit_marketing != null && message.hasOwnProperty("edit_marketing"))
                if (typeof message.edit_marketing !== "boolean")
                    return "edit_marketing: boolean expected";
            if (message.economy_support != null && message.hasOwnProperty("economy_support"))
                if (typeof message.economy_support !== "boolean")
                    return "economy_support: boolean expected";
            if (message.economy_support_supervisor != null && message.hasOwnProperty("economy_support_supervisor"))
                if (typeof message.economy_support_supervisor !== "boolean")
                    return "economy_support_supervisor: boolean expected";
            if (message.manage_pricing != null && message.hasOwnProperty("manage_pricing"))
                if (typeof message.manage_pricing !== "boolean")
                    return "manage_pricing: boolean expected";
            if (message.broadcast_live != null && message.hasOwnProperty("broadcast_live"))
                if (typeof message.broadcast_live !== "boolean")
                    return "broadcast_live: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgAppRights message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgAppRights
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgAppRights} CMsgAppRights
         */
        CMsgAppRights.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgAppRights)
                return object;
            var message = new $root.CMsgAppRights();
            if (object.edit_info != null)
                message.edit_info = Boolean(object.edit_info);
            if (object.publish != null)
                message.publish = Boolean(object.publish);
            if (object.view_error_data != null)
                message.view_error_data = Boolean(object.view_error_data);
            if (object.download != null)
                message.download = Boolean(object.download);
            if (object.upload_cdkeys != null)
                message.upload_cdkeys = Boolean(object.upload_cdkeys);
            if (object.generate_cdkeys != null)
                message.generate_cdkeys = Boolean(object.generate_cdkeys);
            if (object.view_financials != null)
                message.view_financials = Boolean(object.view_financials);
            if (object.manage_ceg != null)
                message.manage_ceg = Boolean(object.manage_ceg);
            if (object.manage_signing != null)
                message.manage_signing = Boolean(object.manage_signing);
            if (object.manage_cdkeys != null)
                message.manage_cdkeys = Boolean(object.manage_cdkeys);
            if (object.edit_marketing != null)
                message.edit_marketing = Boolean(object.edit_marketing);
            if (object.economy_support != null)
                message.economy_support = Boolean(object.economy_support);
            if (object.economy_support_supervisor != null)
                message.economy_support_supervisor = Boolean(object.economy_support_supervisor);
            if (object.manage_pricing != null)
                message.manage_pricing = Boolean(object.manage_pricing);
            if (object.broadcast_live != null)
                message.broadcast_live = Boolean(object.broadcast_live);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgAppRights message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgAppRights
         * @static
         * @param {CMsgAppRights} message CMsgAppRights
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgAppRights.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.edit_info = false;
                object.publish = false;
                object.view_error_data = false;
                object.download = false;
                object.upload_cdkeys = false;
                object.generate_cdkeys = false;
                object.view_financials = false;
                object.manage_ceg = false;
                object.manage_signing = false;
                object.manage_cdkeys = false;
                object.edit_marketing = false;
                object.economy_support = false;
                object.economy_support_supervisor = false;
                object.manage_pricing = false;
                object.broadcast_live = false;
            }
            if (message.edit_info != null && message.hasOwnProperty("edit_info"))
                object.edit_info = message.edit_info;
            if (message.publish != null && message.hasOwnProperty("publish"))
                object.publish = message.publish;
            if (message.view_error_data != null && message.hasOwnProperty("view_error_data"))
                object.view_error_data = message.view_error_data;
            if (message.download != null && message.hasOwnProperty("download"))
                object.download = message.download;
            if (message.upload_cdkeys != null && message.hasOwnProperty("upload_cdkeys"))
                object.upload_cdkeys = message.upload_cdkeys;
            if (message.generate_cdkeys != null && message.hasOwnProperty("generate_cdkeys"))
                object.generate_cdkeys = message.generate_cdkeys;
            if (message.view_financials != null && message.hasOwnProperty("view_financials"))
                object.view_financials = message.view_financials;
            if (message.manage_ceg != null && message.hasOwnProperty("manage_ceg"))
                object.manage_ceg = message.manage_ceg;
            if (message.manage_signing != null && message.hasOwnProperty("manage_signing"))
                object.manage_signing = message.manage_signing;
            if (message.manage_cdkeys != null && message.hasOwnProperty("manage_cdkeys"))
                object.manage_cdkeys = message.manage_cdkeys;
            if (message.edit_marketing != null && message.hasOwnProperty("edit_marketing"))
                object.edit_marketing = message.edit_marketing;
            if (message.economy_support != null && message.hasOwnProperty("economy_support"))
                object.economy_support = message.economy_support;
            if (message.economy_support_supervisor != null && message.hasOwnProperty("economy_support_supervisor"))
                object.economy_support_supervisor = message.economy_support_supervisor;
            if (message.manage_pricing != null && message.hasOwnProperty("manage_pricing"))
                object.manage_pricing = message.manage_pricing;
            if (message.broadcast_live != null && message.hasOwnProperty("broadcast_live"))
                object.broadcast_live = message.broadcast_live;
            return object;
        };
    
        /**
         * Converts this CMsgAppRights to JSON.
         * @function toJSON
         * @memberof CMsgAppRights
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgAppRights.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgAppRights;
    })();
    
    $root.CCuratorPreferences = (function() {
    
        /**
         * Properties of a CCuratorPreferences.
         * @exports ICCuratorPreferences
         * @interface ICCuratorPreferences
         * @property {number|null} [supported_languages] CCuratorPreferences supported_languages
         * @property {boolean|null} [platform_windows] CCuratorPreferences platform_windows
         * @property {boolean|null} [platform_mac] CCuratorPreferences platform_mac
         * @property {boolean|null} [platform_linux] CCuratorPreferences platform_linux
         * @property {boolean|null} [vr_content] CCuratorPreferences vr_content
         * @property {boolean|null} [adult_content_violence] CCuratorPreferences adult_content_violence
         * @property {boolean|null} [adult_content_sex] CCuratorPreferences adult_content_sex
         * @property {number|null} [timestamp_updated] CCuratorPreferences timestamp_updated
         * @property {Array.<number>|null} [tagids_curated] CCuratorPreferences tagids_curated
         * @property {Array.<number>|null} [tagids_filtered] CCuratorPreferences tagids_filtered
         * @property {string|null} [website_title] CCuratorPreferences website_title
         * @property {string|null} [website_url] CCuratorPreferences website_url
         * @property {string|null} [discussion_url] CCuratorPreferences discussion_url
         * @property {boolean|null} [show_broadcast] CCuratorPreferences show_broadcast
         */
    
        /**
         * Constructs a new CCuratorPreferences.
         * @exports CCuratorPreferences
         * @classdesc Represents a CCuratorPreferences.
         * @implements ICCuratorPreferences
         * @constructor
         * @param {ICCuratorPreferences=} [properties] Properties to set
         */
        function CCuratorPreferences(properties) {
            this.tagids_curated = [];
            this.tagids_filtered = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCuratorPreferences supported_languages.
         * @member {number} supported_languages
         * @memberof CCuratorPreferences
         * @instance
         */
        CCuratorPreferences.prototype.supported_languages = 0;
    
        /**
         * CCuratorPreferences platform_windows.
         * @member {boolean} platform_windows
         * @memberof CCuratorPreferences
         * @instance
         */
        CCuratorPreferences.prototype.platform_windows = false;
    
        /**
         * CCuratorPreferences platform_mac.
         * @member {boolean} platform_mac
         * @memberof CCuratorPreferences
         * @instance
         */
        CCuratorPreferences.prototype.platform_mac = false;
    
        /**
         * CCuratorPreferences platform_linux.
         * @member {boolean} platform_linux
         * @memberof CCuratorPreferences
         * @instance
         */
        CCuratorPreferences.prototype.platform_linux = false;
    
        /**
         * CCuratorPreferences vr_content.
         * @member {boolean} vr_content
         * @memberof CCuratorPreferences
         * @instance
         */
        CCuratorPreferences.prototype.vr_content = false;
    
        /**
         * CCuratorPreferences adult_content_violence.
         * @member {boolean} adult_content_violence
         * @memberof CCuratorPreferences
         * @instance
         */
        CCuratorPreferences.prototype.adult_content_violence = false;
    
        /**
         * CCuratorPreferences adult_content_sex.
         * @member {boolean} adult_content_sex
         * @memberof CCuratorPreferences
         * @instance
         */
        CCuratorPreferences.prototype.adult_content_sex = false;
    
        /**
         * CCuratorPreferences timestamp_updated.
         * @member {number} timestamp_updated
         * @memberof CCuratorPreferences
         * @instance
         */
        CCuratorPreferences.prototype.timestamp_updated = 0;
    
        /**
         * CCuratorPreferences tagids_curated.
         * @member {Array.<number>} tagids_curated
         * @memberof CCuratorPreferences
         * @instance
         */
        CCuratorPreferences.prototype.tagids_curated = $util.emptyArray;
    
        /**
         * CCuratorPreferences tagids_filtered.
         * @member {Array.<number>} tagids_filtered
         * @memberof CCuratorPreferences
         * @instance
         */
        CCuratorPreferences.prototype.tagids_filtered = $util.emptyArray;
    
        /**
         * CCuratorPreferences website_title.
         * @member {string} website_title
         * @memberof CCuratorPreferences
         * @instance
         */
        CCuratorPreferences.prototype.website_title = "";
    
        /**
         * CCuratorPreferences website_url.
         * @member {string} website_url
         * @memberof CCuratorPreferences
         * @instance
         */
        CCuratorPreferences.prototype.website_url = "";
    
        /**
         * CCuratorPreferences discussion_url.
         * @member {string} discussion_url
         * @memberof CCuratorPreferences
         * @instance
         */
        CCuratorPreferences.prototype.discussion_url = "";
    
        /**
         * CCuratorPreferences show_broadcast.
         * @member {boolean} show_broadcast
         * @memberof CCuratorPreferences
         * @instance
         */
        CCuratorPreferences.prototype.show_broadcast = false;
    
        /**
         * Creates a new CCuratorPreferences instance using the specified properties.
         * @function create
         * @memberof CCuratorPreferences
         * @static
         * @param {ICCuratorPreferences=} [properties] Properties to set
         * @returns {CCuratorPreferences} CCuratorPreferences instance
         */
        CCuratorPreferences.create = function create(properties) {
            return new CCuratorPreferences(properties);
        };
    
        /**
         * Encodes the specified CCuratorPreferences message. Does not implicitly {@link CCuratorPreferences.verify|verify} messages.
         * @function encode
         * @memberof CCuratorPreferences
         * @static
         * @param {ICCuratorPreferences} message CCuratorPreferences message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCuratorPreferences.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.supported_languages != null && message.hasOwnProperty("supported_languages"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.supported_languages);
            if (message.platform_windows != null && message.hasOwnProperty("platform_windows"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.platform_windows);
            if (message.platform_mac != null && message.hasOwnProperty("platform_mac"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.platform_mac);
            if (message.platform_linux != null && message.hasOwnProperty("platform_linux"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.platform_linux);
            if (message.vr_content != null && message.hasOwnProperty("vr_content"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.vr_content);
            if (message.adult_content_violence != null && message.hasOwnProperty("adult_content_violence"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.adult_content_violence);
            if (message.adult_content_sex != null && message.hasOwnProperty("adult_content_sex"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.adult_content_sex);
            if (message.timestamp_updated != null && message.hasOwnProperty("timestamp_updated"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.timestamp_updated);
            if (message.tagids_curated != null && message.tagids_curated.length)
                for (var i = 0; i < message.tagids_curated.length; ++i)
                    writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.tagids_curated[i]);
            if (message.tagids_filtered != null && message.tagids_filtered.length)
                for (var i = 0; i < message.tagids_filtered.length; ++i)
                    writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.tagids_filtered[i]);
            if (message.website_title != null && message.hasOwnProperty("website_title"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.website_title);
            if (message.website_url != null && message.hasOwnProperty("website_url"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.website_url);
            if (message.discussion_url != null && message.hasOwnProperty("discussion_url"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.discussion_url);
            if (message.show_broadcast != null && message.hasOwnProperty("show_broadcast"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.show_broadcast);
            return writer;
        };
    
        /**
         * Encodes the specified CCuratorPreferences message, length delimited. Does not implicitly {@link CCuratorPreferences.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCuratorPreferences
         * @static
         * @param {ICCuratorPreferences} message CCuratorPreferences message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCuratorPreferences.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCuratorPreferences message from the specified reader or buffer.
         * @function decode
         * @memberof CCuratorPreferences
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCuratorPreferences} CCuratorPreferences
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCuratorPreferences.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCuratorPreferences();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.supported_languages = reader.uint32();
                    break;
                case 2:
                    message.platform_windows = reader.bool();
                    break;
                case 3:
                    message.platform_mac = reader.bool();
                    break;
                case 4:
                    message.platform_linux = reader.bool();
                    break;
                case 5:
                    message.vr_content = reader.bool();
                    break;
                case 6:
                    message.adult_content_violence = reader.bool();
                    break;
                case 7:
                    message.adult_content_sex = reader.bool();
                    break;
                case 8:
                    message.timestamp_updated = reader.uint32();
                    break;
                case 9:
                    if (!(message.tagids_curated && message.tagids_curated.length))
                        message.tagids_curated = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.tagids_curated.push(reader.uint32());
                    } else
                        message.tagids_curated.push(reader.uint32());
                    break;
                case 10:
                    if (!(message.tagids_filtered && message.tagids_filtered.length))
                        message.tagids_filtered = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.tagids_filtered.push(reader.uint32());
                    } else
                        message.tagids_filtered.push(reader.uint32());
                    break;
                case 11:
                    message.website_title = reader.string();
                    break;
                case 12:
                    message.website_url = reader.string();
                    break;
                case 13:
                    message.discussion_url = reader.string();
                    break;
                case 14:
                    message.show_broadcast = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCuratorPreferences message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCuratorPreferences
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCuratorPreferences} CCuratorPreferences
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCuratorPreferences.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCuratorPreferences message.
         * @function verify
         * @memberof CCuratorPreferences
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCuratorPreferences.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.supported_languages != null && message.hasOwnProperty("supported_languages"))
                if (!$util.isInteger(message.supported_languages))
                    return "supported_languages: integer expected";
            if (message.platform_windows != null && message.hasOwnProperty("platform_windows"))
                if (typeof message.platform_windows !== "boolean")
                    return "platform_windows: boolean expected";
            if (message.platform_mac != null && message.hasOwnProperty("platform_mac"))
                if (typeof message.platform_mac !== "boolean")
                    return "platform_mac: boolean expected";
            if (message.platform_linux != null && message.hasOwnProperty("platform_linux"))
                if (typeof message.platform_linux !== "boolean")
                    return "platform_linux: boolean expected";
            if (message.vr_content != null && message.hasOwnProperty("vr_content"))
                if (typeof message.vr_content !== "boolean")
                    return "vr_content: boolean expected";
            if (message.adult_content_violence != null && message.hasOwnProperty("adult_content_violence"))
                if (typeof message.adult_content_violence !== "boolean")
                    return "adult_content_violence: boolean expected";
            if (message.adult_content_sex != null && message.hasOwnProperty("adult_content_sex"))
                if (typeof message.adult_content_sex !== "boolean")
                    return "adult_content_sex: boolean expected";
            if (message.timestamp_updated != null && message.hasOwnProperty("timestamp_updated"))
                if (!$util.isInteger(message.timestamp_updated))
                    return "timestamp_updated: integer expected";
            if (message.tagids_curated != null && message.hasOwnProperty("tagids_curated")) {
                if (!Array.isArray(message.tagids_curated))
                    return "tagids_curated: array expected";
                for (var i = 0; i < message.tagids_curated.length; ++i)
                    if (!$util.isInteger(message.tagids_curated[i]))
                        return "tagids_curated: integer[] expected";
            }
            if (message.tagids_filtered != null && message.hasOwnProperty("tagids_filtered")) {
                if (!Array.isArray(message.tagids_filtered))
                    return "tagids_filtered: array expected";
                for (var i = 0; i < message.tagids_filtered.length; ++i)
                    if (!$util.isInteger(message.tagids_filtered[i]))
                        return "tagids_filtered: integer[] expected";
            }
            if (message.website_title != null && message.hasOwnProperty("website_title"))
                if (!$util.isString(message.website_title))
                    return "website_title: string expected";
            if (message.website_url != null && message.hasOwnProperty("website_url"))
                if (!$util.isString(message.website_url))
                    return "website_url: string expected";
            if (message.discussion_url != null && message.hasOwnProperty("discussion_url"))
                if (!$util.isString(message.discussion_url))
                    return "discussion_url: string expected";
            if (message.show_broadcast != null && message.hasOwnProperty("show_broadcast"))
                if (typeof message.show_broadcast !== "boolean")
                    return "show_broadcast: boolean expected";
            return null;
        };
    
        /**
         * Creates a CCuratorPreferences message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCuratorPreferences
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCuratorPreferences} CCuratorPreferences
         */
        CCuratorPreferences.fromObject = function fromObject(object) {
            if (object instanceof $root.CCuratorPreferences)
                return object;
            var message = new $root.CCuratorPreferences();
            if (object.supported_languages != null)
                message.supported_languages = object.supported_languages >>> 0;
            if (object.platform_windows != null)
                message.platform_windows = Boolean(object.platform_windows);
            if (object.platform_mac != null)
                message.platform_mac = Boolean(object.platform_mac);
            if (object.platform_linux != null)
                message.platform_linux = Boolean(object.platform_linux);
            if (object.vr_content != null)
                message.vr_content = Boolean(object.vr_content);
            if (object.adult_content_violence != null)
                message.adult_content_violence = Boolean(object.adult_content_violence);
            if (object.adult_content_sex != null)
                message.adult_content_sex = Boolean(object.adult_content_sex);
            if (object.timestamp_updated != null)
                message.timestamp_updated = object.timestamp_updated >>> 0;
            if (object.tagids_curated) {
                if (!Array.isArray(object.tagids_curated))
                    throw TypeError(".CCuratorPreferences.tagids_curated: array expected");
                message.tagids_curated = [];
                for (var i = 0; i < object.tagids_curated.length; ++i)
                    message.tagids_curated[i] = object.tagids_curated[i] >>> 0;
            }
            if (object.tagids_filtered) {
                if (!Array.isArray(object.tagids_filtered))
                    throw TypeError(".CCuratorPreferences.tagids_filtered: array expected");
                message.tagids_filtered = [];
                for (var i = 0; i < object.tagids_filtered.length; ++i)
                    message.tagids_filtered[i] = object.tagids_filtered[i] >>> 0;
            }
            if (object.website_title != null)
                message.website_title = String(object.website_title);
            if (object.website_url != null)
                message.website_url = String(object.website_url);
            if (object.discussion_url != null)
                message.discussion_url = String(object.discussion_url);
            if (object.show_broadcast != null)
                message.show_broadcast = Boolean(object.show_broadcast);
            return message;
        };
    
        /**
         * Creates a plain object from a CCuratorPreferences message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCuratorPreferences
         * @static
         * @param {CCuratorPreferences} message CCuratorPreferences
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCuratorPreferences.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.tagids_curated = [];
                object.tagids_filtered = [];
            }
            if (options.defaults) {
                object.supported_languages = 0;
                object.platform_windows = false;
                object.platform_mac = false;
                object.platform_linux = false;
                object.vr_content = false;
                object.adult_content_violence = false;
                object.adult_content_sex = false;
                object.timestamp_updated = 0;
                object.website_title = "";
                object.website_url = "";
                object.discussion_url = "";
                object.show_broadcast = false;
            }
            if (message.supported_languages != null && message.hasOwnProperty("supported_languages"))
                object.supported_languages = message.supported_languages;
            if (message.platform_windows != null && message.hasOwnProperty("platform_windows"))
                object.platform_windows = message.platform_windows;
            if (message.platform_mac != null && message.hasOwnProperty("platform_mac"))
                object.platform_mac = message.platform_mac;
            if (message.platform_linux != null && message.hasOwnProperty("platform_linux"))
                object.platform_linux = message.platform_linux;
            if (message.vr_content != null && message.hasOwnProperty("vr_content"))
                object.vr_content = message.vr_content;
            if (message.adult_content_violence != null && message.hasOwnProperty("adult_content_violence"))
                object.adult_content_violence = message.adult_content_violence;
            if (message.adult_content_sex != null && message.hasOwnProperty("adult_content_sex"))
                object.adult_content_sex = message.adult_content_sex;
            if (message.timestamp_updated != null && message.hasOwnProperty("timestamp_updated"))
                object.timestamp_updated = message.timestamp_updated;
            if (message.tagids_curated && message.tagids_curated.length) {
                object.tagids_curated = [];
                for (var j = 0; j < message.tagids_curated.length; ++j)
                    object.tagids_curated[j] = message.tagids_curated[j];
            }
            if (message.tagids_filtered && message.tagids_filtered.length) {
                object.tagids_filtered = [];
                for (var j = 0; j < message.tagids_filtered.length; ++j)
                    object.tagids_filtered[j] = message.tagids_filtered[j];
            }
            if (message.website_title != null && message.hasOwnProperty("website_title"))
                object.website_title = message.website_title;
            if (message.website_url != null && message.hasOwnProperty("website_url"))
                object.website_url = message.website_url;
            if (message.discussion_url != null && message.hasOwnProperty("discussion_url"))
                object.discussion_url = message.discussion_url;
            if (message.show_broadcast != null && message.hasOwnProperty("show_broadcast"))
                object.show_broadcast = message.show_broadcast;
            return object;
        };
    
        /**
         * Converts this CCuratorPreferences to JSON.
         * @function toJSON
         * @memberof CCuratorPreferences
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCuratorPreferences.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCuratorPreferences;
    })();
    
    $root.CLocalizationToken = (function() {
    
        /**
         * Properties of a CLocalizationToken.
         * @exports ICLocalizationToken
         * @interface ICLocalizationToken
         * @property {number|null} [language] CLocalizationToken language
         * @property {string|null} [localized_string] CLocalizationToken localized_string
         */
    
        /**
         * Constructs a new CLocalizationToken.
         * @exports CLocalizationToken
         * @classdesc Represents a CLocalizationToken.
         * @implements ICLocalizationToken
         * @constructor
         * @param {ICLocalizationToken=} [properties] Properties to set
         */
        function CLocalizationToken(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CLocalizationToken language.
         * @member {number} language
         * @memberof CLocalizationToken
         * @instance
         */
        CLocalizationToken.prototype.language = 0;
    
        /**
         * CLocalizationToken localized_string.
         * @member {string} localized_string
         * @memberof CLocalizationToken
         * @instance
         */
        CLocalizationToken.prototype.localized_string = "";
    
        /**
         * Creates a new CLocalizationToken instance using the specified properties.
         * @function create
         * @memberof CLocalizationToken
         * @static
         * @param {ICLocalizationToken=} [properties] Properties to set
         * @returns {CLocalizationToken} CLocalizationToken instance
         */
        CLocalizationToken.create = function create(properties) {
            return new CLocalizationToken(properties);
        };
    
        /**
         * Encodes the specified CLocalizationToken message. Does not implicitly {@link CLocalizationToken.verify|verify} messages.
         * @function encode
         * @memberof CLocalizationToken
         * @static
         * @param {ICLocalizationToken} message CLocalizationToken message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CLocalizationToken.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.language != null && message.hasOwnProperty("language"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.language);
            if (message.localized_string != null && message.hasOwnProperty("localized_string"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.localized_string);
            return writer;
        };
    
        /**
         * Encodes the specified CLocalizationToken message, length delimited. Does not implicitly {@link CLocalizationToken.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CLocalizationToken
         * @static
         * @param {ICLocalizationToken} message CLocalizationToken message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CLocalizationToken.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CLocalizationToken message from the specified reader or buffer.
         * @function decode
         * @memberof CLocalizationToken
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CLocalizationToken} CLocalizationToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CLocalizationToken.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CLocalizationToken();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.language = reader.uint32();
                    break;
                case 2:
                    message.localized_string = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CLocalizationToken message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CLocalizationToken
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CLocalizationToken} CLocalizationToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CLocalizationToken.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CLocalizationToken message.
         * @function verify
         * @memberof CLocalizationToken
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CLocalizationToken.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.language != null && message.hasOwnProperty("language"))
                if (!$util.isInteger(message.language))
                    return "language: integer expected";
            if (message.localized_string != null && message.hasOwnProperty("localized_string"))
                if (!$util.isString(message.localized_string))
                    return "localized_string: string expected";
            return null;
        };
    
        /**
         * Creates a CLocalizationToken message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CLocalizationToken
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CLocalizationToken} CLocalizationToken
         */
        CLocalizationToken.fromObject = function fromObject(object) {
            if (object instanceof $root.CLocalizationToken)
                return object;
            var message = new $root.CLocalizationToken();
            if (object.language != null)
                message.language = object.language >>> 0;
            if (object.localized_string != null)
                message.localized_string = String(object.localized_string);
            return message;
        };
    
        /**
         * Creates a plain object from a CLocalizationToken message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CLocalizationToken
         * @static
         * @param {CLocalizationToken} message CLocalizationToken
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CLocalizationToken.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.language = 0;
                object.localized_string = "";
            }
            if (message.language != null && message.hasOwnProperty("language"))
                object.language = message.language;
            if (message.localized_string != null && message.hasOwnProperty("localized_string"))
                object.localized_string = message.localized_string;
            return object;
        };
    
        /**
         * Converts this CLocalizationToken to JSON.
         * @function toJSON
         * @memberof CLocalizationToken
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CLocalizationToken.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CLocalizationToken;
    })();
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
    
            protobuf.FileDescriptorSet = (function() {
    
                /**
                 * Properties of a FileDescriptorSet.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorSet
                 * @property {Array.<google.protobuf.IFileDescriptorProto>|null} [file] FileDescriptorSet file
                 */
    
                /**
                 * Constructs a new FileDescriptorSet.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorSet.
                 * @implements IFileDescriptorSet
                 * @constructor
                 * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
                 */
                function FileDescriptorSet(properties) {
                    this.file = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorSet file.
                 * @member {Array.<google.protobuf.IFileDescriptorProto>} file
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 */
                FileDescriptorSet.prototype.file = $util.emptyArray;
    
                /**
                 * Creates a new FileDescriptorSet instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
                 */
                FileDescriptorSet.create = function create(properties) {
                    return new FileDescriptorSet(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.file != null && message.file.length)
                        for (var i = 0; i < message.file.length; ++i)
                            $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorSet message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorSet.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.file && message.file.length))
                                message.file = [];
                            message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorSet.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileDescriptorSet message.
                 * @function verify
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorSet.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.file != null && message.hasOwnProperty("file")) {
                        if (!Array.isArray(message.file))
                            return "file: array expected";
                        for (var i = 0; i < message.file.length; ++i) {
                            var error = $root.google.protobuf.FileDescriptorProto.verify(message.file[i]);
                            if (error)
                                return "file." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 */
                FileDescriptorSet.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileDescriptorSet)
                        return object;
                    var message = new $root.google.protobuf.FileDescriptorSet();
                    if (object.file) {
                        if (!Array.isArray(object.file))
                            throw TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                        message.file = [];
                        for (var i = 0; i < object.file.length; ++i) {
                            if (typeof object.file[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                            message.file[i] = $root.google.protobuf.FileDescriptorProto.fromObject(object.file[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorSet.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.file = [];
                    if (message.file && message.file.length) {
                        object.file = [];
                        for (var j = 0; j < message.file.length; ++j)
                            object.file[j] = $root.google.protobuf.FileDescriptorProto.toObject(message.file[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FileDescriptorSet to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorSet.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return FileDescriptorSet;
            })();
    
            protobuf.FileDescriptorProto = (function() {
    
                /**
                 * Properties of a FileDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorProto
                 * @property {string|null} [name] FileDescriptorProto name
                 * @property {string|null} ["package"] FileDescriptorProto package
                 * @property {Array.<string>|null} [dependency] FileDescriptorProto dependency
                 * @property {Array.<number>|null} [public_dependency] FileDescriptorProto public_dependency
                 * @property {Array.<number>|null} [weak_dependency] FileDescriptorProto weak_dependency
                 * @property {Array.<google.protobuf.IDescriptorProto>|null} [message_type] FileDescriptorProto message_type
                 * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enum_type] FileDescriptorProto enum_type
                 * @property {Array.<google.protobuf.IServiceDescriptorProto>|null} [service] FileDescriptorProto service
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] FileDescriptorProto extension
                 * @property {google.protobuf.IFileOptions|null} [options] FileDescriptorProto options
                 * @property {google.protobuf.ISourceCodeInfo|null} [source_code_info] FileDescriptorProto source_code_info
                 */
    
                /**
                 * Constructs a new FileDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorProto.
                 * @implements IFileDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
                 */
                function FileDescriptorProto(properties) {
                    this.dependency = [];
                    this.public_dependency = [];
                    this.weak_dependency = [];
                    this.message_type = [];
                    this.enum_type = [];
                    this.service = [];
                    this.extension = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.name = "";
    
                /**
                 * FileDescriptorProto package.
                 * @member {string} package
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype["package"] = "";
    
                /**
                 * FileDescriptorProto dependency.
                 * @member {Array.<string>} dependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.dependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto public_dependency.
                 * @member {Array.<number>} public_dependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.public_dependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto weak_dependency.
                 * @member {Array.<number>} weak_dependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.weak_dependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto message_type.
                 * @member {Array.<google.protobuf.IDescriptorProto>} message_type
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.message_type = $util.emptyArray;
    
                /**
                 * FileDescriptorProto enum_type.
                 * @member {Array.<google.protobuf.IEnumDescriptorProto>} enum_type
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.enum_type = $util.emptyArray;
    
                /**
                 * FileDescriptorProto service.
                 * @member {Array.<google.protobuf.IServiceDescriptorProto>} service
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.service = $util.emptyArray;
    
                /**
                 * FileDescriptorProto extension.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * FileDescriptorProto options.
                 * @member {google.protobuf.IFileOptions|null|undefined} options
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.options = null;
    
                /**
                 * FileDescriptorProto source_code_info.
                 * @member {google.protobuf.ISourceCodeInfo|null|undefined} source_code_info
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.source_code_info = null;
    
                /**
                 * Creates a new FileDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
                 */
                FileDescriptorProto.create = function create(properties) {
                    return new FileDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                    if (message.dependency != null && message.dependency.length)
                        for (var i = 0; i < message.dependency.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                    if (message.message_type != null && message.message_type.length)
                        for (var i = 0; i < message.message_type.length; ++i)
                            $root.google.protobuf.DescriptorProto.encode(message.message_type[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.enum_type != null && message.enum_type.length)
                        for (var i = 0; i < message.enum_type.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.encode(message.enum_type[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.service != null && message.service.length)
                        for (var i = 0; i < message.service.length; ++i)
                            $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.extension != null && message.extension.length)
                        for (var i = 0; i < message.extension.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.source_code_info != null && message.hasOwnProperty("source_code_info"))
                        $root.google.protobuf.SourceCodeInfo.encode(message.source_code_info, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.public_dependency != null && message.public_dependency.length)
                        for (var i = 0; i < message.public_dependency.length; ++i)
                            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.public_dependency[i]);
                    if (message.weak_dependency != null && message.weak_dependency.length)
                        for (var i = 0; i < message.weak_dependency.length; ++i)
                            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weak_dependency[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message["package"] = reader.string();
                            break;
                        case 3:
                            if (!(message.dependency && message.dependency.length))
                                message.dependency = [];
                            message.dependency.push(reader.string());
                            break;
                        case 10:
                            if (!(message.public_dependency && message.public_dependency.length))
                                message.public_dependency = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.public_dependency.push(reader.int32());
                            } else
                                message.public_dependency.push(reader.int32());
                            break;
                        case 11:
                            if (!(message.weak_dependency && message.weak_dependency.length))
                                message.weak_dependency = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.weak_dependency.push(reader.int32());
                            } else
                                message.weak_dependency.push(reader.int32());
                            break;
                        case 4:
                            if (!(message.message_type && message.message_type.length))
                                message.message_type = [];
                            message.message_type.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 5:
                            if (!(message.enum_type && message.enum_type.length))
                                message.enum_type = [];
                            message.enum_type.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 6:
                            if (!(message.service && message.service.length))
                                message.service = [];
                            message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 7:
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 8:
                            message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                            break;
                        case 9:
                            message.source_code_info = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        if (!$util.isString(message["package"]))
                            return "package: string expected";
                    if (message.dependency != null && message.hasOwnProperty("dependency")) {
                        if (!Array.isArray(message.dependency))
                            return "dependency: array expected";
                        for (var i = 0; i < message.dependency.length; ++i)
                            if (!$util.isString(message.dependency[i]))
                                return "dependency: string[] expected";
                    }
                    if (message.public_dependency != null && message.hasOwnProperty("public_dependency")) {
                        if (!Array.isArray(message.public_dependency))
                            return "public_dependency: array expected";
                        for (var i = 0; i < message.public_dependency.length; ++i)
                            if (!$util.isInteger(message.public_dependency[i]))
                                return "public_dependency: integer[] expected";
                    }
                    if (message.weak_dependency != null && message.hasOwnProperty("weak_dependency")) {
                        if (!Array.isArray(message.weak_dependency))
                            return "weak_dependency: array expected";
                        for (var i = 0; i < message.weak_dependency.length; ++i)
                            if (!$util.isInteger(message.weak_dependency[i]))
                                return "weak_dependency: integer[] expected";
                    }
                    if (message.message_type != null && message.hasOwnProperty("message_type")) {
                        if (!Array.isArray(message.message_type))
                            return "message_type: array expected";
                        for (var i = 0; i < message.message_type.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.verify(message.message_type[i]);
                            if (error)
                                return "message_type." + error;
                        }
                    }
                    if (message.enum_type != null && message.hasOwnProperty("enum_type")) {
                        if (!Array.isArray(message.enum_type))
                            return "enum_type: array expected";
                        for (var i = 0; i < message.enum_type.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enum_type[i]);
                            if (error)
                                return "enum_type." + error;
                        }
                    }
                    if (message.service != null && message.hasOwnProperty("service")) {
                        if (!Array.isArray(message.service))
                            return "service: array expected";
                        for (var i = 0; i < message.service.length; ++i) {
                            var error = $root.google.protobuf.ServiceDescriptorProto.verify(message.service[i]);
                            if (error)
                                return "service." + error;
                        }
                    }
                    if (message.extension != null && message.hasOwnProperty("extension")) {
                        if (!Array.isArray(message.extension))
                            return "extension: array expected";
                        for (var i = 0; i < message.extension.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.FileOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.source_code_info != null && message.hasOwnProperty("source_code_info")) {
                        var error = $root.google.protobuf.SourceCodeInfo.verify(message.source_code_info);
                        if (error)
                            return "source_code_info." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 */
                FileDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.FileDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object["package"] != null)
                        message["package"] = String(object["package"]);
                    if (object.dependency) {
                        if (!Array.isArray(object.dependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                        message.dependency = [];
                        for (var i = 0; i < object.dependency.length; ++i)
                            message.dependency[i] = String(object.dependency[i]);
                    }
                    if (object.public_dependency) {
                        if (!Array.isArray(object.public_dependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.public_dependency: array expected");
                        message.public_dependency = [];
                        for (var i = 0; i < object.public_dependency.length; ++i)
                            message.public_dependency[i] = object.public_dependency[i] | 0;
                    }
                    if (object.weak_dependency) {
                        if (!Array.isArray(object.weak_dependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.weak_dependency: array expected");
                        message.weak_dependency = [];
                        for (var i = 0; i < object.weak_dependency.length; ++i)
                            message.weak_dependency[i] = object.weak_dependency[i] | 0;
                    }
                    if (object.message_type) {
                        if (!Array.isArray(object.message_type))
                            throw TypeError(".google.protobuf.FileDescriptorProto.message_type: array expected");
                        message.message_type = [];
                        for (var i = 0; i < object.message_type.length; ++i) {
                            if (typeof object.message_type[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.message_type: object expected");
                            message.message_type[i] = $root.google.protobuf.DescriptorProto.fromObject(object.message_type[i]);
                        }
                    }
                    if (object.enum_type) {
                        if (!Array.isArray(object.enum_type))
                            throw TypeError(".google.protobuf.FileDescriptorProto.enum_type: array expected");
                        message.enum_type = [];
                        for (var i = 0; i < object.enum_type.length; ++i) {
                            if (typeof object.enum_type[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.enum_type: object expected");
                            message.enum_type[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enum_type[i]);
                        }
                    }
                    if (object.service) {
                        if (!Array.isArray(object.service))
                            throw TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                        message.service = [];
                        for (var i = 0; i < object.service.length; ++i) {
                            if (typeof object.service[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                            message.service[i] = $root.google.protobuf.ServiceDescriptorProto.fromObject(object.service[i]);
                        }
                    }
                    if (object.extension) {
                        if (!Array.isArray(object.extension))
                            throw TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                        message.extension = [];
                        for (var i = 0; i < object.extension.length; ++i) {
                            if (typeof object.extension[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                            message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.FileOptions.fromObject(object.options);
                    }
                    if (object.source_code_info != null) {
                        if (typeof object.source_code_info !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.source_code_info: object expected");
                        message.source_code_info = $root.google.protobuf.SourceCodeInfo.fromObject(object.source_code_info);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.dependency = [];
                        object.message_type = [];
                        object.enum_type = [];
                        object.service = [];
                        object.extension = [];
                        object.public_dependency = [];
                        object.weak_dependency = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object["package"] = "";
                        object.options = null;
                        object.source_code_info = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        object["package"] = message["package"];
                    if (message.dependency && message.dependency.length) {
                        object.dependency = [];
                        for (var j = 0; j < message.dependency.length; ++j)
                            object.dependency[j] = message.dependency[j];
                    }
                    if (message.message_type && message.message_type.length) {
                        object.message_type = [];
                        for (var j = 0; j < message.message_type.length; ++j)
                            object.message_type[j] = $root.google.protobuf.DescriptorProto.toObject(message.message_type[j], options);
                    }
                    if (message.enum_type && message.enum_type.length) {
                        object.enum_type = [];
                        for (var j = 0; j < message.enum_type.length; ++j)
                            object.enum_type[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enum_type[j], options);
                    }
                    if (message.service && message.service.length) {
                        object.service = [];
                        for (var j = 0; j < message.service.length; ++j)
                            object.service[j] = $root.google.protobuf.ServiceDescriptorProto.toObject(message.service[j], options);
                    }
                    if (message.extension && message.extension.length) {
                        object.extension = [];
                        for (var j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.FileOptions.toObject(message.options, options);
                    if (message.source_code_info != null && message.hasOwnProperty("source_code_info"))
                        object.source_code_info = $root.google.protobuf.SourceCodeInfo.toObject(message.source_code_info, options);
                    if (message.public_dependency && message.public_dependency.length) {
                        object.public_dependency = [];
                        for (var j = 0; j < message.public_dependency.length; ++j)
                            object.public_dependency[j] = message.public_dependency[j];
                    }
                    if (message.weak_dependency && message.weak_dependency.length) {
                        object.weak_dependency = [];
                        for (var j = 0; j < message.weak_dependency.length; ++j)
                            object.weak_dependency[j] = message.weak_dependency[j];
                    }
                    return object;
                };
    
                /**
                 * Converts this FileDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return FileDescriptorProto;
            })();
    
            protobuf.DescriptorProto = (function() {
    
                /**
                 * Properties of a DescriptorProto.
                 * @memberof google.protobuf
                 * @interface IDescriptorProto
                 * @property {string|null} [name] DescriptorProto name
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [field] DescriptorProto field
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] DescriptorProto extension
                 * @property {Array.<google.protobuf.IDescriptorProto>|null} [nested_type] DescriptorProto nested_type
                 * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enum_type] DescriptorProto enum_type
                 * @property {Array.<google.protobuf.DescriptorProto.IExtensionRange>|null} [extension_range] DescriptorProto extension_range
                 * @property {Array.<google.protobuf.IOneofDescriptorProto>|null} [oneof_decl] DescriptorProto oneof_decl
                 * @property {google.protobuf.IMessageOptions|null} [options] DescriptorProto options
                 */
    
                /**
                 * Constructs a new DescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a DescriptorProto.
                 * @implements IDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
                 */
                function DescriptorProto(properties) {
                    this.field = [];
                    this.extension = [];
                    this.nested_type = [];
                    this.enum_type = [];
                    this.extension_range = [];
                    this.oneof_decl = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * DescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.name = "";
    
                /**
                 * DescriptorProto field.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} field
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.field = $util.emptyArray;
    
                /**
                 * DescriptorProto extension.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * DescriptorProto nested_type.
                 * @member {Array.<google.protobuf.IDescriptorProto>} nested_type
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.nested_type = $util.emptyArray;
    
                /**
                 * DescriptorProto enum_type.
                 * @member {Array.<google.protobuf.IEnumDescriptorProto>} enum_type
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.enum_type = $util.emptyArray;
    
                /**
                 * DescriptorProto extension_range.
                 * @member {Array.<google.protobuf.DescriptorProto.IExtensionRange>} extension_range
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.extension_range = $util.emptyArray;
    
                /**
                 * DescriptorProto oneof_decl.
                 * @member {Array.<google.protobuf.IOneofDescriptorProto>} oneof_decl
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.oneof_decl = $util.emptyArray;
    
                /**
                 * DescriptorProto options.
                 * @member {google.protobuf.IMessageOptions|null|undefined} options
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new DescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
                 */
                DescriptorProto.create = function create(properties) {
                    return new DescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.field != null && message.field.length)
                        for (var i = 0; i < message.field.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.nested_type != null && message.nested_type.length)
                        for (var i = 0; i < message.nested_type.length; ++i)
                            $root.google.protobuf.DescriptorProto.encode(message.nested_type[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.enum_type != null && message.enum_type.length)
                        for (var i = 0; i < message.enum_type.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.encode(message.enum_type[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.extension_range != null && message.extension_range.length)
                        for (var i = 0; i < message.extension_range.length; ++i)
                            $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extension_range[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.extension != null && message.extension.length)
                        for (var i = 0; i < message.extension.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.oneof_decl != null && message.oneof_decl.length)
                        for (var i = 0; i < message.oneof_decl.length; ++i)
                            $root.google.protobuf.OneofDescriptorProto.encode(message.oneof_decl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a DescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.field && message.field.length))
                                message.field = [];
                            message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 6:
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            if (!(message.nested_type && message.nested_type.length))
                                message.nested_type = [];
                            message.nested_type.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 4:
                            if (!(message.enum_type && message.enum_type.length))
                                message.enum_type = [];
                            message.enum_type.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 5:
                            if (!(message.extension_range && message.extension_range.length))
                                message.extension_range = [];
                            message.extension_range.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                            break;
                        case 8:
                            if (!(message.oneof_decl && message.oneof_decl.length))
                                message.oneof_decl = [];
                            message.oneof_decl.push($root.google.protobuf.OneofDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 7:
                            message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a DescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.field != null && message.hasOwnProperty("field")) {
                        if (!Array.isArray(message.field))
                            return "field: array expected";
                        for (var i = 0; i < message.field.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.field[i]);
                            if (error)
                                return "field." + error;
                        }
                    }
                    if (message.extension != null && message.hasOwnProperty("extension")) {
                        if (!Array.isArray(message.extension))
                            return "extension: array expected";
                        for (var i = 0; i < message.extension.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.nested_type != null && message.hasOwnProperty("nested_type")) {
                        if (!Array.isArray(message.nested_type))
                            return "nested_type: array expected";
                        for (var i = 0; i < message.nested_type.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.verify(message.nested_type[i]);
                            if (error)
                                return "nested_type." + error;
                        }
                    }
                    if (message.enum_type != null && message.hasOwnProperty("enum_type")) {
                        if (!Array.isArray(message.enum_type))
                            return "enum_type: array expected";
                        for (var i = 0; i < message.enum_type.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enum_type[i]);
                            if (error)
                                return "enum_type." + error;
                        }
                    }
                    if (message.extension_range != null && message.hasOwnProperty("extension_range")) {
                        if (!Array.isArray(message.extension_range))
                            return "extension_range: array expected";
                        for (var i = 0; i < message.extension_range.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.ExtensionRange.verify(message.extension_range[i]);
                            if (error)
                                return "extension_range." + error;
                        }
                    }
                    if (message.oneof_decl != null && message.hasOwnProperty("oneof_decl")) {
                        if (!Array.isArray(message.oneof_decl))
                            return "oneof_decl: array expected";
                        for (var i = 0; i < message.oneof_decl.length; ++i) {
                            var error = $root.google.protobuf.OneofDescriptorProto.verify(message.oneof_decl[i]);
                            if (error)
                                return "oneof_decl." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.MessageOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 */
                DescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.field) {
                        if (!Array.isArray(object.field))
                            throw TypeError(".google.protobuf.DescriptorProto.field: array expected");
                        message.field = [];
                        for (var i = 0; i < object.field.length; ++i) {
                            if (typeof object.field[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.field: object expected");
                            message.field[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.field[i]);
                        }
                    }
                    if (object.extension) {
                        if (!Array.isArray(object.extension))
                            throw TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                        message.extension = [];
                        for (var i = 0; i < object.extension.length; ++i) {
                            if (typeof object.extension[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                            message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                        }
                    }
                    if (object.nested_type) {
                        if (!Array.isArray(object.nested_type))
                            throw TypeError(".google.protobuf.DescriptorProto.nested_type: array expected");
                        message.nested_type = [];
                        for (var i = 0; i < object.nested_type.length; ++i) {
                            if (typeof object.nested_type[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.nested_type: object expected");
                            message.nested_type[i] = $root.google.protobuf.DescriptorProto.fromObject(object.nested_type[i]);
                        }
                    }
                    if (object.enum_type) {
                        if (!Array.isArray(object.enum_type))
                            throw TypeError(".google.protobuf.DescriptorProto.enum_type: array expected");
                        message.enum_type = [];
                        for (var i = 0; i < object.enum_type.length; ++i) {
                            if (typeof object.enum_type[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.enum_type: object expected");
                            message.enum_type[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enum_type[i]);
                        }
                    }
                    if (object.extension_range) {
                        if (!Array.isArray(object.extension_range))
                            throw TypeError(".google.protobuf.DescriptorProto.extension_range: array expected");
                        message.extension_range = [];
                        for (var i = 0; i < object.extension_range.length; ++i) {
                            if (typeof object.extension_range[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.extension_range: object expected");
                            message.extension_range[i] = $root.google.protobuf.DescriptorProto.ExtensionRange.fromObject(object.extension_range[i]);
                        }
                    }
                    if (object.oneof_decl) {
                        if (!Array.isArray(object.oneof_decl))
                            throw TypeError(".google.protobuf.DescriptorProto.oneof_decl: array expected");
                        message.oneof_decl = [];
                        for (var i = 0; i < object.oneof_decl.length; ++i) {
                            if (typeof object.oneof_decl[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.oneof_decl: object expected");
                            message.oneof_decl[i] = $root.google.protobuf.OneofDescriptorProto.fromObject(object.oneof_decl[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.MessageOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.DescriptorProto} message DescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.field = [];
                        object.nested_type = [];
                        object.enum_type = [];
                        object.extension_range = [];
                        object.extension = [];
                        object.oneof_decl = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.field && message.field.length) {
                        object.field = [];
                        for (var j = 0; j < message.field.length; ++j)
                            object.field[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.field[j], options);
                    }
                    if (message.nested_type && message.nested_type.length) {
                        object.nested_type = [];
                        for (var j = 0; j < message.nested_type.length; ++j)
                            object.nested_type[j] = $root.google.protobuf.DescriptorProto.toObject(message.nested_type[j], options);
                    }
                    if (message.enum_type && message.enum_type.length) {
                        object.enum_type = [];
                        for (var j = 0; j < message.enum_type.length; ++j)
                            object.enum_type[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enum_type[j], options);
                    }
                    if (message.extension_range && message.extension_range.length) {
                        object.extension_range = [];
                        for (var j = 0; j < message.extension_range.length; ++j)
                            object.extension_range[j] = $root.google.protobuf.DescriptorProto.ExtensionRange.toObject(message.extension_range[j], options);
                    }
                    if (message.extension && message.extension.length) {
                        object.extension = [];
                        for (var j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.MessageOptions.toObject(message.options, options);
                    if (message.oneof_decl && message.oneof_decl.length) {
                        object.oneof_decl = [];
                        for (var j = 0; j < message.oneof_decl.length; ++j)
                            object.oneof_decl[j] = $root.google.protobuf.OneofDescriptorProto.toObject(message.oneof_decl[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this DescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                DescriptorProto.ExtensionRange = (function() {
    
                    /**
                     * Properties of an ExtensionRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @interface IExtensionRange
                     * @property {number|null} [start] ExtensionRange start
                     * @property {number|null} [end] ExtensionRange end
                     */
    
                    /**
                     * Constructs a new ExtensionRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @classdesc Represents an ExtensionRange.
                     * @implements IExtensionRange
                     * @constructor
                     * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                     */
                    function ExtensionRange(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ExtensionRange start.
                     * @member {number} start
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.start = 0;
    
                    /**
                     * ExtensionRange end.
                     * @member {number} end
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.end = 0;
    
                    /**
                     * Creates a new ExtensionRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                     */
                    ExtensionRange.create = function create(properties) {
                        return new ExtensionRange(properties);
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start != null && message.hasOwnProperty("start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && message.hasOwnProperty("end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an ExtensionRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtensionRange.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.start = reader.int32();
                                break;
                            case 2:
                                message.end = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtensionRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an ExtensionRange message.
                     * @function verify
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ExtensionRange.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.start != null && message.hasOwnProperty("start"))
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     */
                    ExtensionRange.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                            return object;
                        var message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ExtensionRange.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                        }
                        if (message.start != null && message.hasOwnProperty("start"))
                            object.start = message.start;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this ExtensionRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ExtensionRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ExtensionRange;
                })();
    
                return DescriptorProto;
            })();
    
            protobuf.FieldDescriptorProto = (function() {
    
                /**
                 * Properties of a FieldDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IFieldDescriptorProto
                 * @property {string|null} [name] FieldDescriptorProto name
                 * @property {number|null} [number] FieldDescriptorProto number
                 * @property {google.protobuf.FieldDescriptorProto.Label|null} [label] FieldDescriptorProto label
                 * @property {google.protobuf.FieldDescriptorProto.Type|null} [type] FieldDescriptorProto type
                 * @property {string|null} [type_name] FieldDescriptorProto type_name
                 * @property {string|null} [extendee] FieldDescriptorProto extendee
                 * @property {string|null} [default_value] FieldDescriptorProto default_value
                 * @property {number|null} [oneof_index] FieldDescriptorProto oneof_index
                 * @property {google.protobuf.IFieldOptions|null} [options] FieldDescriptorProto options
                 */
    
                /**
                 * Constructs a new FieldDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldDescriptorProto.
                 * @implements IFieldDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
                 */
                function FieldDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.name = "";
    
                /**
                 * FieldDescriptorProto number.
                 * @member {number} number
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.number = 0;
    
                /**
                 * FieldDescriptorProto label.
                 * @member {google.protobuf.FieldDescriptorProto.Label} label
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.label = 1;
    
                /**
                 * FieldDescriptorProto type.
                 * @member {google.protobuf.FieldDescriptorProto.Type} type
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.type = 1;
    
                /**
                 * FieldDescriptorProto type_name.
                 * @member {string} type_name
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.type_name = "";
    
                /**
                 * FieldDescriptorProto extendee.
                 * @member {string} extendee
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.extendee = "";
    
                /**
                 * FieldDescriptorProto default_value.
                 * @member {string} default_value
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.default_value = "";
    
                /**
                 * FieldDescriptorProto oneof_index.
                 * @member {number} oneof_index
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.oneof_index = 0;
    
                /**
                 * FieldDescriptorProto options.
                 * @member {google.protobuf.IFieldOptions|null|undefined} options
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new FieldDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
                 */
                FieldDescriptorProto.create = function create(properties) {
                    return new FieldDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                    if (message.number != null && message.hasOwnProperty("number"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                    if (message.label != null && message.hasOwnProperty("label"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                    if (message.type_name != null && message.hasOwnProperty("type_name"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.type_name);
                    if (message.default_value != null && message.hasOwnProperty("default_value"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.default_value);
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.oneof_index != null && message.hasOwnProperty("oneof_index"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneof_index);
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 3:
                            message.number = reader.int32();
                            break;
                        case 4:
                            message.label = reader.int32();
                            break;
                        case 5:
                            message.type = reader.int32();
                            break;
                        case 6:
                            message.type_name = reader.string();
                            break;
                        case 2:
                            message.extendee = reader.string();
                            break;
                        case 7:
                            message.default_value = reader.string();
                            break;
                        case 9:
                            message.oneof_index = reader.int32();
                            break;
                        case 8:
                            message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.label != null && message.hasOwnProperty("label"))
                        switch (message.label) {
                        default:
                            return "label: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                        case 16:
                        case 17:
                        case 18:
                            break;
                        }
                    if (message.type_name != null && message.hasOwnProperty("type_name"))
                        if (!$util.isString(message.type_name))
                            return "type_name: string expected";
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        if (!$util.isString(message.extendee))
                            return "extendee: string expected";
                    if (message.default_value != null && message.hasOwnProperty("default_value"))
                        if (!$util.isString(message.default_value))
                            return "default_value: string expected";
                    if (message.oneof_index != null && message.hasOwnProperty("oneof_index"))
                        if (!$util.isInteger(message.oneof_index))
                            return "oneof_index: integer expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.FieldOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 */
                FieldDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.FieldDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.number != null)
                        message.number = object.number | 0;
                    switch (object.label) {
                    case "LABEL_OPTIONAL":
                    case 1:
                        message.label = 1;
                        break;
                    case "LABEL_REQUIRED":
                    case 2:
                        message.label = 2;
                        break;
                    case "LABEL_REPEATED":
                    case 3:
                        message.label = 3;
                        break;
                    }
                    switch (object.type) {
                    case "TYPE_DOUBLE":
                    case 1:
                        message.type = 1;
                        break;
                    case "TYPE_FLOAT":
                    case 2:
                        message.type = 2;
                        break;
                    case "TYPE_INT64":
                    case 3:
                        message.type = 3;
                        break;
                    case "TYPE_UINT64":
                    case 4:
                        message.type = 4;
                        break;
                    case "TYPE_INT32":
                    case 5:
                        message.type = 5;
                        break;
                    case "TYPE_FIXED64":
                    case 6:
                        message.type = 6;
                        break;
                    case "TYPE_FIXED32":
                    case 7:
                        message.type = 7;
                        break;
                    case "TYPE_BOOL":
                    case 8:
                        message.type = 8;
                        break;
                    case "TYPE_STRING":
                    case 9:
                        message.type = 9;
                        break;
                    case "TYPE_GROUP":
                    case 10:
                        message.type = 10;
                        break;
                    case "TYPE_MESSAGE":
                    case 11:
                        message.type = 11;
                        break;
                    case "TYPE_BYTES":
                    case 12:
                        message.type = 12;
                        break;
                    case "TYPE_UINT32":
                    case 13:
                        message.type = 13;
                        break;
                    case "TYPE_ENUM":
                    case 14:
                        message.type = 14;
                        break;
                    case "TYPE_SFIXED32":
                    case 15:
                        message.type = 15;
                        break;
                    case "TYPE_SFIXED64":
                    case 16:
                        message.type = 16;
                        break;
                    case "TYPE_SINT32":
                    case 17:
                        message.type = 17;
                        break;
                    case "TYPE_SINT64":
                    case 18:
                        message.type = 18;
                        break;
                    }
                    if (object.type_name != null)
                        message.type_name = String(object.type_name);
                    if (object.extendee != null)
                        message.extendee = String(object.extendee);
                    if (object.default_value != null)
                        message.default_value = String(object.default_value);
                    if (object.oneof_index != null)
                        message.oneof_index = object.oneof_index | 0;
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.FieldOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.extendee = "";
                        object.number = 0;
                        object.label = options.enums === String ? "LABEL_OPTIONAL" : 1;
                        object.type = options.enums === String ? "TYPE_DOUBLE" : 1;
                        object.type_name = "";
                        object.default_value = "";
                        object.options = null;
                        object.oneof_index = 0;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        object.extendee = message.extendee;
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.label != null && message.hasOwnProperty("label"))
                        object.label = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
                    if (message.type_name != null && message.hasOwnProperty("type_name"))
                        object.type_name = message.type_name;
                    if (message.default_value != null && message.hasOwnProperty("default_value"))
                        object.default_value = message.default_value;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.FieldOptions.toObject(message.options, options);
                    if (message.oneof_index != null && message.hasOwnProperty("oneof_index"))
                        object.oneof_index = message.oneof_index;
                    return object;
                };
    
                /**
                 * Converts this FieldDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Type enum.
                 * @name google.protobuf.FieldDescriptorProto.Type
                 * @enum {string}
                 * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
                 * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
                 * @property {number} TYPE_INT64=3 TYPE_INT64 value
                 * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
                 * @property {number} TYPE_INT32=5 TYPE_INT32 value
                 * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
                 * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
                 * @property {number} TYPE_BOOL=8 TYPE_BOOL value
                 * @property {number} TYPE_STRING=9 TYPE_STRING value
                 * @property {number} TYPE_GROUP=10 TYPE_GROUP value
                 * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
                 * @property {number} TYPE_BYTES=12 TYPE_BYTES value
                 * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
                 * @property {number} TYPE_ENUM=14 TYPE_ENUM value
                 * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
                 * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
                 * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
                 * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
                 */
                FieldDescriptorProto.Type = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                    values[valuesById[2] = "TYPE_FLOAT"] = 2;
                    values[valuesById[3] = "TYPE_INT64"] = 3;
                    values[valuesById[4] = "TYPE_UINT64"] = 4;
                    values[valuesById[5] = "TYPE_INT32"] = 5;
                    values[valuesById[6] = "TYPE_FIXED64"] = 6;
                    values[valuesById[7] = "TYPE_FIXED32"] = 7;
                    values[valuesById[8] = "TYPE_BOOL"] = 8;
                    values[valuesById[9] = "TYPE_STRING"] = 9;
                    values[valuesById[10] = "TYPE_GROUP"] = 10;
                    values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                    values[valuesById[12] = "TYPE_BYTES"] = 12;
                    values[valuesById[13] = "TYPE_UINT32"] = 13;
                    values[valuesById[14] = "TYPE_ENUM"] = 14;
                    values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                    values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                    values[valuesById[17] = "TYPE_SINT32"] = 17;
                    values[valuesById[18] = "TYPE_SINT64"] = 18;
                    return values;
                })();
    
                /**
                 * Label enum.
                 * @name google.protobuf.FieldDescriptorProto.Label
                 * @enum {string}
                 * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
                 * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
                 * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
                 */
                FieldDescriptorProto.Label = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                    values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                    values[valuesById[3] = "LABEL_REPEATED"] = 3;
                    return values;
                })();
    
                return FieldDescriptorProto;
            })();
    
            protobuf.OneofDescriptorProto = (function() {
    
                /**
                 * Properties of an OneofDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IOneofDescriptorProto
                 * @property {string|null} [name] OneofDescriptorProto name
                 */
    
                /**
                 * Constructs a new OneofDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an OneofDescriptorProto.
                 * @implements IOneofDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
                 */
                function OneofDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * OneofDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 */
                OneofDescriptorProto.prototype.name = "";
    
                /**
                 * Creates a new OneofDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto instance
                 */
                OneofDescriptorProto.create = function create(properties) {
                    return new OneofDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    return writer;
                };
    
                /**
                 * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an OneofDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an OneofDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OneofDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    return null;
                };
    
                /**
                 * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 */
                OneofDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.OneofDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.OneofDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    return message;
                };
    
                /**
                 * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.OneofDescriptorProto} message OneofDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OneofDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.name = "";
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    return object;
                };
    
                /**
                 * Converts this OneofDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OneofDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return OneofDescriptorProto;
            })();
    
            protobuf.EnumDescriptorProto = (function() {
    
                /**
                 * Properties of an EnumDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IEnumDescriptorProto
                 * @property {string|null} [name] EnumDescriptorProto name
                 * @property {Array.<google.protobuf.IEnumValueDescriptorProto>|null} [value] EnumDescriptorProto value
                 * @property {google.protobuf.IEnumOptions|null} [options] EnumDescriptorProto options
                 */
    
                /**
                 * Constructs a new EnumDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumDescriptorProto.
                 * @implements IEnumDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
                 */
                function EnumDescriptorProto(properties) {
                    this.value = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.name = "";
    
                /**
                 * EnumDescriptorProto value.
                 * @member {Array.<google.protobuf.IEnumValueDescriptorProto>} value
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.value = $util.emptyArray;
    
                /**
                 * EnumDescriptorProto options.
                 * @member {google.protobuf.IEnumOptions|null|undefined} options
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new EnumDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
                 */
                EnumDescriptorProto.create = function create(properties) {
                    return new EnumDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.value != null && message.value.length)
                        for (var i = 0; i < message.value.length; ++i)
                            $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.value && message.value.length))
                                message.value = [];
                            message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.value != null && message.hasOwnProperty("value")) {
                        if (!Array.isArray(message.value))
                            return "value: array expected";
                        for (var i = 0; i < message.value.length; ++i) {
                            var error = $root.google.protobuf.EnumValueDescriptorProto.verify(message.value[i]);
                            if (error)
                                return "value." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.EnumOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 */
                EnumDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.EnumDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.value) {
                        if (!Array.isArray(object.value))
                            throw TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                        message.value = [];
                        for (var i = 0; i < object.value.length; ++i) {
                            if (typeof object.value[i] !== "object")
                                throw TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                            message.value[i] = $root.google.protobuf.EnumValueDescriptorProto.fromObject(object.value[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.EnumOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.value = [];
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.value && message.value.length) {
                        object.value = [];
                        for (var j = 0; j < message.value.length; ++j)
                            object.value[j] = $root.google.protobuf.EnumValueDescriptorProto.toObject(message.value[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.EnumOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this EnumDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumDescriptorProto;
            })();
    
            protobuf.EnumValueDescriptorProto = (function() {
    
                /**
                 * Properties of an EnumValueDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IEnumValueDescriptorProto
                 * @property {string|null} [name] EnumValueDescriptorProto name
                 * @property {number|null} [number] EnumValueDescriptorProto number
                 * @property {google.protobuf.IEnumValueOptions|null} [options] EnumValueDescriptorProto options
                 */
    
                /**
                 * Constructs a new EnumValueDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumValueDescriptorProto.
                 * @implements IEnumValueDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
                 */
                function EnumValueDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumValueDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.name = "";
    
                /**
                 * EnumValueDescriptorProto number.
                 * @member {number} number
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.number = 0;
    
                /**
                 * EnumValueDescriptorProto options.
                 * @member {google.protobuf.IEnumValueOptions|null|undefined} options
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new EnumValueDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
                 */
                EnumValueDescriptorProto.create = function create(properties) {
                    return new EnumValueDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.number != null && message.hasOwnProperty("number"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.number = reader.int32();
                            break;
                        case 3:
                            message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumValueDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.EnumValueOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 */
                EnumValueDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.EnumValueDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.number != null)
                        message.number = object.number | 0;
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.EnumValueOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.number = 0;
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.EnumValueOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this EnumValueDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumValueDescriptorProto;
            })();
    
            protobuf.ServiceDescriptorProto = (function() {
    
                /**
                 * Properties of a ServiceDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IServiceDescriptorProto
                 * @property {string|null} [name] ServiceDescriptorProto name
                 * @property {Array.<google.protobuf.IMethodDescriptorProto>|null} [method] ServiceDescriptorProto method
                 * @property {google.protobuf.IServiceOptions|null} [options] ServiceDescriptorProto options
                 */
    
                /**
                 * Constructs a new ServiceDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a ServiceDescriptorProto.
                 * @implements IServiceDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
                 */
                function ServiceDescriptorProto(properties) {
                    this.method = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ServiceDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.name = "";
    
                /**
                 * ServiceDescriptorProto method.
                 * @member {Array.<google.protobuf.IMethodDescriptorProto>} method
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.method = $util.emptyArray;
    
                /**
                 * ServiceDescriptorProto options.
                 * @member {google.protobuf.IServiceOptions|null|undefined} options
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new ServiceDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
                 */
                ServiceDescriptorProto.create = function create(properties) {
                    return new ServiceDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.method != null && message.method.length)
                        for (var i = 0; i < message.method.length; ++i)
                            $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.method && message.method.length))
                                message.method = [];
                            message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ServiceDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServiceDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.method != null && message.hasOwnProperty("method")) {
                        if (!Array.isArray(message.method))
                            return "method: array expected";
                        for (var i = 0; i < message.method.length; ++i) {
                            var error = $root.google.protobuf.MethodDescriptorProto.verify(message.method[i]);
                            if (error)
                                return "method." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.ServiceOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 */
                ServiceDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.ServiceDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.method) {
                        if (!Array.isArray(object.method))
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                        message.method = [];
                        for (var i = 0; i < object.method.length; ++i) {
                            if (typeof object.method[i] !== "object")
                                throw TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                            message.method[i] = $root.google.protobuf.MethodDescriptorProto.fromObject(object.method[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.ServiceOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.method = [];
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.method && message.method.length) {
                        object.method = [];
                        for (var j = 0; j < message.method.length; ++j)
                            object.method[j] = $root.google.protobuf.MethodDescriptorProto.toObject(message.method[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.ServiceOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this ServiceDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ServiceDescriptorProto;
            })();
    
            protobuf.MethodDescriptorProto = (function() {
    
                /**
                 * Properties of a MethodDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IMethodDescriptorProto
                 * @property {string|null} [name] MethodDescriptorProto name
                 * @property {string|null} [input_type] MethodDescriptorProto input_type
                 * @property {string|null} [output_type] MethodDescriptorProto output_type
                 * @property {google.protobuf.IMethodOptions|null} [options] MethodDescriptorProto options
                 */
    
                /**
                 * Constructs a new MethodDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a MethodDescriptorProto.
                 * @implements IMethodDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
                 */
                function MethodDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.name = "";
    
                /**
                 * MethodDescriptorProto input_type.
                 * @member {string} input_type
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.input_type = "";
    
                /**
                 * MethodDescriptorProto output_type.
                 * @member {string} output_type
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.output_type = "";
    
                /**
                 * MethodDescriptorProto options.
                 * @member {google.protobuf.IMethodOptions|null|undefined} options
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new MethodDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
                 */
                MethodDescriptorProto.create = function create(properties) {
                    return new MethodDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.input_type != null && message.hasOwnProperty("input_type"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.input_type);
                    if (message.output_type != null && message.hasOwnProperty("output_type"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.output_type);
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.input_type = reader.string();
                            break;
                        case 3:
                            message.output_type = reader.string();
                            break;
                        case 4:
                            message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.input_type != null && message.hasOwnProperty("input_type"))
                        if (!$util.isString(message.input_type))
                            return "input_type: string expected";
                    if (message.output_type != null && message.hasOwnProperty("output_type"))
                        if (!$util.isString(message.output_type))
                            return "output_type: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.MethodOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 */
                MethodDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.MethodDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.input_type != null)
                        message.input_type = String(object.input_type);
                    if (object.output_type != null)
                        message.output_type = String(object.output_type);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.MethodOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.input_type = "";
                        object.output_type = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.input_type != null && message.hasOwnProperty("input_type"))
                        object.input_type = message.input_type;
                    if (message.output_type != null && message.hasOwnProperty("output_type"))
                        object.output_type = message.output_type;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this MethodDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return MethodDescriptorProto;
            })();
    
            protobuf.FileOptions = (function() {
    
                /**
                 * Properties of a FileOptions.
                 * @memberof google.protobuf
                 * @interface IFileOptions
                 * @property {string|null} [java_package] FileOptions java_package
                 * @property {string|null} [java_outer_classname] FileOptions java_outer_classname
                 * @property {boolean|null} [java_multiple_files] FileOptions java_multiple_files
                 * @property {boolean|null} [java_generate_equals_and_hash] FileOptions java_generate_equals_and_hash
                 * @property {boolean|null} [java_string_check_utf8] FileOptions java_string_check_utf8
                 * @property {google.protobuf.FileOptions.OptimizeMode|null} [optimize_for] FileOptions optimize_for
                 * @property {string|null} [go_package] FileOptions go_package
                 * @property {boolean|null} [cc_generic_services] FileOptions cc_generic_services
                 * @property {boolean|null} [java_generic_services] FileOptions java_generic_services
                 * @property {boolean|null} [py_generic_services] FileOptions py_generic_services
                 * @property {boolean|null} [deprecated] FileOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] FileOptions uninterpreted_option
                 * @property {boolean|null} [".force_php_generation"] FileOptions .force_php_generation
                 */
    
                /**
                 * Constructs a new FileOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileOptions.
                 * @implements IFileOptions
                 * @constructor
                 * @param {google.protobuf.IFileOptions=} [properties] Properties to set
                 */
                function FileOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileOptions java_package.
                 * @member {string} java_package
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_package = "";
    
                /**
                 * FileOptions java_outer_classname.
                 * @member {string} java_outer_classname
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_outer_classname = "";
    
                /**
                 * FileOptions java_multiple_files.
                 * @member {boolean} java_multiple_files
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_multiple_files = false;
    
                /**
                 * FileOptions java_generate_equals_and_hash.
                 * @member {boolean} java_generate_equals_and_hash
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_generate_equals_and_hash = false;
    
                /**
                 * FileOptions java_string_check_utf8.
                 * @member {boolean} java_string_check_utf8
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_string_check_utf8 = false;
    
                /**
                 * FileOptions optimize_for.
                 * @member {google.protobuf.FileOptions.OptimizeMode} optimize_for
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.optimize_for = 1;
    
                /**
                 * FileOptions go_package.
                 * @member {string} go_package
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.go_package = "";
    
                /**
                 * FileOptions cc_generic_services.
                 * @member {boolean} cc_generic_services
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.cc_generic_services = false;
    
                /**
                 * FileOptions java_generic_services.
                 * @member {boolean} java_generic_services
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_generic_services = false;
    
                /**
                 * FileOptions py_generic_services.
                 * @member {boolean} py_generic_services
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.py_generic_services = false;
    
                /**
                 * FileOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.deprecated = false;
    
                /**
                 * FileOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * FileOptions .force_php_generation.
                 * @member {boolean} .force_php_generation
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype[".force_php_generation"] = false;
    
                /**
                 * Creates a new FileOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions=} [properties] Properties to set
                 * @returns {google.protobuf.FileOptions} FileOptions instance
                 */
                FileOptions.create = function create(properties) {
                    return new FileOptions(properties);
                };
    
                /**
                 * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.java_package != null && message.hasOwnProperty("java_package"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.java_package);
                    if (message.java_outer_classname != null && message.hasOwnProperty("java_outer_classname"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.java_outer_classname);
                    if (message.optimize_for != null && message.hasOwnProperty("optimize_for"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimize_for);
                    if (message.java_multiple_files != null && message.hasOwnProperty("java_multiple_files"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.java_multiple_files);
                    if (message.go_package != null && message.hasOwnProperty("go_package"))
                        writer.uint32(/* id 11, wireType 2 =*/90).string(message.go_package);
                    if (message.cc_generic_services != null && message.hasOwnProperty("cc_generic_services"))
                        writer.uint32(/* id 16, wireType 0 =*/128).bool(message.cc_generic_services);
                    if (message.java_generic_services != null && message.hasOwnProperty("java_generic_services"))
                        writer.uint32(/* id 17, wireType 0 =*/136).bool(message.java_generic_services);
                    if (message.py_generic_services != null && message.hasOwnProperty("py_generic_services"))
                        writer.uint32(/* id 18, wireType 0 =*/144).bool(message.py_generic_services);
                    if (message.java_generate_equals_and_hash != null && message.hasOwnProperty("java_generate_equals_and_hash"))
                        writer.uint32(/* id 20, wireType 0 =*/160).bool(message.java_generate_equals_and_hash);
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
                    if (message.java_string_check_utf8 != null && message.hasOwnProperty("java_string_check_utf8"))
                        writer.uint32(/* id 27, wireType 0 =*/216).bool(message.java_string_check_utf8);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".force_php_generation"] != null && message.hasOwnProperty(".force_php_generation"))
                        writer.uint32(/* id 50000, wireType 0 =*/400000).bool(message[".force_php_generation"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileOptions} FileOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.java_package = reader.string();
                            break;
                        case 8:
                            message.java_outer_classname = reader.string();
                            break;
                        case 10:
                            message.java_multiple_files = reader.bool();
                            break;
                        case 20:
                            message.java_generate_equals_and_hash = reader.bool();
                            break;
                        case 27:
                            message.java_string_check_utf8 = reader.bool();
                            break;
                        case 9:
                            message.optimize_for = reader.int32();
                            break;
                        case 11:
                            message.go_package = reader.string();
                            break;
                        case 16:
                            message.cc_generic_services = reader.bool();
                            break;
                        case 17:
                            message.java_generic_services = reader.bool();
                            break;
                        case 18:
                            message.py_generic_services = reader.bool();
                            break;
                        case 23:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 50000:
                            message[".force_php_generation"] = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileOptions} FileOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileOptions message.
                 * @function verify
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.java_package != null && message.hasOwnProperty("java_package"))
                        if (!$util.isString(message.java_package))
                            return "java_package: string expected";
                    if (message.java_outer_classname != null && message.hasOwnProperty("java_outer_classname"))
                        if (!$util.isString(message.java_outer_classname))
                            return "java_outer_classname: string expected";
                    if (message.java_multiple_files != null && message.hasOwnProperty("java_multiple_files"))
                        if (typeof message.java_multiple_files !== "boolean")
                            return "java_multiple_files: boolean expected";
                    if (message.java_generate_equals_and_hash != null && message.hasOwnProperty("java_generate_equals_and_hash"))
                        if (typeof message.java_generate_equals_and_hash !== "boolean")
                            return "java_generate_equals_and_hash: boolean expected";
                    if (message.java_string_check_utf8 != null && message.hasOwnProperty("java_string_check_utf8"))
                        if (typeof message.java_string_check_utf8 !== "boolean")
                            return "java_string_check_utf8: boolean expected";
                    if (message.optimize_for != null && message.hasOwnProperty("optimize_for"))
                        switch (message.optimize_for) {
                        default:
                            return "optimize_for: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.go_package != null && message.hasOwnProperty("go_package"))
                        if (!$util.isString(message.go_package))
                            return "go_package: string expected";
                    if (message.cc_generic_services != null && message.hasOwnProperty("cc_generic_services"))
                        if (typeof message.cc_generic_services !== "boolean")
                            return "cc_generic_services: boolean expected";
                    if (message.java_generic_services != null && message.hasOwnProperty("java_generic_services"))
                        if (typeof message.java_generic_services !== "boolean")
                            return "java_generic_services: boolean expected";
                    if (message.py_generic_services != null && message.hasOwnProperty("py_generic_services"))
                        if (typeof message.py_generic_services !== "boolean")
                            return "py_generic_services: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    if (message[".force_php_generation"] != null && message.hasOwnProperty(".force_php_generation"))
                        if (typeof message[".force_php_generation"] !== "boolean")
                            return ".force_php_generation: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileOptions} FileOptions
                 */
                FileOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileOptions)
                        return object;
                    var message = new $root.google.protobuf.FileOptions();
                    if (object.java_package != null)
                        message.java_package = String(object.java_package);
                    if (object.java_outer_classname != null)
                        message.java_outer_classname = String(object.java_outer_classname);
                    if (object.java_multiple_files != null)
                        message.java_multiple_files = Boolean(object.java_multiple_files);
                    if (object.java_generate_equals_and_hash != null)
                        message.java_generate_equals_and_hash = Boolean(object.java_generate_equals_and_hash);
                    if (object.java_string_check_utf8 != null)
                        message.java_string_check_utf8 = Boolean(object.java_string_check_utf8);
                    switch (object.optimize_for) {
                    case "SPEED":
                    case 1:
                        message.optimize_for = 1;
                        break;
                    case "CODE_SIZE":
                    case 2:
                        message.optimize_for = 2;
                        break;
                    case "LITE_RUNTIME":
                    case 3:
                        message.optimize_for = 3;
                        break;
                    }
                    if (object.go_package != null)
                        message.go_package = String(object.go_package);
                    if (object.cc_generic_services != null)
                        message.cc_generic_services = Boolean(object.cc_generic_services);
                    if (object.java_generic_services != null)
                        message.java_generic_services = Boolean(object.java_generic_services);
                    if (object.py_generic_services != null)
                        message.py_generic_services = Boolean(object.py_generic_services);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.FileOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.FileOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    if (object[".force_php_generation"] != null)
                        message[".force_php_generation"] = Boolean(object[".force_php_generation"]);
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.FileOptions} message FileOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object.java_package = "";
                        object.java_outer_classname = "";
                        object.optimize_for = options.enums === String ? "SPEED" : 1;
                        object.java_multiple_files = false;
                        object.go_package = "";
                        object.cc_generic_services = false;
                        object.java_generic_services = false;
                        object.py_generic_services = false;
                        object.java_generate_equals_and_hash = false;
                        object.deprecated = false;
                        object.java_string_check_utf8 = false;
                        object[".force_php_generation"] = false;
                    }
                    if (message.java_package != null && message.hasOwnProperty("java_package"))
                        object.java_package = message.java_package;
                    if (message.java_outer_classname != null && message.hasOwnProperty("java_outer_classname"))
                        object.java_outer_classname = message.java_outer_classname;
                    if (message.optimize_for != null && message.hasOwnProperty("optimize_for"))
                        object.optimize_for = options.enums === String ? $root.google.protobuf.FileOptions.OptimizeMode[message.optimize_for] : message.optimize_for;
                    if (message.java_multiple_files != null && message.hasOwnProperty("java_multiple_files"))
                        object.java_multiple_files = message.java_multiple_files;
                    if (message.go_package != null && message.hasOwnProperty("go_package"))
                        object.go_package = message.go_package;
                    if (message.cc_generic_services != null && message.hasOwnProperty("cc_generic_services"))
                        object.cc_generic_services = message.cc_generic_services;
                    if (message.java_generic_services != null && message.hasOwnProperty("java_generic_services"))
                        object.java_generic_services = message.java_generic_services;
                    if (message.py_generic_services != null && message.hasOwnProperty("py_generic_services"))
                        object.py_generic_services = message.py_generic_services;
                    if (message.java_generate_equals_and_hash != null && message.hasOwnProperty("java_generate_equals_and_hash"))
                        object.java_generate_equals_and_hash = message.java_generate_equals_and_hash;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.java_string_check_utf8 != null && message.hasOwnProperty("java_string_check_utf8"))
                        object.java_string_check_utf8 = message.java_string_check_utf8;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    if (message[".force_php_generation"] != null && message.hasOwnProperty(".force_php_generation"))
                        object[".force_php_generation"] = message[".force_php_generation"];
                    return object;
                };
    
                /**
                 * Converts this FileOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * OptimizeMode enum.
                 * @name google.protobuf.FileOptions.OptimizeMode
                 * @enum {string}
                 * @property {number} SPEED=1 SPEED value
                 * @property {number} CODE_SIZE=2 CODE_SIZE value
                 * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
                 */
                FileOptions.OptimizeMode = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "SPEED"] = 1;
                    values[valuesById[2] = "CODE_SIZE"] = 2;
                    values[valuesById[3] = "LITE_RUNTIME"] = 3;
                    return values;
                })();
    
                return FileOptions;
            })();
    
            protobuf.MessageOptions = (function() {
    
                /**
                 * Properties of a MessageOptions.
                 * @memberof google.protobuf
                 * @interface IMessageOptions
                 * @property {boolean|null} [message_set_wire_format] MessageOptions message_set_wire_format
                 * @property {boolean|null} [no_standard_descriptor_accessor] MessageOptions no_standard_descriptor_accessor
                 * @property {boolean|null} [deprecated] MessageOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] MessageOptions uninterpreted_option
                 * @property {number|null} [".msgpool_soft_limit"] MessageOptions .msgpool_soft_limit
                 * @property {number|null} [".msgpool_hard_limit"] MessageOptions .msgpool_hard_limit
                 */
    
                /**
                 * Constructs a new MessageOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a MessageOptions.
                 * @implements IMessageOptions
                 * @constructor
                 * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
                 */
                function MessageOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MessageOptions message_set_wire_format.
                 * @member {boolean} message_set_wire_format
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.message_set_wire_format = false;
    
                /**
                 * MessageOptions no_standard_descriptor_accessor.
                 * @member {boolean} no_standard_descriptor_accessor
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.no_standard_descriptor_accessor = false;
    
                /**
                 * MessageOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.deprecated = false;
    
                /**
                 * MessageOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * MessageOptions .msgpool_soft_limit.
                 * @member {number} .msgpool_soft_limit
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype[".msgpool_soft_limit"] = 32;
    
                /**
                 * MessageOptions .msgpool_hard_limit.
                 * @member {number} .msgpool_hard_limit
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype[".msgpool_hard_limit"] = 384;
    
                /**
                 * Creates a new MessageOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
                 * @returns {google.protobuf.MessageOptions} MessageOptions instance
                 */
                MessageOptions.create = function create(properties) {
                    return new MessageOptions(properties);
                };
    
                /**
                 * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.message_set_wire_format != null && message.hasOwnProperty("message_set_wire_format"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.message_set_wire_format);
                    if (message.no_standard_descriptor_accessor != null && message.hasOwnProperty("no_standard_descriptor_accessor"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.no_standard_descriptor_accessor);
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".msgpool_soft_limit"] != null && message.hasOwnProperty(".msgpool_soft_limit"))
                        writer.uint32(/* id 50000, wireType 0 =*/400000).int32(message[".msgpool_soft_limit"]);
                    if (message[".msgpool_hard_limit"] != null && message.hasOwnProperty(".msgpool_hard_limit"))
                        writer.uint32(/* id 50001, wireType 0 =*/400008).int32(message[".msgpool_hard_limit"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MessageOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.message_set_wire_format = reader.bool();
                            break;
                        case 2:
                            message.no_standard_descriptor_accessor = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 50000:
                            message[".msgpool_soft_limit"] = reader.int32();
                            break;
                        case 50001:
                            message[".msgpool_hard_limit"] = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MessageOptions message.
                 * @function verify
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MessageOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.message_set_wire_format != null && message.hasOwnProperty("message_set_wire_format"))
                        if (typeof message.message_set_wire_format !== "boolean")
                            return "message_set_wire_format: boolean expected";
                    if (message.no_standard_descriptor_accessor != null && message.hasOwnProperty("no_standard_descriptor_accessor"))
                        if (typeof message.no_standard_descriptor_accessor !== "boolean")
                            return "no_standard_descriptor_accessor: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    if (message[".msgpool_soft_limit"] != null && message.hasOwnProperty(".msgpool_soft_limit"))
                        if (!$util.isInteger(message[".msgpool_soft_limit"]))
                            return ".msgpool_soft_limit: integer expected";
                    if (message[".msgpool_hard_limit"] != null && message.hasOwnProperty(".msgpool_hard_limit"))
                        if (!$util.isInteger(message[".msgpool_hard_limit"]))
                            return ".msgpool_hard_limit: integer expected";
                    return null;
                };
    
                /**
                 * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 */
                MessageOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MessageOptions)
                        return object;
                    var message = new $root.google.protobuf.MessageOptions();
                    if (object.message_set_wire_format != null)
                        message.message_set_wire_format = Boolean(object.message_set_wire_format);
                    if (object.no_standard_descriptor_accessor != null)
                        message.no_standard_descriptor_accessor = Boolean(object.no_standard_descriptor_accessor);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.MessageOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.MessageOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    if (object[".msgpool_soft_limit"] != null)
                        message[".msgpool_soft_limit"] = object[".msgpool_soft_limit"] | 0;
                    if (object[".msgpool_hard_limit"] != null)
                        message[".msgpool_hard_limit"] = object[".msgpool_hard_limit"] | 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.MessageOptions} message MessageOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MessageOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object.message_set_wire_format = false;
                        object.no_standard_descriptor_accessor = false;
                        object.deprecated = false;
                        object[".msgpool_soft_limit"] = 32;
                        object[".msgpool_hard_limit"] = 384;
                    }
                    if (message.message_set_wire_format != null && message.hasOwnProperty("message_set_wire_format"))
                        object.message_set_wire_format = message.message_set_wire_format;
                    if (message.no_standard_descriptor_accessor != null && message.hasOwnProperty("no_standard_descriptor_accessor"))
                        object.no_standard_descriptor_accessor = message.no_standard_descriptor_accessor;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    if (message[".msgpool_soft_limit"] != null && message.hasOwnProperty(".msgpool_soft_limit"))
                        object[".msgpool_soft_limit"] = message[".msgpool_soft_limit"];
                    if (message[".msgpool_hard_limit"] != null && message.hasOwnProperty(".msgpool_hard_limit"))
                        object[".msgpool_hard_limit"] = message[".msgpool_hard_limit"];
                    return object;
                };
    
                /**
                 * Converts this MessageOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MessageOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return MessageOptions;
            })();
    
            protobuf.FieldOptions = (function() {
    
                /**
                 * Properties of a FieldOptions.
                 * @memberof google.protobuf
                 * @interface IFieldOptions
                 * @property {google.protobuf.FieldOptions.CType|null} [ctype] FieldOptions ctype
                 * @property {boolean|null} [packed] FieldOptions packed
                 * @property {boolean|null} [lazy] FieldOptions lazy
                 * @property {boolean|null} [deprecated] FieldOptions deprecated
                 * @property {string|null} [experimental_map_key] FieldOptions experimental_map_key
                 * @property {boolean|null} [weak] FieldOptions weak
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] FieldOptions uninterpreted_option
                 * @property {boolean|null} [".php_output_always_number"] FieldOptions .php_output_always_number
                 */
    
                /**
                 * Constructs a new FieldOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldOptions.
                 * @implements IFieldOptions
                 * @constructor
                 * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
                 */
                function FieldOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldOptions ctype.
                 * @member {google.protobuf.FieldOptions.CType} ctype
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.ctype = 0;
    
                /**
                 * FieldOptions packed.
                 * @member {boolean} packed
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.packed = false;
    
                /**
                 * FieldOptions lazy.
                 * @member {boolean} lazy
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.lazy = false;
    
                /**
                 * FieldOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.deprecated = false;
    
                /**
                 * FieldOptions experimental_map_key.
                 * @member {string} experimental_map_key
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.experimental_map_key = "";
    
                /**
                 * FieldOptions weak.
                 * @member {boolean} weak
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.weak = false;
    
                /**
                 * FieldOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * FieldOptions .php_output_always_number.
                 * @member {boolean} .php_output_always_number
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype[".php_output_always_number"] = false;
    
                /**
                 * Creates a new FieldOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
                 * @returns {google.protobuf.FieldOptions} FieldOptions instance
                 */
                FieldOptions.create = function create(properties) {
                    return new FieldOptions(properties);
                };
    
                /**
                 * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
                    if (message.experimental_map_key != null && message.hasOwnProperty("experimental_map_key"))
                        writer.uint32(/* id 9, wireType 2 =*/74).string(message.experimental_map_key);
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".php_output_always_number"] != null && message.hasOwnProperty(".php_output_always_number"))
                        writer.uint32(/* id 50020, wireType 0 =*/400160).bool(message[".php_output_always_number"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.ctype = reader.int32();
                            break;
                        case 2:
                            message.packed = reader.bool();
                            break;
                        case 5:
                            message.lazy = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 9:
                            message.experimental_map_key = reader.string();
                            break;
                        case 10:
                            message.weak = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 50020:
                            message[".php_output_always_number"] = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldOptions message.
                 * @function verify
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        switch (message.ctype) {
                        default:
                            return "ctype: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        if (typeof message.packed !== "boolean")
                            return "packed: boolean expected";
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        if (typeof message.lazy !== "boolean")
                            return "lazy: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.experimental_map_key != null && message.hasOwnProperty("experimental_map_key"))
                        if (!$util.isString(message.experimental_map_key))
                            return "experimental_map_key: string expected";
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        if (typeof message.weak !== "boolean")
                            return "weak: boolean expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    if (message[".php_output_always_number"] != null && message.hasOwnProperty(".php_output_always_number"))
                        if (typeof message[".php_output_always_number"] !== "boolean")
                            return ".php_output_always_number: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 */
                FieldOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FieldOptions)
                        return object;
                    var message = new $root.google.protobuf.FieldOptions();
                    switch (object.ctype) {
                    case "STRING":
                    case 0:
                        message.ctype = 0;
                        break;
                    case "CORD":
                    case 1:
                        message.ctype = 1;
                        break;
                    case "STRING_PIECE":
                    case 2:
                        message.ctype = 2;
                        break;
                    }
                    if (object.packed != null)
                        message.packed = Boolean(object.packed);
                    if (object.lazy != null)
                        message.lazy = Boolean(object.lazy);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.experimental_map_key != null)
                        message.experimental_map_key = String(object.experimental_map_key);
                    if (object.weak != null)
                        message.weak = Boolean(object.weak);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.FieldOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.FieldOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    if (object[".php_output_always_number"] != null)
                        message[".php_output_always_number"] = Boolean(object[".php_output_always_number"]);
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.FieldOptions} message FieldOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object.ctype = options.enums === String ? "STRING" : 0;
                        object.packed = false;
                        object.deprecated = false;
                        object.lazy = false;
                        object.experimental_map_key = "";
                        object.weak = false;
                        object[".php_output_always_number"] = false;
                    }
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        object.ctype = options.enums === String ? $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        object.packed = message.packed;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        object.lazy = message.lazy;
                    if (message.experimental_map_key != null && message.hasOwnProperty("experimental_map_key"))
                        object.experimental_map_key = message.experimental_map_key;
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        object.weak = message.weak;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    if (message[".php_output_always_number"] != null && message.hasOwnProperty(".php_output_always_number"))
                        object[".php_output_always_number"] = message[".php_output_always_number"];
                    return object;
                };
    
                /**
                 * Converts this FieldOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * CType enum.
                 * @name google.protobuf.FieldOptions.CType
                 * @enum {string}
                 * @property {number} STRING=0 STRING value
                 * @property {number} CORD=1 CORD value
                 * @property {number} STRING_PIECE=2 STRING_PIECE value
                 */
                FieldOptions.CType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "STRING"] = 0;
                    values[valuesById[1] = "CORD"] = 1;
                    values[valuesById[2] = "STRING_PIECE"] = 2;
                    return values;
                })();
    
                return FieldOptions;
            })();
    
            protobuf.EnumOptions = (function() {
    
                /**
                 * Properties of an EnumOptions.
                 * @memberof google.protobuf
                 * @interface IEnumOptions
                 * @property {boolean|null} [allow_alias] EnumOptions allow_alias
                 * @property {boolean|null} [deprecated] EnumOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] EnumOptions uninterpreted_option
                 */
    
                /**
                 * Constructs a new EnumOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumOptions.
                 * @implements IEnumOptions
                 * @constructor
                 * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
                 */
                function EnumOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumOptions allow_alias.
                 * @member {boolean} allow_alias
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.allow_alias = false;
    
                /**
                 * EnumOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.deprecated = false;
    
                /**
                 * EnumOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new EnumOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
                 * @returns {google.protobuf.EnumOptions} EnumOptions instance
                 */
                EnumOptions.create = function create(properties) {
                    return new EnumOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.allow_alias != null && message.hasOwnProperty("allow_alias"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allow_alias);
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2:
                            message.allow_alias = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumOptions message.
                 * @function verify
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.allow_alias != null && message.hasOwnProperty("allow_alias"))
                        if (typeof message.allow_alias !== "boolean")
                            return "allow_alias: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 */
                EnumOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumOptions)
                        return object;
                    var message = new $root.google.protobuf.EnumOptions();
                    if (object.allow_alias != null)
                        message.allow_alias = Boolean(object.allow_alias);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.EnumOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.EnumOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.EnumOptions} message EnumOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object.allow_alias = false;
                        object.deprecated = false;
                    }
                    if (message.allow_alias != null && message.hasOwnProperty("allow_alias"))
                        object.allow_alias = message.allow_alias;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this EnumOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumOptions;
            })();
    
            protobuf.EnumValueOptions = (function() {
    
                /**
                 * Properties of an EnumValueOptions.
                 * @memberof google.protobuf
                 * @interface IEnumValueOptions
                 * @property {boolean|null} [deprecated] EnumValueOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] EnumValueOptions uninterpreted_option
                 */
    
                /**
                 * Constructs a new EnumValueOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumValueOptions.
                 * @implements IEnumValueOptions
                 * @constructor
                 * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
                 */
                function EnumValueOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumValueOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype.deprecated = false;
    
                /**
                 * EnumValueOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new EnumValueOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
                 */
                EnumValueOptions.create = function create(properties) {
                    return new EnumValueOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumValueOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumValueOptions message.
                 * @function verify
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 */
                EnumValueOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumValueOptions)
                        return object;
                    var message = new $root.google.protobuf.EnumValueOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.EnumValueOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.EnumValueOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults)
                        object.deprecated = false;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this EnumValueOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumValueOptions;
            })();
    
            protobuf.ServiceOptions = (function() {
    
                /**
                 * Properties of a ServiceOptions.
                 * @memberof google.protobuf
                 * @interface IServiceOptions
                 * @property {boolean|null} [deprecated] ServiceOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] ServiceOptions uninterpreted_option
                 */
    
                /**
                 * Constructs a new ServiceOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a ServiceOptions.
                 * @implements IServiceOptions
                 * @constructor
                 * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
                 */
                function ServiceOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ServiceOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype.deprecated = false;
    
                /**
                 * ServiceOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new ServiceOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
                 */
                ServiceOptions.create = function create(properties) {
                    return new ServiceOptions(properties);
                };
    
                /**
                 * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ServiceOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 33:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ServiceOptions message.
                 * @function verify
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServiceOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 */
                ServiceOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ServiceOptions)
                        return object;
                    var message = new $root.google.protobuf.ServiceOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.ServiceOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.ServiceOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.ServiceOptions} message ServiceOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults)
                        object.deprecated = false;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this ServiceOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ServiceOptions;
            })();
    
            protobuf.MethodOptions = (function() {
    
                /**
                 * Properties of a MethodOptions.
                 * @memberof google.protobuf
                 * @interface IMethodOptions
                 * @property {boolean|null} [deprecated] MethodOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] MethodOptions uninterpreted_option
                 */
    
                /**
                 * Constructs a new MethodOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a MethodOptions.
                 * @implements IMethodOptions
                 * @constructor
                 * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
                 */
                function MethodOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.deprecated = false;
    
                /**
                 * MethodOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new MethodOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
                 * @returns {google.protobuf.MethodOptions} MethodOptions instance
                 */
                MethodOptions.create = function create(properties) {
                    return new MethodOptions(properties);
                };
    
                /**
                 * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 33:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodOptions message.
                 * @function verify
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 */
                MethodOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MethodOptions)
                        return object;
                    var message = new $root.google.protobuf.MethodOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.MethodOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.MethodOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.MethodOptions} message MethodOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults)
                        object.deprecated = false;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this MethodOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return MethodOptions;
            })();
    
            protobuf.UninterpretedOption = (function() {
    
                /**
                 * Properties of an UninterpretedOption.
                 * @memberof google.protobuf
                 * @interface IUninterpretedOption
                 * @property {Array.<google.protobuf.UninterpretedOption.INamePart>|null} [name] UninterpretedOption name
                 * @property {string|null} [identifier_value] UninterpretedOption identifier_value
                 * @property {number|Long|null} [positive_int_value] UninterpretedOption positive_int_value
                 * @property {number|Long|null} [negative_int_value] UninterpretedOption negative_int_value
                 * @property {number|null} [double_value] UninterpretedOption double_value
                 * @property {Uint8Array|null} [string_value] UninterpretedOption string_value
                 * @property {string|null} [aggregate_value] UninterpretedOption aggregate_value
                 */
    
                /**
                 * Constructs a new UninterpretedOption.
                 * @memberof google.protobuf
                 * @classdesc Represents an UninterpretedOption.
                 * @implements IUninterpretedOption
                 * @constructor
                 * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
                 */
                function UninterpretedOption(properties) {
                    this.name = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * UninterpretedOption name.
                 * @member {Array.<google.protobuf.UninterpretedOption.INamePart>} name
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.name = $util.emptyArray;
    
                /**
                 * UninterpretedOption identifier_value.
                 * @member {string} identifier_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.identifier_value = "";
    
                /**
                 * UninterpretedOption positive_int_value.
                 * @member {number|Long} positive_int_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.positive_int_value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * UninterpretedOption negative_int_value.
                 * @member {number|Long} negative_int_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.negative_int_value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * UninterpretedOption double_value.
                 * @member {number} double_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.double_value = 0;
    
                /**
                 * UninterpretedOption string_value.
                 * @member {Uint8Array} string_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.string_value = $util.newBuffer([]);
    
                /**
                 * UninterpretedOption aggregate_value.
                 * @member {string} aggregate_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.aggregate_value = "";
    
                /**
                 * Creates a new UninterpretedOption instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
                 */
                UninterpretedOption.create = function create(properties) {
                    return new UninterpretedOption(properties);
                };
    
                /**
                 * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.name.length)
                        for (var i = 0; i < message.name.length; ++i)
                            $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.identifier_value != null && message.hasOwnProperty("identifier_value"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifier_value);
                    if (message.positive_int_value != null && message.hasOwnProperty("positive_int_value"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positive_int_value);
                    if (message.negative_int_value != null && message.hasOwnProperty("negative_int_value"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negative_int_value);
                    if (message.double_value != null && message.hasOwnProperty("double_value"))
                        writer.uint32(/* id 6, wireType 1 =*/49).double(message.double_value);
                    if (message.string_value != null && message.hasOwnProperty("string_value"))
                        writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.string_value);
                    if (message.aggregate_value != null && message.hasOwnProperty("aggregate_value"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregate_value);
                    return writer;
                };
    
                /**
                 * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an UninterpretedOption message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UninterpretedOption.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2:
                            if (!(message.name && message.name.length))
                                message.name = [];
                            message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.identifier_value = reader.string();
                            break;
                        case 4:
                            message.positive_int_value = reader.uint64();
                            break;
                        case 5:
                            message.negative_int_value = reader.int64();
                            break;
                        case 6:
                            message.double_value = reader.double();
                            break;
                        case 7:
                            message.string_value = reader.bytes();
                            break;
                        case 8:
                            message.aggregate_value = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UninterpretedOption.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an UninterpretedOption message.
                 * @function verify
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UninterpretedOption.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name")) {
                        if (!Array.isArray(message.name))
                            return "name: array expected";
                        for (var i = 0; i < message.name.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.NamePart.verify(message.name[i]);
                            if (error)
                                return "name." + error;
                        }
                    }
                    if (message.identifier_value != null && message.hasOwnProperty("identifier_value"))
                        if (!$util.isString(message.identifier_value))
                            return "identifier_value: string expected";
                    if (message.positive_int_value != null && message.hasOwnProperty("positive_int_value"))
                        if (!$util.isInteger(message.positive_int_value) && !(message.positive_int_value && $util.isInteger(message.positive_int_value.low) && $util.isInteger(message.positive_int_value.high)))
                            return "positive_int_value: integer|Long expected";
                    if (message.negative_int_value != null && message.hasOwnProperty("negative_int_value"))
                        if (!$util.isInteger(message.negative_int_value) && !(message.negative_int_value && $util.isInteger(message.negative_int_value.low) && $util.isInteger(message.negative_int_value.high)))
                            return "negative_int_value: integer|Long expected";
                    if (message.double_value != null && message.hasOwnProperty("double_value"))
                        if (typeof message.double_value !== "number")
                            return "double_value: number expected";
                    if (message.string_value != null && message.hasOwnProperty("string_value"))
                        if (!(message.string_value && typeof message.string_value.length === "number" || $util.isString(message.string_value)))
                            return "string_value: buffer expected";
                    if (message.aggregate_value != null && message.hasOwnProperty("aggregate_value"))
                        if (!$util.isString(message.aggregate_value))
                            return "aggregate_value: string expected";
                    return null;
                };
    
                /**
                 * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 */
                UninterpretedOption.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UninterpretedOption)
                        return object;
                    var message = new $root.google.protobuf.UninterpretedOption();
                    if (object.name) {
                        if (!Array.isArray(object.name))
                            throw TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                        message.name = [];
                        for (var i = 0; i < object.name.length; ++i) {
                            if (typeof object.name[i] !== "object")
                                throw TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                            message.name[i] = $root.google.protobuf.UninterpretedOption.NamePart.fromObject(object.name[i]);
                        }
                    }
                    if (object.identifier_value != null)
                        message.identifier_value = String(object.identifier_value);
                    if (object.positive_int_value != null)
                        if ($util.Long)
                            (message.positive_int_value = $util.Long.fromValue(object.positive_int_value)).unsigned = true;
                        else if (typeof object.positive_int_value === "string")
                            message.positive_int_value = parseInt(object.positive_int_value, 10);
                        else if (typeof object.positive_int_value === "number")
                            message.positive_int_value = object.positive_int_value;
                        else if (typeof object.positive_int_value === "object")
                            message.positive_int_value = new $util.LongBits(object.positive_int_value.low >>> 0, object.positive_int_value.high >>> 0).toNumber(true);
                    if (object.negative_int_value != null)
                        if ($util.Long)
                            (message.negative_int_value = $util.Long.fromValue(object.negative_int_value)).unsigned = false;
                        else if (typeof object.negative_int_value === "string")
                            message.negative_int_value = parseInt(object.negative_int_value, 10);
                        else if (typeof object.negative_int_value === "number")
                            message.negative_int_value = object.negative_int_value;
                        else if (typeof object.negative_int_value === "object")
                            message.negative_int_value = new $util.LongBits(object.negative_int_value.low >>> 0, object.negative_int_value.high >>> 0).toNumber();
                    if (object.double_value != null)
                        message.double_value = Number(object.double_value);
                    if (object.string_value != null)
                        if (typeof object.string_value === "string")
                            $util.base64.decode(object.string_value, message.string_value = $util.newBuffer($util.base64.length(object.string_value)), 0);
                        else if (object.string_value.length)
                            message.string_value = object.string_value;
                    if (object.aggregate_value != null)
                        message.aggregate_value = String(object.aggregate_value);
                    return message;
                };
    
                /**
                 * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UninterpretedOption.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.name = [];
                    if (options.defaults) {
                        object.identifier_value = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.positive_int_value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.positive_int_value = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.negative_int_value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.negative_int_value = options.longs === String ? "0" : 0;
                        object.double_value = 0;
                        if (options.bytes === String)
                            object.string_value = "";
                        else {
                            object.string_value = [];
                            if (options.bytes !== Array)
                                object.string_value = $util.newBuffer(object.string_value);
                        }
                        object.aggregate_value = "";
                    }
                    if (message.name && message.name.length) {
                        object.name = [];
                        for (var j = 0; j < message.name.length; ++j)
                            object.name[j] = $root.google.protobuf.UninterpretedOption.NamePart.toObject(message.name[j], options);
                    }
                    if (message.identifier_value != null && message.hasOwnProperty("identifier_value"))
                        object.identifier_value = message.identifier_value;
                    if (message.positive_int_value != null && message.hasOwnProperty("positive_int_value"))
                        if (typeof message.positive_int_value === "number")
                            object.positive_int_value = options.longs === String ? String(message.positive_int_value) : message.positive_int_value;
                        else
                            object.positive_int_value = options.longs === String ? $util.Long.prototype.toString.call(message.positive_int_value) : options.longs === Number ? new $util.LongBits(message.positive_int_value.low >>> 0, message.positive_int_value.high >>> 0).toNumber(true) : message.positive_int_value;
                    if (message.negative_int_value != null && message.hasOwnProperty("negative_int_value"))
                        if (typeof message.negative_int_value === "number")
                            object.negative_int_value = options.longs === String ? String(message.negative_int_value) : message.negative_int_value;
                        else
                            object.negative_int_value = options.longs === String ? $util.Long.prototype.toString.call(message.negative_int_value) : options.longs === Number ? new $util.LongBits(message.negative_int_value.low >>> 0, message.negative_int_value.high >>> 0).toNumber() : message.negative_int_value;
                    if (message.double_value != null && message.hasOwnProperty("double_value"))
                        object.double_value = options.json && !isFinite(message.double_value) ? String(message.double_value) : message.double_value;
                    if (message.string_value != null && message.hasOwnProperty("string_value"))
                        object.string_value = options.bytes === String ? $util.base64.encode(message.string_value, 0, message.string_value.length) : options.bytes === Array ? Array.prototype.slice.call(message.string_value) : message.string_value;
                    if (message.aggregate_value != null && message.hasOwnProperty("aggregate_value"))
                        object.aggregate_value = message.aggregate_value;
                    return object;
                };
    
                /**
                 * Converts this UninterpretedOption to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UninterpretedOption.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                UninterpretedOption.NamePart = (function() {
    
                    /**
                     * Properties of a NamePart.
                     * @memberof google.protobuf.UninterpretedOption
                     * @interface INamePart
                     * @property {string} name_part NamePart name_part
                     * @property {boolean} is_extension NamePart is_extension
                     */
    
                    /**
                     * Constructs a new NamePart.
                     * @memberof google.protobuf.UninterpretedOption
                     * @classdesc Represents a NamePart.
                     * @implements INamePart
                     * @constructor
                     * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                     */
                    function NamePart(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * NamePart name_part.
                     * @member {string} name_part
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     */
                    NamePart.prototype.name_part = "";
    
                    /**
                     * NamePart is_extension.
                     * @member {boolean} is_extension
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     */
                    NamePart.prototype.is_extension = false;
    
                    /**
                     * Creates a new NamePart instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                     */
                    NamePart.create = function create(properties) {
                        return new NamePart(properties);
                    };
    
                    /**
                     * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name_part);
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.is_extension);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NamePart.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.name_part = reader.string();
                                break;
                            case 2:
                                message.is_extension = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("name_part"))
                            throw $util.ProtocolError("missing required 'name_part'", { instance: message });
                        if (!message.hasOwnProperty("is_extension"))
                            throw $util.ProtocolError("missing required 'is_extension'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NamePart.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a NamePart message.
                     * @function verify
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    NamePart.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isString(message.name_part))
                            return "name_part: string expected";
                        if (typeof message.is_extension !== "boolean")
                            return "is_extension: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     */
                    NamePart.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                            return object;
                        var message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        if (object.name_part != null)
                            message.name_part = String(object.name_part);
                        if (object.is_extension != null)
                            message.is_extension = Boolean(object.is_extension);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NamePart.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.name_part = "";
                            object.is_extension = false;
                        }
                        if (message.name_part != null && message.hasOwnProperty("name_part"))
                            object.name_part = message.name_part;
                        if (message.is_extension != null && message.hasOwnProperty("is_extension"))
                            object.is_extension = message.is_extension;
                        return object;
                    };
    
                    /**
                     * Converts this NamePart to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    NamePart.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return NamePart;
                })();
    
                return UninterpretedOption;
            })();
    
            protobuf.SourceCodeInfo = (function() {
    
                /**
                 * Properties of a SourceCodeInfo.
                 * @memberof google.protobuf
                 * @interface ISourceCodeInfo
                 * @property {Array.<google.protobuf.SourceCodeInfo.ILocation>|null} [location] SourceCodeInfo location
                 */
    
                /**
                 * Constructs a new SourceCodeInfo.
                 * @memberof google.protobuf
                 * @classdesc Represents a SourceCodeInfo.
                 * @implements ISourceCodeInfo
                 * @constructor
                 * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
                 */
                function SourceCodeInfo(properties) {
                    this.location = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * SourceCodeInfo location.
                 * @member {Array.<google.protobuf.SourceCodeInfo.ILocation>} location
                 * @memberof google.protobuf.SourceCodeInfo
                 * @instance
                 */
                SourceCodeInfo.prototype.location = $util.emptyArray;
    
                /**
                 * Creates a new SourceCodeInfo instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
                 */
                SourceCodeInfo.create = function create(properties) {
                    return new SourceCodeInfo(properties);
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.location != null && message.location.length)
                        for (var i = 0; i < message.location.length; ++i)
                            $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a SourceCodeInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceCodeInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.location && message.location.length))
                                message.location = [];
                            message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a SourceCodeInfo message.
                 * @function verify
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SourceCodeInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.location != null && message.hasOwnProperty("location")) {
                        if (!Array.isArray(message.location))
                            return "location: array expected";
                        for (var i = 0; i < message.location.length; ++i) {
                            var error = $root.google.protobuf.SourceCodeInfo.Location.verify(message.location[i]);
                            if (error)
                                return "location." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 */
                SourceCodeInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.SourceCodeInfo)
                        return object;
                    var message = new $root.google.protobuf.SourceCodeInfo();
                    if (object.location) {
                        if (!Array.isArray(object.location))
                            throw TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                        message.location = [];
                        for (var i = 0; i < object.location.length; ++i) {
                            if (typeof object.location[i] !== "object")
                                throw TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                            message.location[i] = $root.google.protobuf.SourceCodeInfo.Location.fromObject(object.location[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SourceCodeInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.location = [];
                    if (message.location && message.location.length) {
                        object.location = [];
                        for (var j = 0; j < message.location.length; ++j)
                            object.location[j] = $root.google.protobuf.SourceCodeInfo.Location.toObject(message.location[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this SourceCodeInfo to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.SourceCodeInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SourceCodeInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                SourceCodeInfo.Location = (function() {
    
                    /**
                     * Properties of a Location.
                     * @memberof google.protobuf.SourceCodeInfo
                     * @interface ILocation
                     * @property {Array.<number>|null} [path] Location path
                     * @property {Array.<number>|null} [span] Location span
                     * @property {string|null} [leading_comments] Location leading_comments
                     * @property {string|null} [trailing_comments] Location trailing_comments
                     */
    
                    /**
                     * Constructs a new Location.
                     * @memberof google.protobuf.SourceCodeInfo
                     * @classdesc Represents a Location.
                     * @implements ILocation
                     * @constructor
                     * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                     */
                    function Location(properties) {
                        this.path = [];
                        this.span = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Location path.
                     * @member {Array.<number>} path
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.path = $util.emptyArray;
    
                    /**
                     * Location span.
                     * @member {Array.<number>} span
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.span = $util.emptyArray;
    
                    /**
                     * Location leading_comments.
                     * @member {string} leading_comments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.leading_comments = "";
    
                    /**
                     * Location trailing_comments.
                     * @member {string} trailing_comments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.trailing_comments = "";
    
                    /**
                     * Creates a new Location instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                     */
                    Location.create = function create(properties) {
                        return new Location(properties);
                    };
    
                    /**
                     * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.path != null && message.path.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.path.length; ++i)
                                writer.int32(message.path[i]);
                            writer.ldelim();
                        }
                        if (message.span != null && message.span.length) {
                            writer.uint32(/* id 2, wireType 2 =*/18).fork();
                            for (var i = 0; i < message.span.length; ++i)
                                writer.int32(message.span[i]);
                            writer.ldelim();
                        }
                        if (message.leading_comments != null && message.hasOwnProperty("leading_comments"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.leading_comments);
                        if (message.trailing_comments != null && message.hasOwnProperty("trailing_comments"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailing_comments);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a Location message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.path.push(reader.int32());
                                } else
                                    message.path.push(reader.int32());
                                break;
                            case 2:
                                if (!(message.span && message.span.length))
                                    message.span = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.span.push(reader.int32());
                                } else
                                    message.span.push(reader.int32());
                                break;
                            case 3:
                                message.leading_comments = reader.string();
                                break;
                            case 4:
                                message.trailing_comments = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a Location message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Location message.
                     * @function verify
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Location.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.path != null && message.hasOwnProperty("path")) {
                            if (!Array.isArray(message.path))
                                return "path: array expected";
                            for (var i = 0; i < message.path.length; ++i)
                                if (!$util.isInteger(message.path[i]))
                                    return "path: integer[] expected";
                        }
                        if (message.span != null && message.hasOwnProperty("span")) {
                            if (!Array.isArray(message.span))
                                return "span: array expected";
                            for (var i = 0; i < message.span.length; ++i)
                                if (!$util.isInteger(message.span[i]))
                                    return "span: integer[] expected";
                        }
                        if (message.leading_comments != null && message.hasOwnProperty("leading_comments"))
                            if (!$util.isString(message.leading_comments))
                                return "leading_comments: string expected";
                        if (message.trailing_comments != null && message.hasOwnProperty("trailing_comments"))
                            if (!$util.isString(message.trailing_comments))
                                return "trailing_comments: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a Location message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     */
                    Location.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                            return object;
                        var message = new $root.google.protobuf.SourceCodeInfo.Location();
                        if (object.path) {
                            if (!Array.isArray(object.path))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                            message.path = [];
                            for (var i = 0; i < object.path.length; ++i)
                                message.path[i] = object.path[i] | 0;
                        }
                        if (object.span) {
                            if (!Array.isArray(object.span))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                            message.span = [];
                            for (var i = 0; i < object.span.length; ++i)
                                message.span[i] = object.span[i] | 0;
                        }
                        if (object.leading_comments != null)
                            message.leading_comments = String(object.leading_comments);
                        if (object.trailing_comments != null)
                            message.trailing_comments = String(object.trailing_comments);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a Location message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.Location} message Location
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Location.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.path = [];
                            object.span = [];
                        }
                        if (options.defaults) {
                            object.leading_comments = "";
                            object.trailing_comments = "";
                        }
                        if (message.path && message.path.length) {
                            object.path = [];
                            for (var j = 0; j < message.path.length; ++j)
                                object.path[j] = message.path[j];
                        }
                        if (message.span && message.span.length) {
                            object.span = [];
                            for (var j = 0; j < message.span.length; ++j)
                                object.span[j] = message.span[j];
                        }
                        if (message.leading_comments != null && message.hasOwnProperty("leading_comments"))
                            object.leading_comments = message.leading_comments;
                        if (message.trailing_comments != null && message.hasOwnProperty("trailing_comments"))
                            object.trailing_comments = message.trailing_comments;
                        return object;
                    };
    
                    /**
                     * Converts this Location to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Location.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return Location;
                })();
    
                return SourceCodeInfo;
            })();
    
            return protobuf;
        })();
    
        return google;
    })();

    return $root;
});
