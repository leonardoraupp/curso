// 11) As regras para o cálculo dos anos bissextos são as seguintes:
// De 4 em 4 anos é ano bissexto; === ex: ano % 4 == 0
// De 100 em 100 anos não é ano bissexto; ===  ex: ano % 100 == 0
// De 400 em 400 anos é ano bissexto; === ex: ano % 400 == 0
// Prevalecem as últimas regras sobre as primeiras.
// Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
// mensagem e retornando true ou false.

function anoBissexto(ano) {
  if (ano == 0) {
    return console.log("Ano inválido");
  } else if (ano % 400 == 0) {
    return console.log(true);
  } else if (ano % 100 == 0) {
    return console.log(false);
  } else {
    return console.log(true);
  }
}
anoBissexto(0);
anoBissexto(4);
anoBissexto(100);
anoBissexto(400);
anoBissexto(800);
anoBissexto(2020);
anoBissexto(2021);
console.log("Acaba a minha funcao aqui");

// jeito do professor
function calcularAnoBissexto(ano) {
  if (ano <= 0) { 
    return false;
  } else if (ano % 400 == 0) {
    return true;
  } else if (ano % 100 == 0) {
    return false;
  } else if (ano % 4 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(calcularAnoBissexto(0));
console.log(calcularAnoBissexto(4));
console.log(calcularAnoBissexto(100));
console.log(calcularAnoBissexto(400));
console.log(calcularAnoBissexto(800));
console.log(calcularAnoBissexto(2020));
console.log(calcularAnoBissexto(2021));
// console.log(calcularAnoBissexto(2012))
// console.log(calcularAnoBissexto(2016))
// console.log(calcularAnoBissexto(2400))
