/* Em um novo arquivo JavaScript **'Pessoa.js'** crie uma classe **Pessoa**, que possui os atributos **'nome'** (do tipo público), **'cpf'** (do tipo privado) e um método **'imprime'** que mostra no console o **nome** e o **cpf** da pessoa..

> Ex.: "Patricia - 12345678901"

Após isso, faça com que a classe Pessoa seja **exportada como padrão** do módulo (**export default class Pessoa**).

Em outro arquivo **'app.js'** (type="module"), importe a classe Pessoa (import Pessoa from './Pessoa.js'), **crie uma instância** de pessoa e execute o método 'imprime'.
Ex.:
const patricia = new Pessoa('Patricia', '12345678901');
console.log(patricia.imprime());

No arquivo **index.html** deve ser incluído apenas o arquivo **app.js**. O arquivo **Pessoa.js** deve ser importado apenas em **app.js**.

Por fim, devemos ter no console a exibição da chamada do método **imprime()** de alguma instância de Pessoa.

> Dica:
> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules */

export default class Pessoa {
  nome
  #cpf
  
  constructor(nome, cpf) {
    this.nome = nome;
    this.#cpf = cpf; 
  }
  imprime() {
    console.log(`${this.nome} - ${this.#cpf}`);
  }

}
