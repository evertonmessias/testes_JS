function enviar() {
	var form1 = document.getElementById("form1"); 
	if (form1.rg.value == '' || form1.cep.value == '' || form1.data.value == '' || form1.tel.value == '' || form1.cpf.value == ''/* || form1.cnpj.value == ''*/) {
		alert("DADOS INCORRETOS");
		return false;}
		
	else {
		alert("ENVIADO COM SUCESSO");
		document.write("<br><br>");
		document.write("RG&nbsp;&nbsp;:&nbsp;" + form1.rg.value + "<br>");
		document.write("Mail:&nbsp;" + form1.mail.value + "<br>");
		document.write("CEP&nbsp;:&nbsp;" + form1.cep.value + "<br>");
		document.write("Data:&nbsp;" + form1.data.value + "<br>");
		document.write("Cel&nbsp;:&nbsp;" + form1.tel.value + "<br>");
		document.write("CPF&nbsp;:&nbsp;" + form1.cpf.value + "<br>");

		}	
}