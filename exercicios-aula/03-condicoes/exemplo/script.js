let formaDePagamento = prompt('Qual é a forma de pagamento?');

/*if*/
// exemplo de if / else if / else
if(formaDePagamento === 'dinheiro'){
console.log('sua forma de pagamento foi dinheiro')
} else if(formaDePagamento === 'cartao'){
  console.log('sua forma de pagamento foi cartao')
} else if(formaDePagamento === 'cheque'){
console.log('sua forma de pagamento foi cheque')
} else {
console.log('opcao invalida')
}




const diaDaSemana = 'Sábado'
const diaDaRevisao = 'Quarta'

if(diaDaSemana === 'Sábado'){
    console.log('Eba, hoje tem aula da reprograma')
}
else if(diaDaRevisao === 'Quarta') {
    console.log('Ufa, revisão')
}
else {
    console.log('Hoje não tem aula da reprograma')
}


//  Exemplo com switch
switch(formaDePagamento){
 case 'dinheiro': 
  console.log('sua forma de pagamento foi dinheiro')
  break;
 case 'cartao':
  console.log('sua forma de pagamento foi cartao')
  break;
 case 'cheque': 
  console.log('sua forma de pagamento foi cheque')
  break;
 default:
   console.log('opcao invalida')
}