
// pessoa -> 123 -> {...}
const pessoa = {nome:'João'} 
pessoa.nome = 'Pedro'
console.log(pessoa)             // explicando: a gente consegue mudar o atributo do ojeto, que está em um endereço de memoria, mudamos apenas o atributo, não geramos um novo endereço de memoria

// pessoa -> 456 -> {...}
// pessoa = {nome:'Ana'}
// console.log(pessoa)         // nesse caso da um erro, pois queremos mexer no endereço em que a constante aponta, ou seja, criar outro atributo, fazendo com que a const pessoa aponte para outro endereço de memoria

Object.freeze(pessoa)           // o freeze é uma função Objeto que congela os atributos de uma objeto, deixa-o cosntante, não podemos mais alterar, deletar nem adcionar os atributos, nem adicionar
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)


const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'          // permacene congelado em João
console.log(pessoaConstante)


