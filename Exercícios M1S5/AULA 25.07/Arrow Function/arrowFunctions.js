console.log("Aula 25.07.22");
/* 
// Função escrita normal

function soma(num1, num2) {
  return num1 + num2;
}
console.log(soma(5, 6));

//ARROW FUNCTIONS
const soma = (num1, num2) => {
  console.log(num1);
  console.log(num2);
  return num1 + num2;
};

//EXEMPLO 2 ARROW FUNCTION 1 unico parametro, 1 linha apenas, nao precisa incluir chaves
const dobro = (numero) => numero * 2;
console.log(dobro(25));

// EXEMPLO SEM PARAMENTROS, escrever ()
const imprimirOi = () => console.log("oi");
imprimirOi();

class Timer {
  constructor(duracao) {
    this._duracao = duracao;
  }

  iniciarComFunction() {
    //não irá conseguir acessar o this.duracao, pois ira criar outro escopo de funcao
    setTimeout(function () {
      console.log("executando com function");
      console.log(this.duracao);
    }, this._duracao);
  }

  // Já colocando com Arrow Function, conseguimos acessar o valor de this.duracao no constructor
  iniciarComArrowFunction() {
    setTimeout(() => {
      console.log("executando com Arrow function");
      console.log(this._duracao);
    }, this.duracao);
  }
}


const timer1 = new Timer(2000);
timer1.iniciarComFunction();

const timer2 = new Timer(5000);
timer2.iniciarComArrowFunction();

*/

////////////////////////////////////////////////
// REVISAO AULA 25.07.22



// FUNçÕES EQUIVALENTES
//FUNÇÃO
function funcao1(numero) {
  console.log(numero);
  return 'RETORNOU'
}


//FUNÇÃO DENTRO DE UMA VARIAVEL
const Func1 = function funcao2(numero) {
  console.log(numero);
};

//FUNÇÃO ARROW FUNCTION
const ArrFunc = (numero) => {
  console.log(numero);
};

ArrFunc(2)
//---------------------------------------
// exemplo revisão Classes get e set
/*
class Teste {
  nome
  #idade
  constructor(nome, idade) {
    this.nome = nome
    this.#idade = idade
  }

  set idade(idade) {
    console.log('AQUI!')
    // ....
    this.#idade = idade
  }

  get pegaIdade() {
    console.log('AQUI TB!')
    return this.#idade
  }
}

const romeu = new Teste('Romeu', 29)
romeu.idade = 99

console.log(romeu)
console.log(romeu.pegaIdade)
*/

console.log('M1-S05-Aula1')

// funções equivaentes:
function batata(feijao, bleh) {
  console.log(feijao, bleh)
  return 'RETORNOU'
}
const batataC = function (feijao, bleh) {
  console.log(feijao, bleh)
  return 'RETORNOU'
}
const batataA = (feijao, bleh) => {
  console.log(feijao, bleh)
  return 'RETORNOU'
}
//const resultado = batata('BLAH', 234)
//console.log(resultado)

// function quadrado(numero) {
//   return numero * numero
// }
// const quadrado = function (numero) {
//   return numero * numero
// }
// const quadrado = (numero) => {
//   return numero * numero
// }
// const quadrado = (numero) => numero * numero
//console.log(quadrado(2))

class Item {
  descricao
  constructor(desc) {
    this.descricao = desc
  }
  montaItem() {
    const li = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    checkbox.onclick = function () {
      // este this é o checkbox no evento de click
      console.log(this)
    }
    // checkbox.onclick = () => {
    //   // este this é a instância da classe Item
    //   console.log(this);
    // }

    const texto = document.createTextNode(this.descricao)
    li.appendChild(checkbox)
    li.appendChild(texto)
    return li
  }
}

const item = new Item('TESTE')
document.body.appendChild(item.montaItem())