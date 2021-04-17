//1. Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.
/*
if (condicao) {
  codigo para executar caso a condição seja verdadeira
} else {
  senão, executar este código
} */

function verification(number) {
  if (number % 2 == 0) {
    return 'Par'
  } else {
    return 'ìmpar'
  }

}
alert(verification(prompt("Digite um numero qualquer:")))