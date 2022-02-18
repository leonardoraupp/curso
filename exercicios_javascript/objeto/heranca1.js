const ferrari = {
    modelo: 'F40',
    velMax: 324
}
const volvo = {
    modelo:'V40',
    valMax:200
}

console.log(ferrari.__proto__=== Object.prototype)
console.log(volvo.__proto__=== Object.prototype)
console.log(Object.prototype.__proto__)

function meuObj() {}
console.log(typeof Object, typeof meuObj)
console.log(Object, meuObj)
