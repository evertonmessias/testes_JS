window.onload = function () {

    document.getElementById("botao").onclick = function () {

        function imcCalc(p, a) { // pode ser uma classe ...
            this.peso = p;
            this.altura = a;
            this.calcIMC = () => {
                if ((this.peso >= 20 && this.peso <= 200) && (this.altura >= 1 && this.altura <= 2.5)) {
                    return (this.peso / (Math.pow(this.altura, 2))).toFixed(0);
                } else { return "Dados incorretos!" }
            }
            this.condicao = () => {
                if (this.calcIMC() <= 17) { return "Muito abaixo"; }
                else if (this.calcIMC() > 17 && this.calcIMC() <= 19) { return "Abaixo do peso"; }
                else if (this.calcIMC() > 19 && this.calcIMC() <= 25) { return "Peso Normal"; }
                else if (this.calcIMC() > 25 && this.calcIMC() <= 30) { return "Acima do peso"; }
                else if (this.calcIMC() > 30 && this.calcIMC() <= 35) { return "Obesidade Leve"; }
                else if (this.calcIMC() > 35 && this.calcIMC() <= 40) { return "Obesidade Severa"; }
                else if (this.calcIMC() > 40) { return "Obesidade Mórbida"; }
                else { return "Erro"; }
            }
        }
        var calculo = new imcCalc(Number(document.getElementById("peso").value), Number(document.getElementById("altura").value));
        document.getElementById("imc").innerHTML = `IMC = ${calculo.calcIMC()}`;
        document.getElementById("cond").innerHTML = calculo.condicao();
        console.log(calculo.peso, calculo.altura);
    }
}