//Exercícios de interpretação de código
//1)a.
// "Matheus Nachtergaele"
//"Virginia Cavendish"
// {canal: "Globo", horario: "14h"}

//2)a.
// {nome: "Juca", idade: 3, raca: "SRD"}
// {nome: "Juba", idade: 3, raca: "SRD"}
// {nome: "Jubo", idade: 3, raca: "SRD"}

//2)b. Distribui os elementos de um objeto para outro objeto.

//3)a. false e undefined

//3)b. Porque não existe atributo "altura" dentro de pessoa.

//Exercícios de escrita de código
//1)a.
const pessoa1 = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }
 function apresentacao(pessoa) {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou  ${pessoa.apelidos[2]}`)
}

//1)b.
const pessoa2 = {
    ...pessoa1,
    apelidos: ["Maria", "Mari", "Marilda"]
}

apresentacao(pessoa2)

//2)a.
const objeto1 = {
    nome: "Marcelo",
    idade: 40,
    profissao: "Desenvolvedor",
}

const objeto2 = {
    nome: "Marcela",
    idade: 42,
    profissao: "Desenvolvedora",
}

//2)b.
function retornarDados(objeto) {
	return [
        objeto.nome,
        objeto.nome.length,
        objeto.idade,
        objeto.profissao,
        objeto.profissao.length
    ]
}

//3)a.
let carrinho = []

//b.
const fruta1 = {
    nome: "maça",
    disponibilidade: true
}
const fruta2 = {
    nome: "pera",
    disponibilidade: true
}
const fruta3 = {
    nome: "abacaxi",
    disponibilidade: true
}

//c.
function addCarrinho(fruta){
    carrinho.push(fruta)
}

addCarrinho(fruta1)
addCarrinho(fruta2)
addCarrinho(fruta3)

//d.
console.log(carrinho)

//desafio
//1)
function imprimiDados() {
    const nome = prompt("Digite seu nome")
    const idade = Number(prompt("Digite sua idade"))
    const profissao = prompt("Digite sua profissao")

    const objeto = {
        nome,
        idade,
        profissao
    }
    console.log(objeto)
}

//2)
function diferencaFilmes(filme1, filme2) {
    console.log("O primeiro filme foi lançado antes do segundo?", filme1.ano < filme2.ano)
    console.log("O primeiro filme foi lançado no mesmo ano do segundo?", filme1.ano === filme2.ano)

}

//3)
function estoqueFrutas(fruta){
    const disponibilidadeDaFruta = fruta.disponibilidade
    return { ...fruta, disponibilidade: !disponibilidadeDaFruta }
}



