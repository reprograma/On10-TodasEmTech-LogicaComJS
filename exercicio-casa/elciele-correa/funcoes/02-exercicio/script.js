//2. Crie uma função que recebe 2 parâmetros e retorna a multiplicação deles.   


let number1 = Number(prompt("Insira um numero"));
let number2 = Number(prompt("Insira outro numero"));

let multiplicação = function(number1, number2){
    console.log(number1 * number2);
}

multiplicação(number1, number2);