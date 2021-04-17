//Crie uma lista com nomes de frutas e um laço de iteração que mostre todos esses itens no console

const arrayDeFrutas = ['morango', 'abacate', 'abacaxi', 'banana', 'morango']

for(let i = 0; i < arrayDeFrutas.length; i++){
   console.log(arrayDeFrutas[i])
}


// crie um loop em que o usuário registrou uma senha como '2020', porem enquanto digitar a senha errada receberá uma mensagem de erro em seu console.

let senha = Number(prompt("Informe a sua senha"))

while(senha !== 2020){
  console.warn('sua senha está errada')
}

