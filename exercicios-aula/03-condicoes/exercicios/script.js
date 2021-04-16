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
/*let letraAlfabeto = prompt("Digite uma letra do Alfabeto");

switch(letraAlfabeto){
  case 'a':
  
    console.log('É uma vogal');
  break;
  case 'e':
    console.log('É uma vogal')
    break;
  case 'i':
    console.log('É uma vogal');
  break;
  case 'o':
    console.log('É uma vogal');
  break;
  case 'u':
    console.log('É uma vogal');
  break;
  default:
    console.log('É uma consoante')
}



/* 
  2. Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente;

*/
/*
let diaDaSemana = prompt("Digite um número de 1 à 7");
switch(diaDaSemana){
  case '1':
    console.log('Domingo')
  break;
  case '2':
    console.log('Segunda')
  break;
  case '3':
    console.log('Terça')
  break;
  case '4':
  console.log('Quarta')
  break;
  case '5':
    console.log('Quinta')
  break;
  case '6':
    console.log('Sexta')
  break;  
  case '7':
    console.log('Sábado')
  break;
  default:
    console.log('Informação Inválida')
}



/* 
  3. Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se ambos os números forem iguais, mostre uma mensagem no console "Os números são iguais";
*/
let number1 = prompt("Digite um número");
let number2 = prompt("Digite outro número");

if (number1>number2){
  console.log('O numero', number1 , 'é o maior')
} else if (number1<number2){
  console.log('O número', number2 , 'é maior')
} else {
  console.log('Os números são iguais')
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

