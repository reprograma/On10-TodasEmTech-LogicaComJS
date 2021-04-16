//3. Crie uma função que calcula 5% de desconto retornando o valor do desconto.

let valorDaCompra = Number(prompt('Digite o valor da compra para saber o valor do desconto'));
let taxa = 0.05;

function desconto(i) {
    return i * taxa;
}

let res = Number(desconto(valorDaCompra));

console.log(`O valor da compra foi R$${valorDaCompra.toFixed(2)}, a taxa de desconto foi ${taxa*100}%, e o valor do desconto foi R$${res.toFixed(2)}`);