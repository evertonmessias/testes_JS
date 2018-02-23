// EVENTOS DE TECLADO E FORMULARIO

	$(function () {
		
	// encapsulando todas as classes nos objetos
		
	var titulo = $('#titulo');var nome = $('#nome');var email = $('#email');var telefone = $('#telefone');var msg = $('#msg');var bt1 = $('#botao1');
	
	// usando os objetos
		
	nome.focus(function () {								// focus ou focusin
		nome.css({border:"2px solid red"});
		titulo.text(nome.attr('placeholder'));	
	}).blur(function () {									// blur ou focusout
		nome.css({border:"1px solid silver"});})
	
	email.focusin(function () {	
		email.css({border:"2px solid red"});
		titulo.text(email.attr('placeholder'));	
	}).focusout(function () {
		email.css({border:"1px solid silver"});})
	
	telefone.focusin(function () {	
		telefone.css({border:"2px solid red"});
		titulo.text(telefone.attr('placeholder'));	
	}).focusout(function () {
		telefone.css({border:"1px solid silver"});})
	
	msg.focusin(function () {	
		msg.css({border:"2px solid red"});
		titulo.text(msg.attr('placeholder'));	
	}).focusout(function () {
		msg.css({border:"1px solid silver"});})
		
	msg.keyup(function () {			// keyup , keydown
		var texto = msg.val();
		titulo.text(texto);});
		
	bt1.click(function () {	
		if(nome.val() != "")    {document.write("Nome&emsp;&emsp;:&emsp;"+nome.val()+"<br>");}
		if(email.val() != "")   {document.write("E-Mail&emsp;&ensp;:&emsp;"+email.val()+"<br>");}		
		if(telefone.val() != ""){document.write("Telefone&emsp;:&emsp;"+telefone.val()+"<br>");}
		if(msg.val() != "")     {document.write("Mensagem:&emsp;"+msg.val()+"<br>");}
		});

});	