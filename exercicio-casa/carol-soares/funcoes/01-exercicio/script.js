//1. Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function imparPar(number) {
    if (number % 2 == 0) {
      return 'par'
    }else{
      return 'impar'
    }
  }
  alert(imparPar(prompt("digite um número:")))