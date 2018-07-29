const SteamUser = require('../index.js');

SteamUser.prototype.setSentry = function(sentry) {
	this._sentry = sentry;
};

SteamUser.prototype._getSentryFilename = function() {
	if (this.options.singleSentryfile) {
		return 'sentry.bin';
	} else {
		return 'sentry.' + this._logOnDetails.account_name + '.bin';
	}
};

// Handlers

SteamUser.prototype._handlers[SteamUser.EMsg.ClientUpdateMachineAuth] = function(body, callback) {
	// TODO: Handle partial updates
	if (this.storage) {
		this.storage.writeFile(this._getSentryFilename(), body.bytes);
	}

	this.emit('sentry', body.bytes);

	// Accept the sentry
	var hash = require('crypto').createHash('sha1');
	hash.update(body.bytes);

	callback(SteamUser.EMsg.ClientUpdateMachineAuthResponse, {
		"sha_file": hash.digest()
	});
};
