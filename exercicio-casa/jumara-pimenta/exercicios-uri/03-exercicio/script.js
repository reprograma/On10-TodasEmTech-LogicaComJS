//[Exercício 03](https://www.urionlinejudge.com.br/judge/pt/problems/view/1114)

let senha = 0;
let senhaCorreta = 2002;

while(senha != senhaCorreta) {
 let senha = Number(prompt("Digite a senha de acesso:"));
    if (senha == senhaCorreta) {
        alert("Acesso Permitido");
        break
    } else {
        alert("Senha Invalida");
    }
}