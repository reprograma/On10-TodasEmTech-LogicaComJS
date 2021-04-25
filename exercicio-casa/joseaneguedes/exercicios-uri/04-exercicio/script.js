//[Exercício 04](https://www.urionlinejudge.com.br/judge/pt/problems/view/1009)
// Minha Solução:
let nome = prompt("Digite nome: ")
let salarioFixo = Number(prompt("Digite valor do salário fixo: "))
let vendas = Number(prompt("Digite o valor total de vendas: "))
let salarioTotal = salarioFixo + (vendas * 0.15)
alert(`TOTAL R$ ${salarioTotal.toFixed(2)}`)

// Solução da professora Viviane Miranda: 

/* let nomeVendedor = prompt('Qual seu nome?');
let salarioFixo = parseFloat(prompt('qual é o seu salario fixo?')).toFixed(2);
let totalVendas = parseFloat(prompt('qual foi o total de vendas?')).toFixed(2);
let comissaoVendedor = totalVendas*0.15;


console.log(`TOTAL = R$ ${salarioFixo + comissaoVendedor}`); */

