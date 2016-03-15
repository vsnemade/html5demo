var contactsDB; // IDBDatabase

function openContactDB() {

	var indexedDB = window.indexedDB || window.webitIndexedDB
			|| window.mozIndexedDB || window.mskitIndexedDB;

	if (indexedDB) {

		console.log("indexeddb supported");
		var request = indexedDB.open("ContactsDB", 1);
		request.addEventListener("success", function() {
		}, false);
		request.addEventListener("error", function() {
		}, false);
		request.addEventListener("upgradeneeded", function() {
		}, false);

	} else {

		console.log("indexeddb not supported");

	}
}