// Objeto Date
document.write("<br>Objeto Date<br>".bold().fontcolor("red"));
var d = new Date();
document.write("<br>data pura: "+d);
document.write("<br>datestring: "+d.toLocaleDateString());
document.write("<br>timestring: "+d.toLocaleTimeString());
var semana = ["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"];
var mes = new Array ("janeiro","fevefeiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro")
document.write("<br><br>Hoje é "+ semana[d.getDay()] + ", " + d.getDate() + " de " + mes[d.getMonth()] + " de " + d.getFullYear());
document.write("<br><br>Em Greenwich : " + d.getUTCHours() + "hs");


