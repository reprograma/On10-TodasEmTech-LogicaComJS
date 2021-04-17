// [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 
let codigoDoProduto = parseInt(prompt("Qual lanche desejado"));
let quantidadeDoProduto = parseInt(prompt("Quantos deseja?"));


if (codigoDoProduto === 1) {
  total = quantidadeDoProduto * 4.00;
} else if (codigoDoProduto === 2) {
  total = quantidadeDoProduto * 4.50;
} else if (codigoDoProduto === 3) {
  total = quantidadeDoProduto * 5.00;
} else if (codigoDoProduto === 4) {
  total = quantidadeDoProduto * 2.00;
} else if (codigoDoProduto === 5) {
  total = quantidadeDoProduto * 1.50;
} else {
  alert("opção inválida")
}
alert(`Total: R$ ${total.toFixed(2)}`)