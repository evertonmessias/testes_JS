// IMC

function calcular() {

var formulario = document.getElementById("formulario"); // capturar o formulario inteiro 

var peso = Number(formulario.peso.value);
var altura = Number(formulario.altura.value); // ECMA

if(peso != 0 && altura != 0){
    
var imc = peso / (altura**2); //ECMA

formulario.imc.value = `Seu IMC é: ${imc.toFixed("1").replace('.',',')}`; //ECMA

}

}