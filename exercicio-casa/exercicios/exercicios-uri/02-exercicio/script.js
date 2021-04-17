//- [Exercício 02](https://www.urionlinejudge.com.br/judge/pt/problems/view/1134)

/*Um Posto de combustíveis deseja determinar qual de seus produtos tem a preferência de seus clientes. Escreva um algoritmo para ler o tipo de combustível abastecido (codificado da seguinte forma: 1.Álcool 2.Gasolina 3.Diesel 4.Fim). Caso o usuário informe um código inválido (fora da faixa de 1 a 4) deve ser solicitado um novo código (até que seja válido). O programa será encerrado quando o código informado for o número 4.

Entrada
A entrada contém apenas valores inteiros e positivos.

Saída
Deve ser escrito a mensagem: "MUITO OBRIGADO" e a quantidade de clientes que abasteceram cada tipo de combustível, conforme exemplo.*/

let number1 = Number(prompt("Entre com o produto: "));
let clienteAlcool = 0;
let clienteGasolina = 0;
let clienteDisel = 0;



while
    (number1 <= 3) {

    if (number1 == 1) {
        clienteAlcool++;
        number1 = Number(prompt("Entre com o produto: "));

    } else if (number1 === 2) {
        clienteGasolina++;
        number1 = Number(prompt("Entre com o produto: "));

    } else if (number1 === 3) {
        clienteDisel++;
        number1 = Number(prompt("Entre com o produto: "));
    }

}





alert("MUITO OBRIGADAA!" + " As quantidades de cliente Alcool foi " + `${clienteAlcool}`
    + " A de Gasolina " + `${clienteGasolina}` + "  É a de Disel " + `${clienteDisel}`)



