/**
    Documentação para consulta

    Operadores
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators

    Number()
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number

    Prompt()
    https://developer.mozilla.org/pt-BR/docs/Web/API/window/prompt

    Alert()
    https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert

 */


/* 
  1. Crie um algoritmo, que solicite ao usuário dois valores, calcule a soma desses números e mostre o resultado em um alerta.

  - Entrada de dados: Ler dois números 
  - Processamento: calcular a soma 
  - Saída: exibir a soma dos valores

  Obs: Utilizar o Number() para converter o tipo da variável em número.
*/ 

let num1 = Number(prompt("Insira um numero"));
let num2 = Number(prompt("Insira outro numero"));
let valor = num1 + num2;
prompt(valor);

/* 
  2. Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

  - Entrada de dados: Ler o valor do jantar
  - Processamento: calcular a taxa do garçom e valor total a ser pago.
  - Saída: Exibir no console o valor do jantar, taxa do garçom e total a pagar

  Obs: Utilizar o Number() para converter o tipo para numero dos dados.
*/

let valorDoJantar = Number(prompt("Insira o valor do seu jantar"));
let taxaDoGarcom = 0.10;
let valorFinal = valorDoJantar + (valorDoJantar*taxaDoGarcom);

console.log(`o resultado é R$${valorFinal}`);


// 4. Declare uma nova variável chamada `calculadora`, e adicione uma instrução somando os valores 10 e 5.

let calculadora = 10 + 5;
console.log(`${calculadora}`);

// 5.  Atribua à variável `calculadora` todo o valor dela, somando 1, usando o operador de soma abreviado.

calculadora += 1;
console.log(`${calculadora}`);

// 6. Atribua à variável `calculadora` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.

calculadora *= 3;
console.log(`${calculadora}`)

// 7. Qual é o valor da variável `calculadora` até aqui?

console.log(`${calculadora}`);

