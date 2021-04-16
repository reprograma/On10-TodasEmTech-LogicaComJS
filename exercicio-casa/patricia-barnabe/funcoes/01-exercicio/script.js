//1. Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.
let numero = prompt("Digite um número");

function tipoNumero (numero) {
    if (numero % 2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
};

