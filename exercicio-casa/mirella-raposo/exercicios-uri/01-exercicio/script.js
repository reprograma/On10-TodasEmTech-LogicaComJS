// [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 

alert("Bem vindo! Você possui as seguintes opções de lanche com seu preço equivalente a 1 (uma) unidade. Escolha sua opção através do código informado em cada uma delas. (1) Cachorro-Quente R$4.00 (2) X-Salada R$ 4.50 (3) X-Bacon R$ 5.00 (4) Torrada Simples R$2.00 (5) Refrigerante R$1.50")

let codigo = Number (prompt("Informe o código do item escolhido."))

let quantidade = Number (prompt("Informe a quantidade desejada deste item."))


if(codigo == 1) {
    alert(`Seu pedido foi de (${quantidade}) un. de cachorro-quente. O total da compra será de R$${quantidade*4}.`)
}
if(codigo == 2) {
    alert(`Seu pedido foi de (${quantidade}) un. de X-Salada. O total da compra será de R$${quantidade*4.5}.`);
}
if(codigo == 3) {
    alert(`Seu pedido foi de (${quantidade}) un. de X-Bacon. O total da compra será de R$${quantidade*5}.`);
}
if(codigo == 4) {
    alert(`Seu pedido foi de (${quantidade}) un. de Torrada Simples. O total da compra será de R$${quantidade*2}.`);
}
if(codigo == 5) {
    alert(`Seu pedido foi de (${quantidade}) un. de Refrigerante. O total da compra será de R$${quantidade*1.5}.`);
} else {
    alert("Você não informou um valor válido. Por favor, digite um número de 1-5 referente ao código do lanche e em seguida a quantidade desejada (em valores numéricos).");
}