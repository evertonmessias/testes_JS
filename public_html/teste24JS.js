// DOM HTML API

// DOM (Document Object Model) é um padrão do W3C para acessar documentos.

// existem vários métodos, para mudar várias tags, ver mais em : https://www.w3schools.com/js/js_htmldom.asp


window.onload = function () {

var img = document.images;
alert(img.length);
for (var i=0; i<img.length; i++) {
	alert(img[i].src);	
}


}