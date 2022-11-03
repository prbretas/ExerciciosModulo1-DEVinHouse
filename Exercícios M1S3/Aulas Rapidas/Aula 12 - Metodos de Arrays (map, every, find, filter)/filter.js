console.log("--------------------------------");
console.log("Aula Rápida 12 - filter()");

//serve para filtrar algum valor baseado em alguma condição
// array de num, retorna aepnas pares

const numbers = [1, 2, 3, 4, 5, 6];

const returnOdd = () => {
  console.log(numbers.filter((number) => number % 2 === 0));
};

returnOdd();

const names = ["amanda", "cesar", "ana", "armando", "jose"];

//charAt -> irá checar o char na posição que setar(escolher)

/* const checkNames = () => {
  console.log(names.filter((name) => name.charAt(0) === "A"));
};
 */

//exemplo2 :
const checkNames = () => {
  console.log(names.filter((name) => name.charAt(2) === "s"));
};

checkNames();

const cars = [
  { carName: "BMW", price: 55000, category: "Sport" },
  { carName: "Ford", price: 14000, category: "Popular" },
  { carName: "Hyundai", price: 12000, category: "Asian" },
  { carName: "VW", price: 2000, category: "Old" },
  { carName: "Ferrari", price: 135000, category: "Sport" },
];

const returnSportCars =() =>{
console.log(cars.filter((car) => car.category === 'Sport'));

}

returnSportCars();