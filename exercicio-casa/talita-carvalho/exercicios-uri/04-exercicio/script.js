//[Exercício 04](https://www.urionlinejudge.com.br/judge/pt/problems/view/1009)

var nome = document.getElementById("nome");
var salario = document.getElementById("salario");
var vendas = document.getElementById("vendas");

var total = document.getElementById("total");

function calcularTotal() {
  var comissao = parseFloat(vendas.value) * 0.15;
  console.log("comissao", comissao);

  var salarioTotal = parseFloat(salario.value) + comissao;
  total.innerHTML = salarioTotal.toFixed(2);
}
