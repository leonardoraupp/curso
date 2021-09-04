// 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false.

function divisivelPor3(numero) {
  if (numero % 2 == 1) {
    return console.log(`${numero}:True`);
  } else {
    return console.log(`${numero}:False`);
  }
}
divisivelPor3(3);
divisivelPor3(2);
divisivelPor3(150);

// jeito do professor
function verificaNumero(numero) {
  if (numero % 3 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaNumero(3))
console.log(verificaNumero(2))
console.log(verificaNumero(150))
