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
//Case 1 
/*
let letra = prompt ("Digite uma letra: ").toLowerCase();

if ( letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
  console.log("Você digitou uma vogal")
} else {
  console.log("Você digitou uma consoante")
}
*/

/*
//Case 2
let letra = prompt("Digite uma letra: ").toLowerCase();
switch (letra) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    console.log("Você digitou uma vogal! ");
    break;
  default:
    console.log("Você digitou uma consoante!!");
}
*/

/* 
  2. Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente;

*/
/*
let numero = prompt("Digite um número entre 1 - 7: ");

switch (numero) {
case "1": 
  alert(`O dia correspondente ao número ${numero} é domingo.`)
  break;
  case "2": 
  alert(`O dia correspondente ao número ${numero} é segunda.`)
  break;
  case "3": 
  alert(`O dia correspondente ao número ${numero} é terça.`)
  break;
  case "4": 
  alert(`O dia correspondente ao número ${numero} é quarta.`)
  break;
  case "5": 
  alert(`O dia correspondente ao número ${numero} é quinta.`)
  break;
  case "6": 
  alert(`O dia correspondente ao número ${numero} é sexta.`)
  break;
  case "7": 
  alert(`O dia correspondente ao número ${numero} é sábado.`)
  break;
  default:
    alert(`O número ${numero} não tem nenhum correspondente na semana.`)
}
*/


/* 
  3. Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se ambos os números forem iguais, mostre uma mensagem no console "Os números são iguais";
*/
/*
 nota1 = Number(prompt("escreva a primeira nota"));
 nota2 = Number(prompt("escreva a segunda nota"));
 nota3 = Number(prompt("escreva a terceira nota"));

let mediaFinal = (nota1 + nota2 + nota3)/3;

if(mediaFinal>=7){
  alert("Parabéns, você foi aprovado, aproveite suas férias!")
} else if(mediaFinal>=5 && mediaFinal<7){
  alert("Você está de recuperação!")
} else{
  alert("Que pena, você foi reprovado.")
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