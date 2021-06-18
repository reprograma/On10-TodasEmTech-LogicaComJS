// [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 

function calcularConta() {
    let codigoItem = document.getElementById("citem").value;
    let quantidadeItem = document.getElementById('qitem').value;
    if (codigoItem == 1) {
        let calc = quantidadeItem * 4.00;
        document.getElementById('result').innerHTML = (`Total: R$ ${calc.toFixed(2)}`);
    }else if (codigoItem == 2) {
        let calc = quantidadeItem * 4.50;
        document.getElementById('result').innerHTML = (`Total: R$ ${calc.toFixed(2)}`);
    }else if (codigoItem == 3) {
        let calc = quantidadeItem * 5.00;
        document.getElementById('result').innerHTML = (`Total: R$ ${calc.toFixed(2)}`);
    }else if (codigoItem == 4){
        let calc = quantidadeItem * 2.00;
        document.getElementById('result').innerHTML = (`Total: R$ ${calc.toFixed(2)}`);
    }else if (codigoItem == 5){
        let calc = quantidadeItem * 1.50;
        document.getElementById('result').innerHTML = (`Total: R$ ${calc.toFixed(2)}`);
    }else{
        document.getElementById('result').innerHTML = (`Por favor inserir valores válidos`);
    }
}

function limparResultado() {
    document.getElementById('result').innerHTML = '';
}
