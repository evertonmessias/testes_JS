// Objeto Função
window.onload = function () {
    for (var i = 0; i <= 20; i++) {
        `var f${i} = document.getElementById("f${i}");`
    }
    var lista = [1, 2, 3, 4, 5];

    f0.onclick = function () {
        window.location.reload();
    }

    f1.onclick = function () {
        function somar(numeros) { // Declarativa, com nome da função
            var total = 0;
            for (var indice in numeros) { // in pega o indice
                total += numeros[indice];
            }
            return total;
        }
        console.log(somar(lista));
        console.log('------------------');
    }

    f2.onclick = function () {
        var multiplicar = function (numeros) { // Literal, sem nome
            var total = 1;
            for (var num of numeros) { // of pega o valor (ECMA6)
                total *= num;
            }
            return total;
        }
        console.log(multiplicar(lista));
    }

    f3.onclick = function () {

        function escreverDados(nome, idade, ...etc) { // parâmetro Rest (...)
            console.log(nome); console.log(idade);
            //console.log(etc); // Array
            for (var lista of etc) {
                console.log(lista);
            }
        }
        escreverDados('eu', '43', 'asdf', 'dddd', 'xxx', 'ccc', 'oiii');
        console.log('------------------');
    }

    f4.onclick = function () {

        (function (nome) { // função Auto Executável , com ou sem nome..
            console.log(`Nome: ${nome}`);
        }('Everton'))
        console.log('------------------');
    }

    f5.onclick = function () {

        var multiplica = function (n) {
            return n * 2;
        }
        function somaCallback(a, b, funcao) { // função Callback - recebe outra função como parâmetro
            return funcao(a + b);
        }
        console.log(somaCallback(4, 6, multiplica));
        console.log('------------------');
    }

    f6.onclick = function () {  // função com valor padrão

        function inform(nome = 'Everton', idade = '43') {
            console.log(`Nome: ${nome} , idade: ${idade}`);
        }
        inform(); // se nda for passado assume o valor padrão ..
        console.log('------------------');
    }

    f7.onclick = function () {   //palavra reservada this
        function teste() {  
            console.log(this); 
        }
        new teste(); // aqui retorna a propria function
        teste(); // aqui retorna window
        console.log('------------------');
    }

    f8.onclick = function () {  // operador new
        /*class elementos {
            constructor() {
                this.nome = 'Everton';
                this.idade = 43;
                this.soma = function (a, b) {
                    return a + b;
                };
            }
        }*/
        function elementos() { // Como uma Class
            this.nome = 'Everton';
            this.idade = 43;
            this.soma = function (a, b) {
                return a + b;
            }
        }
        var aluno = new elementos();
        console.log(aluno.nome);
        console.log(aluno.soma(3, 4));
        console.log('------------------');
    }
    f9.onclick = function () {  // modificadores do this

        var n=3;
        function quadrado(){  // call modifica o this, sem parametro
            return this*this;
        }
        console.log(`O quadrado de ${n} é ${quadrado.call(n)}`); 

        // --------
        var objetoDados = {
            nome: 'Everton',
            idade: 43
        }
        /*function aluno(x){
            console.log(x);
        }
        aluno(objetoDados);*/

        function aluno(sexo,arrayfisico) {            
            console.log(this);
            console.log(sexo,arrayfisico);
        }
        //parametro this deve vir antes
        aluno.call(objetoDados,'Masculino',[105,1.77]); // call passa um por vez
        aluno.apply(objetoDados,['Masculino',[105,1.77]]); // apply passa tudo por array       
        var saida = aluno.bind(objetoDados,'Masculino',[105,1.77]); 
        // bind igual call mas não invoca , retorna outra função
        saida();
        console.log('------------------');        
    }
    f10.onclick = function () {
        var soma1 = (a,b) => { // Arrow function
            return a+b;
        }
        var soma2 = (x,y) => x + y;
        
        console.log(soma1(5,4));
        console.log(soma2(6,5));

        var userr = cidade => ({nome:'Everton',idade:43,cidade}); // (cidade)
        console.log(userr('Campinas'));

        // OBS.: Arrow function não trabalha com this !!!

        console.log('------------------');
    }
}