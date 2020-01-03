
/*
PROMISSES
Pendente, Realizada, Rejeitada, Estabelecida
*/

console.log("primeiro");

setTimeout(function () {
    console.log("Time - segundo")
}, 0);

console.log("terceiro");


function jaRealizada() {
    return Promise.resolve()
}

jaRealizada().then(() => {
    console.log("Promisse");
})

