//[Exercício 03](https://www.urionlinejudge.com.br/judge/pt/problems/view/1114)


let senhaDigitada = prompt('Digite a senha solicitada:')

if(senhaDigitada==2002){
    alert('Acesso liberado')
}else if(senhaDigitada!==2002){
    console.log(senhaDigitada , 'Senha Inválida')
}