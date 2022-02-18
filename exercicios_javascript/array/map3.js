Array.prototype.map2 = function (callback) {
  const newArray = []   // cria um no array para adicionar os elementos modificados nele   
  for (let i = 0; i < this.length; i++) {   // percorre o array original     
    newArray.push(callback(this[i], i, this));  // aplica a função de transformar "para cada elemento percorrido" e adicionas os elementos no novo array(.push())
  return newArray;
}};
/*
this[i] = referencia cada elemento do array original
i = o indice do array
this = o array
*/
const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno ", "preco": 13.90 }',
  '{ "nome": "Kit de lápis ", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }',
];
// Retornar o array somente com os preços
const paraObjeto = (json) => JSON.parse(json);
const apenasPreco = (produto) => produto.preco;

resultado = carrinho.map2(paraObjeto).map(apenasPreco)
console.log(resultado)
