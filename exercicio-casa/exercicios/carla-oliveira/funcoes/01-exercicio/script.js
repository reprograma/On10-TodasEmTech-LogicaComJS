//1. Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetr

function parImpar(n){
    if (n % 2 == 0){
        return 'par'
    } else {
        return 'ímpar'
    }
}

alert(parImpar(prompt("digite um número qualquer:")))