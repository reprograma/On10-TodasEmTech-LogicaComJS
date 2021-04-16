/**
    Documentação para consulta

    Variáveis e tipo de dados
    https://developer.mozilla.org/pt-PT/docs/Web/JavaScript/Guia/Valores,_Vari%C3%A1veis_e_Literais

 */

 
/*  1. Declare uma variável const com a mensagem 'Olá Mundo', exiba no console */
const mensagem = "Olá, Mundo!";
console.log(mensagem);

/* 

  2. Declare uma variável let chamada anoNascimento sem atribuir valor */
let anoNascimento;

/* 
  3. Atribuía o ano que você nasceu na variável anoNascimento e exiba no console
*/
anoNascimento = 2003;
console.log('O meu ano do nascimento é: ',anoNascimento);

/* 
  4. Declare uma variável chamada `gostoDeProgramar`, atribuindo à ela o valor booleano que representa `verdadeiro` e exiba no console.
*/
let gostoDeProgramar = true;
console.log('Eu gosto mesmo de programar? ', gostoDeProgramar);

/* 
  5. Exiba no console os tipos das variáveis criadas a cima utilizando o operador typeof
     ex: console.log(typeof variavel)
*/
console.log('O tipo da variável mensagem é: ', typeof(mensagem));
console.log('O tipo da variável anoNascimento é: ', typeof(anoNascimento));
console.log('O tipo da variável gostoDeProgramar é: ', typeof(gostoDeProgramar));