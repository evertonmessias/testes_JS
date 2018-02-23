// for in

var Pessoa = new Array ("jose","masc","30anos");

alert(Pessoa);

for (var i in Pessoa) {
	alert(Pessoa[i]);
}

var frutas = ["banana","mamão","morango","laranja"];

for (var i in frutas) {
	alert(frutas[i]);
}


var confirma = confirm("Continuar ??");

if (confirma) {

var Dados = { 				// array associativo , veja + em 11
		nome : "Jose",
		sexo : "Masc",
		idade : 30	
};

alert(Dados);

for (var lista in Dados){ // lista é como se fosse os índices do vetor ; 0,1,2

alert(lista +" : "+ Dados[lista] );
}

}