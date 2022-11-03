console.log('Exercicio7-S05-M1')

async function aguarda3Segundos() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  console.log('Função diz: Terminei!')
}

function euNaoEspero() {
  aguarda3Segundos()
  console.log('Eu não espero')
}

async function euEspero() {
  // adiciona await na frente da função async
  await aguarda3Segundos()
  console.log('Eu espero')
}

//euNaoEspero()
euEspero()
