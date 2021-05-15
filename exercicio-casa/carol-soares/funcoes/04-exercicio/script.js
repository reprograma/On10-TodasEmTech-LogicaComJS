//4. Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

let anoAtual = Number(prompt("Com 4 números, digite o ano que estamos:"));

let anoDoNascimento = Number(prompt("Ainda com 4 números, digite o ano em que você nasceu"));

let idadeAtual = function maiorIdade(anoAtual, anoDoNascimento){
  if ((anoAtual - anoDoNascimento) >= 18){
      return 'Você já alcançou a maior idade!'
  } else {
      return 'Você ainda é menor de idade!'
  }
}
alert(idadeAtual(anoAtual, anoDoNascimento))