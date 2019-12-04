
window.onload = function () {

	var botao = document.getElementById('botao');

	botao.addEventListener('click', criar);

	var i = 1;

	function criar() {		

		var form = document.getElementById("form");

		var hr = document.createElement("hr");

		form.appendChild(hr); // criar elemento como filho de form	

		var h3 = document.createElement("h3"); // cria um h3

		form.appendChild(h3);

		h3.innerHTML = `Apertou o Botão ${i} vezes !!!`;h3.style.color = "red";

		i++;
	}

}