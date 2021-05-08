//3. Crie uma função que calcula 5% de desconto retornando o valor do desconto.


const discount = () => {
    const value = Number(prompt("Digite o valor do produto que vai receber desconto"));
    return value*0.05;
}

alert(`O desconto foi de R$ ${discount()}`);

