//[Exercício 03](https://www.urionlinejudge.com.br/judge/pt/problems/view/1114)

const senhaCorreta = 2002;

while (true) {
    let senha = prompt('insira a senha:');
    if (senha == senhaCorreta) {
        alert('Acesso permitido!');
        break
    } else {
        alert('Senha Invalida!');
    }
}
