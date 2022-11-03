// M1S03 - Aula 2
const header1 = document.getElementById('cabeca')
//console.log(header1)

// função comum nomeada
function funcA(carro) {
  console.log(carro)
}
// função comum anônima atribuida a uma variável
const funcB = function (carro) {
  console.log(carro)
}
// função arrow "seta"
const funcArrow = (carro) => {
  console.log(carro)
}

const carros = ['escort', 'gol', 'uno']

// carros.forEach((carro, index) => {
//   console.log(carro, index)
// })

function dizOi() {
  console.log('Oi!')
}

const botao = document.getElementById('botao')
const p = document.getElementById('texto')

const valor = 345

p.innerHTML = valor

//botao.addEventListener('click', dizOi)

// setTimeout(() => {
//   console.count('oi')
// }, 1000)

const int = setInterval(() => {
  console.count('oi')
}, 1000)

setTimeout(() => {
  console.log('limpou interval')
  clearInterval(int)
}, 3000)

//dizOi()
