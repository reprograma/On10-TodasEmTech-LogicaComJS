//- [Exercício 02](https://www.urionlinejudge.com.br/judge/pt/problems/view/1134)

let combustivel = Number (prompt("Informe o código correspondente a sua preferência de combustível. 1. Álcool 2. Gasolina 3. Diesel 4. Fim"));

let contAlcool = 0

let contGasolina = 0

let contDiesel = 0

while (combustivel != 4) {

    if (combustivel < 4) {

        if (combustivel == 1) {
        contAlcool++;
        }

        if (combustivel == 2) {
        contGasolina++;
        }

        if (combustivel == 3) {
        contDiesel++;
        }

        alert(`MUITO OBRIGADO! Álcool: ${contAlcool} Gasolina: ${contGasolina} Diesel: ${contDiesel}.`)
        combustivel = Number (prompt("Informe o código correspondente a sua preferência de combustível. 1. Álcool 2. Gasolina 3. Diesel 4. Fim"));

    }

    if(combustivel > 4) {

        alert("Por favor, insira um código válido.");
        combustivel = Number (prompt("Informe o código correspondente a sua preferência de combustível. 1. Álcool 2. Gasolina 3. Diesel 4. Fim"));

    }

}

alert("Fim.");