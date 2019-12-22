window.onload = function () {

    var botao = document.getElementById("botao");
    var imc = document.getElementById("imc");
    var resp = document.getElementById("cond");

    botao.onclick = function () {

        var peso = Number(document.getElementById("peso").value);
        var altura = Number(document.getElementById("altura").value);

        var dados = {
            peso, altura,
            calcIMC() {
                if ((this.peso >= 20 && this.peso <= 200) && (this.altura >= 1 && this.altura <= 2.5)) {
                    return ( this.peso / (Math.pow(this.altura, 2))).toFixed(0);
                } else { return "Dados incorretos!" }
            },
            condicao() {
                if (this.calcIMC() <= 17) { return "Muito abaixo"; }
                else if (this.calcIMC() > 17 && this.calcIMC() <= 19) { return "Abaixo do peso"; }
                else if (this.calcIMC() > 19 && this.calcIMC() <= 25) { return "Peso Normal"; }
                else if (this.calcIMC() > 25 && this.calcIMC() <= 30) { return "Acima do peso"; }
                else if (this.calcIMC() > 30 && this.calcIMC() <= 35) { return "Obesidade Leve"; }
                else if (this.calcIMC() > 35 && this.calcIMC() <= 40) { return "Obesidade Severa"; }
                else if (this.calcIMC() > 40) { return "Obesidade Mórbida"; }
                else {return "Erro";}
            }                       
        };
        console.log(peso,altura);              

        imc.innerHTML = `IMC = ${dados.calcIMC()}`;
        resp.innerHTML = dados.condicao();
    }
}