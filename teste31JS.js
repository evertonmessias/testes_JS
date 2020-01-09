// IMC com JQuery

$(function () {

$("#botao").click(function () {

var peso = $("#peso").val();

var altura = $("#altura").val();

var imc = (peso / (Math.pow(altura,2))).toFixed(1);

$("#imc").val(imc).css({"fontWeight":"bold","color":"red"});

});

})

