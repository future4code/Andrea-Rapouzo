//1)
// a. undefined
// b. null
// c. 11
// d. 3
// e.[3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 9

//2) "SUBI NUM ÔNIBUS EM MIRROCOS" 27

// Exercícios de escrita de código
//1) 
let nome = prompt("Digite seu nome")
let email = prompt("Digite seu email")
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

//2)
let comida = ["feijoada","spaghetti","lasanha","nhoque","batata-frita"]
//a) 
console.log(comida)

//b)
console.log(`Essas são as minhas comidas preferidas: \n ${comida[0]} \n ${comida[1]} \n ${comida[2]} \n ${comida[3]} \n ${comida[4]}` )

//c)
let comidaPreferida = prompt("Digite sua comida preferida")
comida[1] = comidaPreferida
console.log(comida)

//3)
//a) 
let listaDeTarefas = []

//b) 
let tarefa = prompt("Digite 1a tarefa")
listaDeTarefas.push(tarefa)

tarefa = prompt("Digite 2a tarefa")
listaDeTarefas.push(tarefa)

tarefa = prompt("Digite 3a tarefa")
listaDeTarefas.push(tarefa)

//c) 
console.log(listaDeTarefas)

//d) 
let indice = Number(prompt("Digite o índice da tarefa (0, 1 ou 2)"))

//e)
listaDeTarefas.splice(indice,1)

//f)
console.log(listaDeTarefas)

//Desafio
//1)
let frase = prompt("Digite uma frase")
let array = frase.split(" ")

console.log(array)

//2)
let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let i = frutas.indexOf("Abacaxi")

frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(i,frutas.length)