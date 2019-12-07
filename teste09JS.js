// for in

document.write("<h4>Nomes</h4>");

var Pessoa = new Array ("maria","marcelo","manoel");

document.write(Pessoa);

document.write("<h4>Frutas</h4>");

var frutas = ["banana","mamao","morango","laranja"];

for (var i in frutas) {
	document.write(frutas[i]+"<br>");
}

document.write("<br><h2>OBJETO ARRAY</h2><br>");

// Objeto Array
document.write("<br>Toda string eh um Array<BR>".bold().fontcolor("red"));

var texto = "javascript";

document.write("texto: " + texto + "<BR>");
document.write("texto[0]: " + texto[0] + "<BR>");

//Metodos
document.write("<br>Metodos<BR>".bold());

var paises = new Array ("Brasil","EUA","Canada","China");

document.write("paises: " + paises +"<BR>");
document.write("paises[0]: " + paises[0] +"<BR>");
document.write("paises[0][1]: " + paises[0][1] +"<BR>");
document.write("paises.length: " + paises.length +"<BR>");
document.write("paises[0]length: " + paises[0].length +"<BR>");

for (var i=0; i < paises.length; i++){
document.write("<br> pais : "+paises[i]);
}

document.write("<BR><BR>indexOf Canada: "+ paises.indexOf("Canada")+"<BR><BR>");

// metodos de ordenação e concatenação

document.write("paises.reverse: " + paises.reverse() +"<BR>");
document.write("paises.sort: " + paises.sort() +"<BR>");
document.write("paises.join: " + paises.join(" ; ") +"<BR>");
document.write("paises.concat: " + paises.concat("India","Japao","Argentina"));

// filas FIFO (first in , first out)

document.write("<BR><BR>*lista Original : "+paises);
document.write("<BR>add no fim: "+paises.push("Franca","Portugal","Espanha")); // adiciona no fim da fila
document.write("<BR>*lista Nova : "+paises);
document.write("<BR>del do inicio: "+paises.shift()); // remove do inicio da fila
document.write("<BR>*lista Nova2 : "+paises);