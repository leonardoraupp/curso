// aula 2 de function factory(função fabricadora)
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }    
}
console.log(criarProduto('Sandalia', 50))
console.log(criarProduto('Notebook', 350))
console.log(criarProduto('Celular', 600))

// nesta aula aprendi a usar a função factory para retornar objetos, com  difentes valores mantendo a mesma chamada
// de função(mesma chaves mas valores difentes) a partir dos parametros,  e com um atributo por padrão(desconto)


