//- [Exercício 02](https://www.urionlinejudge.com.br/judge/pt/problems/view/1134)
let entrada = 1;
let alcool = 0
let diesel = 0
let gasolina = 0 


while (entrada == 1 || entrada == 2 || entrada == 3 || entrada == 4) {

    let entrada = prompt("Digite o código do combustível comprado:");
    if (entrada == 1) {
        console.log("Álcool");
        alcool ++
    } else if (entrada ==  2) {
      console.log("Gasolina");
      gasolina ++
    } else if (entrada == 3) {
        console.log("Diesel");
        diesel ++
    } else if ((entrada != 1) && (entrada != 2) && (entrada != 3) && (entrada != 4)) {
        let novoNumero = prompt("Código inválido, tente novamente.")
    } else if (entrada == 4) {
        console.log("Obrigado pela preferência!");
        break;
    }
} alert(`Total: ${alcool} alcool, ${gasolina} gasolina, ${diesel} diesel.`);