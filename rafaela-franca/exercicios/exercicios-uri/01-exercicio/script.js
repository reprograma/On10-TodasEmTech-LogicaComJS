// [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038)

const imprime = (function (){
    
    let resultado = 0;
    let codigo = prompt('Digite o codigo do produto')
    let quantidade = prompt('Digite a quantidade do produto')
    
    if(codigo === '1'){
        resultado = quantidade*4
    }
    if(codigo === '2'){
        resultado = quantidade*4.5
    }
    if(codigo === '3'){
        resultado = quantidade*5
    }
    if(codigo === '4'){
        resultado = quantidade*2
    }
    if(codigo === '5'){
        resultado = quantidade*1.5
    }
    return `Total: R$ ${resultado}` 
})()

console.log(imprime)











