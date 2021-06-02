//1) a. 10 e 50

//1) b.Só mostraria o resultado 50. pois foi a última chamada da função.

//2) a. A função transforma o texto para letra minúscula e verifica se contém a palavra cenoura.

//2) b.
// i.True 
//ii.True
//iii.True

//Exercícios de escrita de código
//1) a. 
const imprimirDados = () => {
    console.log("Eu sou Andréa, tenho 40 anos, moro em Santa Catarina e sou estudante")
}

//1) b.
const imprimirDados = (nome, idade, cidade, profissao) => {
    console.log(`Eu sou ${nome}, tenho ${idade}anos, moro em ${cidade} e sou ${profissao}.`)
}

//2)
//a.
const somaNumeros = (x,y) => {
    return x + y
}
console.log(somaNumeros(1, 2))

//b.

const verificarMaior = (x,y) => {
    return x >= y
}

//c.
const verificarPar = (x) => {
    return x % 2 === 0
}




//d.
const transformaMensagem = (mensagem) => {
    console.log(mensagem.length, mensagem.toUpperCase())
}

//3)
const somaNumeros = (x,y) => {
    return x + y
}
const diferencaNumeros = (x,y) => {
    return x - y
}
const multiplicacaoNumeros = (x,y) => {
    return x * y
}
const divisaoNumeros = (x,y) => {
    return x / y
}

const a = Number(prompt("Digite o primeiro número"))
const b = Number(prompt("Digite o segundo número"))

console.log(`Números inseridos: ${a} e ${b}`)
console.log(`Soma: ${somaNumeros(a, b)}`)
console.log(`Diferença: ${diferencaNumeros(a, b)}`)
console.log(`Multiplicação: ${multiplicacaoNumeros(a, b)}`)
console.log(`Divisão: ${divisaoNumeros(a, b)}`)


//Desafio
//1)a.
const imprimir = (mensagem) => {
    console.log(mensagem)
}

//1)b.
const soma_imprimi = (x,y) => {
    imprimir(x + y)
}

//2)
const teoremaPitagoras = (x,y) => {
    //hip = √(a² + b²)
    return Math.sqrt((x * x) + (y * y))
}
console.log(teoremaPitagoras(4,12))