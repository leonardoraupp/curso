// vamos ver duas funções, call e apply, que são maneiras diferentes de invocar(chama=lá) um função

function getPreco(imposto = 0,  moeda = 'R$') {
    return `${moeda} ${(this.preco) * (1 - this.desc) * ( 1 + imposto)}`
}
    
const produto = {
    nome: 'Notebook',
    preco: 2000,
    desc: 0.15,
    getPreco //chama o método getPreco diretamente dentro do produto
}
global.preco = 20
global.desc = 0.1
console.log(getPreco()) //pode chamar o metodo a partir da variavel global
console.log(produto.getPreco()) //pode chamar a partir do produto

const carro = { preco: 49990, desc: 0.20 }

 console.log(getPreco.apply(carro)) //invocando  por apply
 console.log(getPreco.call(carro)) //invocando pot call

// invocar por apply é um pouco diferente do que por call, muda o contexto em relação a passagem dos parametros

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$']))



