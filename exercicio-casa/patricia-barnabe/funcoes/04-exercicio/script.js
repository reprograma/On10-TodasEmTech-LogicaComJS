//4. Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.
let anoNascimento = Number(prompt("Digite o ano do seu nascimento:"));

function idade (anoNascimento) {
    if (anoNascimento <= 2003) {
        return alert("Você é maior de idade.")
    } else {
        return alert("Você é menor de idade.")
    }
};
