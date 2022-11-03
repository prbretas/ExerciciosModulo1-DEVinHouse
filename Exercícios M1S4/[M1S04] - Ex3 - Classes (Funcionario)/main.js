class Funcionario {
  constructor(nome, cpf, salario) {
    this.nome = nome;
    this.cpf = cpf;
    this.salario = salario;
  }

  
  promover(nroPercentual) {
    const percentual = nroPercentual / 100; 
    this.salario = this.salario * (1 + percentual)
    //this.salario *=(1+ percentual)
  }


}


let User1 = new Funcionario("Joao Paulo de Oliveira", 11111111111, 2238.87);

console.log(`Usuário ${User1.nome}, ANTES da promoção, com salário de R$${User1.salario}`);
console.log(User1);
User1.promover(10)
console.log(`Usuário ${User1.nome}, DEPOIS da promoção, com salário atualizado para R$${User1.salario}`);
console.log(User1);



let User2 = new Funcionario("Jose da Silva Sauro", 22222222222, 2862.25);

console.log(`Usuário ${User2.nome}, ANTES da promoção, , com salário de R$${User2.salario}`);
console.log(User2);
User2.promover(10)
console.log(`Usuário ${User2.nome}, DEPOIS da promoção, com salário atualizado para R$${User2.salario}`);
console.log(User2);

