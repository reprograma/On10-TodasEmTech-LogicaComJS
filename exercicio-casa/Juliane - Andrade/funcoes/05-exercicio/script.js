//5. Crie uma função que receba um nome e retorne uma saudação na forma de uma string.

function name() {
    let nome = prompt('Qual o seu nome?');
    return (`Seja Bem-vindo, ${nome}!!`);
}

console.log(name())