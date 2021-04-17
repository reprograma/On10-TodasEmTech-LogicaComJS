// [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 

let codigoDoProduto = parseInt(prompt("Qual a opção do lanche desejado"));
let quantidadeDoProduto = parseInt(prompt("Quantos você deseja?"));

if (codigoDoProduto === 1) {
    total = quantidadeDoProduto * 4.0;
} else if (codigoDoProduto ===2) {
    total = quantidadeDoProduto  * 4.50;
} else if (codigoDoProduto ===3) {
    total = quantidadeDoProduto * 5.00;
} else if (codigoDoProduto === 4) {
    total = quantidadeDoProduto * 2.00;
}else if (codigoDoProduto === 5) {
    total = quantidadeDoProduto * 1.50;
} else {
    alert("opcão inválida")
}
alert(`Total: R$ ${total.toFixed(2)}`)