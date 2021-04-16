//[Exercício 03](https://www.urionlinejudge.com.br/judge/pt/problems/view/1114)

function verificarSenha(){
    
    let senha = Number(prompt('Digite a senha. Obs.: ela possui quatro dígitos e é composta apenas por números: ')); 
    
    if(senha==2002){
        alert('Acesso permitido');
    }else{
        while(senha!=2002){
            let novaSenha=  Number(prompt('Senha inválida. Digite novamente a senha. Obs.: ela possui quatro dígitos e é composta apenas por números: ')); 
            senha = novaSenha
            if(senha==2002){
                alert('Acesso permitido.')
            }
        }
    }
};
verificarSenha();
