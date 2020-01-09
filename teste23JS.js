// DOM HTML API

// DOM (Document Object Model) é um padrão do W3C para acessar documentos.

// existem vários métodos, para mudar várias tags, ver mais em : https://www.w3schools.com/js/js_htmldom.asp


window.onload = function () {

	console.log("abriu!!!");

	var texto = document.getElementById("texto");
	
	texto.onmouseover = function(){
		document.getElementById('aviso').style.display = 'block';
	}
	texto.onmouseout = function(){
		document.getElementById('aviso').style.display = 'none';
	}

	//

	texto.onclick = function(){
		document.getElementsByTagName('p')[0].innerHTML = `Vc está em ${window.document.URL}`;
		document.getElementsByTagName('p')[1].innerHTML = `===> DÊ Dois CLICKs !!!`;
	}
	texto.ondblclick = function(){
		document.getElementsByTagName('p')[1].innerHTML = `..... Vc deu Dois CLICKs ....`;
		document.querySelector('p.r3').innerHTML = "DOM"
	}	

}