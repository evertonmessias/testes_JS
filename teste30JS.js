// JQuery

$(function () {

$("#menu").css({"color":"red", "fontSize":"20px", "background-color":"silver"});

$(".titulo").addClass("novaclasse");

$("h1").text("NOVO SITE");


var pessoas = ["eu","tu","ele","nos"];

$.each(pessoas, function (index, item) {
alert(item);})

})