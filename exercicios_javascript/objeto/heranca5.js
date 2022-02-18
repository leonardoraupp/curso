console.log(String)
console.log(Array)
console.log(Object)

// adicionando um novo método no prototype da função String

String.prototype.reverse = function() {
    return this.split('').reverse().join(' ')
}
console.log('Leonardo'.reverse())

// adicionando um novo método first no prototype da função Array
Array.prototype.first = function () {
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a', 'b', 'c','d'].first())


// Cuidado, não mexer em funções que ja estão presentes no prototipo(trazidas pela API JS), geram efeitos colaterais 

String.prototype.toString = function () {
    return `Escola coder`
    
}
console.log('Leonardo'.reverse())   // efeito colateral, nao inverteu minha string, mas sim a do metodo acima 
