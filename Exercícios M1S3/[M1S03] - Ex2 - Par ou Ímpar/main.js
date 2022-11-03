/* Lógica da programação

- o usuario ira selecionar um numero no HTML
- pegar esse numero e guardar o valor

- sera executada a funcao executar on click
- executar a funcao ParOuImpar e mostrar na tela
do usuario o resultado 

*/
function executar() {
  let numero = document.getElementById("number").value;
  let tipo;
  if (numero % 2 === 0)  {
    tipo = "PAR";
  } else {
    tipo = "ÍMPAR";
  } 

  const resultado = document.querySelector("section#result");

  resultado.style.color = "white";
  resultado.style.backgroundColor = "red";
  resultado.style.fontFamily = "Verdana";
  resultado.style.fontSize = "1rem";

  resultado.innerHTML = `O número selecionado '${numero}' é ${tipo}!`;

  console.log(`O número selecionado '${numero}' é ${tipo}!`);

  return
}
