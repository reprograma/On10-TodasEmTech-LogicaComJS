//1. Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.
let num = Number(prompt("Digite um número para saber se ele é par ou ímpar:"));

const oddOrEven = (num) => {
    if(num%2 === 0){
        return 'Par';
    }
    else{
        return 'Impar';
    }
}
alert(`O número que você digitou é ${oddOrEven(num)}`);
