// [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 
let codigo = prompt("Qual o codigo de seu lanche?")
let quantidade = prompt("Quantos lanches vc quer ?")

if(codigo == 1) {
   let total = (quantidade * 4.00).toFixed(2)
   console.log("O valor total do seu lanche é : R$ ", total);
}
else if (codigo == 2) {
   let total = (quantidade * 4.50).toFixed(2)
   console.log("O valor total do seu lanche é  : R$ ", total);
}
else if (codigo == 3) {
   let total = (quantidade * 5.00).toFixed(2)
    console.log("O valor total do seu lanche é : R$ ", total);
}
else if (codigo == 4) {
    let total = (quantidade * 2.00).toFixed(2)
    console.log("O valor total do seu lanche é : R$ ", total);
}
else if (codigo == 5) {
    let total = (quantidade * 1.50).toFixed(2)
    console.log("O valor total do seu lanche é : R$ ", total);
} 
else  {
    console.log(" Opção Inválida");
}