//4. Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function MaiorDeIdade(anoDeNascimento) {
    if (2021 - anoDeNascimento >= 18) {
        console.log("Maior de idade")
    } else {
        console.log("Menor de idade")
    }
}

let anoDeNascimento = Number(prompt("Digite o seu ano de nascimento:"));
MaiorDeIdade(anoDeNascimento);