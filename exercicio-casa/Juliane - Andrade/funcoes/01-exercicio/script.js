//1. Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function parImpar(i) {
    if (i % 2 === 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let numero = parImpar(prompt("Digite o número que desejar e veja se ele é impar ou par"));
console.log(numero);