console.log('Exercicio1-S05-M1')

const inNome = document.getElementById('in-nome')
const btnOla = document.getElementById('btn-ola')
const pMsg = document.getElementById('p-msg')

const mensagemOla = (nome) => `Olá, ${nome}!`

btnOla.addEventListener('click', () => {
  pMsg.innerText = mensagemOla(inNome.value)
})
