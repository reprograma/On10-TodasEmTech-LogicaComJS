//- [Exercício 02](https://www.urionlinejudge.com.br/judge/pt/problems/view/1134)

let a=0
let g=0
let d=0

let codigo = prompt('Digite o código');

while (codigo!="4"){
    if(codigo==="1"){
        a=a+1
        codigo = prompt("Digite o código")
    }else if(codigo==="2"){
        g=g+1
        codigo = prompt('Digite o código')
    }else if(codigo==="3"){
        d=d+1
        codigo = prompt('Digite o código')
    }else{
        codigo = prompt('Digite um código válido entre 1 e 4')
    }
}

console.log('Muito Obrigado')
console.log(`Alcool:${a}`)
console.log(`Gasolina:${g}`)
console.log(`Diesel:${d}`)

