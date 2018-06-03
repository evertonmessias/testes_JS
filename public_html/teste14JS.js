// Objeto RegExp

// Funções e modificadores

var texto = "JavaScript é mto legal de se aprender ... ";

var regex = /javascript/i; // var regex = new RegExp("JavaScript","i"); .... i = modificador para ignorar case sensitive

alert(regex.test(texto));

var frase = "Qual é o Doce mais dOce que o doCe ?";

alert(/doce/i.exec(frase)); // traz apenas a primeira ocorrencia 

alert(frase.match(/doce/ig)); // função do objeto string para busca que traz todas as ocorrencias (modificador g)

alert(frase.replace(/doce/ig,"DOCINHO")); // substitui padrão pelo q esta nas aspas

// Metacaracteres

alert(/^j/i.test(texto));

alert(/^\d{5}-\d{3}$/.test("13000-100")); // testa um CEP , \d para dígitos

// Teste; modificar uma url:

var url = "www.xti.com.br/clientes-2018.html";

alert("URL antiga : " + url);

var expreReg = /www.xti.com.br\/\w{2,}-\d{4}\.html/;

alert("TESTA URL : " + expreReg.test(url));

var Corta_expreReg = /(www.xti.com.br)\/(\w{2,})-(\d{4})\.html/; // corta com ()

alert("Nova URL : " + url.replace(Corta_expreReg,"http://$1/$3/$2.php"));