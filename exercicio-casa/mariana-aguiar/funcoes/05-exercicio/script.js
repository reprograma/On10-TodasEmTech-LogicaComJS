//5. Crie uma função que receba um nome e retorne uma saudação na forma de uma string.
function saudacao (nome){
    return `Obrigada pelas compras, ${nome}! Volte Sempre!`
}


const nome = prompt("Qual é seu nome?")
const mensagem = saudacao(nome)
console.log(mensagem);