
// 6) Crie a classe 'Animal' com os atributos 'nome', 'idade' e 'som'.
// Depois crie as subclasses (de Animal) 'Cachorro' e 'Gato' com os atributos 'nome' e 'idade',
// incializando o atributo 'som' da superclasse com 'latido' e 'miado', respectivamente.
// Crie uma instância de cada subclasse para testar, conforme abaixo.

class Animal {
  constructor(nome, idade, som) {
      this.nome = nome;
      this.idade = idade;
      this.som = som;
  }
}

class Cachorro extends Animal {
  constructor(nome, idade) {
      super(nome, idade, 'latido');
  }
}

class Gato extends Animal {
  constructor(nome, idade) {
      super(nome, idade, 'miado');
  }
}

// exemplos
const snoopy = new Cachorro('snoopy', 10);
console.log( snoopy.som );   // latido     // polimorfismo (som vem de animal)
console.log(snoopy)


const frajola = new Gato('frajola', 8);
console.log( frajola.som );   // miado
console.log(frajola)
