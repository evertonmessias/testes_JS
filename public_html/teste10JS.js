// Objeto Array

var texto = "javascript";

document.write(texto[2] + "<BR><BR>"); // obs.: Toda string é um Array

// metodos

var paises = new Array ("Brasil","EUA","Canada","China");

document.write(paises +"<BR>");
document.write(paises[1] +"<BR>");
document.write(paises.length +"<BR>");

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





