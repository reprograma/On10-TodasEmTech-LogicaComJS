//- [Exercício 02](https://www.urionlinejudge.com.br/judge/pt/problems/view/1134)

var combustiveis = window.document.getElementById("combustiveis"); // 125362142
var total = window.document.getElementById("total");

function preferencia() {
  var alcool = 0;
  var gasolina = 0;
  var diesel = 0;
  var invalido = 0;

  var valores = combustiveis.value;

  for (let index = 0; index < valores.length; index++) {
    console.log("itens", valores[index]);

    switch (valores[index]) {
      case "1":
        alcool++;
        break;
      case "2":
        gasolina++;
        break;
      case "3":
        diesel++;
        break;

      default:
        invalido++;
        break;
    }
  }

  total.innerHTML = `
  <div>MUITO OBRIGADO </div>
  <div>Álcool: ${alcool}</div>
  <div>Gasolina: ${gasolina}</div>
  <div>diesel: ${diesel}</div>
  `;
}
