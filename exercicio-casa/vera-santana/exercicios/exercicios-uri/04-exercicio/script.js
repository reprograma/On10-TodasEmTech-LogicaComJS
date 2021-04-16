//[Exercício 04](https://www.urionlinejudge.com.br/judge/pt/problems/view/1009)

let vendedor = prompt("Digite o nome do vendedor:");
let salarioFixo = Number(prompt("Digite o salário fixo desse mesmo vendedor:"));
let comissao = Number(prompt("Digite a quantidade em dinheiro de vendas durante o mês"));

comissao = (comissao*25)/100;

let salarioTotal = comissao + salarioFixo;

console.log(`TOTAL = R$ ${salarioTotal.toFixed(2)}`);