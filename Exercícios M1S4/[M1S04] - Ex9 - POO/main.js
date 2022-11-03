
// 9) O sistema de pontuação por partida no Campeonato Brasileiro de Futebol funciona assim:
//     Vitória = 3 pontos
//     Derrota = 0 pontos
//     Empate  = 1 ponto
// a) Implemente uma classe 'Time' com os atributos: nome do time, sigla do time, quantidade de vitorias, derrotas, empates,
// quantidade de gols marcados e gols sofridos.
// b) Adicione nesta classe métodos 'getters' para atributos calculados: nro de jogos (soma de vitorias, derrotas e empates) e
// nro de pontos (aplicando regra de pontuação acima).
// c) Crie uma classe 'Partida', com os atributos: sigla do time 1, gols do time 1, sigla do time 2, gols do time 2.
// d) Adicione na classe 'Time' um método 'computarPartida', que receba uma instância (objeto) de 'Partida' como argumento.
// Se a partida recebida como argumento tiver como time participante (time 1 ou 2) o time da classe,
// deve-se atualizar os atributos de vitoria/derrota/empates
// do time dependendo do resultado da partida e gols marcados/sofridos conforme placar da partida.
// e) Adicione mais um método 'exibirSituacao' que imprima no console todos os atributos do time (para conferência das implementações acima).
// f) Teste sua classe criando uma instância dela e instâncias de partidas a serem computadas, para conferir os resultados.


class Time {
  constructor(nome, sigla) {
      this.nome = nome;
      this.sigla = sigla;
      this.vitorias = 0;
      this.derrotas = 0;
      this.empates = 0;
      this.golsMarcados = 0;
      this.golsSofridos = 0;
  }

  get jogos() {
      return this.vitorias + this.derrotas + this.empates;
  }

  get pontos() {
      return (this.vitorias * 3) + (this.empates);
  }

  computarPartida(partida) {
      if (partida.time1 === this.sigla) {
          if (partida.golsDoTime1 > partida.golsDoTime2) {
              this.vitorias++;
          } else if (partida.golsDoTime1 < partida.golsDoTime2) {
              this.derrotas++;
          } else {
              this.empates++;
          }
          this.golsMarcados += partida.golsDoTime1;
          this.golsSofridos += partida.golsDoTime2;
      } else if (partida.time2 === this.sigla) {
          if (partida.golsDoTime2 > partida.golsDoTime1) {
              this.vitorias++;
          } else if (partida.golsDoTime2 < partida.golsDoTime1) {
              this.derrotas++;
          } else {
              this.empates++;
          }
          this.golsMarcados += partida.golsDoTime2;
          this.golsSofridos += partida.golsDoTime1;
      }
  }

  exibirSituacao() {
      const msg = `Time ${this.sigla} tem ${this.jogos} jogos, ${this.pontos} pontos,
          ${this.vitorias} vitorias, ${this.empates} empates, ${this.derrotas} derrotas,
          ${this.golsMarcados} gols marcados e ${this.golsSofridos} gols sofridos.`;
      return msg;
  }
}

class Partida {
  constructor(time1, golsDoTime1, time2, golsDoTime2) {
      this.time1 = time1;
      this.golsDoTime1 = golsDoTime1;
      this.time2 = time2;
      this.golsDoTime2 = golsDoTime2;
  }
}

const Fluminense = new Time('Fluminense FC', 'FFC');
console.log( Fluminense.exibirSituacao() );
const partida1 = new Partida('FFC', 4, 'Flamengo', 1);   // vitorias
const partida2 = new Partida('FFC', 1, 'Botafogo', 1); // empate
const partida3 = new Partida('Vasco', 3, 'Fluminense', 2);   // derrota
Fluminense.computarPartida(partida2);
Fluminense.computarPartida(partida1);
Fluminense.computarPartida(partida3);
console.log( Fluminense.exibirSituacao() );