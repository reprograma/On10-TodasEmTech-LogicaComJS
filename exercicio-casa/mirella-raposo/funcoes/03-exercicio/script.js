//3. Crie uma função que calcula 5% de desconto retornando o valor do desconto.

let valor = Number (prompt("Insira o valor para calcular o seu desconto:"));
let desconto = 0.05;

let preco = valor - (valor * desconto);

alert(`O valor que você inseriu com desconto de ${desconto*100}% é equivalente a ${preco}`);