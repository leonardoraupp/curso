const alunos = [
  { nome: "Joao", nota: 7.3, bolsista: true },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: true },
  { nome: "Ana", nota: 8.7, bolsista: true },
];

//   Desafio 1: Todos alunos são bolsistas
//#1 percorrer extrair do alunos só o atributo bolsita

//#2 percorrer bolsistas e comparar se todos são "true"

const attrBolsista = alunos.map( a => a.bolsista)
const todosBolsitas = (bolsistas, aluno) => bolsistas && aluno 

console.log(attrBolsista.reduce(todosBolsitas))

const algumBolsista = (bolsistas, aluno) => bolsistas || aluno 

console.log(attrBolsista.reduce(algumBolsista))

// const todosBolsitas2 = function (bolsistas, aluno) {
//   if (bolsistas == true && aluno == true) {
//     return true  
//   }
//   else {
//     return false
//   }  
// }
// console.log(attrBolsista.reduce(todosBolsitas2))