console.log('Ex. 3 | M1S03')

const cNumA = document.getElementById('numero-a')
const cNumB = document.getElementById('numero-b')
const cResult = document.getElementById('resultado')
const bSoma = document.getElementById('b-soma')
const bSub = document.getElementById('b-subtrai')
const bMult = document.getElementById('b-multiplica')
const bDiv = document.getElementById('b-divide')

//console.log({ cNumA, cNumB, cResult, bSoma, bSub, bMult, bDiv })

function calcula(operacao) {
  const a = +cNumA.value
  const b = +cNumB.value
  let resultado = null

  switch (operacao) {
    case '+':
      resultado = a + b
      break
    case '-':
      resultado = a - b
      break
    case '*':
      resultado = a * b
      break
    case '/':
      resultado = a / b
      break
    default: // faz nada
  }
  cResult.value = resultado
}

bSoma.addEventListener('click', () => calcula('+'))
bSub.addEventListener('click', () => calcula('-'))
bMult.addEventListener('click', () => calcula('*'))
bDiv.addEventListener('click', () => calcula('/'))
