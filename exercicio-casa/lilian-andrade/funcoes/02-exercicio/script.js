//2. Crie uma função que recebe 2 parâmetros e retorna a multiplicação deles.

let numero1 = Number(prompt("Digite um número"));
let numero2 = Number(prompt("Digite outro número"));

function multiplicacao( numero1, numero2){
    resultado = numero1 * numero2;
    return resultado
}

multiplicacao(numero1, numero2);
alert(resultado);

