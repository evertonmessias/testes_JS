// Temporizadores
// setTimeout(seuevento, tempo); //(sem repetição)

window.onload = function () {
	setInterval(apresentaHoras, 1000);
	function apresentaHoras() {
		var agora = new Date();
		var hora = parseInt(agora.getHours());
		var minuto = parseInt(agora.getMinutes());
		var segundo = parseInt(agora.getSeconds());
		var h = new String(); var m = new String(); var s = new String();
		if (hora < 10) { h = "0" + hora; } else { h = hora; }
		if (minuto < 10) { m = "0" + minuto; } else { m = minuto; }
		if (segundo < 10) { s = "0" + segundo; } else { s = segundo; }
		document.getElementById("h").innerHTML = h;
		document.getElementById("m").innerHTML = m;
		document.getElementById("s").innerHTML = s;
		if (hora < 12) {
			document.getElementById("foto").src = "manha.jpg";
			document.getElementById("pagina").style = "background-color:#FFFF00";
		} else if (hora >= 12 && hora < 18) {
			document.getElementById("foto").src = "tarde.jpg";
			document.getElementById("pagina").style = "background-color:#FF8C00";
		} else {
			document.getElementById("foto").src = "noite.jpg";
			document.getElementById("pagina").style = "background-color:#191970";
		}
	}
}