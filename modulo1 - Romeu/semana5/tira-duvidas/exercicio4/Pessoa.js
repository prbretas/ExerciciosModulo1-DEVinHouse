export default class Pessoa {
  nome
  #cpf

  constructor(nome, cpf) {
    this.nome = nome
    this.#cpf = cpf
  }

  imprime() {
    console.log(`${this.nome} - ${this.#cpf}`)
  }
}
