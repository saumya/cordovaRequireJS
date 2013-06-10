define('view/cordovaEntry',
	[],
	function(){
		var CordovaEntryView = {
		    // Application Constructor
		    initialize: function() {
		    	console.log('CordovaEntryView : initialize : ');
		        this.bindEvents();
		    },
		    // Bind Event Listeners
		    //
		    // Bind any events that are required on startup. Common events are:
		    // 'load', 'deviceready', 'offline', and 'online'.
		    bindEvents: function() {
		    	console.log('CordovaEntryView : bindEvents : ');
		        document.addEventListener('deviceready', this.onDeviceReady, false);
		    },
		    // deviceready Event Handler
		    //
		    // The scope of 'this' is the event. In order to call the 'receivedEvent'
		    // function, we must explicity call 'app.receivedEvent(...);'
		    onDeviceReady: function() {
		    	console.log('CordovaEntryView : deviceready : ');
		        app.receivedEvent('deviceready');
		    },
		    // Update DOM on a Received Event
		    receivedEvent: function(id) {
		    	console.log('CordovaEntryView : receivedEvent : ');
		        var parentElement = document.getElementById(id);
		        var listeningElement = parentElement.querySelector('.listening');
		        var receivedElement = parentElement.querySelector('.received');

		        listeningElement.setAttribute('style', 'display:none;');
		        receivedElement.setAttribute('style', 'display:block;');

		        console.log('Received Event: ' + id);
		    }
		};
		return CordovaEntryView;
});