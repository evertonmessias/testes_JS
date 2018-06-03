// Array Multi

var pessoa = new Array();

pessoa[0] = ["Jose","Masc"];
pessoa[1] = ["Maria","Fem"];

alert(pessoa[1][1]);

// Array Associativo 

var pessoas = {nome:"Ana",cidade:"Campinas",grau:"Superior"};

alert(pessoas["cidade"]);

for (var lista in pessoas){
alert(lista + " : " + pessoas[lista]);
}

