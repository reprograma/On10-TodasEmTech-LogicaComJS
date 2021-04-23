/**
    Documentação para consulta

    if/ else if/ else
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else

    switch
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch

 */


/* 
  1. Elabore um algoritmo que receba uma letra e determine se é uma vogal ou consoante (Faça duas versões deste código, uma utilizando if-else e outra utilizando switch-case);
*/
/* let letra = prompt("Insira uma letra qualquer do alfabeto").toLowerCase();

switch (letra) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log('Essa letra é uma vogal');
    break;
    default:
      console.log("Essa letra é uma consoante");
}

if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
  console.log("Essa letra é uma vogal");
} else {
  console.log("Essa letra é uma consoante");
} */



/* 
  2. Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente;

*/
/* let number = prompt("Insira um número de 1 a 7");

switch (number) {
  case "1":
    alert("O dia da semana correspondente ao valor inserido é: domingo");
    break;
    case "2":
    alert("O dia da semana correspondente ao valor inserido é: segunda");
    break;case "3":
    alert("O dia da semana correspondente ao valor inserido é: terça");
    break;case "4":
    alert("O dia da semana correspondente ao valor inserido é: quarta");
    break;case "5":
    alert("O dia da semana correspondente ao valor inserido é: quinta");
    break;case "6":
    alert("O dia da semana correspondente ao valor inserido é: sexta");
    break;case "7":
    alert("O dia da semana correspondente ao valor inserido é: sábado");
    break;
    default:
      alert("Número inválido")
} */


/* 
  3. Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se ambos os números forem iguais, mostre uma mensagem no console "Os números são iguais";
*/
/* let number1 = Number(prompt("Insira um número"));
let number2 = Number(prompt("Insira outro número"));

if (number1 > number2) {
  console.log(`O maior valor é ${number1}`);
} else if (number2 > number1) {
  console.log(`O maior valor é ${number2}`);
} else if (number1 == number2) {
  console.log("Os valores são iguais");
} */

/*
  4. Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

  Se a media for igual ou maior que 7 - Aprovado
  Se a media for maior e igual a cinco e menor que 7 - Recuperação 
  Se a media for menor que 5 - Reprovado

  Alunos aprovados devem ver a mensagem: Parabéns, você foi aprovado, aproveite suas férias!
  Alunos de recuperação devem ver a mensagem: Você está de recuperação!
  Alunos reprovados devem ver a mensagem: Que pena, você foi reprovado.
*/

/* let nota1 = Number(prompt("Insira o primeira nota"));
let nota2 = Number(prompt("Insira o segunda nota"));
let nota3 = Number(prompt("Insira o terceira nota"));
let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
  alert("Parabéns, você foi aprovado, aproveite suas férias!")
} else if (media >= 5 && media < 7) {
  alert("Você está de recuperação!");
} else if (media < 5) {
  alert("Que pena, você foi reprovado.")
} */
