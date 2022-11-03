/*function transforma(arr) {
  const saida = [];

  for (let i = 0; i < arr.length; i++) {
    const valor = arr[i];


   const novo = valor % 2 === 0 ? valor ** 2 : valor ** 3;
    */
//EXEMPLO DE USAR O IF ELSE TERNARIO
// const novo = valor % 2 === 0 ? valor ** 2 : valor ** 3;
//               IF ()            TRUE     ELSE    FALSE
//condição ?   valor se alguma coisa   , senao outra coisa
/*
   let novo;
   if (valor % 2 == 0)  {
    novo = valor **2;
   } else {
    novo = valor **3;
   }
   */
/* 
   saida.push(novo);
  }
  return saida;
}
const entrada = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultado = transforma(entrada);
console.log(resultado);
*/

/***********************************************/
/*
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(33);
*/
/**************MESMO EXEMPLO DE CIMA SO QUE ESCREVI**********/

function TresCinco(n) {
  for (let indice = 1; indice <= n; indice++) { 
    if (indice % 3 === 0 && indice % 5 === 0) { // primeiro incluir as duas condiçoes 
      console.log("TresCinco");
    } else if (indice % 3 === 0) {
      console.log("Tres");
    } else if (indice % 5 === 0) {
      console.log("Cinco");
    } else {
      console.log(indice);
    }
  }
}

TresCinco(50);






/*************PALINDROMOS*********************** */


let palindromo = prompt("digite um palindromo");
      let divide = palindromo.split("");
      let inverte = divide.reverse();
      let juntar = inverte.join("");

      if (palindromo == juntar) {
        alert("é um palindromo");
      } else {
        alert("não é um palindromo");
      }

/************************************* */

      function Teste (str) {
        return str == str.split('').reverse().join('');
      }


      /************************* */