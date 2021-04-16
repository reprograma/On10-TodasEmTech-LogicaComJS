//4. Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

let anoAtual;
let anoNasicmento;

function identificarMaiorIdade(anoNasicmento, anoAtual){
    let idade = anoAtual-anoNasicmento;
    if(idade < 18){
       return 'Você é menor de idade, pois sua idade equivale a '+idade+' e isso é menos que 18 anos.'; 
    }else if(idade >=18){
        return 'Você é maior de idade, pois sua idade equivale a '+idade+' e isso é igual ou maior que 18 anos.';
    }else{
        return 'Verifique se os dados inseridos estão corretos.';
    }
}
console.log(identificarMaiorIdade(2009, 2021));
