// Cookies HTML5 DOM (document object model) Storage API

window.onload = function () {
	var form = document.getElementById("dom");  // MELHOR: obter o form via onload
		
	form.gravar.onclick = function () {         // colocar o onclick aqui e não no HTML
		localStorage.setItem ("meuTexto", form.texto.value);}
		
	form.exibir.onclick = function () {
		form.texto2.value = localStorage.getItem("meuTexto");}
}