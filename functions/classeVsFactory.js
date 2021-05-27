// classe(conhecida como class) nada mais é que um função(contrutora)

class Pessoa {
    constructor(nome) {
        this.nome= nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('João')
const p2 = new Pessoa('Leo')
p1.falar()
p2.falar()

// agora veremos o método function factory(a partir de uma function arrow)
const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p3 = pessoa('Matheus')
p3.falar()
const p4 = pessoa('Diego')
p4.falar()