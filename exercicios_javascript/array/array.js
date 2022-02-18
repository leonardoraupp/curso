console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'Paulo' 
aprovados.push('Abia')  //adiciona na ultima posição
console.log(aprovados.length);

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined);

console.log(aprovados)
aprovados.sort()    //ordena os array(não altera o original)
console.log(aprovados)

delete aprovados[1]     //deleta Ana, mas sem reordenar o array, todos os elementos continuam no seus respectivos indices
console.log(aprovados[1])
console.log(aprovados[2]);

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1)   //serve para remover(exclui um elemento a partir de Carlos), se passar 2 no segundo paramento excluir dois elementos a partir de Carlos
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')        // serve para remover e em seguida adicioar outro elemento no lugar
console.log(aprovados);