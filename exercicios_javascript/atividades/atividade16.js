// 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe
// como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
// numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
// 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.

function calculadora(op1, op2, sinal) {
    switch (sinal) {
        case '+':
            console.log(op1 + op2)         
            break;
        case '-':
        console.log(op1- op2)
            break;    
        case '*':
        console.log(op1 * op2)
            break;
        case '/':
        console.log(op1 /op2)
        break;
        default:
        console.log('Operação inválida')    
            break;
    }    
}

calculadora(10,5,"+")
calculadora(10,5,"-")
calculadora(10,5,"*")
calculadora(10,5, "/")
//obs eu errei no operação de soma(concatenou em vez de somar, mas depois arrumei);

//  método do professor

function calculadora (valor1, operacao, valor2) {
    switch (operacao) {
        case '+':
            return valor1 + valor2
        case '-':
            return valor1 - valor2
        case '*':
            return valor1 * valor2
        case '/':
            return valor1 / valor2
        default:
            return 'Operação inválida'
    }
}

console.log(calculadora(2, '+', 3));
console.log(calculadora(2, '-', 3));
console.log(calculadora(2, '*', 3));
console.log(calculadora(2, '/', 3));
console.log(calculadora(2, 'a', 3));



