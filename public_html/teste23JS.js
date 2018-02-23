// DOM Document Object Model 41

window.onload = function () {

var tit;

// obtendo o elemento por id, name, class, tag ou seletor css :


tit = document.getElementById("tit_id"); // seletor id
alert(tit);

tit = document.getElementsByName("tit_name"); // seletor name
alert(tit);

tit = document.getElementsByClassName("tit_class"); // seletor Class
alert(tit);

tit = document.getElementsByTagName("h2"); // seletor tag
alert(tit);

tit = document.querySelector("#tit_id"); // seletor css
alert(tit);



// depois de obter o elemento vamos muda-lo :


tit.innerHTML = "OUTRO TEXTO"; // mudar o texto da tag


// mudar o estilo da tag (2 formas; por dom html ou por dom core):

tit.style.backgroundColor = "#0000ff"; // dom html api

//tit.setAttribute("style", "color:red"); // dom core api

}