// Temporizadores

/* outro jeito de fazer onclick sem usar o parametro do html
window.onload = function () {				
	document.getElementById("lampada").onclick = ligar;
}*/

function ligar() {
	document.getElementById("lampada").src = "./lampada-acesa.jpg";
	setTimeout(desligar, 1000); // sem repetição
	setInterval(apresentaHoras, 1000); }	// com repetição

function desligar() {
	document.getElementById("lampada").src = "./lampada-apagada.jpg";  }

function apresentaHoras() {
	var agora = new Date();
	var hora = parseInt(agora.getHours());
	var minuto = parseInt(agora.getMinutes());
	var segundo = parseInt(agora.getSeconds());
	var h = new String();var m = new String();var s = new String();
	if (hora < 10) {h = "0" + hora;}else {h = hora;}
	if (minuto < 10) {m = "0" + minuto;}else {m = minuto;}	
	if (segundo < 10) {s = "0" + segundo;}else {s = segundo;}
	document.getElementById("h").innerHTML = h;
	document.getElementById("m").innerHTML = m;
	document.getElementById("s").innerHTML = s;	}
