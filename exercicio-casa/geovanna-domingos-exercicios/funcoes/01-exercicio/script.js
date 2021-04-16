//1. Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

let numero;

function identificarNumeroPar(numero){
    if(numero%2===0){
        let palavra = 'par';
        return 'O número '+ numero+' é '+ palavra;
    }else if(numero%2===1){
        let palavra = 'ímpar';
        return 'O número '+ numero+' é '+ palavra;
    }else{
        return 'Você não inseriu corretamente o número. Tente novamente.';
    }
}

console.log(identificarNumeroPar(0));