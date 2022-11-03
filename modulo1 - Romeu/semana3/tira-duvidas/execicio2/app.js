console.log('Ex. 2 | M1S03')

const campoNumero = document.getElementById('campo-numero')
const botaoAcao = document.getElementById('botao-acao')
const pMensagem = document.getElementById('p-mensagem')

function parOuImpar() {
  // const numero = Number(campoNumero.value)
  const numero = campoNumero.value

  if (numero !== '') {
    if (+numero % 2) {
      pMensagem.innerHTML = 'É impar!'
    } else {
      pMensagem.innerHTML = 'É par!'
    }
  } else {
    pMensagem.innerHTML = 'Informe um número!'
  }

  //console.log({ numero })
}

botaoAcao.addEventListener('click', parOuImpar)

// console.log({ campoNumero, botaoAcao, pMensagem })
