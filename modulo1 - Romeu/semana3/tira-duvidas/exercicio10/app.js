console.log('Ex. 10 | M1S03')

const cNome = document.getElementById('c-nome')
const btnAdd = document.getElementById('b-add')
const btnSave = document.getElementById('b-save')
const btnLoad = document.getElementById('b-load')
const ulItens = document.getElementById('lista-itens')

let itens = []
recuperarItens()

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
  } else {
    itens.push(cNome.value)
    atualizaLista()
    salvarItens()
    cNome.value = ''
  }
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
  salvarItens()
}

function salvarItens() {
  const itensJSON = JSON.stringify(itens)
  localStorage.setItem('itens', itensJSON)
}

function recuperarItens() {
  const itensJSON = localStorage.getItem('itens')

  if (itensJSON !== null) {
    itens = JSON.parse(itensJSON)
    atualizaLista()
  }
}

btnAdd.addEventListener('click', adicionaItem)
btnSave.addEventListener('click', salvarItens)
btnLoad.addEventListener('click', recuperarItens)
