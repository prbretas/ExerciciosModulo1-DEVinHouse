'use strict'
// m1s03a1
// var não é muito utilizada hoje em dia
// foi substituida por const e let
// const -> um valor constante, que não muda
// let -> uma variável que pode ser reatribuida
// interpolações equivalentes
// 'A usuária ' + nomeCompleto + ' é adulta.'
// `A usuária ${nomeCompleto} é adulta.`
// typeof é um operador que nos permite
// verificar o tipo do dato

// const nome = 'Ada'
// const sobrenome = 'Lovelace'
// const nomeCompleto = nome + ' ' + sobrenome
// const idade = 17
// if (idade >= 18) {
//   console.log(`A usuária ${nomeCompleto} é adulta.`)
// }
// else {
//   console.log(`A usuária ${nomeCompleto} NÃO é adulta.`)
// }

// const nome = prompt('Qual seu nome?')
// const sobrenome = prompt('Qual seu sobrenome?')
// if (nome && sobrenome) {
//   console.log(`${nome} ${sobrenome}`)
// } else {
//   console.log('Nome não informado!')
// }

// const idade = 12
// if (idade >= 60) {
//   console.log(`idoso`)
// } else if (idade >= 18) {
//   console.log(`adulto`)
// } else {
//   console.log(`menor`)
// }

// const n = 0
// if (n === 0) {
//   console.log(`zero`)
// } else if (n === 1) {
//   console.log(`um`)
// } else if (n === 2) {
//   console.log(`dois`)
// } else if (n === 3) {
//   console.log(`tres`)
// } else {
//   console.log(`outro`)
// }

// const n = 0
// switch (n) {
//   case 0:
//     console.log(`zero`)
//     break
//   case 1:
//     console.log(`um`)
//     break
//   case 2:
//     console.log(`dois`)
//     break
//   case 3:
//     console.log(`tres`)
//     break
//   default:
//     console.log(`outro`)
// }

// REPETIÇÃO

const listaDeCarros = ['uno', 'fusca', 'escort', 'gol']
// let indice = 0
// do {
//   console.log(`${listaDeCarros[indice]} ${indice}`)
//   indice++
// } while (listaDeCarros[indice])
// let indice = 0
// // while testa antes de executar o bloco de código
// while (indice < listaDeCarros.length) {
//   console.log(listaDeCarros[indice])
//   indice++
// }

// for (let i = 0; i < listaDeCarros.length; i++) {
//   console.log(listaDeCarros[i])
// }

// for (const index in listaDeCarros) {
//   // index = índice do ítem do vetor
//   console.log(listaDeCarros[index])
// }

// for (const carro of listaDeCarros) {
//   console.log(carro)
// }

// listaDeCarros.forEach(function (item) {
//   console.log(item)
// })

const idade = +prompt('Qual idade?')

if (idade > 0) {
  console.log('Idade válida')
} else {
  console.log('Idade inválida')
}
