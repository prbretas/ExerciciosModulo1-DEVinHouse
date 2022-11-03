console.log("-------Aula Rápida 12 - map()---------");

//devolve um novo Array - diferente do forEach

const bankClients = [
  { name: "Cesar", money: 1500 },
  { name: "Jose", money: 3300 },
  { name: "Carolina", money: 6000 },
];

console.log("Antes de multiplicar");
console.log(bankClients);

console.log("Após multiplicar");
const multiplyMoney = () => {
  console.log(
    bankClients.map((client, index) => {
      return { name: client.name, money: client.money * 2, id: index };
    })
  );
};

multiplyMoney();




  console.log("--------retornar string de um objeto------");
// retornar uma string especifica de um objeto

const carInfo = [
  { carName: "BMW", price: 55000 },
  { carName: "Ford", price: 14000 },
  { carName: "Hyundai", price: 1200 },
];

const returnCarinfo = () => {
  console.log(
    carInfo.map((car) => {
      return car.carName;
    })
  );
};

returnCarinfo();
