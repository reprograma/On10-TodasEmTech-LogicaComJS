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


//1 - Utilizando let e const: qual usar?
// Declare variavies que contenham o seu nome completo, dia da semana, seu cpf, rg e data de nascimento

let nome = "Jaqueline de Almeida";
let diaDaSemana = "sábado";
diaDaSemana ="domingo";


const cpf = "013185795-97";
const rg ="0887397247";
const datNAcimento = "13/11/1984";

//  2 - Tipos de dados, usando a funçao typeof() e console.log(). Agora defina qual é o tipo de valor que você declarou em cada variável.

console.log('diaDaSemana:', diaDaSemana);
console.log('tipo da variável diaDaSemana:', typeof(diaDaSemana));
console.log ("isso é uma concatenacao:", diaDaSemana + cpf, dataNascimento)