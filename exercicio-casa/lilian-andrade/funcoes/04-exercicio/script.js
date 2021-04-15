//4. Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

let anoDeNascimento = Number(prompt("Digite seu Ano de Nascimento"));


function MaiorIdade (anoDeNascimento){
    
    if (2021-anoDeNascimento >=18) {
        alert(" Maior Idade");

    }
    else {
        alert("Menor Idade")
    } 

}
MaiorIdade(anoDeNascimento)