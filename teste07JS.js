// BOM, Browser Object Model

window.onload = function () {

    window.document.write("<br>BOM - Objetos do Browse".bold().fontcolor("red")+"<br><br>");

document.write(window.navigator.platform+"<br>"); // ou simplesmente sem o window;

document.write(navigator.userAgent+"<br>");

document.write(navigator.language+"<br>");

document.write(location.href+"<br>");

document.write(window.screen.width + " / " + window.screen.height+"<br>"); // resolução do monitor

window.open("teste03JS.html","teste","width=500,height=300");

}