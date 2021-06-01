// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  let altura = Number(prompt("Digite altura"))
  let largura = Number(prompt("Digite largura"))
  let area = altura * largura
  console.log(area)
}

// Exercício 2
function imprimeIdade() {
  let anoAtual = Number(prompt("Digite o ano atual"))
  let anoNascimento = Number(prompt("Digite seu ano de nascimento"))
  let idade = anoAtual - anoNascimento
  console.log(idade)
}

// Exercício 3
function calculaIMC() {
  let peso = Number(prompt("Digite seu peso"))
  let altura = Number(prompt("Digite sua altura"))
  let IMC = peso / (altura * altura)
  console.log(IMC)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  let nome = prompt("Digite seu nome")
  let idade = prompt("Digite sua idade")
  let email = prompt("Digite seu email")
 
  console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + ".")
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  let cor1 = prompt("Digite sua primeira cor favorita")
  let cor2 = prompt("Digite sua segunda cor favorita")
  let cor3 = prompt("Digite sua terceira cor favorita")
  
  console.log([cor1,cor2,cor3])
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const fraseM = prompt("Digite uma frase")
  console.log(fraseM.toUpperCase())

}

// Exercício 7
function calculaIngressosEspetaculo() {
  let custo = Number(prompt("Digite o custo"))
  let valorIngresso = Number(prompt("Digite valor do ingresso"))
  let quantidadeMinima = custo / valorIngresso
  console.log(quantidadeMinima)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  let palavra1 = prompt("Digite a primeira palavra")
  let palavra2 = prompt("Digite a segunda palavra")
  console.log(palavra1.length == palavra2.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  let palavra_1 = prompt("Digite a primeira palavra")
  let palavra_2 = prompt("Digite a segunda palavra")
  console.log(palavra_1.toUpperCase() === palavra_2.toUpperCase())
}

// Exercício 10
function checaRenovacaoRG() {
  const ano_atual = Number(prompt("Digite o ano atual"))
  const ano_nasc = Number(prompt("Digite seu ano de nascimento"))
  const ano_rg = Number(prompt("Digite o ano em que sua carteira foi emitida"))

  const idade = ano_atual - ano_nasc
  const idadeCarteira = ano_atual - ano_rg
  const caso1 = idade <= 20 && idadeCarteira >= 5 
  const caso2 = idade >20 && idade <= 50 && idadeCarteira >= 10 
  const caso3 = idade >50 && idadeCarteira >= 15 
  console.log(caso1 || caso2 || caso3)
  
}

// Exercício 11
function checaAnoBissexto() {
  const ano = Number(prompt("Digite o ano "))
  const div400 = (ano % 400) == 0
  const div4 = (ano % 4) == 0
  const div100 = (ano % 100) == 0

  const test1 = div400 // true ou false
  const test2 = div4 && !(div100 && !div400)

  console.log(test1 || test2)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
 const Maior18 = prompt("Você tem mais de 18 anos?")
 const enCompleto = prompt("Você possui ensino médio completo?")
 const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
 console.log((Maior18 == "sim") && (enCompleto == "sim") && (disponibilidade == "sim"))
}