
function Pessoa(nome) {
    this.nome= nome 
        this.falar = function () { 
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
const p2 = new Pessoa('Leo')
p1.falar()
p2.falar()
            

    
