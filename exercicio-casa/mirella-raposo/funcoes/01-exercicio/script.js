//1. Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

let numero = Number (prompt("Digite um número"));

if(numero %2 == 0){
    alert(`O número ${numero} é par.`);
};
if(numero %2 == 1){
    alert(`O número ${numero} é ímpar.`)
} else {
    alert("Digite um número válido")
};