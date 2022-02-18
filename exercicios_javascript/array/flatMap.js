const escola = [{
    turma: 'Turma M1',
    alunos:[{
        nome:'Ana',
        nota: 9.7
        },
        { nome: 'Leo',
        nota: 10
    }]
},
{
    turma:'Turma M2',
    alunos:[{
        nome: 'Júlia',
        nota: 7.0
    },{
        nome:'Pedro',
        nota: 8.0

    }]
}]

const getNotaAluno = aluno => aluno.nota      
const getNotasTurmas = escola => escola.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasTurmas)
console.log([].concat([ 9.7, 10 ], [ 7, 8 ]))
// 1- pega somente a nota de cada aluno com "alunos.map(getNotaAluno)" 
// 2- pega notas de todos alunos das tumas com "turma => turma.alunos.map(getNotaAluno)"
// 3- exibe o resultado 
// 4- concatena tudo em um array final e exibe


// Vamos fazer um o FlaMap que  faz tudo aquilo acima(o map e concat)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasTurmas)
console.log(notas2)
