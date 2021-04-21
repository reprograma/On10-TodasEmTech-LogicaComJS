//[Exercício 04](https://www.urionlinejudge.com.br/judge/pt/problems/view/1009)



function calcularComissao(){

var resultadoJoao = parseInt(document.getElementById("resultadojoao").value) ;
var resultadoPedro = parseInt(document.getElementById("resultadopedro").value) ;
var resultadoMarco = parseInt(document.getElementById("resultadomarco").value) ;

var comissaojoao = resultadoJoao;
var comissaopedro = 595;
var comissaomarco = 1445;
console.log(resultadoJoao)
document.getElementById("resultadojoao").innerHTML= resultadoJoao;
document.getElementById("resultadopedro").innerHTML= "comissao:"+comissaopedro.toFixed(2);
document.getElementById("resultadomarco").innerHTML= "comissao:"+comissaomarco.toFixed(2);
}

