// [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 




/*inicializando as variaveis*/

let resultado=0;
let codigo = prompt('Digite o codigo do produto')
let qtd = prompt('Digite a quantidade do produto')


/*Processando os dados*/
if(codigo==='1'){

    resultado = qtd*4
    

} 
if(codigo==='2'){

    resultado = qtd*4.5

} 
if(codigo==='3'){

    resultado = qtd*5

} 
if(codigo==='4'){

    resultado = qtd*2

} 
if(codigo==='5'){

    resultado = qtd*1.5

} 


console.log(`Total: R$ ${resultado}`)


// if(diaDaSemana === 'Sábado'){
//     console.log('Eba, hoje tem aula da reprograma')
// }
// else if(diaDaRevisao === 'Quarta') {
//     console.log('Ufa, revisão')
// }
// else {
//     console.log('Hoje não tem aula da reprograma')
// }
