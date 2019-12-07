var dados = {
    nome : "Everton",    
    idade : 43,
    peso: 102,
    engordar(p){
        console.log("Engordou!");
        this.peso += p;
    }	
};

for (var lista in dados){
console.log(lista +" : "+ dados[lista]);
}

console.log(`Nome: ${dados.nome}, Idade: ${dados.idade}, Peso: ${dados.peso}`);
dados.engordar(8);
console.log(`Nome: ${dados.nome}, Idade: ${dados.idade}, Peso: ${dados.peso}`);




