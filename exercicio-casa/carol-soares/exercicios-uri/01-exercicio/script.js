// [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 




let códigoDoProduto = parseInt(prompt("Escolha seu lanche"));
let quantidadeDoProduto = parseInt(prompt("quantas unidades?"));

if (códigoDoProduto === 1) {
  total = quantidadeDoProduto * 4.00;

} else if (códigoDoProduto === 2) {
  total = quantidadeDoProduto * 4.50;

} else if (códigoDoProduto === 3) {
  total = quantidadeDoProduto * 5.00;

} else if (códigoDoProduto === 4) {
  total = quantidadeDoProduto * 2.00;

} else if (códigoDoProduto === 5) {
  total = quantidadeDoProduto * 1.50;

} else {
  alert("opção inválida")
}
alert(`Seu pedido tem o Total de: R$ ${total.toFixed(2)}`)
