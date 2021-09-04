// 12) Faça um algoritmo que calcule o fatorial de um número.
 function fatorial(num) {
         const fatorial = (num * (num – 1) * (num – 2)* (num – 3))
           return console.log(`Seu fatorial é ${fatorial}`) 
         } 

        
        
        // jeito do professor
 
    
        function fatorial (numero) {
            if(numero == 0){
                return 1
            } else {
                return numero * fatorial(numero - 1)
            }
        }
        
        console.log(fatorial(10))
