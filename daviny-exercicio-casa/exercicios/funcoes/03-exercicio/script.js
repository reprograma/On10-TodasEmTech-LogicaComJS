//3. Crie uma função que calcula 5% de desconto retornando o valor do desconto.

function desconto(valor){
    valorResultado = valor * (5/100)
    return valor - valorResultado;
}

alert("valor de desconto é: " 
+ desconto(
    prompt("Digita o valor para desconto: ")))