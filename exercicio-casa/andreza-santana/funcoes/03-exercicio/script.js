//3. Crie uma função que calcula 5% de desconto retornando o valor do desconto.
let numero = parseFloat(prompt('insira um valor para aplicar os 5% desconto:'));
let calculo5 = numero * 0.05;

if (isNaN(numero)) {
    alert('por favor inserir um número válido');
} else {
    alert(`O valor do desconto é de R$ ${calculo5.toFixed(2)}`);
}
