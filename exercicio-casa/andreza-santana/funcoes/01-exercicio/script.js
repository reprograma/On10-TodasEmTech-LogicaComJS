//1. Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.
let numeroEscolhido = prompt('insira um numero:');
let calculo = numeroEscolhido % 2;

if (calculo == 0) {
    alert(`O numero escolhido ${numeroEscolhido} é par!`);
} else {
    alert(`O numero escolhido ${numeroEscolhido} é impar!`);
}
