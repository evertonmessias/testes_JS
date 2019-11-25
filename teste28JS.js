// AJAX

window.onload = function () {
	
	var resp = document.getElementById("resp");	
	var botao = document.getElementById("botao");
	
	botao.onclick = function () {
		
					
		// escrevendo o conteudo do TXT no Documento Html
		
		
		var ajax = new XMLHttpRequest();	
					
		ajax.onreadystatechange = function () {resp.innerHTML = ajax.responseText;}
		
		ajax.open("POST", "./arquivo.txt");ajax.send();
		

		//		
		
					
	}
}