// [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 

let codigoProduto;
let qtdProduto;

function calcularPagamento(codigoProduto,qtdProduto){
    let valorProduto;
    let valorFinalPagamento;

    if(codigoProduto===1){
        valorProduto = 4.00;
        valorFinalPagamento = (valorProduto*qtdProduto).toFixed(2); 
        return "Total a ser pago: R$"+valorFinalPagamento;
    }else if(codigoProduto===2){
        valorProduto = 4.50;
        valorFinalPagamento = (valorProduto*qtdProduto).toFixed(2);  
        return "Total a ser pago: R$"+valorFinalPagamento;
    }else if(codigoProduto===3){
        valorProduto = 5.00;
        valorFinalPagamento = (valorProduto*qtdProduto).toFixed(2);  
        return "Total a ser pago: R$"+valorFinalPagamento;
    }else if(codigoProduto===4){
        valorProduto = 2.00;
        valorFinalPagamento = (valorProduto*qtdProduto).toFixed(2);  
        return "Total a ser pago: R$"+valorFinalPagamento;
    }else if(codigoProduto===5){
        valorProduto = 1.50;
        valorFinalPagamento = (valorProduto*qtdProduto).toFixed(2); 
        return "Total a ser pago: R$"+valorFinalPagamento;
    }else{
        return "Verifique se o código do produto foi inserido corretamente."
    }
}

console.log(calcularPagamento(2,3));
