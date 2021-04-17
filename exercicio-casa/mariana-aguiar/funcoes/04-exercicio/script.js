//4. Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.
function maioridade (_anoDeNascimento){
    if(_anoDeNascimento <= 2003){
        return "Você já é maior de idade!"
    }
    else{
        return "Você ainda é menor de idade!"
    }
}

alert(maioridade(parseInt(prompt("Insira o seu ano de nascimento"))));
