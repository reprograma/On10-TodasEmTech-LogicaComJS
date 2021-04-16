//[Exercício 04](https://www.urionlinejudge.com.br/judge/pt/problems/view/1009)

let nomeVendedor = prompt('Digite aqui o nome do vendedor: ');
let salarioFixo = Number(prompt('Digite aqui o valor do seu salário fixo: '));
let totalVendas = Number(prompt('Digite aqui o valor do total de vendas feitas pelo vendedor nesse mês: '));

function calcularSalarioFinal(){
    let salarioFinal = ((totalVendas*0.15)+salarioFixo).toFixed(2)
    alert(`O salário final de ${nomeVendedor} é de R$ ${salarioFinal}`);
}
calcularSalarioFinal();