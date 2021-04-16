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
/*
let letra = prompt('Digite uma letra');
switch(letra){
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    alert('A letra que você digitou é uma vogal');
    break;
  default:
    alert('A letra que você digitou não é uma vogal');
}
*/

/*
let letraEscolhida = prompt('Digite uma letra');
if(letraEscolhida === "a" || letraEscolhida === "e" || letraEscolhida === "i" || letraEscolhida === "o" || letraEscolhida === "u"){
  alert("A letra escolhida é uma vogal");
} else {
  alert("A letra escolhida é uma consoante");
};
*/


/* 
  2. Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente;

*/
/*
let letra = prompt('Digite um número: ');
switch(letra){
  case '1':
    alert('O dia da semana que corresponde a esse número é o domingo');
    break;
  case '2':
    alert('O dia da semana que corresponde a esse número é a segunda');
    break;
  case '3':
    alert('O dia da semana que corresponde a esse número é a terça');
    break;
  case '4':
    alert('O dia da semana que corresponde a esse número é a quarta');
    break;
  case '5':
    alert('O dia da semana que corresponde a esse número é a quinta');
    break;
  case '6':
    alert('O dia da semana que corresponde a esse número é a sexta');
    break;
  case '7':
    alert('O dia da semana que corresponde a esse número é o sábado');
    break;
  default:
    alert('O número inserido não tem nenhum dia da semana correspondente.');
}
*/

/* 
  3. Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se ambos os números forem iguais, mostre uma mensagem no console "Os números são iguais";
*/
/*
let num1 = Number(prompt('Digite um número:'));
let num2 = Number(prompt('Digite um segundo número:'));

if(num1>num2){
  console.log(`O número ${num1} é maior que o número ${num2}`);
}else if(num1<num2){
  console.log(`O número ${num1} é menor que o número ${num2}`);
}else if(num1===num2){
  console.log(`O número ${num2} é igual ao número ${num1}. Os números são iguais.`);
} else{
  console.log(`Os valores de entrada não são valores válidos`);
};
*/

/*
  4. Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

  Se a media for igual ou maior que 7 - Aprovado
  Se a media for maior e igual a cinco e menor que 7 - Recuperação 
  Se a media for menor que 5 - Reprovado

  Alunos aprovados devem ver a mensagem: Parabéns, você foi aprovado, aproveite suas férias!
  Alunos de recuperação devem ver a mensagem: Você está de recuperação!
  Alunos reprovados devem ver a mensagem: Que pena, você foi reprovado.
*/
/*
let nota1 = Number(prompt('Digite a primeira nota:'));
let nota2 = Number(prompt('Digite a segunda nota:'));
let nota3 = Number(prompt('Digite a terceira nota:'));
let media = (nota1+nota2+nota3)/3;

if(media>=7){
  alert (`Parabéns, você foi aprovado, aproveite suas férias!`);
} else if(media>=5 && media<7){
  alert (`Você está de recuperação!`);
} else if(media<5){
  alert (`Que pena, você foi reprovado.`);
} else{
  alert (`Os dados inseridos não são válidos. Tente novamente.`);
}
*/