requirejs.config({
	//To get timely, correct error triggers in IE, force a define/shim exports check.
	enforceDefine: true,
	// 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.8.3.min")
	paths:{
		"cordovaLib" : "../../cordova",
		"localNotification": "../libs/phonegapPlugins/cordova.LocalNotification",
		"pushNotification": "../libs/phonegapPlugins/PushNotification",
		//Underscore
		"underscore": "../libs/lodash-1.2.1",
		//jQuery
		"jquery": "../libs/jquery-2.0.2",
		"jquerymobile": "../libs/jquery.mobile-1.3.1"
	},
	// Sets the configuration for your third party scripts that are not AMD compatible
	shim:{
		'localNotification':{
			deps:['cordovaLib'],
			exports: 'cordova'
		},
		'pushNotification':{
			deps:['cordovaLib'],
			exports:'PushNotification'
		},
		'cordovaLib':{
			exports: 'cordova'
		},

		'underscore':{
			exports: '_'
		},

		'jquery': {
			exports: 'jquery'
		},
		'jquerymobile': {
			deps:['jquery'],
			exports: 'jquerymobile'
		}

	}
});
//Finally start the Application Entry module
define(['localNotification','pushNotification','underscore','jquerymobile'],
	function(localNotification,localPushNotification,localUnderscore,localJQueryMobile){
		//console.log('Application Entry');
		require(['view/cordovaEntry'],
			function(CordovaEntry){
				console.log('Application : Entry ');
				CordovaEntry.initialize();
			});
	});