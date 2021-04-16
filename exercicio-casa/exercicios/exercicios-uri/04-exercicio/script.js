//[Exercício 04](https://www.urionlinejudge.com.br/judge/pt/problems/view/1009)

const vendedor = "Lucas";
console.log(vendedor);
const salarioFixo = 1500.50;
console.log(salarioFixo);
const comissao = 0.15;
let vendasMes = 550.10;
console.log(vendasMes);


let salarioFinal =(vendasMes*comissao)+salarioFixo;
let arredondado = parseFloat(salarioFinal.toFixed(2));
console.log('R$', arredondado);