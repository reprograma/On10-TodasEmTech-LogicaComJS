// [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 
let codigo_compra = (prompt('Insira o código da sua compra:'));
let quantidade = Number(prompt('Insira a quantidade:')); 

switch (codigo_compra){
  case '1':
      var compra_total = 4*quantidade;
      alert(`Total R$${compra_total.toFixed(2)}`);
      break;
  case '2':
      var compra_total = 4.50*quantidade;
      alert(`Total R$${compra_total.toFixed(2)}`);
      break;
  case '3':
      var compra_total = 5.00*quantidade;
      alert(`Total R$${compra_total.toFixed(2)}`);
      break;
  case '4':
      var compra_total = 2.00*quantidade;
      alert(`Total R$${compra_total.toFixed(2)}`);
      break;
  case '5':
      var compra_total = 4.50*quantidade;
      alert(`Total R$${compra_total.toFixed(2)}`);
      break;
  default:
      alert(`Não localizado`)
}
  
  
