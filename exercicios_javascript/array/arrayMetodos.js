const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()       // deleta o ultimo elemento
console.log(pilotos);

pilotos.push('Verrstapen')      //adiciona um  elemento na ultima posição
console.log(pilotos);

pilotos.shift()     //remove o primeiro
console.log(pilotos);

pilotos.unshift('Hamilton')     //adiciona na um elemento primeiro posição
console.log(pilotos)  

// splice serve para adicionar e remover elementos
// adicionar
pilotos.splice(2, 0, "Bottas", 'Massa')
console.log(pilotos);
//remover
pilotos.splice(3, 1) // remover a partir do index 3, 1 elemento(Massa)
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2)  //gera um novo Array(a partir do indice 2)
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4) // também gera um novo array, pega todos os elementos a partir do index 1 até o 4 sem incluir o 4
console.log(algunsPilotos2);