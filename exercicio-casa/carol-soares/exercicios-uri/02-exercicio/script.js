//- [Exercício 02](https://www.urionlinejudge.com.br/judge/pt/problems/view/1134)public class ex1038_lanche {
    
  let álcool = parseInt(0);
  let gasolina = parseInt(0);
  let diesel = parseInt(0);
  let entrada = parseInt(0);
  
  
  function relatorio() {
  do {
      cliente = parseInt(prompt('Digite o código correspondente a sua preferência de abastecimento: 1.Álcool 2.Gasolina 3.Diesel 4.Fim'));
  
  
  if (cliente == 1) {
      álcool++
      break;
  }
  if(cliente == 2) {
      gasolina++
      break;
  }
  else if(cliente == 3) {
      diesel++
      break;
  }

  else if(cliente == 4) {
      break;
  }
  
  }while (cliente != 4 );
  
  return alert(`Muito obrigado(a)! \nÁlcool:${álcool} \nGasolina: ${gasolina} \nDiesel: ${diesel}`);
  }
  
  relatorio();
  
  
