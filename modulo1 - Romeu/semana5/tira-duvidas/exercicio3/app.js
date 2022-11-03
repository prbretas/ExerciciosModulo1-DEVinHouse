console.log('Exercicio3-S05-M1')

const produtos = [
  { nome: 'arroz', preco: 9 },
  { nome: 'feijao', preco: 12 },
  { nome: 'batata', preco: 8 },
  { nome: 'macarrao', preco: 5 },
]

const inProd = document.getElementById('in-prod')
const btnBusca = document.getElementById('btn-busca')
const pPreco = document.getElementById('p-preco')
const pTotal = document.getElementById('p-total')

const total = produtos.reduce((acc, p) => acc + p.preco, 0)
pTotal.innerText = `Valor total de R$ ${total}`

function buscaPreco(prodNome) {
  const prod = produtos.find((p) => p.nome === prodNome)
  if (prod) {
    pPreco.innerText = `Preço: R$ ${prod.preco}`
  } else {
    pPreco.innerText = 'Produto não encontrado!'
  }
}

btnBusca.addEventListener('click', () => {
  buscaPreco(inProd.value)
})
