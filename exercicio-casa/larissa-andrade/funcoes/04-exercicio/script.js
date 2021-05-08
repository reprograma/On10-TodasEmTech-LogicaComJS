//4. Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.
const yearOfBirth = Number(prompt("Digite o ano de nascimento"));

const overOrUnderAge = (yearOfBirth) => {
    const age = (new Date().getFullYear()) - yearOfBirth;
    if(age > 18){
        return ['maior de idade', age];
    }
    else{
        return ['menor de idade', age];
    } 
        
}
let answer = overOrUnderAge(yearOfBirth); 
const info = answer[0];
const age = answer[1];

alert(`A pessoa que nasceu em ${yearOfBirth} está com ${age} anos e é ${info}`);