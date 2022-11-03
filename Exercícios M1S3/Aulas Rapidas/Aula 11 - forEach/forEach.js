console.log("Aula Rápida 11 - forEach");
// forEach NÃO ALTERA os valores de um Array

const numArray = [1, 2, 3, 4, 5, 6];

//algum dos numeros é par?
//se for, printar no console
const checkPar = () => {
  numArray.forEach((number, index) => {
    if (number % 2 === 0) {
      console.log(number, `o seu index é ${index}`);
    }
  });
};

checkPar();

//---------- EX2 - Array de Nomes----------

const names = ["joao", "maria", "jose", "bia", "cesar"];

const checkNames = () => {
  names.forEach((name, index) => {
    console.log(`Imprimindo Nome: ${name}, seu index é ${index}`);
    if (name === "cesar") {
      console.log(`Nome: ${name}, seu index é ${index}`);
    }
  });
};

checkNames();

// --------- Ex3 - Array em objetos HTML -------

const content = document.querySelector(".content");

const changeContent = () => {
  const newWords = ["joao", "maria", "cesar", "caio", "jose"];
  newWords.forEach((word) => {
    content.innerHTML = content.innerHTML + word;
  });
};

window.onload = function () {
  changeContent();
};
