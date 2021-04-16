//[Exercício 03](https://www.urionlinejudge.com.br/judge/pt/problems/view/1114)

let senha = 2002;
let digiteSuaSenha

while (digiteSuaSenha !== senha) {
    digiteSuaSenha = Number(prompt("Digite sua senha"));
    console.log("Senha inválida");
}

console.log("Acesso Permitido.")