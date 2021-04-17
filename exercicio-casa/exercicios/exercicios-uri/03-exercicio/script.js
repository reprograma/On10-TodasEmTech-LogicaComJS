//[Exercício 03](https://www.urionlinejudge.com.br/judge/pt/problems/view/1114)

/*Escreva um programa que repita a leitura de uma senha até que ela seja válida. Para cada leitura de senha incorreta informada, escrever a mensagem "Senha Invalida". Quando a senha for informada corretamente deve ser impressa a mensagem "Acesso Permitido" e o algoritmo encerrado. Considere que a senha correta é o valor 2002. 

Entrada
A entrada é composta por vários casos de testes contendo valores inteiros.

Saída
Para cada valor lido mostre a mensagem correspondente à descrição do problema.*/


let number1 = Number(prompt("Entre com o produto: "));

while (number1 != 2002) {
    number1 = Number(prompt("Entre com a senha valida"));
}
alert('Acesso Permitido');