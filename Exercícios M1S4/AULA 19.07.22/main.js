/*
// CRIAR CLASSE

class Gato {

  #privatefield; //exemplo de como esconder  a 
  //Atributos
  //toda logica para construir deve estar aqui dentro
  constructor(nome, idade, peso, preguica) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.preguica = preguica;
    
  }

  // funções - Méthods
  miar(fome) {
    return fome && this.preguica;
  }
  andar() {
    return 'estou andando';
  }
}

//INSTANCIA DA CLASSE GATO

const garfield = new Gato("Garfield", 20, 5, true);

console.log(garfield);

//INSTANCIA DA CLASSE GATO
const tom = new Gato ('Tom', 9, 4.5, false);

console.log(garfield, tom);


const nomeDoGato = gato.nome;
const resultado = gato.miar();

console.log(nomeDoGato)
console.log(resultado)


*/

// *********** EXERCICIOS! ************* 19/07/22 *******//

// **************** EXEMPLO 1 **********************************************
//DEFINICAO DE CLASSE
//NOME DA CLASSE
class Endereco {
  //ATRIBUTOS
  //cria parametros de dados para construir a classe
  //atribuir valores default diretamente no constructor para garantir algum valor , testar, para nao dar erro.
  constructor(
    logradouro = "Rua1",
    numero = "0",
    bairro = "centro",
    cidade = "Florianopolis",
    estado = "SC",
    pais = "Brasil",
    cep = 11111111
  ) {
    this.logradouro = logradouro; //utiliza this.var = '...'
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.pais = pais;
    this.cep = cep;
  }

  //METODOS
  //utilizar a palavra this.var para se referir ao atributo da propria classe
  obterEndereco() {
    return `Logradouro: ${this.logradouro} Nº${this.numero}, ${this.bairro}, ${this.cidade}-${this.estado}, ${this.pais} CEP:${this.cep}`;
  }
}

//NOVO ENDERECO - INSTANCIA (CRIAR OBJETO) DA CLASSE
//para criar um novo objeto a partir da classe
//usa-se a palavra new CLassName(escrever os parametros na ordem que foi escrito acima)
const endereco1 = new Endereco(
  "Avenida São João",
  123,
  "Centro",
  "Sao Paulo",
  "SP",
  "Brasil",
  88888222
);

//CHAMAR ENDERECO COMPLETO NO CONSOLE
console.log(endereco1.obterEndereco());
console.log(endereco1);

const endereco2 = new Endereco("Rua 123");
console.log(endereco2.obterEndereco());
console.log(endereco2);

/******************************** EXEMPLO - 2***********************/

//DEFINICAO DE CLASSE

class Pessoa {
  constructor(nome, endereco, categoria) {
    this.nome = nome;
    this.endereco = endereco;
    this.categoria = categoria;
  }
  validarIdentificador(identificador) {
    // ... código de validacao
    // do identificador...
    return identificador + " validado!";
  }
}

//************************** CRIAR SUBCLASSE  - PF **************

class PessoaFisica extends Pessoa {
  // herança
  constructor(nome, endereco, identificador) {
    super(nome, endereco, "Pessoa Física");
    this.cpf = identificador;
  }

  get tipo() {
    // getter
    return "PF";
  }

  //over ride - sobreescreve o metodo da classe pai e vai passar a valer o metodo da classe filho
  validarIdentificador() {
    const validacao = super.validarIdentificador(this.cpf);
    return "CPF da Pessoa Física:" + validacao;
  }
}

//************************** CRIAR SUBCLASSE  - PJ **************

class PessoaJuridica extends Pessoa {
  // herança
  constructor(nome, endereco, identificador) {
    super(nome, endereco, "Pessoa Jurídica");
    this.cnpj = identificador;
  }

  get tipo() {
    return "PJ";
  }

  validarIdentificador() {
    const validacao = super.validarIdentificador(this.cnpj);
    return "CNPJ da Pessoa Jurídica:" + validacao;
  }
}

// ********** Exemplo de uso PF ****************************
const pf = new PessoaFisica("Ryu", "Rua do Japão 90", "123.456.789-90");
console.log(pf);
console.log(pf.cpf);
console.log(pf.categoria);
console.log(pf.tipo);
console.log(pf.validarIdentificador());

// ***************** Exemplo de uso PJ **************************
const pj = new PessoaJuridica(
  "M. Bison Ltda.",
  "Rua do EUA 80",
  "001.987.567/0001"
);
console.log(pj);
console.log(pj.cnpj);
console.log(pj.categoria);
console.log(pj.tipo);
console.log(pj.validarIdentificador());

//************EXERCICIO 3 - 20/07 ***************/

class Veiculo {
  constructor(tipoVeiculo, marca, modelo, ano, placa, multas, velMax) {
    this.tipoVeiculo = tipoVeiculo;
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.placa = placa;
    this.qtdMultas = multas;
    this.velocidadeMaxima = velMax;
  }

  get tipoModelo() {
    return `${this.tipoVeiculo} - ${this.modelo}`;
  }

  adicionarMulta(codigoDaPlaca) {
    if (this.placa === codigoDaPlaca) {
      this.qtdMultas++;
    }
    return this.qtdMultas;
  }
}

const newCar = new Veiculo(
  "Carro",
  "Ford",
  "Mustang GT500",
  2018,
  "AAA-1834",
  0,
  179
);


console.log(newCar.tipoModelo);
console.log('multas:', newCar.qtdMultas);

newCar.adicionarMulta('placa diferente');
console.log('multas com placa diferente:', newCar.qtdMultas);

newCar.adicionarMulta('ABC-1234');
console.log('multas com placa igual:', newCar.qtdMultas);




const newCar2 = new Veiculo('carro','chevrolet','onix','1980','ABC-1234',2,40);

console.log(newCar2.tipoModelo);
console.log('multas:', newCar2.qtdMultas);

newCar2.adicionarMulta('placa diferente');
console.log('multas com placa diferente:', newCar2.qtdMultas);

newCar2.adicionarMulta('ABC-1234');
console.log('multas com placa igual:', newCar2.qtdMultas);



