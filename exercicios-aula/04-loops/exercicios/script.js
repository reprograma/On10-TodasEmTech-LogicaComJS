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



/* 
  2. Utilizando a estrutura de repetição for, mostre no console apenas os números pares de 1 ao 50.
  - Números pares são todos os números que divididos por 2 tem resto 0
  - Qual operador que retorna o resto da divisão? Vamos usar ele!
*/

// for(let contador = 1; contador<=50; contador++ ){
//   if(contador%2==0){
//     console.log(contador)
//   }
// };


/* 
  3. Utilizando a estrutura de repetição while, mostre no console apenas os números ímpares de 50 ao 120.
*/



/* 
  3. Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while"
*/

// let contador = 20; 

// while(contador<=30){
//   console.log(contador);
//   contador=contador+1;


/* 
  4. Seu Miguel da vendinha da esquina, não sabe multiplicar. Faça para ele um programa que, dado um número, ele printe (console.log) a tabuada do mesmo de 1 a 10.

*/

let tabuada = parseInt(prompt('Insira um número'));
let contador = 0;

//opção com while
// while(contador<=10){
//   console.log(`${tabuada}*${contador}=${tabuada*contador}`)
//   contador++;
// };


// opção com for
// for(contador; contador<=10; contador++){
//   console.log(`${tabuada}*${contador}=${tabuada*contador}`)
// }

