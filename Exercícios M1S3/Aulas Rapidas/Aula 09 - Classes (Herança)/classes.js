console.log("Aula Rápida 09 - Classes");

//SUPER CLASSE
class Aluno {
  constructor(nome, nota1, nota2, nota3) {
    this._nome = nome;
    this._nota1 = nota1;
    this._nota2 = nota2;
    this._nota3 = nota3;
  }
  //obs: inclui o _ underline antes da variavel, para indicar como privado, acessivel apenas dentro da classe

  imprimirNome() {
    console.log(this._nome);
  }

  //retornar um valor que estava privado anteriormente
  get nome() {
    return this._nome;
  }

  //atribuir novo valor ao Nome
  set nome(novoNome) {
    this._nome = novoNome;
  }

  get nota1() {
    return this._nota1;
  }

  set nota1(novaNota1) {
    this._nota1 = novaNota1;
  }

  static formulaCalculoMedia() {
    return "(nota1 +nota2+nota3+...+notaN)/ N";
  }
}

/* const aluno1 = new Aluno("Zé", 6, 10, 8);

console.log(aluno1.nome);
aluno1.nome = "José";
console.log(aluno1.nome);
console.log(aluno1);
console.log(aluno1.nota1);
console.log(aluno1._nota2);
console.log(aluno1._nota3);



const aluno2 = new Aluno("Maria", 7, 8.5, 9.2);
console.log(aluno2.nome);
aluno2.nome = "Maria Clara";
console.log(aluno2.nome);
console.log(aluno2);
 */

// ------------ SUB CLASSES--------

class AlunoGraduacao extends Aluno {
  constructor(nome, nota1, nota2, nota3, curso) {
    super(nome, nota1, nota2, nota3);
    this._curso = curso;
  }
get curso (){
return this._curso

}

set curso (novoCurso){
this._curso = novoCurso;

}

}


const aluno1 = new Aluno('Jose', 5, 6, 7)
console.log(aluno1.curso) //será undefined pois a classe Aluno nao tem curso definido


const aluno2 = new AlunoGraduacao('Maria', 10, 8, 6, 'Ciencias Contábeis')

console.log(aluno2.curso)
console.log(aluno2)
