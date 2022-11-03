console.log("--------------------------------");
console.log("Aula Rápida 11 - every()");

//funciona parecido com o Filter mas para o every, retorna
//apenas true ou false
//todos os valores tem que ser verdadeiro, caso apenas 1 seja false, entao retorna false

const numbers = [2, 3, 4, 5, 6];

const checkNumbers = () => {
  console.log(numbers.every((number) => number > 1)); //retorna true
};

//alterar os valores no checkNumbers, para fazer as comparações
checkNumbers();
