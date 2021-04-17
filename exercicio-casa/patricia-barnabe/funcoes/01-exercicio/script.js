//1. Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

let numero = Number(prompt("Digite um número:"));

function tipoNumero (numero) {
    if (numero % 2 == 0) {
        return alert ('O número ' + numero + ' é PAR.')
    } else {
        return alert ('O número digitado é ÍMPAR')
    }
};

