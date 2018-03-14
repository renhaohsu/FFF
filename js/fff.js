var imggg = document.getElementsByTagName('img')

function f(){

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
}


var i = imggg[0].addEventListener("click", f);
var i = imggg[1].addEventListener("click", f);
var i = imggg[2].addEventListener("click", f);