//4. Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

//pessoas nascidas até 2003 são maiores de idade.

// let anoNascimento = Number(prompt("digite seu ano de nascimento"));

// if(anoNascimento >=2004){
//     alert("Você é menor de idade");
// } else if(anoNascimento <=2003){
//     alert("Você é maior de idade");
// }

let anoAtual = Number(prompt("Insira o ano atual"));
let anoNascimento = Number(prompt("Insira o ano em que você nasceu"));

let idadeAtual = function maiorIdade(anoAtual,anoNascimento){
  if ((anoAtual - anoNascimento) >= 18){
      return 'Você já alcançou a maior idade!'
  } else {
      return 'Você ainda é menor de idade!'
  }
}
alert(idadeAtual(anoAtual, anoNascimento));
    

