// Objeto Date

var d = new Date();

alert(d);

alert(d.toLocaleDateString());
alert(d.toLocaleTimeString());

var semana = ["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"];
var mes = new Array ("janeiro","fevefeiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro")

alert("Hoje é "+ semana[d.getDay()] + ", " + d.getDate() + " de " + mes[d.getMonth()] + " de " + d.getFullYear());

alert("Em Greenwich : " + d.getUTCHours() + "hs");


