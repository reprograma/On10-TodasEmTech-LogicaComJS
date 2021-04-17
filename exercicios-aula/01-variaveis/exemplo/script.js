// 1 -  Utilizando let e const: qual usar?
// Declare variáveis que contenham o seu nome completo, dia da semana, seu cpf, rg e data de nascimento

let nome = "Mariana Aguiar";
let diaDaSemana = "sábado";
diaDaSemana = "domingo";

const cpf = "09580471460"
const rg = "7921304";
const dataNascimento = "17/06/1991";

//  2 - Tipos de dados, usando a funçao typeOf() e console.log(). Agora defina qual é o tipo de valor que você declarou em cada variável.

console.log(typeof(nome));
console.log(nome);
console.log("diaDaSemana:", diaDaSemana);
console.log("tipo da variável diaDaSemana:", typeof(diaDaSemana));
console.log("isso é uma concatenação:", diaDaSemana + cpf, dataNascimento )