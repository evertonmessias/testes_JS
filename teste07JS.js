// IMC

function calcular() {

var formulario = document.getElementById("formulario"); // capturar o formulario inteiro 

var peso = parseFloat(formulario.peso.value); // tratar como objetos selecionando com o name .. mto melhor !!
var altura = parseFloat(formulario.altura.value);

var imc = peso / (altura * altura);

formulario.imc.value = imc.toFixed("1") ;

}