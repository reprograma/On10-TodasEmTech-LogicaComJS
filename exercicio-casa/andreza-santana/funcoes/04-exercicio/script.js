//4. Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

let anoDeNascimento = prompt('insira o se ano de nascimento:');
let anoAtual = 2021;
let idade = anoAtual - anoDeNascimento;

if (idade >= 18) {
    alert(`sua idade é ${idade} anos. você é maior de idade`);
} else if (idade < 0){
    alert(`Por favor, inserir um ano válido`)
}else{
    alert(`sua idade é ${idade} anos. você é menor de idade`);
}
