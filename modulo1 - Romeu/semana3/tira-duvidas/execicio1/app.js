console.log('Ex. 1 | M1S03')

const nome = prompt('Qual seu nome?')
const idade = prompt('Qual sua idade?')
const gostaEsp = confirm('Gosta de esportes?')

if (nome && idade) {
  let msg = ''

  if (gostaEsp) {
    msg = `${nome}, ${idade} gosta de esportes`
  } else {
    msg = `${nome}, ${idade} não gosta de esportes`
  }

  console.log(msg)
  alert(msg)
}

console.log({
  nome,
  idade,
  gostaEsp,
})
