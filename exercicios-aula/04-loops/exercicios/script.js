/**
    Documentação para consulta

    for
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for

    do while
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/do...while

    while
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while

 */

/* 
  1. Utilizando a estrutura de repetição for, mostre no console todos números 0 ao 100,
  inclusive esses 2
*/
  //  for(let contador= 0; contador <=100; contador++){
  //     console.log(contador);
  //   }


/* 
  2. Utilizando a estrutura de repetição for, mostre no console apenas os números pares de 1 ao 50.
  - Números pares são todos os números que divididos por 2 tem resto 0
  - Qual operador que retorna o resto da divisão? Vamos usar ele!
*/
  
  // for (let contadorPar = 1; contadorPar <=50;  contadorPar++){
  //  if( contadorPar % 2 == 0){
  //   console.log(contadorPar);
  //  }
  // }
/* 

  3. Utilizando a estrutura de repetição while, mostre no console apenas os números ímpares de 50 ao 120.
*/
    // let contador = 50;
    // while (contador<=20) {
    //   if (contador%2!==120) {
    //     let contador = 50;
    //   }
    //     while (contador <= 120) {
    //       if (contador%2!==0) {
    //         console.log(contador);
    //       }
    //     }
    //     contador+=1
    //   }
    

/* 
  3. Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while"
*/
 
// let numeros = 20;

//  while (numeros <= 30) {
// console.log(numeros);
//    numeros = numeros + 1
//    
//  }


/* 
  4. Seu Miguel da vendinha da esquina, não sabe multiplicar. Faça para ele um programa que, dado um número, ele printe (console.log) a tabuada do mesmo de 1 a 10.
*/

let numeroEscolhido =(prompt("Insira um numero"));
let multiplicador = 1;

while (multiplicador <= 10) {
  resultado = numeroEscolhido * multiplicador
  multiplicador++
  console.log(resultado);
}

