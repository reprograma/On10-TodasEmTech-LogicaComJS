// https://www.urionlinejudge.com.br/judge/pt/problems/view/1114

let senhaValida = 2002;

let acesso = prompt("Digite a senha correta:");

while (acesso != senhaValida) {
    alert("Senha incorreta");
    acesso = prompt("Digite a senha correta:");
}

alert("Acesso Permitido.");