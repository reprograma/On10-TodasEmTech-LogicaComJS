// [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 

let codigo = prompt("Digite o código do seu pedido: ")
let quantidade = prompt("Digite a quantidade desejada: ")

switch (codigo) {
    case "1":
        valor = 4 * quantidade
        break;
    case "2":
        valor = 4.50 * quantidade
        break;
    case "3":
        valor = 5 * quantidade
        break;
    case "4":
        valor = 2 * quantidade
        break;
    case "5":
        valor = 1.50 * quantidade
        break;
    default:
        alert('Desculpe, item indisponível! Favor, escolher um numero entre 1 e 5!');
}

alert("O pagamento total é de R$" + valor.toFixed(2) + "! Volte Sempre!")