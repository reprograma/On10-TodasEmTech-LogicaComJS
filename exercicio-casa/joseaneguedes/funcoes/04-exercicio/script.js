//4. Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.


const ano = 2009

function eMaior(nascimento) {
    const hoje = new Date() .getFullYear()
    if(hoje - nascimento > 18) return true
    return false
}

if (eMaior(ano)) {
    console.log('É maior de idade')
} else (eMaior(ano)){
    console.log('É maior de idade')
}

