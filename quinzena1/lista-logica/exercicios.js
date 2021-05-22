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
  // escreva seu código aqui
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
  // escreva seu código aqui
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
}