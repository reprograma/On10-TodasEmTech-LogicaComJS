// [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 

let codigo = Number(prompt("Digite o código do que você quer:"));
let quantidade = Number(prompt("Digite a quantidade:"));
let total = 0;

if (codigo == 1) {
    total = quantidade * 4;
} else if (codigo == 2) {
    total = quantidade * 4.5;
} else if (codigo == 3) {
    total = quantidade * 5;
} else if (codigo == 4) {
    total = quantidade * 2;
} else if (codigo == 5) {
    total = quantidade * 1.5;
} 

console.log(`O total a pagar é R$ ${total}`)