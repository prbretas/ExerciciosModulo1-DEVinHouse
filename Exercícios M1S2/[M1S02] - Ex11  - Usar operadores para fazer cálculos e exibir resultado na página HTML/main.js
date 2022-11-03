let Nome_do_Time = "Tabajara F.C."


// REGRAS DE PONTOS DO CAMPEONATO
let PontoVitoria = 3
let PontoEmpate = 1
let PontoDerrota = 0

// QUANTIDADE DE PARTIDAS
let Vitoria = 12
let Empate = 6
let Derrota = 2

//CALCULANDO NUMERO DE JOGOS
let Nro_De_Partidas = Vitoria + Empate + Derrota;

//CALCULANDO QUANTIDADE DE PONTOS DURANTE O CAMPEONATO
let Nro_De_Pontos = Vitoria*PontoVitoria + Empate*PontoEmpate + Derrota*PontoDerrota;




//------------------------------------
//MOSTRAR NO CONSOLE A FRASE
console.log(`O time ${Nome_do_Time} acumulou ${Nro_De_Pontos} pontos, após jogar ${Nro_De_Partidas} partidas`)



//------------------------------------------
//CRIAR ELEMENTO NO HTML PELO JAVASCRIPT
const paragrafo = document.createElement("p");

const texto = document.createTextNode(`O time ${Nome_do_Time} acumulou ${Nro_De_Pontos} pontos, após jogar ${Nro_De_Partidas} partidas`);


paragrafo.style.color = "white";
paragrafo.style.backgroundColor = "purple";
paragrafo.style.fontFamily = "Verdana";
paragrafo.style.fontSize = "2rem";
paragrafo.style.textShadow = "0 0 2px black"


paragrafo.appendChild(texto);

console.log(paragrafo);

const body = document.body;
body.appendChild(paragrafo);