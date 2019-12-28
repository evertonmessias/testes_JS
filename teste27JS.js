window.onload = function () {
    for (var i = 0; i <= 4; i++) {
        `var ex${i} = document.getElementById("ex${i}")`;
    }
    ex0.onclick = function () {
        window.location.reload();
    }
    const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    ex1.onclick = function () {
        let quadrado = [];
        // MAP
        /*
        for (let i=0; i<num.length; i++){
            quadrado.push(num[i]*num[i]);
        }*/
        quadrado = num.map(function (n) {
            return n * n;
        });
        // quadrado = num.map(n=>n*3); // Arrow
        console.log(num);
        console.log("Quadrado: ", quadrado);
        console.log("--------------------");
    }
    ex2.onclick = function () {
        let pares = [];
        //Filter
        /*
        for (let i = 0; i < num.length; i++) {
            if (num[i] % 2 == 0) {
                pares.push(num[i]);
            }
        }*/
        pares = num.filter(n => n % 2 == 0);
        /*pares = num.filter(function(n){
            return n%2==0;
        });*/
        console.log(num);
        console.log("Pares: ", pares);
        console.log("--------------------");
    }
    ex3.onclick = function () {
        let paresQuadrados;
        // Filter + Map
        paresQuadrados = num
            .filter(n => n % 2 == 0)
            .map(n => n * n);
        console.log(num);
        console.log("Pares Quadrados: ", paresQuadrados);
        console.log("--------------------");
    }
    ex4.onclick = function () {
        let soma;
        /*
        soma = 0;
        for (let i=0;i<num.length;i++){
            soma += num[i];
        }*/
        soma = num.reduce(function(acumulador,n){
            return acumulador + n;},0);
        console.log("Soma: ",soma);        
        console.log("--------------------");

        const pessoas = [
            {
                nome: 'Everton',
                idade: 43
            },
            {
                nome: 'Dhora',
                idade: 47
            },
            {
                nome: 'Erika',
                idade: 23
            },
            {
                nome: 'Isabela',
                idade: 5
            },
            {
                nome: 'Arthur',
                idade: 1
            }            
        ];

        var pessoasAgrupadas = pessoas.reduce(function(acumulador,n){
            const propMaiorMenor = n.idade >= 18?'maiores':'menores';
            acumulador[propMaiorMenor].push(n);
            return acumulador;
        },{maiores:[],menores:[]});
        console.log("Pessoas Agrupadas: ",pessoasAgrupadas);        
        console.log("--------------------");
    }
}