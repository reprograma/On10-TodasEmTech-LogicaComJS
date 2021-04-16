// [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038)

var item = window.document.getElementById("item");
var quantidade = window.document.getElementById("quantidade");
var total = window.document.getElementById("total");

function calcularTotal() {
  switch (Number(item.value)) {
    case 1: 
      total.innerText = quantidade.value * 4;
      break;
    case 2:
      total.innerText = quantidade.value * 4.5;
      break;
    case 3:
      total.innerText = quantidade.value * 5;
      break;
    case 4:
      total.innerText = quantidade.value * 2;
      break;
    case 5:
      total.innerText = quantidade.value * 1.5;
      break;
    default:
        total.innerText = 'valor não correspondente';
      break;
  }
}
