//1. Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function parimpar(n) {
    if (n%2 == 0) {
        return 'Par'
    } else {
        return 'ímpar'
    }
}
 console.log(parimpar(2));