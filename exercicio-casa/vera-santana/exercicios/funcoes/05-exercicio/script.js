//5. Crie uma função que receba um nome e retorne uma saudação na forma de uma string.

function Saudacao(nome) {
    console.log(`Bom dia ${nome}!`);
}

let nome = prompt("Digite seu nome:");
Saudacao(nome);