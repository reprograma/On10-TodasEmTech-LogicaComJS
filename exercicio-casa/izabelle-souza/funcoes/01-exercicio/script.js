//1. Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

let numero = Number(prompt("Digite um número"));

function verificacao(numero){
    if (numero % 2 === 0){
        alert("Número Par")
    }
    else {
        alert("Numero ìmpar")
    }
    
}

verificacao(numero);