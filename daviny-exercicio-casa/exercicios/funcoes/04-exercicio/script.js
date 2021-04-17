//4. Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.


let dataAtual = new Date();
let anoAtual = dataAtual.getFullYear();
let anoUsuario;

function ano(anoAtual, anoUsuario){

    if((anoAtual - anoUsuario) >= 18){

        alert("Maior de 18")
    }
    else{

        alert("Menor de 18")
    }
}

ano(anoAtual ,prompt("Digita o seu Ano de nascimento"))