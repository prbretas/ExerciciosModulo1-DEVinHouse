/* Vamos trabalhar com funções assíncronas agora.

Crie um arquivo **app.js**, neste crie uma função assíncrona chamada: "**euNaoEspero()**"

Essa função irá chamar outra função chamada "**aguarda3Segundos()**".

Então, na linha debaixo da chamada da função **aguarda3Segundos()** insira um "**console.log('Eu não espero')**".

O código de **aguarda3Segundos()** pode ser encontrado abaixo:

async function aguarda3Segundos() {
    await new Promise(resolve => setTimeout(resolve, 3000)); // 3 sec
    console.log('Função diz: Terminei!');
}

Chame a função **euNaoEspero()** e verifique se ele está aguardando **aguarda3Segundos()** terminar de rodar para executar o resto do programa. 

Por que isso acontece?

Agora crie outra função assíncrona chamada **euEspero()**, ela possui a mesma organização de **euNãoEspero()** (ser[a igual), porém ela deve aguardar (await) **aguarda3Segundos()** terminar de executar.
 
Como podemos fazer isso modificando apenas uma linha do código na função **euEspero()**?
 */


console.log(`Exercício 7 - M1S5`);

async function aguarda3Segundos() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 sec
  console.log("Função diz: Terminei!");
}

function euNaoEspero() {
  aguarda3Segundos();
  console.log("Eu não espero");
}


//funçao assincrona
async function euEspero() {
    //adicionar await***
    await aguarda3Segundos();
    console.log("Eu espero");
}


//euNaoEspero();
euEspero();