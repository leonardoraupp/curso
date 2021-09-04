// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

function juroSimples(capitalInicial, taxaJuro, tempoAplicacao) {    
   return capitalInicial + (capitalInicial * taxaJuro * tempoAplicacao)
}

function juroComposto(capitalInicial, taxaJuro, tempoAplicacao) {
    return capitalInicial * (1 + taxaJuro) ** tempoAplicacao    
}    
console.log(juroSimples(500, 10/100, 2))
console.log(juroComposto(500, 10/100, 2))
// M = C (1 + i) t