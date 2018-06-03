// Objeto Função



// Declarativa, com nome da função - mais usada desde o inicio do JS, pode ser declarada depois pois é colocada no topo

function somar (x,y) {
return x+y; // com ou sem return
}
alert(somar (1,1));



// Literal, sem nome - tem q ser declarada antes de ser chamada

var somar3 = function (x,y) {
alert(x+y);
}
somar3(3,3);
