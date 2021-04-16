//[Exercício 03](https://www.urionlinejudge.com.br/judge/pt/problems/view/1114)

let senha = 0;

function logar() {
    do {
        senha = prompt('Digite a sua senha');
        if (senha == 2002) {
            alert('Acesso permitido');
        } else {
            alert('Senha Inválida');
        }
    } while (senha != 2002);
    return 0;
}

logar()