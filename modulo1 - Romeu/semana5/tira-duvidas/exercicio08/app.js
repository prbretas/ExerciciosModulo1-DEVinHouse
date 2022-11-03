import Produto from './Produto.js'
import { calculaTotal } from './utils.js'

console.log('Exercicio8-S05-M1')

const arroz = new Produto('arroz', 3, 9)
const feijao = new Produto('feijao', 2, 12)
const batata = new Produto('batata', 4, 8)
const macarrao = new Produto('macarrao', 1, 5)

const total = calculaTotal(arroz, feijao, batata, macarrao)

console.log(total)
// total deve ser 88
