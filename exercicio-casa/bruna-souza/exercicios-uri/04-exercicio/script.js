//[Exercício 04](https://www.urionlinejudge.com.br/judge/pt/problems/view/1009)

let nome = prompt ("Nome do vendedor:")
let salarioFixo = prompt ("Qual seu salário?")
let totalDeVendas = prompt ("Qual total de vendas realizado?")


let comissao = (salarioFixo * 1) + (totalDeVendas * 1) * 0.15


alert ("O valor total é R$" + (comissao * 1).toFixed(2))


