/*

// tipo primitivo boolean

alert(">>> PRIMITIVO BOOLEAN <<<");

var valorprimitivo = true;

alert(valorprimitivo);

alert(typeof(valorprimitivo));


// Objeto Boolean

alert(">>> OBJETO BOOLEAN <<<");

var b = new Boolean (true); // ou Boolean (1); 

alert(b);

alert(typeof(b));


// tipo primitivo number

alert(">>> NUMBER <<<");

var valor = 120.35;

alert(valor);

alert(typeof(valor));


// Objeto Number

alert(Number.MAX_VALUE);

var n = new Number (125.2839475344);

alert(n);

alert(typeof(n));

alert(n.toFixed(5));

alert(n.toExponential(2)); 

*/

// tipo primitivo string

alert(">>> STRING <<<");

var texto = "Documento JavaScript";

alert(texto);

alert(typeof(texto));


// Objeto String

document.write(String.fromCharCode(182, 9829));
document.write("<br>");

var s = new String ("Documento JavaScript");

document.write(s + "<br>" + s.length + "<br>" + s.charAt(0) + "<br>"); // veja mais métodos em ==> https://www.w3schools.com/jsref/jsref_obj_string.asp

var re = /[aei]/;document.write(s.match(re) + "<br>"); // expressões regulares igual linux

document.write(s.replace("Documento","DOC") + "<br>");

document.write(s.substring(2,5) + "<br>");

document.write(s.split(" ")[1] + "<br>");

document.write(s.toUpperCase() + "<br>");

document.write(s.bold() + "<br>" + s.sup() + "<br>" + s.fontcolor("red") + "<br>");  // procure não usar , não está no W3C

document.write(s.link("https://www.w3schools.com")); // procure não usar , não está no W3C