// EVENTOS DO MOUSE

$(function () {var ex = $(".ex1");var a = 0;
	
	//click
	$(".ev1").click(function () {
		$(this).css({backgroundColor:"yellow"});
		ex.text("Você Clicou!!");	});
	
	//double click	
	$(".ev2").dblclick(function () {
		$(this).css({backgroundColor:"red"});
		ex.text("Você deu dois cliques!!");		});
	
	// focusin / focusout	
	$(".ev3").focusin(function () {
		$(this).css({backgroundColor:"blue"});
		ex.text("Você deu Foco!!");	
	}).focusout(function () {
		$(this).css({backgroundColor:"#fff"});
		ex.text("Você Tirou o Foco!!");});
		
	// hover / mouseout	
	$(".ev4").hover(function () {
		$(this).css({backgroundColor:"green"});
		ex.text("Mouse em cima!!");	
	}).mouseout(function () {
		$(this).css({backgroundColor:"silver"});
		ex.text("Tirou o mouse!!");});
		
	// mousedown / mouseup	
	$(".ev5").mousedown(function () {
		$(this).css({backgroundColor:"orange"});
		ex.text("Clicou!!");	
	}).mouseup(function () {
		$(this).css({backgroundColor:"blue"});
		ex.text("Desclicou!!");});
		
	// mouseenter / mouseout	
	$(".ev6").mouseenter(function () {
		$(this).css({backgroundColor:"orange"});
		a +=1;
		ex.text("Entradas do Mouse: "+a);	
	}).mouseout(function () {
		$(this).css({backgroundColor:"blue"});
		ex.text("SAIU !!!");});

	//mousemove	
	$(".ev7").mousemove(function (move) {
		var localx = move.pageX;var localy = move.pageY;
		$(this).css({backgroundColor:"yellow"});
		ex.text("Movimento X: "+ localx + ", Movimento Y: "+localy);	});	});