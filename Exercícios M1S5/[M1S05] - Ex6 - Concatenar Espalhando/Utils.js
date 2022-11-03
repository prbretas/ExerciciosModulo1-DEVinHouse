/* Para treinar os conceitos de Spread e módulos.

Crie três arquivos:
- **index.html**
- **app.js**
- **utils.js**

Utilizando o atributo **type="module"**, inclua o arquivo **app.js** em **index.html**.
> Ex.: <script type="module" src="app.js"></script>

Em **utils.js** desenvolva e exporte uma função que receba **dois arrays** e realize a **concatenação** entre eles utilizando o operador **Spread**.
Apresente o resultado no console.log(novoArray).
> Ex.:
> const novoArray = concatena([1, 2, 3], [4, 5, 6]);
> console.log(novoArray);
> // novo array deve ser [1, 2, 3, 4, 5, 6]

**Obs.:** em **index.html** apenas deve ser incluído o arquivo **app.js**, para executarmos a função do arquivo **utils.js**, devemos importá-la e chamá-la em **app.js**.

> Dica:
> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax
> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules */

export function concatena(vetorA, vetorB) {
  return [...vetorA, ...vetorB];
}
