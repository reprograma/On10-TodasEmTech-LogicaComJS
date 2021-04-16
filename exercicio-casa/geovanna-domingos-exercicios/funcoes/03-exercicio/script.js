//3. Crie uma função que calcula 5% de desconto retornando o valor do desconto.

let valorInicial;
let desconto = 0.05;

function calcularDesconto(valorInicial){
    let valorDesconto = desconto * valorInicial;
    return 'O valor do desconto é de '+valorDesconto+' reais.';
}

console.log(calcularDesconto(100.00));