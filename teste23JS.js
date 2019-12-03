// Seletores

window.onload = function () {

    var tit;

    // obtendo o elemento por id, name, class, tag ou seletor css :


    tit = document.getElementById("tit_id"); // seletor id
    document.write(tit+"<br>");

    tit = document.getElementsByName("tit_name"); // seletor name
    document.write(tit+"<br>");

    tit = document.getElementsByClassName("tit_class"); // seletor Class
    document.write(tit+"<br>");

    tit = document.getElementsByTagName("h2"); // seletor tag
    document.write(tit+"<br>");

    document.body.style.backgroundColor = "#ccc"; // dom html api   

}