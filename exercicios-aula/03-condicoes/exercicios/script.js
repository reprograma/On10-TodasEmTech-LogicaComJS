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


let letter = prompt('See if your letter is a vowel or consonant').toLowerCase();

switch (letter) {
  case 'a':
    break;
  case 'e':
    break;
  case 'i':
    break;
  case 'o':
    break;
  case 'u':
    console.log('Its a vowel');
  default:
    console.log('It is a consonant');
}

/*
  2. Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente;

*/
let number = prompt('Enter the day of the week');

switch (number) {
  case 1:
    console.log(`Sunday ${number}`);
  case 2:
    console.log(`Monday ${number}`);
  case 3:
    console.log(`Tuesday ${number}`);
  case 4:
    console.log(`Wednesday ${number}`);
  case 5:
    console.log(`Thursday ${number}`);
  case 6:
    console.log(`Friday ${number}`);
  case 7:
    console.log(` Saturday ${number}`);

  default:
    console.log(`You entered the incorrect day of the week ${number}`);
}


/*
  3. Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se ambos os números forem iguais, mostre uma mensagem no console "Os números são iguais";
*/


let number01 = Number(prompt('Enter the first number'));
let number02 = Number(prompt('Enter second number'));

if (number01 > number02) {
  console.log('Number 1 is greater');
} else if (number01 < number02) {
  console.log('Number 2 is greater');
} else if (number01 == number02) {
  console.log('The numbers are the same');
} else {
  console.log('Invalid typed value');
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
let note1 = Number(prompt('Enter the first note: '));
let note2 = Number(prompt('Enter the second note: '));
let note3 = Number(prompt('Enter the thrid note'));

let result = (note1 + note2 + note3) / 3;


if (result >= 7) {
  console.log('Approved 🥰');
} else if (result >= 5 && result < 7) {
  console.log('Recovery 🤔 ');
} else {
  console.log('You failed 😩')
}