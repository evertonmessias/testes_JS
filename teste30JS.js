// JQuery

$(function () {

    $(".texto").click(function(){
        $(this).html("JQUERY").css({
            "width":"600px",
            "color":"red", 
            "fontSize":"80px", 
            "background-color":"silver"
        });
    });

    $(".texto").hover(function(){
        $(".balao").addClass("novaclasse");
    });
    $(".texto").mouseout(function(){
        $(".balao").removeClass("novaclasse");
    });



})