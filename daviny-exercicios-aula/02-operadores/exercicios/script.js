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

let y = Number(prompt("Digite o primeiro número: "))
let x = Number(prompt("Digite o primeiro número: "))

let resultado = y + x 

alert("resultado: " + resultado)

/* 
  2. Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

  - Entrada de dados: Ler o valor do jantar
  - Processamento: calcular a taxa do garçom e valor total a ser pago.
  - Saída: Exibir no console o valor do jantar, taxa do garçom e total a pagar

  Obs: Utilizar o Number() para converter o tipo para numero dos dados.
*/

let valor = Number(prompt("Digite o valor do jantar: "))

let porcentagem = valor * 0.10
let resultado = porcentagem + valor

alert("Valor total: " + resultado )

// 4. Declare uma nova variável chamada `calculadora`, e adicione uma instrução somando os valores 10 e 5.


// 5.  Atribua à variável `calculadora` todo o valor dela, somando 1, usando o operador de soma abreviado.


// 6. Atribua à variável `calculadora` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.

// 7. Qual é o valor da variável `calculadora` até aqui?



