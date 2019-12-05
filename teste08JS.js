// for in

document.write("<br><br><h2>Nomes</h2><br>");

var Pessoa = new Array ("maria","marcelo","manoel");

document.write(Pessoa);

document.write("<br><br><h2>Frutas</h2><br>");

var frutas = ["banana","mamao","morango","laranja"];

for (var i in frutas) {
	document.write(frutas[i]+"<br>");
}

document.write("<br><br><h2>Dados</h2><br>");

var Dados = { 				// array associativo , veja + em 11
		nome : "Jose",
		sexo : "Masc",
		idade : 30	
};

for (var lista in Dados){ // lista é como se fosse os índices do vetor ; 0,1,2
document.write(lista +" : "+ Dados[lista] + "<br>" );
}

// VAR e LET

if (true){
	var texto1 = "Oi eu sou um var";
	let texto2 = "Oi eu sou um let"; // let só pode ser acessada no bloco
	console.log(texto1);
	console.log(texto2);
	
}

console.log(texto1);
console.log(texto2);