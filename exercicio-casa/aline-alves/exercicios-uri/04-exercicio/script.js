//[Exercício 04](https://www.urionlinejudge.com.br/judge/pt/problems/view/1009)

let vendedor = prompt("Insira o nome do vendedor");
console.log(vendedor);
let salarioFixo = Number(prompt("Insira o seu salário fixo"));
console.log(salarioFixo);
let comissao = 0.15;
let vendas = Number(prompt("Insira o valor total de vendas"))


let total = salarioFixo + (vendas*comissao);
console.log(total);
alert(`Total: R$ ${total.toFixed(2)}`);