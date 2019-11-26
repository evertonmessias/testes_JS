// Array Multi e Associativo
document.write("<br>Array Multi e Associativo<br>".bold().fontcolor("red"));

var pessoa = new Array();

pessoa[0] = ["Jose","Masc"];
pessoa[1] = ["Maria","Fem"];

document.write("<br>"+pessoa[1][1]+"<br>");

var pessoas = {nome:"Ana",cidade:"Campinas",grau:"Superior"};

document.write("<br>"+pessoas["cidade"]+"<br>");

for (var lista in pessoas){
document.write("<br>"+lista + " : " + pessoas[lista]);
}

