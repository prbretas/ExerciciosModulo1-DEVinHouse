console.log('Ex. 7 | M1S03')

// pega elementos do DOM
const pDisplay = document.getElementById('display')

// define variaveis de nomes
const estacoes = {
  verao: {
    texto: 'Verão',
    icone: 'verao.jpg',
  },
  outono: {
    texto: 'Outono',
    icone: 'outono.jpg',
  },
  inverno: {
    texto: 'Inverno',
    icone: 'inverno.jpg',
  },
  primavera: {
    texto: 'Primavera',
    icone: 'primavera.jpg',
  },
}

// função para verificar a estação
function verificaEstacao() {
  // pega a data e o ano atual
  const data = new Date()
  const ano = data.getFullYear()

  // inicializa variaveis com as datas de inicio das estações
  // lembrando que os meses de Date() vão de 0 a 11
  // então precisamos reduzir 1 do numero correto do mes
  // new Date(ano, mes - 1, dia);

  // 22/03 a 21/06 - Outono;
  const inicioOutono = new Date(ano, 2, 22)
  // 22/06 a 21/09 - Inverno;
  const inicioInverno = new Date(ano, 5, 22)
  // 22/09 a 21/12 - Primavera
  const inicioPrimavera = new Date(ano, 8, 22)
  // 22/12 a 21/03 - Verão;
  const inicioVerao = new Date(ano, 11, 22)

  // define valor inicial da variavel estação
  let estacao = estacoes.verao

  // testa se a data atual é menor que o inicio do outono
  if (data.getTime() < inicioOutono.getTime()) {
    estacao = estacoes.verao
    // se sim é verão
  }
  // senão testa se a data atual é menor que o inicio do inverno
  else if (data.getTime() < inicioInverno.getTime()) {
    estacao = estacoes.outono
    // se sim é outono
  }
  // senão testa se a data atual é menor que o inicio da primavera
  else if (data.getTime() < inicioPrimavera.getTime()) {
    estacao = estacoes.inverno
    // se sim é inverno
  }
  // senão testa se a data atual é menor que o inicio do verão
  else if (data.getTime() < inicioVerao.getTime()) {
    estacao = estacoes.primavera
    // se sim é primavera
  }
  // senão, é verão

  // exibe na tela
  pDisplay.innerHTML = `${estacao.texto}.`

  // cria um elemento de imagem
  const img = document.createElement('img')
  // define o src do icone e o alt
  img.src = `imagens/${estacao.icone}`
  img.alt = estacao.texto

  // exibe na tela
  pDisplay.appendChild(img)

  // lembrando: existe várias maneiras de resolver
  // esse problema, esta é apenas uma delas
}

// executa a fução
verificaEstacao()
