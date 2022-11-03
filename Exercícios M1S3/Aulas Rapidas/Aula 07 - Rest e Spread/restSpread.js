console.log("Aula Rápida 07 - Rest e Spread");

console.log("-----------Rest-----------");

//Calculo de média de notas
//Operador Rest (...), um parametro indicando que pode
//atribuir varios valores, converter em array

function media(...notas) {
  let resultado = 0;
  for (let i = 0; i < notas.length; i++) {
    resultado += notas[i];
  }
  return resultado / notas.length;
}

console.log(media(8, 6, 10, 10, 11));
console.log(media(7, 6.7, 10, 7.9, 8.4));

console.log("-----------Spread-----------");

//Indicado para espalhar os valores de um Array

let numeros1 = [2, 4, 6, 8];
console.log(numeros1);
//espalha os valores de um Array, e nao mostra como Array
console.log(...numeros1);

let numeros2 = [1, 3, 5, 7, 9];

let novoArray = [...numeros1, 20,...numeros2];
console.log(novoArray);

//clonar array

let numerosClone = [...numeros1]; // com ... passa a ser um novo array com os valores de numeros 1 atribuidos, numeros espalhados com spread
console.log(numeros1);
console.log(numerosClone);

numerosClone.push(10);
console.log(numerosClone);
console.log(numeros1);

console.log("-----------Spread com Objetos-----------");


function calcularMedia(...notas){
    let resultado = 0;
    for(let i =0; i < notas.length; i++) {
        resultado += notas[i];
    }
     return resultado / notas.length
    }

const aluno = {
  nome: "zé",
  "nota1": 5,
  "nota2": 6,
  "nota3": 8,
};
console.log(aluno);

const alunoClone = { ...aluno };
console.log('------AlunoClone antes de alterar os valores---------')
console.log(alunoClone);
console.log('------AlunoClone depois de alterar os valores---------')
alunoClone.nome = "Joao";
alunoClone.nota1 = 9.6
alunoClone.nota2 = 9.8
alunoClone.nota3 = 10
console.log(alunoClone);


console.log('----------alunoComMedia------------')
const alunoComMedia = {...aluno, "media": calcularMedia(aluno.nota1, aluno.nota2, aluno.nota3) };
console.log(alunoComMedia)


console.log('----------alunoCloneComMedia------------')
const alunoCloneComMedia = {...alunoClone, "media": calcularMedia(alunoClone.nota1, alunoClone.nota2, alunoClone.nota3) };

console.log(alunoCloneComMedia)





