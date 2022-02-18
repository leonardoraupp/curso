// function factory
// conceito: resumindo é uma função que retorna objetos

function criaPessoa() {
    return {
        nome: 'Ana',
        sobrenome:'Silva'
    }    
}
console.log(criaPessoa())