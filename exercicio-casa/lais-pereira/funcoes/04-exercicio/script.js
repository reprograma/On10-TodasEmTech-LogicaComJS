//4. Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

let anoAtual = Number(prompt("Insira o ano atual"));
let anoNascimento = Number(prompt("Insira o ano em que você nasceu"));

let idadeAtual = function maiorIdade(anoAtual,anoNascimento){
  if ((anoAtual - anoNascimento) >= 18){
      return 'Você já alcançou a maior idade!'
  } else {
      return 'Você ainda é menor de idade!'
  }
}
alert(idadeAtual(anoAtual, anoNascimento))


