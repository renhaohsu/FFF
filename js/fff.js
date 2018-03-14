var imggg = document.getElementsByTagName('img')
var h4Click = document.getElementsByTagName('h4')
var h3Click = document.getElementsByTagName('h3')

function f(){
	h4Click[0].style.visibility = 'hidden';
	h3Click[0].style.visibility = 'hidden';
	imggg[0].style.filter = 'invert(1)';
	imggg[1].style.filter = 'invert(1)';
	imggg[2].style.filter = 'invert(1)';

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