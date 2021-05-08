//2. Crie uma função que recebe 2 parâmetros e retorna a multiplicação deles.
const num1 = Number(prompt("Digite um numero"));
const num2 = Number(prompt("Digite outro numero"));

const mult = (num1, num2) => {
    return num1*num2;
}
alert(`O resultado da multiplicação é: ${mult(num1, num2)}`);
