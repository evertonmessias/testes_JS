
// tipo primitivo boolean

document.write(">>> PRIMITIVO BOOLEAN <<<<br>");

var valorprimitivo = true;

document.write(valorprimitivo+"<br>");

document.write(typeof(valorprimitivo)+"<br>");


// Objeto Boolean

document.write("<br>>>> OBJETO BOOLEAN <<<<br>");

var b = new Boolean (true); // ou Boolean (1); 

document.write(b+"<br>");

document.write(typeof(b)+"<br>");


// tipo primitivo number

document.write("<br>>>> PRIMITIVO NUMBER <<<<br>");

var valor = 120.35;

document.write(valor+"<br>");

document.write(typeof(valor)+"<br>");


// Objeto Number

document.write("<br>>>> OBJETO NUMBER <<<<br>");

document.write(Number.MAX_VALUE+"<br>");

var n = new Number (125.2839475344);

document.write(n+"<br>");

document.write(typeof(n)+"<br>");

document.write(n.toFixed(5)+"<br>");

document.write(n.toExponential(2)+"<br>"); 


// tipo primitivo string

document.write("<br>>>> PRIMITIVO STRING <<<<br>");

var texto = "Documento JavaScript";

document.write(texto+"<br>");

document.write(typeof(texto)+"<br>");


// Objeto String

document.write("<br>>>> OBJETO STRING <<<<br>");

document.write(String.fromCharCode(182, 9829)+"<br>");

var s = new String ("Documento JavaScript");

document.write(s + "<br>Tamanho: " + s.length + "<br>CharAt(0): " + s.charAt(0)); // veja mais métodos em ==> https://www.w3schools.com/jsref/jsref_obj_string.asp

var re = /[aei]/;
document.write("<br>Exp.Reg [aei]: "+s.match(re)); // expressões regulares igual linux

document.write("<br>Replace: "+s.replace("Documento","DOC"));

document.write("<br>Substring 2,5: "+s.substring(2,5));

document.write("<br>Split 1: "+s.split(" ")[1]);

document.write("<br>Upercase: "+s.toUpperCase());

document.write("<br>Bold: "+s.bold() + "<br>Sobrescrito: " + s.sup() + "<br>FontColor: " + s.fontcolor("red"));  // procure não usar , não está no W3C

document.write("<br>Link: "+s.link("https://www.w3schools.com")); // procure não usar , não está no W3C