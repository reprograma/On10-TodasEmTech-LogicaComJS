//[Exercício 04](https://www.urionlinejudge.com.br/judge/pt/problems/view/1009)

/* Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

Entrada
O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão (double) com duas casas decimais, representando o salário fixo do vendedor e montante total das vendas efetuadas por este vendedor, respectivamente.

Saída
Imprima o total que o funcionário deverá receber, conforme exemplo fornecido */


let nomeVendedor = prompt('Insira o nome do Vendedor: ');
let salarioVendedor = Number(prompt('Insira o Salário do vendedor: ')).toFixed(2);
let comissao = Number(prompt('Insira suas vendas do Mês: ')).toFixed(2);

let calculation = ((comissao * 15 / 100) + salarioVendedor);

alert(`O Salário do vendedor ${nomeVendedor} foi de ${calculation}`)
