// [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 

let codigoDoLanche = Number(prompt("Digite o código do lanche desejado: 1- Cachorro Quente | 2- X-salada | 3- X-Bacon | 4- Torrada simples | 5- Refrigerante"));
let quantidadeDoLanche = Number(prompt("Quantos lanches você deseja?"));

switch (codigoDoLanche) {
    case "1":
    valor = 4 * quantidadeDoLanche
    break;
    case "2":
    valor = 4.50 * quantidadeDoLanche
    break;
    case "3":
    valor = 5 * quantidadeDoLanche
    break;
    case "4":
    valor = 2 * quantidadeDoLanche
    break;
    case "5":
    valor = 1.50 * quantidadeDoLanche
    break;
    default: 
    alert("O código digitado não corresponde a nenhum lanche. Por favor, insira um código válido.")
    break;
};

alert ("O valor total é R$" + valor.toFixed(2));