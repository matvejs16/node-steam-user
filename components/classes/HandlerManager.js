class HandlerManager {
	constructor() {
		this._handlers = {};
	}

	hasHandler(msg) {
		return this._handlers[msg] && this._handlers[msg].length > 0;
	}

	add(msg, handler) {
		this.checkMsgForLegacyHandlers(msg);

		if (!this._handlers[msg]) {
			this._handlers[msg] = [];
		}

		if (this._handlers[msg].some(existingHandler => existingHandler === handler)) {
			// This handler already exists
			return;
		}

		this._handlers[msg].push(handler);
	}

	emit(instance, msg, ...args) {
		this.checkMsgForLegacyHandlers(msg);

		let handlers = this._handlers[msg];
		if (!handlers || handlers.length == 0) {
			return;
		}

		handlers.forEach((handler) => {
			handler.apply(instance, args);
		});
	}

	checkMsgForLegacyHandlers(msg) {
		const SteamUser = require('../../index.js');
		if (typeof SteamUser.prototype._handlers[msg] === 'function') {
			this.add(msg, SteamUser.prototype._handlers[msg]);
			delete SteamUser.prototype._handlers[msg];
		}
	}
}
