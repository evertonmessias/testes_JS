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

document.write("<BR><BR>"+ paises.indexOf("Canada")+"<BR><BR>");

// metodos de ordenação

document.write(paises.reverse() +"<BR>");
document.write(paises.sort() +"<BR>");
document.write(paises.join(" ; ") +"<BR>");

// concatenar 

document.write(paises.concat("India","Japao","Argentina"));

// filas FIFO (first in , first out)

document.write("<BR><BR><BR>Lista Original : "+paises+"<BR><BR><BR>");

document.write(paises.push("Franca","Portugal","Espanha")); // adiciona no fim da fila
document.write("<BR>"+paises+"<BR><br>");

document.write(paises.shift()); // remove do inicio da fila
document.write("<BR>"+paises+"<BR><br>");





