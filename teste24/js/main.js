import * as todos from './teste'

window.onload = function () {
    var frase = "Aprendendo Módulos em JS";
    var bloco = document.getElementById("bloco");

    var txt1 = document.createElement('p');
    var txt2 = document.createElement('p');    

    txt1.innerHTML = todos.mensagem1(frase);
    txt2.innerHTML = todos.mensagem2(frase);

    bloco.appendChild(txt1);
    bloco.appendChild(txt2);

    console.log(todos.mensagem1(frase));
    console.log(todos.mensagem2(frase));
}
