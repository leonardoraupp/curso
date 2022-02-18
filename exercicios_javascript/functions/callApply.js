// vamos ver duas funções, call e apply, que são maneiras diferentes de invocar(chama=lá) uma função

function getPreco(imposto = 0,  moeda = 'R$') {
    
    return `${moeda} ${(this.preco) * (1 - this.desc) * ( 1 + imposto)}`
}
    
const produto = {
    nome: 'Notebook',
    preco: 2000,
    desc: 0.15,
    getPreco        //chamada getPreco diretamente dentro do produto
}
//chamada a apartir do objetivo global
global.preco = 20
global.desc = 0.1
console.log(getPreco())         

 // chamada do método a partir de um objeto
console.log(produto.getPreco()) 

const carro = { preco: 49990, desc: 0.20 }

// usa o apply e call mas não passa parametros para  getPreco 
console.log(getPreco.apply(carro)) 
 console.log(getPreco.call(carro)) 

 // invocar por apply vs call, muda o contexto em relação a passagem dos parametros(apply usa array e call não)

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$']))



