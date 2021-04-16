//[Exercício 03](https://www.urionlinejudge.com.br/judge/pt/problems/view/1114)

var senha = "2002";

var passe = document.getElementById("senha");
var mensagem = document.getElementById("mensagem");

passe.addEventListener("input", function (el) {
  insereMensagem();
});

function verificarSenha() {
  insereMensagem();
}

function insereMensagem() {
  if (passe.value == senha) {
    mensagem.innerHTML = "Acesso Permitido";
  } else {
    mensagem.innerHTML = "Senha inválida";
  }
}
