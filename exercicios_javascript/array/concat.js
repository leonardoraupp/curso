// método para concatenar arrays ou elementos, passados por paramentos, em um array final, ele não mexe nos arrays originais.

const filhas = ['Ualeskah', 'Cibalena'] 
const filhos = ['Uoxiton', 'Uesclei'] 
const todos = filhas.concat(filhos)
console.log(todos, filhas, filhos)

// iniciando uma um array, e passando 4 parametros para concatenar.(2 arrays, direto um elemento e passando uma matriz)
console.log([].concat([1,2], [3, 4], 5, [[6, 7]]))
