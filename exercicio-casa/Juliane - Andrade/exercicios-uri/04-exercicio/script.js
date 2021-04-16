//[Exercício 04](https://www.urionlinejudge.com.br/judge/pt/problems/view/1009)

salarAPg();

function salarAPg(total) {
    let nome = prompt('Qual o nome do funcioário?');
    let salario = parseFloat(prompt('Qual o salário base do funcionário?'));
    let vendaTotal = parseFloat(prompt('Qual o valor total de vendas deste Funcionário no mês?'));
    let taxaComissao = 0.15;

    total = parseFloat((vendaTotal * taxaComissao) + salario);

    return alert(`O salário total a receber do funcionário ${nome} é R$ ${total.toFixed(2)}!!!`)

}