//- [Exercício 02](https://www.urionlinejudge.com.br/judge/pt/problems/view/1134)

let combustivel = 0;

let alcool = 0;
let gasolina = 0;
let diesel = 0;

combustivel = parseInt(prompt("Qual dos nossos produtos você prefere? 1.Álcool | 2.Gasolina | 3.Diesel | 4.Fim"));

while (combustivel <= 4) {
  switch(combustivel){
  case '1': 
    alcool++
    break;
  case '2': 
    gasolina++
    break;
  case '3':
    diesel++
    break;
  case '4':
      alert (`MUITO OBRIGADO
       Álcool: ${alcool}, Gasolina: ${gasolina}, Diesel: ${diesel}`)
    break;
  default:
      alert ("O código digitado não corresponde a nenhum de nossos produtos. Por favor, insira um código válido.")
    break;
    } 
 combustivel = prompt("Qual dos nossos produtos você prefere? 1.Álcool | 2.Gasolina | 3.Diesel | 4.Fim"); 
}; 