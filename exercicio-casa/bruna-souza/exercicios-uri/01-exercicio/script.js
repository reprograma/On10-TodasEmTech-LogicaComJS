// [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 

let cod = prompt ("O que vc quer pedir: 1- Cachorro Quente | 2- X-salada | 3- X-Bacon | 4- Torrada simples | 5- Refrigerante")
let qtde = prompt ("Quantos?")

switch (cod) {
    case "1":
    val = 4 * qtde
    break;
    case "2":
    val = 4.50 * qtde
    break;
    case "3":
    val = 5 * qtde
    break;
    case "4":
    val = 2 * qtde
    break;
    case "5":
    val = 1.50 * qtde
    break;
    default: 
    break;
}

alert ("O valor final é R$" + val.toFixed(2))

