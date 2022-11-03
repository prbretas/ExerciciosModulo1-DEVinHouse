/* Em um arquivo **app.js**, incluído em um documento **index.html**:

Utilizando um array de objetos similares aos de uma nota fiscal, com **'nome'** e **'preco'** (preço).
Ex.:
const produtos = [
  { nome: 'arroz', preco: 9 },
  { nome: 'feijao', preco: 12 },
  { nome: 'batata', preco: 8 },
  { nome: 'macarrao', preco: 5 }
];

No arquivo **html**, crie um **campo de texto** (para digitar o nome de um produto) e um **botão**.

Ao clicar no botão, deve ser executada uma busca pelo preço do item, exibido em um **parágrafo** o preço (caso o item seja encontrado) ou exibindo a mensagem **'Produto não encontrado'**.

Crie uma **função** que receba o nome de algum dos produtos por parâmetro e, utilizando o método de array **find**, encontre o item.

Depois de encontrar o item com **find**, pegue o valor do produto e exiba em um **parágrafo**. Exiba o valor na tela em um elemento html como **parágrafo** (<p>). Caso o item não exista, escreva **Produto não encontrado** no parágrafo.

Por fim, crie uma arrow function **reducer** para ser usada em conjunto com o método de array **reduce** e encontre o valor total da soma dos valores de todos os produtos da lista.

Exiba também esse valor na tela em um **outro parágrafo**:
Ex.: Valor total de 34
(caso seja usado o mesmo array do exemplo anterior)

>Dicas:
> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find
> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce */
//---------------------------------------------------
const produtos = [
  { nome: "arroz", preco: 15.49 },
  { nome: "feijao", preco: 6.89 },
  { nome: "batata", preco: 5.49 },
  { nome: "macarrao", preco: 4.79 },
  { nome: "cenoura", preco: 3.49 },
  { nome: "abacate", preco: 4.99 },
  { nome: "laranja", preco: 4.99 },
  { nome: "agriao", preco: 3.99 },
  { nome: "tangerina", preco: 5.79 },
  { nome: "beterraba", preco: 2.98 },
];

const btnProcurar = document.getElementById("btn-procurar");
let inputProduto = document.getElementById("input-produto");
const resultado = document.getElementById("resultado");
const pTotal = document.getElementById("pTotal");

//---------------- FUNCAO -------------------------------

function acharProduto(prodNome) {
  const prod = produtos.find((p) => p.nome === prodNome);
  if (prod) {
    resultado.innerText = `Preço: R$${prod.preco}`;
  } else {
    resultado.innerText = "Produto NÃO encontrado!";
    return;
  }
}
//-----------REDUCE------------------
const total = produtos.reduce((acc, p) => acc + p.preco, 0);
pTotal.innerText = `Valor Total dos produtos em lista: \n R$${total}`;

//----------------------------------------------------
btnProcurar.addEventListener("click", () => {
  acharProduto(inputProduto.value);
});

