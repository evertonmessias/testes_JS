/* PROMISSES ; Pendente, Realizada, Rejeitada, Estabelecida */

// https://viacep.com.br/ws/13101014/json

 window.fetch('https://viacep.com.br/ws/13101014/json')
.then(function(data){
    data.json().then(function(endereco){
        console.log(endereco)
    })})