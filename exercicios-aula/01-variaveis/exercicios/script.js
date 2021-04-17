/**
    Documentação para consulta

    Variáveis e tipo de dados
    https://developer.mozilla.org/pt-PT/docs/Web/JavaScript/Guia/Valores,_Vari%C3%A1veis_e_Literais

 */


/*  1. Declare uma variável const com a mensagem 'Olá Mundo', exiba no console */


var message = 'Hello World';
const messageConst = 'Hello World';

console.log(message);
console.log(messageConst);
/*

  2. Declare uma variável let chamada anoNascimento sem atribuir valor

*/
let yearOfBirth;

/*
  3. Atribuía o ano que você nasceu na variável anoNascimento e exiba no console
*/
yearOfBirth = 2020;
console.log(yearOfBirth);
/*
  4. Declare uma variável chamada `gostoDeProgramar`, atribuindo à ela o valor booleano que representa `verdadeiro` e exiba no console.
*/

var ILikeToProgram = true;
console.log(ILikeToProgram);

/*
  5. Exiba no console os tipos das variáveis criadas a cima utilizando o operador typeof
     ex: console.log(typeof variavel)
*/

console.log(typeof ILikeToProgram + " " + typeof yearOfBirth);
