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

// let letra = prompt("Insira uma letra do nosso alfabeto");

// if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
//   alert("Sua letra é uma vogal!")
// } else {
//   alert ("Sua letra é uma consoante!")
// }

// let letra2 = prompt("Insira outra letra do nosso alfabeto");

// switch(letra2){
//  case 'a':
//   case 'e':
//   case 'i':
//   case 'o':
//   case 'u':
//   alert("É uma vogal");
//   break;
//   default:
//       alert("É uma consoante");
// }


/* 
  2. Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente;

*/

// let diaDaSemana = prompt("Digite um numero de 1 a 7");

// switch(diaDaSemana) {
//   case '1' : alert("Domingo");
//   break;
//   case '2' : alert("Segunda");
//   break;
//   case '3' : alert("Terça");
//   break;
//   case '4' : alert("Quarta");
//   break;
//   case '5' : alert("Quinta");
//   break;
//   case '6' : alert("Sexta");
//   break;
//   case '7' : alert("Sábado");
//   break;
//   default: alert("Numero inválido!")
// }



/* 
  3. Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se ambos os números forem iguais, mostre uma mensagem no console "Os números são iguais";
*/

let a = Number(prompt("Digite um numero"));
let b = Number(prompt("Digite outro numero"));

 if (a > b) {
   alert(`${a} é maior que ${b}`)
 } else if (b > a) {
   alert(`${b} é maior que ${a}`)
 } else if (a == b) {
   alert("Numeros Iguais!")
 } else {
   alert("Dados inválidos")
 }

/*
  4. Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

  Se a media for igual ou maior que 7 - Aprovado
  Se a media for maior e igual a cinco e menor que 7 - Recuperação 
  Se a media for menor que 5 - Reprovado

  Alunos aprovados devem ver a mensagem: Parabéns, você foi aprovado, aproveite suas férias!
  Alunos de recuperação devem ver a mensagem: Você está de recuperação!
  Alunos reprovados devem ver a mensagem: Que pena, você foi reprovado.
*/

let nota1 = Number(prompt("Insira a primeira nota"));
let nota2 = Number(prompt("Insira a segunda nota"));
let nota3 = Number(prompt("Insira a terceira nota"));

let notaFinal = (nota1 + nota2 + nota3)/3;

if (notaFinal >= 7) {
  alert("Parabéns, você foi aprovado, aproveite suas férias!");
} else if (notaFinal >= 5 && notaFinal < 7) {
  alert("Você está de recuperação!");
} else if (notaFinal < 5) {
  alert("Que pena, você foi reprovado!")
}