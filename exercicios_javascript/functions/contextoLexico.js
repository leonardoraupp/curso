const valor = 'Global'
 function minhaFuncao() {
     console.log(valor)     
 }
  
 function exec() {
     const valor = 'Local'
     minhaFuncao();    
 }
 exec()

//  nesta aula aprendemos sobre contexto léxico, o console sempre vai procurar
// onde a function foi declarada e não onde está sendo executada, ou seja pega o valor Global e não Local.