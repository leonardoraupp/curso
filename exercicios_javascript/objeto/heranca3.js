const pai = { nome:'Pedro', corCabelo:'Preto' }

filha1 = Object.create(pai)     // cria o objeto filha já setando pai como protótipo
filha1.nome= "Ana"
console.log(filha1.corCabelo)

filha2 = Object.create(pai, {               // cria o objeto filha já configurando opções do atributo e setando pai como protótipo
    nome:{ value:'Bia', writable:false, enumerable:true}   

}) 
console.log(filha2.nome)
filha1.nome = 'Luana'             
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

for(let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Recebido por herança ${key}`)

}