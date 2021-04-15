//- [Exercício 02](https://www.urionlinejudge.com.br/judge/pt/problems/view/1134)

let combustivel = 0

let contadorAlcool = 0
let contadorGasolina = 0 
let contadorDiesel = 0

combustivel = prompt("Qual seu produto de maior preferência no nosso posto?");
while (combustivel <= 4) {
  switch(combustivel){
  case "1": 
  contadorAlcool++
    break;
  case "2": 
  contadorGasolina++
  break;
  case "3":
    contadorDiesel++
    break;
  case "4":
    alert (`MUITO OBRIGADO
       Álcool: ${contadorAlcool}, Gasolina: ${contadorGasolina}, Diesel: ${contadorDiesel}`)
       contadorAlcool = 0
       contadorGasolina = 0 
       contadorDiesel = 0
    break;
} 
 combustivel = prompt("Qual seu produto de maior preferência no nosso posto?"); 
};