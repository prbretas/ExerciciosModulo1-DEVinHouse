
let palindromo = prompt("digite um palindromo");
let divide = palindromo.split("");
let inverte = divide.reverse();
let juntar = inverte.join("");

if (palindromo == juntar) {
  alert("é um palindromo");
} else {
  alert("não é um palindromo");
}




// const palavra = 'radar';
// const tamanho = palavra.length;
// const metade = tamanho / 2;

// let resultado = true;
// for (let i= 0; i< metade; i++){
// if (palavra[i] !== palavra [(tamanho - 1)- i ]) {
// resultado = false;
// break;

// }

// }

// console.log(resultado)



