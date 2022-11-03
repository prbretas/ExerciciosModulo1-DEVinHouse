const nome = window.prompt("Qual é o seu nome?")
const sobrenome = window.prompt("Qual é o seu sobrenome?")

let idade = prompt("Qual é a sua idade?")


let gostaDeEsporte = confirm("Gosta de praticar esporte?")



if(nome && sobrenome) {
console.log(`${nome} ${sobrenome}`)
} else {
console.log("Não incluiu nome")
}

const ConfirmaIdade = parseInt(idade)


if (ConfirmaIdade >= 60) {
  console.log(`Idoso, ${nome} tem ${ConfirmaIdade} anos`)
} else if (ConfirmaIdade >= 18) {
  console.log(`Adulto, ${nome} tem ${ConfirmaIdade} anos`)
} else {
  console.log(`Menor, ${nome} tem ${ConfirmaIdade} anos`)
}

//**************ESPORTE********************* */

if (gostaDeEsporte == true){
    alert(`${nome} tem ${ConfirmaIdade} anos, gosta de praticar esportes `)
} else if(gostaDeEsporte == false){

    alert(`${nome} tem ${ConfirmaIdade} anos, NÃO gosta de praticar esportes `)
}

