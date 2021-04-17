//- [Exercício 02](https://www.urionlinejudge.com.br/judge/pt/problems/view/1134)

let alcool = parseInt(0);
let gasolina = parseInt(0);
let diesel = parseInt(0);
let cliente = parseInt(0);

function relatorio() {
    do {
        cliente = parseInt(prompt('Digite o códio correspondente  a sua preferência de abastecimento: 1.Álcool 2.Gasolina 3.Diesel 4.Fim'));
        if (cliente == 1) {
            alcool++
        } else if (cliente == 2) {
            gasolina++
        } else if (cliente == 3) {
            diesel++
        } else if (cliente == 4) {
            break;
        } else {
            alert('Opção inválida, escolha um número dentro da faixa de 1 a 4')
        }
    } while (cliente != 4);

    return alert(`MUITO OBRIGADO \nAlcool: ${alcool} \nGasolina: ${gasolina} \nDiesel: ${diesel}`);

}

relatorio();