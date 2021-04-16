//3. Crie uma função que calcula 5% de desconto retornando o valor do desconto.

function Desconto(valorTotal) {
    let valorComDesconto = valorTotal - ((valorTotal * 5)/100);
    console.log(`O Total a pagar é R$ ${valorComDesconto.toFixed(2)}`);
}

let valorTotal = Number(prompt("Digite o valor total da sua compra para aplicarmos o desconto"));
Desconto(valorTotal);