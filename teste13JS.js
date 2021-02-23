// Classe Math
//Atenção: Math não é um construtor - não use NEW
document.write("<br>Classe Math<br>".bold().fontcolor("red"));
document.write("<br>Valor de PI = " + Math.PI);
document.write("<br>8 ^ 2 = " + Math.pow(8, 2)); 
document.write("<br>Raiz de 64 = " + Math.sqrt(64));
document.write("<br>Seno de 90' = " + Math.sin(90 * Math.PI / 180));
document.write("<br>Seno de 30' = " + Math.sin(30 * Math.PI / 180).toFixed(2));
document.write("<br>Cosseno de 0' = " + Math.cos(0 * Math.PI / 180));
document.write("<br>Cosseno de 60' = " + Math.cos(60 * Math.PI / 180).toFixed(2));
document.write("<br>Ramdom 0 - 100 = " + (Math.random()*100).toFixed(0));