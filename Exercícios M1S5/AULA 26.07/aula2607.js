console.log("Aula 2 - 26.07.22");

console.log("importando itens e valores de outros arquivos JS");

import { vetG } from "./app.js";

console.log({ vetG });

//quando existe apenas um export default (puxando do app.js),pode ser usado sem chaves para o item e pode usar qlqr nome, pois só tem um objeto default

//
import Item from "./app.js";
console.log({ Item });

//------------REST------------------

function somaTotal(a, b, ...numeros) {
  console.log({ a, b, numeros });
  return numeros.reduce((acc, num) => acc + num, 0);
}

console.log(somaTotal(2, 4, 5, 6));

// --- SPREAD ---
//Espalha os itens de um Array em outro Array

const nomes = ["sofia", "marcos", "bia"];

const maisNomes = ["Ada", ...nomes, "Leo"];

const maisNomes2 = [...nomes, "ada", "leo"];

const maisNomes3 = ["Ada", "Leo", ...nomes];

console.log(maisNomes);
console.log(maisNomes2);
console.log(maisNomes3);






//----------------------------------
const infos = { nome: "sofia", idade: "18" };

const maisInfos = { nome: "ada", ...infos };

const maisInfos2 = { ...infos, nome: "ada" };

const maisInfos3 = { ...infos, idade: 25 };

console.log(maisInfos);
console.log(maisInfos2);
console.log(maisInfos3);




const vetA = [5, 6, 7]
const vetB = [...vetA, 1, 3, 9]
const res = [...vetA, ...vetB, 88,99]

console.log(vetA, vetB)
console.log(res)


//--------------------------------

const coordenadas = [55, 86, 94]
const [x, y, z, ...rest] = coordenadas

console.log({x, y, z, rest})


