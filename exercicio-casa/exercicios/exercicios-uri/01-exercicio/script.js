// [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 

/*Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.
Entrada
O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.

Saída
O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.

Exemplo de Entrada      	Exemplo de Saída
3 2                         Total: R$ 10.00
4 3                         Total: R$ 6.00
2 3                         Total: R$ 13.50      */



let number1 = Number(prompt('Entre com o produto: '));
let number2 = Number(prompt('Entre com a quantidade do produto acima: '));

if (number1 == 1) {
    alert('Total: R$ ' + (4 * number2));
}
else if (number1 == 2) {
    alert('Total: R$ ' + (4.50 * number2));
}
else if (number1 == 3) {
    alert('Total: R$ ' + (5 * number2));
} else if (number1 == 4) {
    alert('Total: R$ ' + (2 * number2));
} else if (number1 == 5) {
    alert('Total: R$ ' + (1.50 * number2));
} else {
    alert('Valor/quantidade digitado Invalido, por favor verifique. 😅');
}
