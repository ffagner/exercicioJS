//Exercício 01
// escreva uma função que receba dois números e retorne o maior deles;

// function choose(num1, num2){
//     num1 > num2 ? console.log(`${num1} é maior que ${num2}`) : console.log(`${num2} é maior que ${num1}`)
// }
// // choose(10,11)

// function choose2 (num1, num2){
//     if (num1 > num2) return num1
//     else return num2
// }
// console.log(choose2(10,20))

//Exercício 02
//Escreva uma função chamada ePaisagem que receba dois argumentos largura e altura de uma imagem e devolva verdadeiro ou falso caso ela esta no modo paisagem, ou seja, se: 
//altura > largura = false
//altura < largura = true

function ePaisagem(largura, altura){
    if (largura > altura) return true
    else return false
}
console.log(ePaisagem(1080, 1920))

//Exercício 03
//escreva uma função que retorne o segunte:
//numero é divisível por 3 = Fizz 
//numero é divisível por 5 = Buzz 
//numero é divisível por 3 e 5 = FizzBuzz 
//numero NÃO É divisível por 3 e 5 = retornar o proprio numero
//checar se o caracter é realmente um numero
// usar rage de 0 a 100 