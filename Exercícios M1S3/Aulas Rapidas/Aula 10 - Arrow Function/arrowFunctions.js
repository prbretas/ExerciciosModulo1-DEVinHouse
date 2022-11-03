console.log("Aula Rápida 10 - Arrow Functions");
// Função escrita normal

/* function soma(num1, num2) {
  return num1 + num2;
}
console.log(soma(5, 6));
 */
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

/**********************************************/

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
