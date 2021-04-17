// [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 
let codigo = parseInt(prompt("Insira o código do item"));
let quantidade = parseInt(prompt("Insira a quantidade de itens"));
let total = 0

if (codigo === 1){
    total = quantidade * 4;
}
else if (codigo === 2){
    total = quantidade * 4.50;
}
else if (codigo === 3){
    total = quantidade * 5;
}
else if (codigo === 4){
    total = quantidade * 2;
}
else if (codigo === 5){
    total = quantidade * 1.50;
}
else {
    alert ("opção inválida")
}
alert(`Total:R$ ${total.toFixed(2)}`)