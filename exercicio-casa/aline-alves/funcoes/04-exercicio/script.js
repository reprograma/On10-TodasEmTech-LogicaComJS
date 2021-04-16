//4. Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.
let dataNascimento = prompt("Qual sua data de nascimento?")
let idade = (2021 - dataNascimento );

if(idade < 18) {
    console.log("É menor de idade");
} else {
    console.log("É maior de idade");
}