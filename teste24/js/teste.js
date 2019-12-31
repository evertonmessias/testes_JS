export function mensagem1(msg1){
  return `<h2>Olá Mundo</h2><h3>Você está ${msg1}</h3>`
}

export function mensagem2(msg2){
  return `<h2>Olá De Novo</h2><h3>Você DENOVO está ${msg2}</h3>`
}

export function imc(peso, altura) {
  let valor = 0;let condicao = "";
  if ((peso >= 20 && peso <= 200) && (altura >= 1 && altura <= 2.5)) {
      valor = (peso / (Math.pow(altura, 2))).toFixed(0);
  } else { valor = 0; }
  if      (valor >= 1 && valor <= 17) { condicao = "Muito abaixo"; }
  else if (valor > 17 && valor <= 19) { condicao = "Abaixo do peso"; }
  else if (valor > 19 && valor <= 25) { condicao = "Peso Normal"; }
  else if (valor > 25 && valor <= 30) { condicao = "Acima do peso"; }
  else if (valor > 30 && valor <= 35) { condicao = "Obesidade Leve"; }
  else if (valor > 35 && valor <= 40) { condicao = "Obesidade Severa"; }
  else if (valor > 40) { condicao = "Obesidade Mórbida"; }
  else { condicao = "Erro"; }
  return {valor:valor,condicao:condicao};
}
