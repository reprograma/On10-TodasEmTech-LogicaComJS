//[Exercício 03](https://www.urionlinejudge.com.br/judge/pt/problems/view/1114)


function validarSenha(){
var resultado;
let senha = parseInt(document.getElementById("senha").value); 

if(senha==2002){
resultado = "Senha Correta!"
} else{
    resultado= "Senha Incorreta!"
}  
document.getElementById("resultado").innerHTML=resultado;

}
