console.log('Aula 4 - M1S05')

function pormiseSample(param) {
  return new Promise((resolve, reject) => {
    // logica aqui
    resolve(`RESOLVE(${param})`) // se sucesso
    //reject('REJECT') // se falhar
  })
}
/*

pormiseSample('BATATA')
  .then((result) => {
    console.log('THEN', result)
  })
  .catch((error) => {
    console.log('CATCH', error)
  })
  .finally(() => {
    console.log('FINALLY')
  })

console.log('ULTIMA LINHA?')
*/

const URL = 'https://viacep.com.br/ws/88032005/json'

/*
fetch(URL)
  .then((resposta) => {
    // podemos definir uma função then e testar se tivemos sucesso pelo atributo 'ok'
    if (resposta.ok) {
      // o método json da nossa resposta também é uma promise
      resposta.json().then((conteudo) => {
        // temos acesso ao nosso conteúdo JSON agora em forma de objeto JavaScript
        console.log(conteudo)
      })
    }
  })
  .catch((erro) => {
    console.log('CATCH', erro)
  })
  .finally(() => {
    console.log('FINALLY')
  })
*/

// async function primeiraAsync() {
const primeiraAsync = async () => {
  try {
    console.log('EXECUTOU-ASYNC')
    const response = await fetch(URL)
    if (response.ok) {
      const content = await response.json()
      console.log(content)
    }
  } catch (error) {
    console.log('CATCH', error)
  } finally {
    console.log('FINALLY')
  }
}

//primeiraAsync()
//console.log('ULTIMA LINHA?')

const catImg = document.getElementById('cat-img')
const catBtn = document.getElementById('cat-btn')
const catUrl = 'https://api.thecatapi.com/v1/images/search'

// equivalente com then
function getCat() {
  fetch(catUrl)
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          const [cat] = data
          catImg.src = cat.url
        })
      } else {
        throw new Error('OPA!')
      }
    })
    .catch((error) => {
      console.log('CATCHOU:', { error })
    })
}

// equivalente com await
async function getCatAsync() {
  try {
    const response = await fetch(catUrl)
    const [cat] = await response.json()
    catImg.src = cat.url
    console.log({ url })
  } catch (error) {
    console.log(error)
  }
}

catBtn.addEventListener('click', getCatAsync)

/*
const exemplo = [
  {
    id: 'MjAxNzU5Mw',
    url: 'https://cdn2.thecatapi.com/images/MjAxNzU5Mw.jpg',
    width: 334,
    height: 500,
  },
]
*/
