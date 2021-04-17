//[Exercício 04](https://www.urionlinejudge.com.br/judge/pt/problems/view/1009)
let nomeDoVendedor = prompt("Insira o nome do vendedor");
let salario = parseFloat(prompt("Insira o seu salário fixo"));
let totalDeVendas = parseFloat(prompt("Insira o valor total de vendas"));
let comissao = 0.15;
let valorFinal = parseFloat((totalDeVendas * comissao) + salario);

alert(`TOTAL: R$ ${valorFinal.toFixed(2)}`);