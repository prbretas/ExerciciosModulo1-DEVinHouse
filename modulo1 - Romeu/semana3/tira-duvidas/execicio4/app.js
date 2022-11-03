console.log('Ex. 4 | M1S03')

const raizNum = document.getElementById('n-raiz')
const inicialNum = document.getElementById('n-inicial')
const btnCalcPA = document.getElementById('b-calc-pa')
const btnCalcPG = document.getElementById('b-calc-pg')
const pResult = document.getElementById('resultado')

function calcularPA() {
  // o + na frente serve para converter string para number
  const raiz = +raizNum.value
  const vIni = +inicialNum.value
  const result = []

  result.push(vIni)
  for (let i = 1; i < 10; i++) {
    result.push(result[i - 1] + raiz)
  }

  pResult.innerText = result.join(', ')
}

function calcularPG() {
  // o + na frente serve para converter string para number
  const raiz = +raizNum.value
  const vIni = +inicialNum.value
  const result = []

  result.push(vIni)
  for (let i = 1; i < 10; i++) {
    result.push(result[i - 1] * raiz)
  }

  pResult.innerText = result.join(', ')
}

btnCalcPA.addEventListener('click', calcularPA)
btnCalcPG.addEventListener('click', calcularPG)
