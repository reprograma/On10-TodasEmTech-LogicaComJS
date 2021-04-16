//- [Exercício 02](https://www.urionlinejudge.com.br/judge/pt/problems/view/1134)

let alcool = 0;
let gasolina = 0;
let diesel = 0;

while (true) {
    let codigo = prompt('Insira o código combustível de sua preferência 1.Álcool 2.Gasolina 3.Diesel 4.Para terminar:');

    if (codigo == 1) {
        alcool++;
    } else if (codigo == 2) {
        gasolina++;
    } else if (codigo == 3) {
        diesel++;
    } else if (codigo==4) {
        alert(`MUITO OBRIGADO Álcool: ${alcool}, Gaolina: ${gasolina}, Diesel: ${diesel}`);
        break
    } else {
        alert('Por favor inserir um código válido');
    }
}
