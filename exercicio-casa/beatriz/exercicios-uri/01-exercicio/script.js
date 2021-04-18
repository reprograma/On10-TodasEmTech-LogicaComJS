// [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 

function exibirResultado(){
   
}

function somarPedidos(){

 let quantidadePizza = document.getElementById("quantidade-pizza").value;

 let quantidadeCachorroQuente = document.getElementById("quantidade-cachorro-quente").value;

 let quantidadeSoverte = document.getElementById("quantidade-soverte").value;
 
 let quantidadeXSalada = document.getElementById("quantidade-x-salada").value;

 let quantidadeTorradasSimples = document.getElementById("quantidade-torradas-simples").value;
 
 let quantidadeSucos = document.getElementById("quantidade-sucos").value;
 
 let quantidadeRefrigerentes = document.getElementById("quantidade-refrigerentes").value;

 let total = (quantidadePizza * 25) + (quantidadeCachorroQuente * 5) + (quantidadeSoverte * 3.50 ) + ( quantidadeXSalada * 10 ) +
 (quantidadeTorradasSimples *8) + (quantidadeSucos *5) + (quantidadeRefrigerentes*6);
 
 document.getElementById("resultado").innerHTML = total.toFixed(2);
}




