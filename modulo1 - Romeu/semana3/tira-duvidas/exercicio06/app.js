console.log('Ex. 6 | M1S03')

const cDataNasc = document.getElementById('data-nascimento')
const btnCalc = document.getElementById('calcular-idade')
const pResult = document.getElementById('p-idade')

function calcularIdade() {
  // substitui - por / ('2022-07-15' => '2022/07/15')
  const dataNascString = cDataNasc.value.replaceAll('-', '/')

  // pega data informada no campo, mas não a hora atual
  const dataNasc = new Date(dataNascString)

  // faz a diferença dos milissegundos entre nascimento e agora
  const msDiff = Date.now() - dataNasc.getTime()

  // cria uma nova data com a diferença
  const dataDiff = new Date(msDiff)

  // pega o ano da data de diferensa e subtrai 1970
  const idade = dataDiff.getUTCFullYear() - 1970

  // exibe na tela
  pResult.innerText = `Sua idade é ${idade}.`

  // lembrando: existe várias maneiras de resolver
  // esse problema, esta é apenas uma delas
}

btnCalc.addEventListener('click', calcularIdade)
