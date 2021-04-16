//- [Exercício 02](https://www.urionlinejudge.com.br/judge/pt/problems/view/1134)

let combustivel = 0;
let contadorAlcool = 0;
let contadorGasolina = 0;
let contadorDiesel = 0;

do {

    combustivel = Number(prompt("Digite o código do combustível abastecido!"));

    console.log(`Muito obrigado! Alcool: ${contadorAlcool}  Gasolina: ${contadorGasolina} Diesel: ${contadorDiesel}`);

    if (combustivel === 1){
        contadorAlcool++
    } else if (combustivel === 2) {
        contadorGasolina++
    } else if (combustivel === 3) {
        contadorDiesel++
    }

} while (combustivel !== 4) {
 
}