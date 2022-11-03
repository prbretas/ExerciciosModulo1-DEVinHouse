console.log("--------------------------------");
console.log("Aula Rápida 12 - find()");

const numbers = [2, 3, 4, 5, 6];

//semelhante ao filter mas retorna o primeiro valor encontrado

const checkNumbers = () => {
  console.log(numbers.find((number) => number > 4));
};

checkNumbers(); //retorna 5, pois é o primeira condição após o find ser executado



