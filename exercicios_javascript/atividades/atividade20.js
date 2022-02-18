// 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

// 1- cria uma função principal Sacar Dinheiro, que chama outros métodos, como calcularValorNota() e exibir resultadoFinal() na tela.
// 1.1 cria um metodo que decrementa o valorSaque e incrementa o contadorNota utilizando o parametros valorNota e valorSaque
// 2- cria uma função que irá rebecer o valorSaque, calcular e dará valor de notas que temos.
// 3- cria uma função que irá rebecer os contadores de notas e dará a exibição de notas utilizadas.
function sacarDinheiro(valorSaque) {
  let contadorNota100 = 0;
  let contadorNota50 = 0;
  let contadorNota10 = 0;
  let contadorNota5 = 0;
  let contadorNota1 = 0;
  valorNota = calcularValorNota(valorSaque);
//1.1
  while (valorSaque >= valorNota) {
    switch (valorNota) {
      case 100:
        valorSaque -= 100;
        contadorNota100++;
        break;
      case 50:
        valorSaque -= 50;
        contadorNota50++;
        break;
      case 10:
        valorSaque -= 10;
        contadorNota10++;
        break;
      case 5:
        valorSaque -= 5;
        contadorNota5++;
      case 1:
        valorSaque -= 1;
        contadorNota1++;
        break;
    }
    valorNota = calcularValorNota(valorSaque);
  }
  return exibirResultado(contadorNota100, contadorNota50, contadorNota10, contadorNota5, contadorNota1);
}

// 2-
function calcularValorNota(valorSaque) {
  if (valorSaque >= 100) {
    return 100;
  } else if (valorSaque >= 50) {
    return 50;
  } else if (valorSaque >= 10) {
    return 10;
  } else if (valorSaque >= 5) {
    return 5;
  } else if (valorSaque >= 1) {
    return 1;
  }
}
// -3
function exibirResultado(
  contadorNota100,
  contadorNota50,
  contadorNota10,
  contadorNota5,
  contadorNota1
) {
  if (contadorNota100 > 0) {
    console.log(`${contadorNota100} notas de  R$ 100`);
  }
  if (contadorNota50 > 0) {
    console.log(`${contadorNota50} notas de  R$ 50`);
  }
  if (contadorNota10 > 0) {
    console.log(`${contadorNota10} notas de  R$ 10`);
  }
  if (contadorNota5 > 0) {
    console.log(`${contadorNota5} notas de  R$ 5`);
  }
  if (contadorNota1 > 0) {
    console.log(`${contadorNota1} notas de  R$ 1`);
  }
}
sacarDinheiro(250)
