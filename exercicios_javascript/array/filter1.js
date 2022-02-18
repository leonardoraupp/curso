// Introduzindo a função Filter
const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de Vidro", preco: 12.49, fragil: true },
  { nome: "Copo de Plástico", preco: 18.99, fragil: false },
];
// console.log(produtos.filter(function (p) {
//     return p.fragil
// }))

// Retornando produto caro e fragil

const produtoCaro = (pc) => pc.preco >= 500;
const produtoFragil = (pf) => pf.fragil;
console.log(produtos.filter(produtoCaro).filter(produtoFragil));

// observações:
/* o método filter sempre retorna os elementos de acordo com o filtro(a callback passada).
 nunca retorna mais do que o array original, pode retorna a mesma quantidade
 de elementos ou pode menos, mas não mais. O .filter() é diferente do .map() que retorna a mesma 
 quantidade de elementos, porém transformados */
