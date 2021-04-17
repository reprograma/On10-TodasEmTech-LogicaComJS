//3. Crie uma função que calcula 5% de desconto retornando o valor do desconto.
function desconto (_valorTotal){
    return (0.05*_valorTotal);
}

let resultado = desconto(prompt("Insira o valor do produto:"));
alert (`O valor do desconto é de R$ ${resultado.toFixed(2)}`);