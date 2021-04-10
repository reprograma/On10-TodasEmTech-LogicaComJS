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

//let numero1 = Number(prompt("insira um numero"));
//let numero2 = Number(prompt("insira outro numero"));

//let soma = numero1 + numero2

//alert("a soma dos seus dois numeros é:" + soma);
//alert('a soma dos seus dois numeros é ${soma}');








/* 
  2. Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

  - Entrada de dados: Ler o valor do jantar
  - Processamento: calcular a taxa do garçom e valor total a ser pago.
  - Saída: Exibir no console o valor do jantar, taxa do garçom e total a pagar

  Obs: Utilizar o Number() para converter o tipo para numero dos dados.
*/

//let valorJantar = Number(prompt("Insira o valor do jantar"));
//let taxaDeServico = 0.1;
//let valorFinal = valorJantar + (taxaDeServico*valorJantar);

//console.log(`O valor do jantar é: R$${valorJantar}, o valor da taxa de serviço é de: ${taxaDeServico*100}% e o valor final é de: R$${valorFinal}`);


// 4. Declare uma nova variável chamada `calculadora`, e adicione uma instrução somando os valores 10 e 5.

let calculadora = 10 + 5;
//console.log(calculadora);

// 5.  Atribua à variável `calculadora` todo o valor dela, somando 1, usando o operador de soma abreviado.

calculadora = calculadora + 1;
//calculadora += 1; 
//calculadora ++;


// 6. Atribua à variável `calculadora` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.

calculadora *= 3;

// 7. Qual é o valor da variável `calculadora` até aqui?

console.log(calculadora);

