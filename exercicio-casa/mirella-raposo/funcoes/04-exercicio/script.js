//4. Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

let anoNascimento = Number (prompt("Qual seu ano de nascimento?"));

let maiorIdade = -(anoNascimento) + 2021;

if (maiorIdade >= 18){
    alert(`Você tem ${maiorIdade}, portanto, é maior de idade.`);
} if (maiorIdade < 18){ 
    alert(`Você tem ${maiorIdade}, portanto, é menor de idade.`);
};