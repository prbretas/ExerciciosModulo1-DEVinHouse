console.log('Exercicio9-S05-M1')

const inCEP = document.getElementById('input-cep')
const btnBusca = document.getElementById('buscar')
const pMsg = document.getElementById('resultado')

// inicializa um valor
inCEP.value = 88032005

// SOLUÇÃO SEM ASYNC
/*
function buscaCEP() {
  const cep = inCEP.value
  const url = `https://viacep.com.br/ws/${cep}/json`

  fetch(url)
    .then((response) => {
      response.json().then((obj) => {
        console.log(obj)
        pMsg.innerText = obj.localidade
      })
    })
    .catch((error) => {
      console.log(error)
    })
}
*/

// SOLUÇÃO ASYNC
async function buscaAsyncCEP() {
  try {
    const cep = inCEP.value
    const url = `https://viacep.com.br/ws/${cep}/json`
    const response = await fetch(url)
    const obj = await response.json()
    console.log(obj)
    pMsg.innerText = obj.localidade
  } catch (error) {
    console.log(error)
  }
}

//btnBusca.addEventListener('click', () => buscaCEP())
btnBusca.addEventListener('click', () => buscaAsyncCEP())
