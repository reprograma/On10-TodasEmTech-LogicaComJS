//- [Exercício 02](https://www.urionlinejudge.com.br/judge/pt/problems/view/1134)

function calcularCodigos() {
    var valores = document.getElementById("codigos").value;
    var lista = valores.split(",").map(Number)
    var quantidadeAlcool = 0;
    var quantidadeGasolina = 0;
    var quantidadeDiesel = 0;

    for (var contador = 0; contador < lista.length; contador++) {
        let valor = lista[contador];
        switch (valor) {
            case 1:
                quantidadeAlcool++;
                break;
            case 2:
                quantidadeGasolina++;
                break;
            case 3:
                quantidadeDiesel++;
                break;
            case 4:
                break;
            default:
                break;

        }
    }

    console.log('MUITO OBRIGADO')
    console.log('Alcool: ' + quantidadeAlcool)
    console.log('Gasolina: ' + quantidadeGasolina)
    console.log('Diesel: ' + quantidadeDiesel)

    document.getElementById("span-Obrigado").innerHTML="Muito Obrigado";
    document.getElementById("alcool").innerHTML='Alcool: ' + quantidadeAlcool;
    document.getElementById("gasolina").innerHTML='Gasolina: ' + quantidadeGasolina
    document.getElementById("diesel").innerHTML='Diesel: ' + quantidadeDiesel

}




