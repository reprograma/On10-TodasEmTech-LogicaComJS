//[Exercício 04](https://www.urionlinejudge.com.br/judge/pt/problems/view/1009)



let vendedor = prompt("Nome do Vendedor");
let salarioFixo = Number(prompt("Salário Fixo"));
let vendas = Number(prompt("Total de Vendas"));


let total = salarioFixo + (vendas*0.15);
alert(`Total: R$ ${total.toFixed(2)}`);