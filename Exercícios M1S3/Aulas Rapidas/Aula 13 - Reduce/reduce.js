/* const Array1 = [];
const reducerExemple = Array1.reduce(
  (acumulador, elementoAtual, indexAtual, arrayOriginal),
  valorInicial
);
 */
//reduce() - somar todos os valores do Array

//Acumulador - valor retornado na última interação (OBRIGATORIO)
//tambem vai ser o valor inicial
// elemento atual - vai passa pelo array(OBRIGATORIO)
// index indice o elemento (OPCIONAL)
// array inciial (OPCIONAL)
//valorINicial - valor que o reduce ira iniciar

//---------------EXEMPLO 1-------------------------------
const numbers = [0, 1, 2, 3, 4, 5];

const ReduceExemple = numbers.reduce(
  (acumulador, elementoAtual, index, arrayOriginal) => {
    console.log(acumulador, "acumulador - valor retornado na ultima interacao");
    console.log(elementoAtual, "numero - valor atual");
    console.log(index, "indice do array");
    console.log(arrayOriginal, "array original");
    return (acumulador += elementoAtual);
  },
  0
);

console.log(ReduceExemple);

//-------------------EXEMPLo 2 -------------------------

const carsInfo = [
  { carName: "BMW", price: 55000, category: "Sport" },
  { carName: "Ford", price: 14000, category: "Popular" },
  { carName: "Hyundai", price: 12000, category: "Asian" },
  { carName: "VW", price: 2000, category: "Old" },
  { carName: "Ferrari", price: 135000, category: "Sport" },
];

const carSportSum = carsInfo
  .filter((car) => car.category === `Sport`)
  .map((car) => car.price * 2)
  .reduce((total, car) => (total += car));

console.log(carSportSum);

//---------------EXEMPLO 3--------------

const content = document.getElementById("content");

const names = ["César", "Laura", "Rogério "];
const reducedNames = names.reduce((acc, name) => (acc += `<p>${name}</p>`),'');
content.innerHTML= reducedNames