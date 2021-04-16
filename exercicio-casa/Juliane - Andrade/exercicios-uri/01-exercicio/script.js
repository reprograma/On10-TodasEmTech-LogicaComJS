// [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 

function totalFood() {
    let codigo = parseInt(prompt('Digite o código do alimento'));
    let qtd = parseInt(prompt('Digite a quantidade consumida do alimento'));
    let total = parseFloat(0);
    if (codigo === 1) {
        total = qtd * 4
    } else if (codigo === 2) {
        total = qtd * 4.50
    } else if (codigo === 3) {
        total = qtd * 5
    } else if (codigo === 4) {
        total = qtd * 2
    } else if (codigo === 5) {
        total = qtd * 1.50
    } else {
        alert(`Opção inválida`)
    }
    return alert(`Total R$ ${total.toFixed(2)}`)
}

totalFood();