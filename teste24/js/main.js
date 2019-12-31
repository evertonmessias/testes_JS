import * as todos from './teste'

window.onload = function () {
    var frase = "Aprendendo Módulos em JS";
    var bloco = document.getElementById("bloco");

    var txt1 = document.createElement('p');
    var txt2 = document.createElement('p'); 
    var txt3 = document.createElement('p');   

    txt1.innerHTML = todos.mensagem1(frase);
    txt2.innerHTML = todos.mensagem2(frase);
    var objetoIMC = todos.imc(103,1.77);
    txt3.innerHTML = `Seu Imc é ${objetoIMC.valor} e vc está ${objetoIMC.condicao}`;

    bloco.appendChild(txt1);
    bloco.appendChild(txt2);
    bloco.appendChild(txt3);

    console.log(todos.mensagem1(frase));
    console.log(todos.mensagem2(frase));
}
