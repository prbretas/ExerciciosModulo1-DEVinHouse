class Fatura {
  constructor(idItem, descricao, quant, preco) {
    this.idItem = idItem;
    this.descricao = descricao;
    this.quant = quant > 0 ? quant : 0;
    this.preco = preco > 0 ? preco : 0;
  }


  obterValorTotal () {
return this.quant * this.preco;

  }

}


const fatura1 = new Fatura (1, 'Laptop', 3, 1000)
console.log(fatura1)
console.log(fatura1.obterValorTotal()) 




const fatura2 = new Fatura (2, 'TV 4K 50 polegadas', -10, -3499)
console.log(fatura2)
console.log(fatura2.obterValorTotal()) 