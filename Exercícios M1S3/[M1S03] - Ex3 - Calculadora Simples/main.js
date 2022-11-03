var numero1 = document.getElementById("numero1");
var numero2 = document.getElementById("numero2");
let resultado = document.getElementById("Resultado");
resultado.style.fontWeight = "bold";
resultado.style.fontSize = "2rem";

function adicao() {
  let adicaoResultado = parseInt(numero1.value) + parseInt(numero2.value);
  console.log(adicaoResultado);
  resultado.innerText = adicaoResultado;
}

function subtracao() {
  let subtracaoResultado = parseInt(numero1.value) - parseInt(numero2.value);
  console.log(subtracaoResultado);
  resultado.innerText = subtracaoResultado;
  resultado.style.fontWeight = "bold";
}

function multiplicacao() {
  let multiplicacaoResultado =
    parseInt(numero1.value) * parseInt(numero2.value);
  console.log(multiplicacaoResultado);
  resultado.innerText = multiplicacaoResultado;
}

function divisao() {
  let divisaoResultado = parseInt(numero1.value) / parseInt(numero2.value);
  console.log(divisaoResultado);
  resultado.innerText = divisaoResultado;
}






/*
function calcula(operacao) {
  const a = +cNumA.value;
  const b = +cNumB.value;
  let resultado = null;

  switch (operacao) {
    case "+":
      resultado = a + b;
      break
    case "-":
      resultado = a - b;
      break
    case "*":
      resultado = a * b;
      break
    case "/":
      resultado = a / b;
  }

}
*/