//  Operadores aritméticos
let soma = 10+10;
console.log(soma)

let subtração = 10-5;
console.log(subtração)

let multiplaicação = 5*6;
console.log(multiplaicação)

let divisão = 13/5;
console.log(divisão)

let expoente = 4**8;
console.log(expoente)

let modulo = 10%3;
console.log(modulo)

// operadores aritméticos (string)

const soma2 = '50' + 50 // 5050
const sub2 = '100' - 50 // por debaixo dos panos javascript vai converter para numero e fazer o calculo
const mult2 = '100' * '2' // por debaixo dos panos javascript vai converter para numero e fazer o calculo
const div = 'Comprei 10' / 2 // NaN (não é um numero)

// Operador Unário
let contador = 1;

// Incremento
++contador // mesmo que contador = contador + 1 (ele ira retornar valor atualizado)

console.log(++contador);

contador++ // mesmo que contador = contador + 1 (ele ira retornar o valor antes de incrementá-lo)

// Decremento
--contador // mesmo que contador = contador - 1 (ele ira retornar valor atualizado)
contador-- // mesmo que contador = contador - 1 (ele ira retornar o valor antes de incrementá-lo)

// Operadores de comparação

3 == '3' // testa a igualdade, não testa o tipo
3 != 10 // diferente de 
3 === 3 // testa igualdade e tipo
3 !== 3 // testa igualdade e tipo
3 > 2 // maior que
3 >= 3 // maior que ou igual
3 < 5 // menor que
5 <= 5 // menor que ou igual 

// Truthy e Falsy

/* Em JavaScript, um valor truthy é um valor que se traduz em verdadeiro quando avaliado em um contexto Booleano. Todos os valores são truthy a menos que eles sejam definidos como falsy (ou seja., exceto para false, 0, "", null, undefined, e NaN). */


// Operadores lógicos

let maiorDeIdade = true;
let diaDaSemana = 'sábado'

diaDaSemana === 'sábado' && maiorDeIdade // O E sempre as duas condições tem que ser verdadeira

diaDaSemana === 'sábado' || maiorDeIdade // O Ou pelo menos uma condição tem que ser verdadeira

!maiorDeIdade // O não, altera o valor booleano, caso a seja true, se torna false, caso seja false se torna true 

//  Number(), Alert, Prompt
const nome = 'Viviane'
alert(nome)

let numero = Number(prompt("informe um numero"))
let numero2 = parseInt(prompt('informe segundo numero'))
let numero3 = parseFloat(prompt('informe terceiro numero'))
