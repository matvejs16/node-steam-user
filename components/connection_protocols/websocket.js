const EventEmitter = require('events').EventEmitter;
const Util = require('util');
const WS13 = require('websocket13');

const SteamUser = require('../../index.js');

module.exports = WebSocketConnection;

Util.inherits(WebSocketConnection, EventEmitter);

/**
 * @constructor
 */
function WebSocketConnection() {
	// We don't really need to set anything up here
}

WebSocketConnection.prototype.connect = function(user) {
	this.user = user;

	// Pick a CM randomly
	if (!user._cmList || !user._cmList.websocket_servers) {
		throw new Error("Nothing to connect to: " + (user._cmList ? "no WebSocket server list" : "no CM list"));
	}

	// TODO: pick a CM
	this.stream = new WS13.WebSocket("wss://" + wsCm + "/cmsocket/", {
		"pingInterval": 30000,
		"httpProxy": user.options.httpProxy,
		"proxyTimeout": user.options.proxyTimeout,
		"connection": {
			"localAddress": user.options.localAddress
		}
	});

	this._setupStream();

	this.stream.on('debug', msg => this.user.emit('debug', msg));
	this.stream.on('message', this._readMessage.bind(this));

	this.stream.on('disconnected', (code, reason) => {
		this.user.emit('debug', 'WebSocket disconnected with code ' + code + ' and reason: ' + reason);
		this.user._handleConnectionClose();
	});

	this.stream.on('error', (err) => {
		this.user.emit('debug', 'WebSocket disconnected with error: ' + err.message);
		this.user._handleConnectionClose();
	});

	this.stream.on('connected', () => {
		this.user.emit('debug', 'WebSocket connection success; now logging in');
		this.user._send(this.user._logOnDetails.game_server_token ? SteamUser.EMsg.ClientLogonGameServer : SteamUser.EMsg.ClientLogon, this.user._logOnDetails);
	});

	// TODO add setTimeout to websocket13
};

/**
 * End the connection
 * @param {boolean} [andIgnore=false] - Pass true to also ignore all further events from this connection
 */
WebSocketConnection.prototype.end = function(andIgnore) {
	if (this.stream && [WS13.State.Connected, WS13.State.Connecting].indexOf(this.stream.state) != -1) {
		if (andIgnore) {
			this.stream.removeAllListeners();
			this.stream.on('error', () => {});
		}
		
		this.stream.disconnect();
	}
};

/**
 * Send data over the connection.
 * @param {Buffer} data
 */
WebSocketConnection.prototype.send = function(data) {
	this.stream.send(data);
};

WebSocketConnection.prototype._readMessage = function(type, msg) {
	if (type != WS13.FrameType.Data.Binary) {
		this.emit('debug', 'Got frame with wrong data type: ' + type);
		return;
	}

	this.user._handleNetMessage(msg);
};
