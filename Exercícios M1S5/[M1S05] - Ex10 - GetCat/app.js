console.log('Exercício 10 - M1S5')

const imgCat = document.querySelector('img')
const pMsg = document.getElementById('loading')
const btnGetCat = document.getElementById('getCatbtn')


const URL = 'https://api.thecatapi.com/v1/images/search'

// exemplo de retorno da API
/*
[{
  id: 'MTkxNDM3Mg',
  url: 'https://cdn2.thecatapi.com/images/MTkxNDM3Mg.jpg',
  width: 1280,
  height: 853
}]
*/

async function getCat() {
  try {
    pMsg.innerText = 'Loading...'
    const response = await fetch(URL)
    // destruct do array
    const [cat] = await response.json()
    console.log(cat)
    imgCat.src = cat.url
    pMsg.innerText = ''
  } catch (error) {
    pMsg.innerText = 'An error occured!'
    console.log(error)
  }
}

btnGetCat.addEventListener('click', getCat)

getCat()
