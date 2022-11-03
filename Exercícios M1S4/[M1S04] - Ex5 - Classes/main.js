
// 5) Para modelar um jogo de ação, crie a classe Personagem que possua os atributos 'nome' e 'percentualVida'.
// O nome deve ser indicado no construtor da classe, e o percentual de vida é iniciado com 100.
// Crie o método 'sofreuDano(percentualDano)' cuja implementação diminua o valor de 'percentualDano' do percentual de vida do personagem
// (até o,limite de zero).
// Crie também o método 'usouKitMedico()' que adiciona 10 pontos ao percentual de vida do personagem (até o limite de 100).

class Personagem {
  constructor(nome) {
      this.nome = nome;
      this.percentualVida = 100;
  }

  sofreuDano(percentualDano) {
      if (percentualDano >= this.percentualVida) {
          this.percentualVida = 0;
      } else {
          this.percentualVida -= percentualDano;
      }
  }

  usouKitMedico() {
      const percentualDeCura = 10;
      if (this.percentualVida > (100-percentualDeCura)) {
          this.percentualVida = 100;
      } else {
          this.percentualVida += percentualDeCura;
      }
  }
}

const Guile = new Personagem('Guile');
console.log(Guile);
Guile.sofreuDano(30);// 70
Guile.usouKitMedico(); // +10
console.log( Guile.percentualVida ); // 80



const Ryu = new Personagem("Ryu", 100);
console.log(Ryu);
Ryu.sofreuDano(40);// 60
Ryu.usouKitMedico(); //+10
console.log(Ryu.percentualVida); //70
