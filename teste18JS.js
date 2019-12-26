window.onload = function () {
    //Var; pode redeclarar e reatribuir
    //Let; não pode redeclarar mas pode reatribuir
    //Const; não pode redeclarar e nem reatribuir (exceto qdo arrays e objetos)

    const dtNasc = '1976';
    console.log(dtNasc);
    //dtNasc = "Nova data"; // Aqui da erro , não pode reatribuir...
    if (true) {
        const nome = "Everton"; // assim como let , const só vale no bloco..
        console.log("Nome:", nome);
    }
    //console.log("Nome:" , nome); // Aqui vai dar um erro ... 

    const objeto = { nome: 'Everton', idade: '43' }
    console.log(objeto);
    objeto.nome = 'Dhora';
    objeto.idade = '47';
    console.log(objeto);
    delete objeto.idade;
    console.log(objeto);

    console.log("----------------");

}