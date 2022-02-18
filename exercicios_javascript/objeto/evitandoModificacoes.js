// Object.preventExtensions 
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco:1.99, tag:'Promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'   // vai ignorar a adição desse atributo
delete produto.tag      // nesse método é possível deletar
console.log(produto)

// Object.seal(selar)
const pessoa = { nome:"Juliana", idade:25}
Object.seal(pessoa)
console.log("Selado:", Object.isSealed(pessoa));

pessoa.sobrenome ="Silva"  // no seal não é permitido adicionar atrr
delete pessoa.nome      //  no seal não é permitido deletar atrr
pessoa.idade = 39
console.log(pessoa)

// Object.freeze = selado + valores constantes 



