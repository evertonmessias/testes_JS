// Objeto Função

// Declarativa, com nome da função - mais usada desde o inicio do JS, pode ser declarada depois pois é colocada no topo

function somar (x,y) {
return x+y; // com ou sem return
}
document.write(somar (1,1)+"<br>");

// Literal, sem nome - tem q ser declarada antes de ser chamada

var somarr = function (x,y) {
document.write(x+y);
}
somarr(3,3);
