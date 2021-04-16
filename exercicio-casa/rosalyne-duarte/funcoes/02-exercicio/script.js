//2. Crie uma função que recebe 2 parâmetros e retorna a multiplicação deles.
let numero1 = Number(prompt('Insira o 1º numero?'));
let numero2 = Number(prompt('Insira o 2º numero?'));

let multplicacao = function(numero1, numero2){
    console.log(numero1 * numero2);
}
multplicacao(numero1, numero2);