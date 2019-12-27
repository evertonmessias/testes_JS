window.onload = function () {
    //Hoisting ; a engine js move todas as declarações e functions pro topo ...
    // mesmo q tenha sido declado depois de chamado MAS a atribuição permanece na mesma linha ..
    // EVITAR HOISTING ...  por causa da organização do código

    for (var i = 0; i <= 2; i++) {
        `var ex${i} = document.getElementById("ex${i}")`;
    }

    ex0.onclick = function () {
        window.location.reload();
    }
    ex1.onclick = function () {
        console.log(a);
        var a = 123; // move a declaração para o topo mas não a atribuição ...
        console.log(a);

        //console.log(b); // Cannot access 'b' before initialization
        let b = 234;
        console.log(b);
        console.log("-----------------------");
    }
    ex2.onclick = function () {
        console.log(soma(3, 4));
        function soma(x, y) { // toda function declarativa sofre Hoisting normal
            return x + y;
        }

        //console.log(soma2(3,4)); //Error: soma2 is not a function
        var soma2 = function (a, b) {  
            return a + b; // function literal sofre Hoisting como variável, só a variavel vai pro topo ..
        }
        console.log(soma2(3, 4));
        console.log("-----------------------");
    }
}