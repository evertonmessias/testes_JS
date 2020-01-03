/* PROMISSES ; Pendente, Realizada, Rejeitada, Estabelecida */

// https://viacep.com.br/ws/13101014/json

var cep = '13101014'

window.fetch('https://viacep.com.br/ws/' + cep + '/json')
    .then((data) =>
        data.json()
            .then((endereco) => console.log(endereco))
            .catch(() => console.log("Erro"))
    )