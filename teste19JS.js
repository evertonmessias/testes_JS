window.onload = function () {
    //Closures
    for (var i = 0; i <= 3; i++) {
        `var ex${i} = document.getElementById("ex${i}")`;
    }

    ex0.onclick = function () {
        window.location.reload();
    }

    ex1.onclick = function () {
        // Lembrança :
        function imprimiNome() {
            let nome = "Everton"; //Escopo externo
            return function () {
                return nome; // Escopo interno
            }
        }
        //console.log(nome); // aqui nda retorna
        console.log(imprimiNome());
        var imprimi = imprimiNome();
        console.log(imprimi());
        console.log("-----------------");
    }
    ex2.onclick = function () {
        //Função Auxiliar
        function minhasContas() {
            function auxiliar(valor) { // função escondida (privada)
                return 10 + valor;
            }
            return {                   // publicas 
                add5() {
                    return auxiliar(5)
                },
                add7() {
                    return auxiliar(7)
                }
            }
        }
        var contas = minhasContas();
        console.log(contas.add5());
        console.log(contas.add7());
        console.log(contas.auxiliar(10)); // aqui da erro , inacessível 
        console.log("-----------------");
    }
    ex3.onclick = function () {
        function imprimiNome(nome) {
            console.log("(aqui a execução é instantânea)...");
            return function () { // função auxiliar para retorno com o tempo ...
                console.log(nome, "Messias");
            }
        }
        function inicializa(){
            console.log("Aguarde o Nome em 2 segundos:");
            let pessoa = "Everton";
            setTimeout(imprimiNome(pessoa),2000);
        }
        inicializa();

    }
}