var imggg = document.getElementsByTagName('img')
var i = imggg[0].addEventListener("click", function f(){

  var docElm = document.documentElement;
	if (docElm.requestFullscreen) {
	    docElm.requestFullscreen();
	}
	else if (docElm.mozRequestFullScreen) {
	    docElm.mozRequestFullScreen();
	}
	else if (docElm.webkitRequestFullScreen) {
	    docElm.webkitRequestFullScreen();
	}
	else if (docElm.msRequestFullscreen) {
	    docElm.msRequestFullscreen();
	}
});