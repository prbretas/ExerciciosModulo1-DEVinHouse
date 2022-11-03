console.log('Ex. 8 | M1S03')

const cNome = document.getElementById('c-nome')
const btnAdd = document.getElementById('b-add')
const ulItens = document.getElementById('lista-itens')

let itens = []

function atualizaLista() {
  ulItens.innerHTML = ''

  itens.forEach((item, indice) => {
    const li = document.createElement('li')
    li.innerText = item
    const btnDel = document.createElement('button')
    btnDel.innerText = 'x'

    btnDel.addEventListener('click', () => removeItem(indice))
    li.appendChild(btnDel)
    ulItens.appendChild(li)
  })
}

function adicionaItem() {
  const nomeItem = cNome.value

  if (nomeItem === '') {
    alert('Informe o nome de um item!')
    return
  }

  itens.push(cNome.value)

  atualizaLista()
  cNome.value = ''
}

function removeItem(indice) {
  const itensAtualizado = []
  for (let i = 0; i < itens.length; i++) {
    if (i !== indice) {
      itensAtualizado.push(itens[i])
    }
  }
  itens = itensAtualizado
  atualizaLista()
}

btnAdd.addEventListener('click', adicionaItem)
