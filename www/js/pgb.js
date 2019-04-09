function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(2);
	deviceInfo();
}

function deviceInfo() {

	info =  'interests';

	document.getElementById("deviceDetails").innerHTML = info;	
}