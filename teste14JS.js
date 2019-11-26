// Objeto RegExp
document.write("<br>Objeto RegExp<br>".bold().fontcolor("#f00"));
// Funções e modificadores

var texto = "JavaScript é mto legal de se aprender ... ";

var regex = /javascript/i; // var regex = new RegExp("JavaScript","i"); .... i = modificador para ignorar case sensitive

document.write("<br>Teste i: "+regex.test(texto));

var frase = "Qual é o Doce mais dOce que o doCe ?";

document.write("<br>Teste i: "+  /doce/i.exec(frase)); // traz apenas a primeira ocorrencia 

document.write("<br>Teste ig: "+  frase.match(/doce/ig)); // função do objeto string para busca que traz todas as ocorrencias (modificador g)

document.write("<br>Teste subst: "+  frase.replace(/doce/ig,"DOCINHO")); // substitui padrão pelo q esta nas aspas

// Metacaracteres

document.write("<br>Teste Meta: "+   /^j/i.test(texto));

document.write("<br>Teste Cep 13000-100 : "  +   /^\d{5}-\d{3}$/.test("13000-100")); // testa um CEP , \d para dígitos