// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function Expoente(base, expoente) {
console.log(`Base: ${base}`)
console.log(`Expoente ${expoente}`)
console.log(`Resultado: ${base ** expoente}`)    
}
// Expoente(5,5)
// Expoente(5,5)
Expoente(100,5)

// jeito do professor
function expoente(base, expoente) {
    // Podemos fazer de 2 modos
    // Metodo antigo:
    let Resultado = Math.pow(base,expoente)
    // Metódo novo:
    resultado = base ** expoente
    return resultado
}
console.log(expoente(100, 5))