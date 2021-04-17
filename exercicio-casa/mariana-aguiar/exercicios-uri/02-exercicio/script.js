//- [Exercício 02](https://www.urionlinejudge.com.br/judge/pt/problems/view/1134)
 let repetir = true;
 let contadorAlcool = 0;
 let contadorGasolina = 0;
 let contadorDiesel = 0;
    while (repetir){
        let tipoDeCombustivel = parseInt(prompt("Insira um número de 1 a 4"));

        if (tipoDeCombustivel === 1){
         //alert("Álcool:1")
         contadorAlcool++;
        } else if (tipoDeCombustivel === 2){
         //alert("Gasolina: 2")
         contadorGasolina++;
        } else if (tipoDeCombustivel === 3){
         //alert("Diesel:3")
         contadorDiesel++;
        } else if (tipoDeCombustivel === 4){
        repetir = false
         //alert("Fim:4")
        } else{}
         //alert("Insira um código válido entre 1 e 4!")
        };

        console.log('MUITO OBRIGADO')
        console.log(`Alcool: ${contadorAlcool}`)
        console.log(`Gasolina: ${contadorGasolina}`)
        console.log(`Alcool: ${contadorDiesel}`)
