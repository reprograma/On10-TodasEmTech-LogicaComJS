/**
    Documentação para consulta

    if/ else if/ else
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else

    switch
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch

 */


/* 
  1. Elabore um algoritmo que receba uma letra e determine se é uma vogal ou consoante 
  (Faça duas versões deste código, uma utilizando if-else e outra utilizando switch-case);
*/

/*
let letraEscolhida = prompt("Insira uma letra qualquer do alfabeto").toLowerCase();
switch (letraEscolhida) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Essa letra é uma vogal")
        break;
    default:
        console.log("Essa letra é uma consoante")
};

if (letraEscolhida === "a" || letraEscolhida === "e" || letraEscolhida === "i" ||
    letraEscolhida === "o" || letraEscolhida === "u") {
    console.log("A letra escolhida é uma vogal")
} else {
    console.log("A letra escolhida é uma consoante")
};

*/


/* 
  2. Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente;

*/

/*

let numeroEscolhido = prompt("Escolha um número de 1 a 7");

switch (numeroEscolhido) {
    case "1":
        alert(` O dia correspondente ao número ${numeroEscolhido} é Segunda-feira`)
    case "2":
        alert(` O dia correspondente ao número ${numeroEscolhido} é Segunda-feira`)
    case "3":
        alert(` O dia correspondente ao número ${numeroEscolhido} é Terça-feira`)
    case "4":
        alert(` O dia correspondente ao número ${numeroEscolhido} é Quarta-feira`)
    case "5":
        alert(` O dia correspondente ao número ${numeroEscolhido} é Quinta-feira`)
    case "6":
        alert(` O dia correspondente ao número ${numeroEscolhido} é Sexta-feira`)
    case "7":
        alert(` O dia correspondente ao número ${numeroEscolhido} é Sábado-feira`)
        break;
    default:
        alert(`O número ${numeroEscolhido} não tem nenhum correspondente na semana.`)
}

*/

/* 
  3. Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se ambos os números forem iguais, mostre uma mensagem no console "Os números são iguais";
*/

/*

let numero1 = Number(prompt('Digite um número'));
let numero2 = Number(prompt('Digite Outro número'));

if (numero1 > numero2) {
    console.log(`O número1 "${numero1}" é maior que o número2 "${numero2}"`)
} else if (numero2 > numero1) {
    console.log(`O número2 "${numero2}" é maior que o número1 "${numero1}"`)
} else if (numero1 === numero2) {
    console.log(`Os números são iguais`)
} else {
    console.log(`Opção Inválida`)
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

let nota1 = Number(prompt('Digite a primeira nota'));
let nota2 = Number(prompt('Digite a segunda nota'));
let nota3 = Number(prompt('Digite a terceira nota'));
let media = ((nota1 + nota2 + nota3) / 3).toFixed(2);

if (media >= 7 && media <= 10) {
    console.log(`Aprovado, sua média foi ${media}`);
    alert('Parabéns, você foi aprovado, aproveite suas férias!')
} else if (media >= 5 && media < 7) {
    console.log(`Recuperação, sua média foi ${media}`);
    alert('Você está de recuperação!')
} else if (media < 5 && media >= 0) {
    console.log(`Reprovado, sua média foi ${media}`);
    alert('Que pena, você foi reprovado.')
} else {
    console.log('Opção inválida')
    alert('Opção inválida')
};