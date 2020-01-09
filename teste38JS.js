// EVENTOS DO BROWSER 

$(function () {

	$('img').on("error", function () {		
		$(this).attr("src","./semfoto.jpg");
		});
	var largura = $(window).width();var altura = $(window).height();
	$('img').width(largura).height(altura);
		
	$(window).resize(function () {		
		var largura = $(window).width();var altura = $(window).height();
		$('img').width(largura).height(altura);	
	})	
	$(window).scroll(function () {	
		$('img').fadeOut(1000);	})		});