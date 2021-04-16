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
let letraEscolhida = prompt('insira uma letra qualquer do alfabeto')


switch(letraEscolhida) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    console.log('Essa letra é uma vogal')
  break;

  default:
    console.log('Essa letra é uma consoante')
}

if(letraEscolhida === 'a' || letraEscolhida === 'e' || letraEscolhida === 'i' || letraEscolhida === 'o' || letraEscolhida === 'u')
{
  console.log('A letra escolhida é uma vogal')
} else{
  console.log('A letra escolhida é consoante')
};



/* 
  2. Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente;

*/
let numeroEscolhido = {

}




/* 
  3. Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se ambos os números forem iguais, mostre uma mensagem no console "Os números são iguais";
*/
let numero1 = Number(prompt("digite um número qualquer"));
let numero2 = Number(prompt("Digite outro número qualquer"));

if(numero1 > numero2){
  console.log(`O ${numero1} é maior que o ${numero2}`)
} else if(numero2 > numero1){
  console.log('O ' + numero2 + 'é maior que o ' + numero1)
} else if(numero1===numero2){
  console.log(`O ${numero1} e o ${numero2} tem valores iguais`)
} else{
  console.log(`Os valores de entrada não são valores válidos`)
};


/*
  4. Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

  Se a media for igual ou maior que 7 - Aprovado
  Se a media for maior e igual a cinco e menor que 7 - Recuperação 
  Se a media for menor que 5 - Reprovado

  Alunos aprovados devem ver a mensagem: Parabéns, você foi aprovado, aproveite suas férias!
  Alunos de recuperação devem ver a mensagem: Você está de recuperação!
  Alunos reprovados devem ver a mensagem: Que pena, você foi reprovado.
*/

let nota1 = Number(prompt("escreva a primeira nota"));
let nota2 = Number(prompt("escreva a segunda nota"));
let nota3 = Number(prompt("escreva a terceira nota"));

let mediaFinal = (nota1 + nota2 + nota3)/3;

if(mediaFinal>=7){
  alert("Parabéns, você foi aprovado, aproveite suas férias!")
} else if(mediaFinal>=5 && mediaFinal<7){
  alert("Você está de recuperação!")
} else{
  alert("Que pena, você foi reprovado.")
};