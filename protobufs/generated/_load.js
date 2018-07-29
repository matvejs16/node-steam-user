// Auto-generated by generate-protos script on Sat Jul 28 2018 21:13:00 GMT-0400 (Eastern Daylight Time)

const Schema = module.exports;

mergeObjects(Schema, require('./content_manifest.js'));
mergeObjects(Schema, require('./encrypted_app_ticket.js'));
mergeObjects(Schema, require('./friends.js'));
mergeObjects(Schema, require('./htmlmessages.js'));
mergeObjects(Schema, require('./steamdatagram_messages_auth.js'));
mergeObjects(Schema, require('./steammessages_accounthardware.steamclient.js'));
mergeObjects(Schema, require('./steammessages_base.js'));
mergeObjects(Schema, require('./steammessages_broadcast.steamclient.js'));
mergeObjects(Schema, require('./steammessages_clientlanp2p.js'));
mergeObjects(Schema, require('./steammessages_clientserver.js'));
mergeObjects(Schema, require('./steammessages_clientserver_2.js'));
mergeObjects(Schema, require('./steammessages_clientserver_friends.js'));
mergeObjects(Schema, require('./steammessages_clientserver_login.js'));
mergeObjects(Schema, require('./steammessages_cloud.steamclient.js'));
mergeObjects(Schema, require('./steammessages_credentials.steamclient.js'));
mergeObjects(Schema, require('./steammessages_datapublisher.steamclient.js'));
mergeObjects(Schema, require('./steammessages_depotbuilder.steamclient.js'));
mergeObjects(Schema, require('./steammessages_deviceauth.steamclient.js'));
mergeObjects(Schema, require('./steammessages_econ.steamclient.js'));
mergeObjects(Schema, require('./steammessages_friendmessages.steamclient.js'));
mergeObjects(Schema, require('./steammessages_gamenotifications.steamclient.js'));
mergeObjects(Schema, require('./steammessages_gameservers.steamclient.js'));
mergeObjects(Schema, require('./steammessages_hiddevices.js'));
mergeObjects(Schema, require('./steammessages_inventory.steamclient.js'));
mergeObjects(Schema, require('./steammessages_linkfilter.steamclient.js'));
mergeObjects(Schema, require('./steammessages_offline.steamclient.js'));
mergeObjects(Schema, require('./steammessages_parental.steamclient.js'));
mergeObjects(Schema, require('./steammessages_partnerapps.steamclient.js'));
mergeObjects(Schema, require('./steammessages_physicalgoods.steamclient.js'));
mergeObjects(Schema, require('./steammessages_player.steamclient.js'));
mergeObjects(Schema, require('./steammessages_publishedfile.steamclient.js'));
mergeObjects(Schema, require('./steammessages_qms.steamclient.js'));
mergeObjects(Schema, require('./steammessages_remoteclient.js'));
mergeObjects(Schema, require('./steammessages_remoteclient_discovery.js'));
mergeObjects(Schema, require('./steammessages_secrets.steamclient.js'));
mergeObjects(Schema, require('./steammessages_shader.steamclient.js'));
mergeObjects(Schema, require('./steammessages_sitelicenseclient.js'));
mergeObjects(Schema, require('./steammessages_site_license.steamclient.js'));
mergeObjects(Schema, require('./steammessages_store.steamclient.js'));
mergeObjects(Schema, require('./steammessages_twofactor.steamclient.js'));
mergeObjects(Schema, require('./steammessages_unified_base.steamclient.js'));
mergeObjects(Schema, require('./steammessages_unified_test.steamclient.js'));
mergeObjects(Schema, require('./steammessages_useraccount.steamclient.js'));
mergeObjects(Schema, require('./steammessages_video.steamclient.js'));
mergeObjects(Schema, require('./steamnetworkingsockets_messages_certs.js'));
mergeObjects(Schema, require('./stream.js'));

function mergeObjects(destinationObject, sourceObject) {
	for (let i in sourceObject) {
		if (sourceObject.hasOwnProperty(i)) {
			destinationObject[i] = sourceObject[i];
		}
	}
}
