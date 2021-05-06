//[Exercício 04](https://www.urionlinejudge.com.br/judge/pt/problems/view/1009)


let comissao = 0.15;

let nome = prompt("Nome do vendedor: ")
let salarioFixo = Number(prompt("Salario Fixo: "))
let vendas = Number(prompt("Vendas: "))

let total = salarioFixo + (vendas*comissao)
alert(`Total: R$ ${total} do vendedor(a) ${nome}`)


