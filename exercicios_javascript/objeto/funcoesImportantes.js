const pessoa = {
   
    nome:"Rebeca",
    idade: 3,
    peso:13
}
console.log(Object.values(pessoa))
console.log(Object.keys(pessoa))
console.log(Object.entries(pessoa))


Object.entries(pessoa).forEach(([chave, valor])=> {
    console.log(` ${chave}: ${valor}`);
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable:true,        // permite ser numerado
    writable:false,     // nao permite ser modificado 
    value: '11/01/2019'  
 
})
pessoa.dataNascimento='11/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


// Object.assign ECMAScript 2015

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const objResultante = Object.assign(dest, o1, o2)

Object.freeze(objResultante)
objResultante.c= 1324
console.log(objResultante)

 
