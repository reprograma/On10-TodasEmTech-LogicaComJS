//[Exercício 03](https://www.urionlinejudge.com.br/judge/pt/problems/view/1114)
//Resto de codigo:
//var senha = "" ;
//var senha == 2002
/*************=================*************/
//Fonte de consulta: 
//https://www.w3schools.com/js/js_if_else.asp

/*Syntax
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
} */
// Solução:

senha = prompt("Digite sua senha: ");
if (senha == 2002) {
  alert("Acesso Permitido");
} else {
  alert("Senha Inválida");
}