//- [Exercício 02](https://www.urionlinejudge.com.br/judge/pt/problems/view/1134)
let selectOne = 0;
let selectTwo = 0;
let selectThree = 0;
let selectFour = 0;
let opcao = 0;

function menu(){

    if (opcao == "1"){

        return selectOne = selectOne + 1;
    }
    else if (opcao == "2"){

        return selectTwo = selectTwo + 1;
    }
    else if (opcao == "3"){

        return selectThree = selectThree + 1;
    }
}

while (opcao != "4"){
    opcao = Math.abs(parseInt(prompt("digita o opção")))
    menu(opcao);
}

alert("MUITO OBRIGADO - Alcool: "
        + selectOne 
        + " - Gasolina: "
        + selectTwo
        + " - Diesel: "
        + selectThree
)







