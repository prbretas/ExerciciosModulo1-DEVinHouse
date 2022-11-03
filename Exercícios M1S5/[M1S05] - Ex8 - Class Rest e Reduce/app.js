/* Ex.2:
Para treinar os conceitos de Classe e operador Rest.

Crie um arquivo **app.js** incluído em **index.html** faça o que se pede a seguir.

Desenvolva uma Classe **Produto** que contenha os seguintes atributos:
- **nome**
- **quantidade**
- **valor**

Desenvolva uma função que receba como parâmetro uma quantidade indefinida de instâncias de Produto e realize o seguinte cálculo entre seus atributos: (**quantidade * valor**) de cada produto e retorne a **soma total** de todos os produtos recebidos no parâmetro da função (se possível, faça com reduce).

Ex. 1: Produto Guardanapo - quantidade: 2 , valor: 3.00 = total 6.00
        Produto Lava Roupas - quantidade: 1, valor: 5.00 = total 5.00
                         RETORNAR SOMA TOTAL ===========> 11.00

const arroz = new Produto('arroz', 3, 9);
const feijao = new Produto('feijao', 2, 12);
const batata = new Produto('batata', 4, 8);
const macarrao = new Produto('macarrao', 1, 5);
const total = calculaTotal(arroz, feijao, batata, macarrao);
console.log(total);
// total deve ser 88

Exiba o valor total no console.

>Dicas:
> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters
> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

**BÔNUS:** Coloque a definição da classe e a função em arquivos **js** separados de **app.js** e os importe como módulos em **app.js**

Ex.:
Produto.js
> export default class Produto {

utils.js
> export function calculaTotal(...produtos) {

app.js
> import Produto from 'Produto.js'
> import { calculaTotal } from 'utils.js' */

import { calculaTotal } from "./Utils";

class Produto {
  nome;
  quantidade;
  valor;

  constructor(nome, qtd, valor) {
    this.nome = nome;
    this.quantidade = qtd;
    this.valor = valor;
  }
}

const arroz = new Produto("arroz", 3, 9);
const feijao = new Produto("feijao", 2, 12);
const batata = new Produto("batata", 4, 8);
const macarrao = new Produto("macarrao", 1, 5);

const total = calculaTotal(arroz, feijao, batata, macarrao);

console.log(total);
//total deve ser 88
