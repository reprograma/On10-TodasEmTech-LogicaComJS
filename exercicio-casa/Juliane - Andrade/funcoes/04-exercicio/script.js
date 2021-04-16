//4. Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function maiorIdade(a, b) {
    if ((b - a) >= 18) {
        return 'Maior de Idade'
    } else {
        return 'Menor de idade'
    }
}

alert(maiorIdade(prompt('Digite o seu ano de nascimento'), prompt('Digite o ano atual')));