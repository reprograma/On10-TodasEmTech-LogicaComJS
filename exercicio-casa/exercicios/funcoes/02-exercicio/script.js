//2. Crie uma função que recebe 2 parâmetros e retorna a multiplicação deles.

let num1 = Number(prompt('Insira um número:'));
let num2 = Number(prompt('Insira outro número:'));

function multiplicacao( num1, num2){
    resultado = num1 * num2;
    return resultado
}

multiplicacao(num1, num2);
alert(resultado);