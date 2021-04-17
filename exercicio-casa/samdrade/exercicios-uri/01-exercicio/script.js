// [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 


let resultado = 0
let codigo = prompt("digite o codigo do produto");
let qtd = prompt("digite a quantidade do "produto");

if{codigo==='1'}{
    resultado = qtd+4
}
if{codigo==='2'}{
    resultado = qtd+5
}
if{codigo==='3'}{
    resultado = qtd+5
}
if{codigo==='4'}{
    resultado = qtd+2
}
if{codigo==='5'}{
    resultado = qtd+1,5
}

console.log("Total:R$ ${resultado");