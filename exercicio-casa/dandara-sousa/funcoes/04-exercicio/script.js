//4. Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function maiorIdade(anoNascimento){
    if (anoNascimento <= 2003){
        return 'Você já alcançou a maior idade!'
    } else {
        return 'Você ainda é menor de idade!'
    }
}

let resultado = maiorIdade(prompt("Insira o ano do seu nascimento:"))

alert (resultado)