// 1) 
// a. false
// b. false
// c. true
// d. boolean

//2) Sim, percebi que precisa transformar a string em um número, para nao concatenar. Sendo necessário utilizar o Number antes do prompt

//3)
// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// Exercícios de escrita de código
//1)
const idade = Number(prompt("Qual a sua idade"))
const idadeAmigo = Number(prompt("Qual a idade do seu amigo(a)"))

console.log("Sua idade é maior do que a do seu melhor amigo?", idade > idadeAmigo)
console.log("Diferença de idade", idade -  idadeAmigo)
 
//2)
let numeroPar = Number(prompt("Insira um número par"))
let resto = numeroPar % 2
console.log("O resto da divisão é: ", resto)

//c) Com número par o resultado será sempre 0.

//d) O resultado será diferente de 0.

//3)
const idadeAnos = Number(prompt("Qual a sua idade"))

console.log("a. ", idadeAnos * 12)
console.log("a. ", idadeAnos *365)
console.log("a. ", idadeAnos * 8760)

//4)
const n1 = Number(prompt("Digite o primeiro número"))
const n2 = Number(prompt("Digite o segundo número"))

console.log("O primeiro numero é maior que segundo?", n1 > n2 )
console.log("O primeiro numero é igual ao segundo? ", n1 == n2)


console.log("O primeiro numero é divisível pelo segundo?", (n1 % n2) == 0)
console.log("O segundo numero é divisível pelo primeiro?", (n2 % n1) == 0)


//Desafio

//1)

//a)
console.log("77ºF em K: ", (77 - 32)*(5/9) + 273.15)

//b)
console.log("80ºC em K: ", (80)*(9/5) + 32)

//c)
let trintaEmF = (30)*(9/5) + 32
console.log("30ºC em F: ", trintaEmF)
console.log("30ºC em K: ", (trintaEmF - 32)*(5/9) + 273.15)

//d
const valorCelsius = Number(prompt("Digite o valor em graus Celsius"))

let valorEmF = (valorCelsius)*(9/5) + 32
console.log(valorCelsius,"ºC em F: ", valorEmF)
console.log(valorCelsius,"ºC em K: ", (valorEmF - 32)*(5/9) + 273.15)

//2)
//a)
const valorFinal = (280 * 0.05)
console.log("o valor a ser pago por uma residência é", valorFinal)

//b)
const valor = (280 * 0.05)
const quinzePorcento = (valor * 15) / 100 
// valor * 0.15
console.log("o valor com desconto é", valor - quinzePorcento)

//3)
let X = 20 / 2.222
console.log("20lb equivalem a ",X," kg")

X = 10.5 / 35.274
console.log("10.5oz equivalem a ",X," kg")

X = 100 * 1609
console.log("100mi equivalem a ",X," m")

X = 50 / 3.281
console.log("50ft equivalem a ",X," m")

X = 103.56 * 3.785
console.log("103.56gal equivalem a ",X," l")

X = (450 * 6 ) / 25
console.log("450 xic equivalem a ",X," l")

// G)
const qtdeXicaras = Number(prompt("Digite a quantidade de xícara"))
X = (qtdeXicaras * 6 ) / 25
console.log(qtdeXicaras, " xic equivalem a ",X," l")
