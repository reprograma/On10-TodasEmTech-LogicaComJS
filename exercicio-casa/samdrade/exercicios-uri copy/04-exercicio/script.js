//[Exercício 04](https://www.urionlinejudge.com.br/judge/pt/problems/view/1009)

let nota1 = Number(prompt("escreva a primeira nota"));
let nota2 = Number(prompt("escreva a segunda nota"));
let nota3 = Number(prompt("escreva a terceira nota"));

let mediaFinal = (nota1 + nota2 + nota3)/3;

if(mediaFinal>=7){
  alert("Parabéns, você foi aprovado, aproveite suas férias!")
} else if(mediaFinal>=5 && mediaFinal<7){
  alert("Você está de recuperação!")
} else{
  alert("Que pena, você foi reprovado.")
};
