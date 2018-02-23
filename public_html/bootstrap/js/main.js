
(function ($) {
    "use strict";

	 var form = document.getElementById("form");
	 var resp = document.getElementById("resposta");

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
            else {calcular();}
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        
            if(form.tmeses.value == 0 || form.tjuros.value == 0 || form.tvalor.value == 0) {
                return false;
            }
        
        
            if($(input).val().trim() == ''){
                return false;
            }}
       
// ========================= CALCULADORA ===================================================== 
      
      function calcular() {
      	
      	var n,a,b,vf;
      	
      	var n = parseFloat(form.tmeses.value);
      	
      	var j = parseFloat(form.tjuros.value);
      	
      	var p = parseFloat(form.tvalor.value);
      	
      	j = j/100;
      	n = n*(-1);
      	a = 1+j;
      	b=Math.pow(a, n);
      	vf = ((1-b)*p)/j;    	
      	
      	resp.innerHTML = vf.toFixed(2) ;}        
    
    
// =================================== alerts validate =========================================    

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
})(jQuery);