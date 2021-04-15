//- [Exercício 02](https://www.urionlinejudge.com.br/judge/pt/problems/view/1134)
let entrada = 1
let alcool = 2
let diesel = 3
let gasolina = 4



while(entrada == 1 || entrada ==2 || entrada ==3 || entrada == 4){

    let entrada= prompt("insira texto aqui");
if (entrada == 1) {
    console.log("alcool")
    alcoll++
    break;
}
else if(entrada == 2){
    console.log("Gasolina")
    gasolina++
    break;
}
else if(entrada == 3){
    console.log("Diesel")
    diesel++
    break;
}
else if(entrada == 4){
    console.log("Fim")
    break;
}

while((entrada =! 1) && (entrada =!2) && (entrada =! 3) && (entrada =! 4)){
    
    let entrada= prompt("insira um novo código");
}

}

console.log (alcool)
console.log(gasolina)
console.log(gasolina)

do {
    let entrada= prompt("insira texto aqui");
    while((entrada =! 1) && (entrada =!2) && (entrada =! 3) && (entrada =! 4)){
    let entrada= prompt("insira um novo código"); 
    if (entrada == 1 || entrada ==2 || entrada ==3 || entrada == 4){
        break
    }
    }
