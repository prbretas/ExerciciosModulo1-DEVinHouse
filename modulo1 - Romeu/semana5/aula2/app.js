const btnAcao = document.getElementById('btn-acao')
const pRes = document.getElementById('res')
// btnAcao.addEventListener('click', () => {
//   console.count('AAA!')
// })
// btnAcao.addEventListener('click', () => {
//   console.count('BBB!')
// })
// btnAcao.onclick = () => {
//   console.count('A!')
// }
// btnAcao.onclick = () => {
//   console.count('B!')
// }

// REVISÃO FUNÇÕES DE ARRAYS

//const vetorA = [3, 8, 12]
// const resA = vetorA.map((item, i) => {
//   console.log(item, i)
//   return { value: item, index: i }
// })
// console.log(resA)

// const vetorB = [
//   { name: 'Batata', value: 3 },
//   { name: 'Arroz', value: 8 },
//   { name: 'Feijão', value: 12 },
// ]

// const resB = vetorB.reduce((acc, item) => {
//   return acc + item.value
// }, 0)

// console.log({ resB })

console.log('Aula 2 M1S05')

import { numero } from './exemplo.js'

//const romeu = new Pessoa('Romeu')
//console.log(numero)

// OPERADOR REST

function mostraSaudacao(nome, ...infos) {
  console.log({ infos })
  console.log(`Olá, ${nome} ${infos}!`)
}
// mostraSaudacao('Romeu', 'programador', 'escala')

function somaTotal(a, b, ...numeros) {
  console.log({ a, b, numeros })
  return numeros.reduce((acc, num) => acc + num, 0)
}
// console.log(somaTotal(2))

// OPERADOR SPREAD

const vetA = [5, 6, 7]

const vetB = [...vetA]

vetA[0] = 9
vetB[2] = 8

//console.log({ vetA, vetB })

const objA = { nome: 'Romeu', idade: 29 }

const objB = { ...objA }

objA.nome = 'Vivi'

//console.log({ objA, objB })

function somaTres(...n) {
  return n.reduce((acc, num) => acc + num)
}

const vals = [1, 2, 3]

// console.log(somaTres(...vals))

// DESTRUCTURING

const obj = { nome: 'Isaac', idade: 29, ts: 'O-' }

const { idade, nome, ...resto } = obj

//console.log(nome, idade, resto)

const vet = [33, 67, 42, 56, 11]

const [x, y, z, ...rest] = vet

//console.log({ x, y, z, rest })

// TIRA-DUVIDAS

const varFunc = (n) => {
  console.log(n)
}

varFunc(3)
