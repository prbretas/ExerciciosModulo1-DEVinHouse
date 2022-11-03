console.log('Aula 3 - M1S05')

// revisando manipulação do DOM
// const btnAcao = document.getElementById('acao')
// const inEntrada = document.getElementById('entrada')
// const pElem = document.querySelector('#msg')

// btnAcao.addEventListener('click', () => {
//   pElem.innerText = inEntrada.value
// })

/*
// revisando Rest/Spread/Destruct
const vet = [1, 2, 3]

function soma(...params) {
  const r = params.reduce((acc, num) => {
    return acc + num
  }, 0)
  // const r = params.reduce((acc, num, i) => {
  //   return { ...acc, [`i-${i}`]: num }
  // }, {})
  console.log(params, r)
}
soma(...vet)
const [x, ...restV] = vet
// console.log(x, restV)

const obj = { a: 11, b: 22, c: 33 }
const { b, ...restO } = obj
// console.log(b, restO)
*/

// PROMISES:

const listaCEPs = {
  ['88034001']: {
    logradouro: 'Rodovia Admar Gonzaga',
  },
}

function buscaCEPpromise(cep) {
  return new Promise((resolve, reject) => {
    const resultado = listaCEPs[cep]
    const erro = resultado ? null : 'CEP inválido!'

    if (erro) {
      reject(erro)
    } else {
      resolve(resultado)
    }
  })
}

let textoDoP = null

buscaCEPpromise('88034001')
  .then((result) => {
    console.log('SUCESSO', result)
    pElem.innerHTML = result.logradouro
  })
  .catch((error) => {
    console.log('FALHA', error)
  })
  .finally(() => {
    console.log('FIM')
  })

// EXEMPLO COM MANIPULAÇÃO DO DOM

const btnBuscar = document.getElementById('buscar')
const inCEP = document.getElementById('cep')
const pResult = document.getElementById('resultado')

// exemplo de promise fetch
function buscaCEP(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then((resposta) => {
      resposta.json().then((json) => {
        console.log('SUCESSO', json)
        pResult.innerText = json.localidade
      })
    })
    .catch((erro) => {
      console.log('FALHA', erro)
      pResult.innerText = 'CEP inválido!'
    })
    .finally(() => {
      console.log('FINALMENTE')
    })
}

// exemplo async await
async function buscaAsyncCEP(cep) {
  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json`)
    const json = await resposta.json()
    console.log('SUCESSO-ASYNC', json)
    pResult.innerText = `O CEP informado ${json.cep} é da cidade de ${json.localidade} - ${json.uf}. \n
    Seu endereço é ${json.logradouro}. \n
     O DDD da localidade é ${json.ddd}`
  } catch (erro) {
    console.log('FALHA', erro)
    pResult.innerText = 'CEP inválido!'
  } finally {
    console.log('FINALMENTE')
  }
}

btnBuscar.addEventListener('click', () => {
  //buscaCEP(inCEP.value)
  buscaAsyncCEP(inCEP.value)
  inCEP.value = ''
})
