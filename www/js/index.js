document.addEventListener('deviceready', function () {
	UserAgent.set('Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.9 Safari/537.36');
	var ref = cordova.InAppBrowser.open('http://youtube.com/', '_blank', 'location=yes,hideurlbar=no,shouldPauseOnSuspend=yes');
	cordova.plugins.backgroundMode.enable();
	cordova.plugins.backgroundMode.overrideBackButton();
	cordova.plugins.backgroundMode.on('activate', function() {
   cordova.plugins.backgroundMode.disableWebViewOptimizations(); 
   
});
}, false);
