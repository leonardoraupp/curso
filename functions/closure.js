// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função.

// Contexto léxico em ação!
const x = 'Global'
 
function fora() {
    const x ='Local'
    function dentro() {
        return x         
    }    
    return dentro
}
const minhaFuncao = fora()
console.log(minhaFuncao())

// nesse caso o a variavel x delcarada retornada foi a de dentro do escopo
//  da function(closure), ou seja as function priorizam variáves declaradas
//  dentro do seu contexto léxico.
