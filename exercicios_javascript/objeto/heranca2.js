// Cadeia de protótipos  (Prototype chain)
Object.prototype.attr0= '0'
const avo = {attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B', attr3:'3'}
const filho = {__proto__: pai, attr3:'C'}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)


const carro = {
    velAtual: 0,
    velMax: 200,    
    acelerarMais(delta){
        
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta            
        }
        else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return`${this.velAtual} Km/h de ${this.velMax} Km/h`
    }    
}

const ferrari = {
    modelo: "F40",
    velMax:324      // shadowing 
}

const volvo = {
    modelo:"V40",  
    status() {
        console.log(`${this.modelo}: ${super.status()}`)     // usa o super para chamar o método status do seu protótipo(carro), ou seja não o metodo atual
    }
}
Object.setPrototypeOf(ferrari, carro)   
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
volvo.status()

ferrari.acelerarMais(400)
console.log(ferrari.status())
    




    // console.log(ferrari.__proto__ ===carro)
    // console.log(volvo.__proto__ ===carro)

