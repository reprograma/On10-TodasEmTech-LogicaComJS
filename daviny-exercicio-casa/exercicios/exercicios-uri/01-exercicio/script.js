// [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 
  
quantidade = prompt("digita o número do seu quantidade") 

    switch(
        codigo = prompt("digita o número do seu código")
        ){
    case '1':
        valor = 4.00 * quantidade   
        break;
  
     case 2:
        valor = 4.50 * quantidade 
  
        break;
    case 3:
        valor = 5.00 * quantidade 
  
        break;
    case 4:
        valor = 2.00 * quantidade 

        break;
    case 5:
        valor = 1.50 * quantidade

        break;
    default:
    alert("Opção invalida")
   }

alert("Total R$" + valor.toFixed(2)) 