const alunos = [
  { nome: "Joao", nota: 7.3, bolsista: true },
  { nome: "Maria", nota: 9.2, bolsista: false },
  { nome: "Pedro", nota: 9.8, bolsista: true },
  { nome: "Ana", nota: 8.7, bolsista: false },
];

const resultado = alunos.map(a => a.nota).reduce(function(aculamulador, atual) {
    console.log("valor de antes:", aculamulador, "valor atual:", atual)
   return aculamulador + atual
 }, 0)
console.log(resultado)

// Explicação do reduce() 
// O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.