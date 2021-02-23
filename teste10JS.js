window.onload = function () {
    for (let i = 0; i <= 4; i++) {
        `var ex${i} = document.getElementById("ex${i}")`;
    }
    ex0.onclick = function(){
        window.location.reload();
    }
    // Escopos    
    ex1.onclick = function () {
        // Escopo Global
        variavelWindowGlobal = "Evite usar Variavel super Global no Window";
        console.log(variavelWindowGlobal);
        console.log(window.variavelWindowGlobal);
        var variavelGlobal = "Var Global pode ser vista em qualquer Function";
        console.log(variavelGlobal);
        function imprimiVarGlobal(){
            console.log(variavelGlobal);
        }
        imprimiVarGlobal();
        console.log("-----------------");
    }
    ex2.onclick = function () {
        // Escopo Local
        function imprimiVarLocal(){
            var variavelLocal = "Valor da Variavel Local";
            console.log(variavelLocal);
        }
        imprimiVarLocal();
        console.log(variavelLocal); // Aqui dá erro; Não definida
        console.log("-----------------");
    }
    ex3.onclick = function () {
        // Escopo Dinâmico
        function imprimiThis(){
            return `Valor do This: ${this}`;
        }
        console.log(imprimiThis());
        console.log(imprimiThis.call("Oiiii")); // call modifica o this em tempo de execução
        console.log("-----------------");
    }
    ex4.onclick = function () {
        // Escopo de Bloco
        // Obs.: Let não permite ser REDECLARADA
        if (true){
            var valorVar = "Variavel VAR";
            let valorLet = "Variavel LET";
            console.log(valorVar);
            console.log(valorLet);
        }
        console.log(valorVar);
        console.log(valorLet);// Aqui dá erro; Não definida
        console.log("-----------------");
    }
}