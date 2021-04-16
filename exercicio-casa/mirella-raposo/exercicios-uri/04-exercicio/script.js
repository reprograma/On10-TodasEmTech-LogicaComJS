//[Exercício 04](https://www.urionlinejudge.com.br/judge/pt/problems/view/1009)

let nome = prompt("Nome do Vendedor:");

let salarioFixo = Number (prompt("Insira o salário fixo do vendedor:"));

let comissao = Number (prompt("Insira o valor das vendas efetuadas no mês:"));

alert(`Total = R$${salarioFixo + (comissao*0.15)}`);