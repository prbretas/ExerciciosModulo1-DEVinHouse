console.log('Aula rapida 05 | JSON e localStorage')

console.log('Convertendo de String para Objeto: ')
const jsonString = '{"name": "Cesar", "lastName": "Nascimento"}'
const jsonConverted = JSON.parse(jsonString)

console.log(jsonString, 'em string')
console.log(typeof jsonString, 'type')
console.log(jsonConverted, 'Convertido para Objeto')
console.log(typeof jsonConverted, 'type')

console.log('-----------------------------------------------')

console.log('Convertendo de Objeto para String: ')
const jsonNormal = {"name": "Joe", "lastName": "Higashi"}
const jsonStringed = JSON.stringify(jsonNormal)


console.log(jsonNormal, 'em objeto')
console.log(typeof jsonNormal, 'type')
console.log(jsonStringed, 'Convertido para String')
console.log(typeof jsonStringed, 'type')


console.log('-----------------------------------------------')
console.log('Armazenando valores no localStorage')

localStorage.setItem('name', 'César') //armazenando valor no localStorage
const getLocalStorageName = localStorage.getItem('name')
//puxando o valor name do localStorage
console.log(getLocalStorageName)

localStorage.remove('name') // remover valor do localStorage
