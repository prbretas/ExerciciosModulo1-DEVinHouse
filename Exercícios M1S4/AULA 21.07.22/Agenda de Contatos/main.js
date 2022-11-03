// Trata-se de um sistema de agenda eletrônica, onde a Agenda deve ter opções para adicionar e remover Contatos,

// além de métodos para retornar a quantidade de contatos cadastrados.

// Cada Contato é identificado pelo nome e sobrenome de uma pessoa, devendo conter ainda o telefone celular e fixo (se houver).

class Agenda {
  constructor() {
    this.contatos = [];
  }

  adicionar(contato) {
    this.contatos.push(contato);
  }

  remover(contatoParaExcluir) {
    let indice = null;

    for (let i = 0; i < this.contatos.length; i++) {
      const c = this.contatos[i];

      if (
        c.nome === contatoParaExcluir.nome &&
        c.sobrenome === contatoParaExcluir.sobrenome
      ) {
        indice = i;

        break;
      }
    }

    if (indice === null) {
      // nao encontrou o contato para excluir

      throw new Error("Contato não encontrado na lista");
    }

    this.contatos.splice(indice, 1); // começando na posicao do indice, remova um elemento
  }

  obterQuantidadeDeContatos() {
    return this.contatos.length;
  }
}

class Contato {
  constructor(nome, sobrenome, celular, fixo) {
    this.nome = nome;

    this.sobrenome = sobrenome;

    this.celular = celular;

    this.fixo = fixo;
  }
}

const agenda = new Agenda();

// console.log(agenda);

const contato1 = new Contato("James", "Kirk", "11-1111111", "11-2222222");

const contato2 = new Contato("Leonard", "McCoy", "22-1111111", "22-2222222");

const contato3 = new Contato("Montgomery", "Scott", "33-1111111", "33-2222222");

agenda.adicionar(contato1);

agenda.adicionar(contato2);

agenda.adicionar(contato3);

// console.log(agenda);

// console.log ('Quantidade', agenda.obterQuantidadeDeContatos());

agenda.remover(contato2);

console.log(agenda);

console.log("Quantidade", agenda.obterQuantidadeDeContatos());
