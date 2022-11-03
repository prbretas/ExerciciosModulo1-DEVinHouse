console.log('Exercicio2-S05-M1')

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const arrayQuadrados = arrayNumeros.map((num) => num ** 2)

const arrayFiltrados = arrayQuadrados.filter((num) => num > 30)

console.log(arrayNumeros)
console.log(arrayQuadrados)
console.log(arrayFiltrados)
