//5. Crie uma função que receba um nome e retorne uma saudação na forma de uma string.

const name = prompt("Olá! Qual seu nome?") 

const greet = (name) => {
    return `Olá ${name}! É um prazer te conhecer!`
}

alert(greet(name));