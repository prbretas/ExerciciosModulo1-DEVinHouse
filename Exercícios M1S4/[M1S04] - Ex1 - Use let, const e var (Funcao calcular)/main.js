const Array1 = [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47];
const Array2 = [];
const Array3 = [1];
const Array4 = [1, -1];
const Array5 = null;
const Array6 = [-2, -2, -2, -2];
const Array7 = [20, 10, 30];

let arr = Array1;

function calcular(...arr) {
  let max = Math.max(...arr);
  console.log(`O valor máximo do Array é ${max}`);

  let min = Math.min(...arr);
  console.log(`O valor mínimo do Array é ${min}`);
}

calcular(...Array1);
calcular(...Array2);
calcular(...Array3);
calcular(...Array4);
// calcular(...Array5); //DEU ERRO PQ EH NULL
calcular(...Array6);
calcular(...Array7);






console.log('-----------------------------')

/*********************************/
/* 
console.log(calcular())

const menor =  Math.min(Array1)
console.log(menor)

const maior = Math.max(Array1)
console.log(maior)

var Arr = Array6

let max = Arr.map(Number).reduce(function(a, b) {
    return Math.max(a, b);
  });
  console.log(max); // 78

let min = Arr.map(Number).reduce(function(a, b) {
    return Math.min(a, b);
  });
  console.log(min); // -15
 */
/* 
Exemplo com Prof Thiago

function calc(arr) {
  if (!arr || arr.length === 0) {
    return "não é possível calcular";
  }
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max =arr[i];
    }

    console.log('min', min)
    console.log('max', max)
  }
}

 */

