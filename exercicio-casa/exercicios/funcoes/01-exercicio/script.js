//1. Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

let numero = Number(prompt("Insira um número"));



function verificacao(numero){
    if (numero % 2 === 0){
        alert("Par")
    }
    else {
        alert("Ímpar")
    }
    
}

verificacao(numero);