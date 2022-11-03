/*
Em um arquivo **app.js** (incluído em **índex.html**):

Utilizando um vetor const **'arrayNumeros'**, que possui valores de 1 a 9.
Ex.: const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Crie uma variável let chamada **'arrayQuadrados'**.

Utilizando a funcionalidade de arrays **'map'** em **arrayNumeros**, crie uma **arrow function** que calcule o quadrado de um valor passado por parâmetro e passe esta função como parâmetro de **map**, atribuindo o novo array criado a uma nova variável **arrayQuadrados**.

Em seguida, confira se o vetor **arrayQuadrados** possui todos os quadrados dos números presentes em **arrayNumeros** e exiba-os no console.

Por fim, utilizando a funcionalidade de arrays **'filter'** em **arrayQuadrados**, filtre os valores de **arrayQuadrados** passando por parâmetro para **filter** uma **arrow function** que teste se um valor recebido por parâmetro é maior que **30** (trinta). O objetivo aqui é termos um array final com apenas números maiores que trinta. Confira o array resultante (**arrayFiltrados**).

Mais uma vez, imprima o array resultante da execução do filter.

>Dicas:
> O array final deve ser igual à: [36, 49, 64, 81]
> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayNumeros)

let arrayQuadrados = arrayNumeros.map((numeros) => numeros ** 2)
console.log(arrayQuadrados)


const arrayFiltrados = arrayQuadrados.filter((numeros) => numeros > 30)
console.log(arrayFiltrados)