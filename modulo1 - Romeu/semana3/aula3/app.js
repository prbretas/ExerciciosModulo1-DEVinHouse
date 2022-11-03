// const serve para declarar variáveis constantes
// let serve para declarar variáveis que serão alteradas

const campoA = document.querySelector('#campo-a')
const campoB = document.querySelector('#campo-b')
const cmpRes = document.querySelector('#campo-r')
const btnExec = document.querySelector('#btn-exec')

const objSalvo = localStorage.getItem('resultado')

if (objSalvo !== null) {
  const obj = JSON.parse(objSalvo)
  cmpRes.value = obj.r
  campoA.value = obj.a
  campoB.value = obj.b
}

btnExec.addEventListener('click', () => {
  const a = Number(campoA.value)
  const b = Number(campoB.value)
  const r = a + b

  const json = JSON.stringify({ a, b, r })

  localStorage.setItem('resultado', json)
  cmpRes.value = r
})

/*
const n = 3

if (n > 20) {
  //console.log('batata')
} else {
  //console.log('arroz')
}

switch (n) {
  case 1:
    //console.log('executa coisas 1')
    break

  case 2:
    //console.log('executa coisas 2')
    break

  default:
  //console.log('executa outras coisas')
}

const carros = ['escort', 'gol', 'uno']

for (let i = 0; i < carros.length; i++) {
  //console.log(carros[i])
}

// funções equivalentes
function imprimeItemC(item, indice) {
  //console.log(item, indice)
}
const imprimeItemA = (item, indice) => {
  //console.log(item, indice)
}
carros.forEach(imprimeItemC)

const st1 = setTimeout(() => {
  console.log('executou')
}, 1000)
clearTimeout(st1)

const si1 = setInterval(() => {
  console.count('executou')
}, 1000)
clearInterval(si1)

// OBJETOS
const vetor = [3, (p) => console.log(p)]

const objeto = {
  a: 9,
  blah: function (p) {
    carros.forEach((c) => console.log(c))
  },
  v: [3, 3, 3],
}

// objeto javascript
const pessoa = {
  id: 19061209,
  nome: 'Grace Hopper',
  nascimento: '1906-12-09',
  condecoracoes: [
    'Legião do Mérito',
    'M. Vitória da 2ª G.Mundial',
    'M. Presid. da Liberdade',
  ],
}

// string JSON
const pJSON =
  '{"id":19061209,"nome":"Grace Hopper","nascimento":"1906-12-09","condecoracoes":["Legião do Mérito","M. Vitória da 2ª G.Mundial","M. Presid. da Liberdade"]}'

const pessoaJSON = JSON.stringify(pessoa)

// console.log(pessoa)
// console.log(pessoaJSON)

*/
