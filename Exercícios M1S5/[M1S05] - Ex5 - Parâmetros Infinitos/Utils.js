/* Para treinar os conceitos de Rest e módulos.

Crie três arquivos:
- **index.html**
- **app.js**
- **utils.js**

Utilizando o atributo **type="module"**, inclua o arquivo **app.js** em **index.html**.
> Ex.: <script type="module" src="app.js"></script>

No arquivo **utils.js**, utilizando o operador **Rest**, crie uma função que receba como parâmetro uma **quantidade indefinida de variáveis** inteiras (números inteiros) e exporte esta função.

A função deve retornar a soma de todos os **parâmetros** (...).
Após executada a função, o resultado deve ser exibido no console.
> Ex.:
> resultado = somaTudo(1, 2, 3, 4);
> console.log(resultado);
> // resultado deve ser 10

**Obs.:** em **index.html** apenas deve ser incluído o arquivo **app.js**, para executarmos a função do arquivo **utils.js**, devemos importá-la e chamá-la em **app.js**.

> Dica:
> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters
> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules */

export default function somaNumeros(...numeros) {
  console.log({numeros});
  return numeros.reduce((acc, num) => acc + num, 0);
}


