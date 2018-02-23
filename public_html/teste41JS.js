// Slide Show
$(function () {var i=0;

	$('#slide img:eq(0)').addClass('ativo').show(); // encapsula o 1º filho
	var texto = $('#slide img:eq(0)').attr('alt');
	$('#slide p').text(texto);	
	setInterval(slide,3000);
	
	function slide() {
		if (i < 3) {			
			$('.ativo').fadeOut().removeClass('ativo').next().fadeIn().addClass('ativo');i++;}
		
		else {
			$('.ativo').fadeOut().removeClass('ativo');
			$('#slide img:eq(0)').fadeIn().addClass('ativo');i=0;}
		
		texto = 	$('.ativo').attr('alt');
		$('#slide p').hide().text(texto).delay(500).fadeIn();}	});

















