//1. Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.
function parImpar(n) {
    if ( n % 2 == 0) {
        return 'par'
    }else {
        return "impar"
    }
}
alert(parImpar(prompt("digita um número:")))

