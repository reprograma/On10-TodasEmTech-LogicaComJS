//1. Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.



function ImparPar(numero) {
    if (numero % 2 == 0) {
        console.log("Esse numero é par!");
    } else {
        console.log("Esse numero é impar!");
    }
}
let numero = Number(prompt("Digite um número:"));
ImparPar(numero);