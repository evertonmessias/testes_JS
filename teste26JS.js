// DOM HTML

// inserir dados em uma tabela ....

window.onload = function () {
	
	var form = document.getElementById("form");
	
	form.botao.onclick = function() {
	var tab = document.getElementById("tabela");
	var row = document.createElement('tr');
	var cel0 = document.createElement('td');
	var cel1 = document.createElement('td');
	tab.append(row);
	row.append(cel0);
	row.append(cel1);

	/*
	var row = tab.insertRow();
	var cel0 = row.insertCell(0);
	var cel1 = row.insertCell(1);
	*/

	cel0.append(form.peca.value);
	cel1.append(form.preco.value);
}}