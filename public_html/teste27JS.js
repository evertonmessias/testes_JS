// DOM CORE , navegação em árvore

window.onload = function () {
	
	var form = document.getElementById("form");
	
	for (var i=0;i < form.length; i++) {
		alert(form[i] + " ==> " + i); // exibe o array do form
	}
	
	
	alert(form.parentNode); // exibe o pai, o anterior
	
	// CRIAR ... diferente de innerHTML que apenas modifica um existente
	
	var hr = document.createElement("hr");	
	form.appendChild(hr); // criar elemento como filho de form
	
		
	var h3 = document.createElement("h3"); // cria um h3  
	form.appendChild(h3);
	//h3.appendChild(document.createTextNode("Aperte o Botão"));
	
	// OU melhor em DOM HTML
	
	h3.innerHTML = "Aperte o Botão"
	
	//var atributo = document.createAttribute("style");
	//atributo.value = "color:red";
	//h3.setAttributeNode(atributo);
	
	// OU melhor em DOM HTML
	
	h3.style.color = "red"; 
	
	
	
}