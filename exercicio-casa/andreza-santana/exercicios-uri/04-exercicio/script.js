//[Exercício 04](https://www.urionlinejudge.com.br/judge/pt/problems/view/1009)

while (true) {
    let nomeVendedor = prompt('insira o nome do vendedor:');
    let valorVendas = Number(prompt('valor total de vendas:'));
    const salariofixo = 750.00;

    if (isNaN(valorVendas)) {
        alert('Por favor inserir um valor de vendas no formato "100.00"');
    } else {
        let comissao = valorVendas * 0.15;
        let calculoSalario = salariofixo + comissao;
        alert(`Olá ${nomeVendedor} você irá receber: ${calculoSalario.toFixed(2)}!`);
        break
    }
}
