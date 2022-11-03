// exemplo revisão Classes get e set
/*
class Teste {
  nome
  #idade
  constructor(nome, idade) {
    this.nome = nome
    this.#idade = idade
  }

  set idade(idade) {
    console.log('AQUI!')
    // ....
    this.#idade = idade
  }

  get pegaIdade() {
    console.log('AQUI TB!')
    return this.#idade
  }
}

const romeu = new Teste('Romeu', 29)
romeu.idade = 99

console.log(romeu)
console.log(romeu.pegaIdade)
*/

console.log('M1-S05-Aula1')

// funções equivaentes:
function batata(feijao, bleh) {
  console.log(feijao, bleh)
  return 'RETORNOU'
}
const batataC = function (feijao, bleh) {
  console.log(feijao, bleh)
  return 'RETORNOU'
}
const batataA = (feijao, bleh) => {
  console.log(feijao, bleh)
  return 'RETORNOU'
}
//const resultado = batata('BLAH', 234)
//console.log(resultado)

// function quadrado(numero) {
//   return numero * numero
// }
// const quadrado = function (numero) {
//   return numero * numero
// }
// const quadrado = (numero) => {
//   return numero * numero
// }
// const quadrado = (numero) => numero * numero
//console.log(quadrado(2))

class Item {
  descricao
  constructor(desc) {
    this.descricao = desc
  }
  montaItem() {
    const li = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    checkbox.onclick = function () {
      // este this é o checkbox no evento de click
      console.log(this)
    }
    // checkbox.onclick = () => {
    //   // este this é a instância da classe Item
    //   console.log(this);
    // }

    const texto = document.createTextNode(this.descricao)
    li.appendChild(checkbox)
    li.appendChild(texto)
    return li
  }
}

// const item = new Item('TESTE')
// document.body.appendChild(item.montaItem())

// FUNÇÕES DE ARRAYS

const vetor = ['A', 'B', 'C']

// como testar se é array?
Array.isArray(vetor)
//console.log(vetor)

// .forEach()
// vetor.forEach(function (item) {
//   console.log(item)
// })
//vetor.forEach((item) => console.log(item))

// .map()
const resultado = vetor.map((item) => item.toLowerCase())
//console.log(resultado)
const vetA = [10, 20, 30]
const result = vetA.map((num) => num * 2)
//console.log(vetA, result)

// .filter()
const vetB = [100, 200, 300, 400]
const resB = vetB.filter((item) => item > 200)
//console.log(vetB, resB)

// .find()
const vetC = [100, 200, 300, 400]
const resC = vetB.find((item) => item === 300)
//console.log(vetC, resC)

// .every()
const vetD = [100, 200, 300, 400]
const resD = vetD.every((item) => item > 100)
//console.log(vetD, resD)

// .some()
const vetE = [100, 200, 300, 400]
const resE = vetE.some((item) => item > 400)
//console.log(vetE, resE)

// .includes()
const vetF = [100, 200, 300, 400]
const resF = vetF.includes(19900)

console.log(vetF, resF)

// .reduce()
const vetG = [100, 200, 300, 400]
const resG = vetG.reduce((acumulador, item) => {
  return acumulador + item
}, 33)

console.log(vetG, resG)
