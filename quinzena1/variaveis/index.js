// 1) 
// console.log(b) = 10  
// console.log(a, b) = 10, 5

// 2)
//console.log(a, b, c) = 10, 10, 10

//3)let horaDia = prompt("Quantas horas você trabalha por dia?")
//  let valorDia = prompt("Quanto você recebe por dia?")
//  alert(`Voce recebe ${valorDia/horaDia} por hora`)

//Exercícios de escrita de código

let nome
let idade
console.log(typeof nome, typeof idade)
// O resultado foi undefined porque não foi atribuído um valor.

nome = prompt("Qual o seu nome?")
idade = prompt("Qual sua idade?")
console.log(typeof nome, typeof idade)
// Os dois valores são do tipo string.

console.log("Olá ", nome, "você tem ", idade, "anos.")

/* 2) Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
 */

// a) Crie três novas variáveis, contendo as respostas
let estudou = prompt("Você estudou?")
let comeu = prompt("Você já comeu?")
let treinou = prompt("Você já treinou?")



// b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:
console.log("Você estudou?", estudou)
console.log("Você já comeu?", comeu)
console.log("Você já treinou?", treinou)

// 3)

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores

let c 
c = a
a = b
b = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

//Desafio
//Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os resultados no console da seguinte forma:

const A = Number(prompt("Numero A?"))
const B = Number(prompt("Numero B?"))

const soma = (A + B)
const multiplicar = (A * B)

//1. O primeiro número somado ao segundo número resulta em: x.
//2. O primeiro número multiplicado pelo segundo número resulta em: y.
console.log("O primeiro número somado ao segundo número resulta em:", soma)
console.log("O primeiro número multiplicado ao segundo número resulta em:", multiplicar)








