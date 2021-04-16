//- [Exercício 02](https://www.urionlinejudge.com.br/judge/pt/problems/view/1134)

let alcool=0;
let gasolina=0;
let diesel=0;

let codigo = prompt('Digite o código:');

while (codigo!='4'){
    
    if(codigo==='1'){

        alcool=alcool+1
        codigo = prompt('Digite o código')
    }else if(codigo==='2'){

        gasolina=gasolina+1
        codigo = prompt('Digite o código')
    }else if(codigo==='3'){

        diesel=diesel+1
        codigo = prompt('Digite o código')
    }else{
        codigo=prompt('Digite um código válido entre 1 e 4')
    }

}
console.log('Muito Obrigado');
console.log(`Alcool:${alcool}`);
console.log(`Gasolina:${gasolina}`);
console.log(`Diesel:${diesel}`);