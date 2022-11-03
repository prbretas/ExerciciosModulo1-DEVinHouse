//------Exercicio com oncLick----------
/* const mensagemOla = () => {

    let nome = document.getElementById('nome')
    const mensagemTela = document.getElementById
    ('mensagem')
    mensagemTela.innerText = `Olá ${nome.value}!`
    mensagemTela.style.fontWeight = 'bold'
    nome.value=''
return 

}

 */


//------Corrigindo Exercicio com AddEventListener----------
const btnAcao = document.getElementById("btn-acao");
let nome = document.getElementById("nome");
const mensagemTela = document.getElementById("mensagem");

nome.value = "";

btnAcao.addEventListener("click", () => {
  mensagemTela.innerText = `Olá ${nome.value}!`;

  mensagemTela.style.fontWeight = "bold";
  nome.value = "";
});

