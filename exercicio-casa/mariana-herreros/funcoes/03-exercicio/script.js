//3. Crie uma função que calcula 5% de desconto retornando o valor do desconto.

function desconto(valorTotal){
    return (valorTotal * 0.05 )
 }


let resultado = desconto(prompt("insira um numero"));
alert (`O valor do desconto é de R$ ${resultado},00`)