// BOM, Browser Object Model

window.onload = function () {

window.alert(window.navigator.platform); // ou simplesmente sem o window;

alert(navigator.userAgent);

alert(navigator.language);

alert(location.href);

alert(window.screen.width + " / " + window.screen.height); // resolução do monitor

var deseja = window.confirm("Deseja continuar ?"); // ou simplesmente sem o window;

var continua = window.prompt("Diga por que continuou:");

window.open("teste17JS.html","teste","width=500,height=300");

document.write("Deseja continuar ? " + deseja + "<br>");
document.write("Porque : " + continua + "<br>");
}