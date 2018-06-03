// DOM HTML

// uma forma de inserir dados na tabela ....

window.onload = function () {
	
	var form = document.getElementById("form");
	
	form.botao.onclick = function() {
	var tab = document.getElementsByTagName("table")[0]; // captura a tabela (está no vetor zero)
	var row = tab.insertRow(-1);
	var cel0 = row.insertCell(0); // deleteRow()
	var cel1 = row.insertCell(1);
	cel0.appendChild(document.createTextNode(form.peca.value)); // adiciona um elemento no fim
	cel1.appendChild(document.createTextNode(form.preco.value));	
}}