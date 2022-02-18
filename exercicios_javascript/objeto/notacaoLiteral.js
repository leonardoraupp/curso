const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}         // antigamente fazia assim para acessar a variaveis no objeto
const obj2 = {a, b, c}                  // atualmente consegue fazer o mesmo mais simples 

console.log(obj1,obj2)      //os dois geram a mesma saida no console


                        //   para concatenar variaveis diferentes em um objeto, jeito antigo x jeito novo
const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr]= valorAttr
console.log(obj3)               //jeito antigo

const obj4 = {[nomeAttr]:valorAttr}
console.log(obj4)               // jeito novo


                                    // O jeito de criar function expression dentro dos objetos, também mudou, o método 2 é mais simples e atual, ambos dão a mesma saida no console.
const obj5 = {
    funcao1: function() {
        //...
    },
    funcao2() {
        //...
    }
}

console.log(obj5)