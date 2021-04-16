//[Exercício 04](https://www.urionlinejudge.com.br/judge/pt/problems/view/1009)

let nomeVendedor = prompt ("Nome do vendedor:");
let salarioFixo = prompt ("Salário fixo:");
let totalDeVendas = prompt ("Total de vendas efetuadas no mês:");


let comissao = (salarioFixo * 1) + (totalDeVendas * 1) * 0.15;


alert ("O valor total é R$" + (comissao * 1).toFixed(2));
