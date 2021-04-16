//4. Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function anoNascimento(idade) {
    if (idade >=18) {
        return 'Maior de Idade'
    } else {
        return 'Menor de Idade'
    }
}
console.log(anoNascimento(19));