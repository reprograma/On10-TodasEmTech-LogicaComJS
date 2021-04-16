// [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 

let codigoDoLanche = parseInt(prompt("Qual o código do lanche desejado?"));
let quantidadeDoLanche = parseInt(prompt("Quantos você deseja?"));
let valorTotal;

if (codigoDoLanche === 1) {
  total = quantidadeDoLanche * 4.00;
} else if (codigoDoLanche === 2) {
  total = quantidadeDoLanche * 4.50;
} else if (codigoDoLanche === 3) {
  total = quantidadeDoLanche * 5.00;
} else if (codigoDoLanche === 4) {
  total = quantidadeDoLanche * 2.00;
} else if (codigoDoLanche === 5) {
  total = quantidadeDoLanche * 1.50;
} else {
  alert("opção inválida")
}
alert(`Total: R$ ${total.toFixed(2)}`)
