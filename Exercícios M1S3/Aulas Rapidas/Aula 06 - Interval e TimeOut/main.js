console.log('Aula Rápida 06 - Interval e Timeout')



console.log('-----------Timeout-----------')

//TIMEOUT - executa um bloco especifico uma vez apenas depois de um determinado tempo
setTimeout(() => {
    console.log('Executado depois de 2s')
}, 2000); //2000 milisegundos = 2 segundos




console.log('----------- outra forma de puxar o timeout - Ex2 -----------')

const Timeout = () => console.log('executando...')


//TIMEOUT - executa um bloco especifico uma vez apenas depois de um determinado tempo
setTimeout(Timeout, 2000); //2000 milisegundos = 2 segundos


//clearTimeout(Timeout); // mandar parar  o timeout




console.log('-----------Interval-----------')

//INTERVAL - executa um bloco especifico repetidamente depois de um determinado tempo
/* setInterval(() => {
    console.log('Executado, irá repetir depois de 2s')
    
}, 2000);
 */

const interval = () => console.log('Executando interval')

const intervalId = setInterval(interval, 1000);

//clearInterval(intervalId); // mandar parar o loop


