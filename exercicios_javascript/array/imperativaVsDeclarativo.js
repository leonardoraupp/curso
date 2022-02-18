// Imperativo e Declarativo são duas formas diferentes de como fazer o código
// , o imperativo está muito mais ligado a "como vamos fazer  as coisas", com
// muito mais detalhes. Já o declarativo está  ligado em "fazer fazer as coisas"
//  sem muitos detalhes, simplesmente é a melhor abordagem é o declarativo, pois
//  é mais intuitivo, usa menos código, a linguagem trabalha mais, em vez do programador,  
// é mais OBJETIVO
//  SQL é um exemplo de linguagem declarativa

const alunos = [
    {nome:"João", nota:7.9},
    {nome:"Ana", nota:9.2}
]

// imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota  
}
console.log(total1/alunos.length)

// declarativo
const nota = a => a.nota
const soma = (total, atual) => total + atual
console.log(alunos.map(nota).reduce(soma)/alunos.length)



