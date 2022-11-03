/* // 1) Implemente uma função 'calcular' que receba como parâmetro um array (numérico) e identifique o maior e menor
//  valor do mesmo. Imprima no console estes valores ou "Não é possível calcular" qdo não for possível.
//  Teste a função com as seguintes entradas:
//  - [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]
//  - []
//  - [1]
//  - [1, -1]
//  - null
//  - [-2,-2,-2,-2]
//  - [20,10, 30]  
//  * Obs.: Use let e const para declarar variáveis se for necessário.

function calcular(arr) {
    if (!arr || arr.length === 0) {
        console.log('Não é possível calcular');
        return;
    }
    let min = arr[0];
    let max = arr[0];
    for(let i=1; i < arr.length; i++) {
        if ( typeof(arr[i]) !== 'number' ) {
            console.log('Não é possivel calcular');
            return;
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log('min', min);
    console.log('max', max);
}

// const entrada = [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47];
// const entrada = [];
// const entrada = [1];
// const entrada = [1, -1];
// const entrada = null;
// const entrada =  [-2,-2,-2,-2];
// const entrada = [20,10, 30];
const entrada = [1 ,2 ,3 , true, 5];
calcular(entrada);


// 2) Um palindrome (ou palindromo), segundo o dicionário Houaiss,
// "diz-se de frase ou palavra que se pode ler, indiferentemente, da esquerda para direita ou vice-versa", como por exemplo:
// osso, Ana, radar. Ou seja, é uma palavra que quando lida de trás pra frente tem o mesmo significado.
// Implemente um script que retorne se determinada palavra é um palindromo.
// * Obs.: Use let e const para declarar variáveis se for necessário.

const palavra = 'radar';

const tamanho = palavra.length;
const metade = tamanho / 2;

let resultado = true;
for (let i = 0; i < metade; i++) {
    if (palavra[i] !== palavra[ (tamanho - 1) - i ]) {
        resultado = false;
        break;
    }
}
console.log(resultado);


// 3) Crie uma classe 'Funcionario' para representar um empregado de uma empresa, contendo os atributos cpf, nome completo e salário.
// Implemente também um método 'promover' que recebe como parametro um percentual, devendo o salário ser aumentado pelo percentual indicado
// no argumento do método.
// Crie e utilize um objeto desta classe para testar a implementação.

class Funcionario {
    constructor(cpf, nome, salario) {
        this.cpf = cpf;
        this.nome = nome;
        this.salario = salario;
    }

    promover(nroPercentual) { // 20
        const percentual = nroPercentual / 100;
        // this.salario = this.salario * (1 + percentual);
        this.salario *= (1 + percentual);
    }
}

const funcionario = new Funcionario(12345678901, 'Cosmo kramer', 10000);
console.log(funcionario);
funcionario.promover(10);
console.log(funcionario);


// 4) Crie uma classe chamada Fatura que possa ser utilizado por uma fábrica, representando um item vendido.
// Uma fatura deve incluir as seguintes informações como atributos:
// • um número identificador do item faturado (código do produto),
// • a descrição do item,
// • a quantidade comprada do item
// • o preço unitário do item
// Sua classe deve ter um construtor que inicialize todos os atributos.
// Se a quantidade não for positiva, ela deve ser indicada como 0.
// Se o preço por item não for positivo ele deve ser indicado como 0.0.
// Implemente um método chamado 'obterValorTotal()' que calcula o valor da fatura (isso é, multiplica a quantidade pelo preço do item).
// Crie pelo menos uma instância desta classe para testar a implementação.

class Fatura {
    constructor(id, descricao, quantidade, preco) {
        this.id = id;
        this.descricao = descricao;
        this.quantidade = quantidade > 0 ? quantidade : 0;
        this.preco = preco > 0 ? preco : 0;
    }

    obterValorTotal() {
        return this.quantidade * this.preco;
    }
}

const fatura = new Fatura(1, 'Laptop', 2, 1000);
console.log(fatura);
console.log( fatura.obterValorTotal() );


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

const jogador = new Personagem('Mr. Shooter');
console.log(jogador);
jogador.sofreuDano(30);
jogador.usouKitMedico();
console.log( jogador.percentualVida ); // 80


// 6) Crie a classe 'Animal' com os atributos 'nome', 'idade' e 'som'.
// Depois crie as subclasses (de Animal) 'Cachorro' e 'Gato' com os atributos 'nome' e 'idade',
// incializando o atributo 'som' da superclasse com 'latido' e 'miado', respectivamente.
// Crie uma instância de cada subclasse para testar, conforme abaixo.

class Animal {
    constructor(nome, idade, som) {
        this.nome = nome;
        this.idade = idade;
        this.som = som;
    }
}

class Cachorro extends Animal {
    constructor(nome, idade) {
        super(nome, idade, 'latido');
    }
}

class Gato extends Animal {
    constructor(nome, idade) {
        super(nome, idade, 'miado');
    }
}

// exemplos
const snoopy = new Cachorro('snoopy', 10);
console.log( snoopy.som );   // latido     // polimorfismo (som vem de animal)
const frajola = new Gato('frajola', 8);
console.log( frajola.som );   // miado


// 7) Crie uma classe 'CalculadorDeAreas' que tenha os atributos 'tipo', 'base' e 'altura'.
// Implemente o método 'calcular' que faça o cálculo da área conforme o 'tipo' do poligono informado:
// - 'triangulo':  (base * altura) / 2
// - 'quadrado' e 'retangulo' : base * altura
// Teste a implementação com instâncias dessa classe para um triângulo de base 6 cm e altura 8 cm,
// para um quadrado de base e altura de 4 cm e um retângulo de base 4 cm e altura 6 cm.
// Imprima o resultado calculado no console.

class CalculadorDeAreas {
    constructor(tipo, base, altura) {
        this.tipo = tipo;
        this.base = base;
        this.altura = altura;
    }

    calcular() {
        let resultado = 0;
        switch(this.tipo) {
            case 'triangulo':
                resultado = (this.base * this.altura) / 2;
                break;
            case 'quadrado':
            case 'retangulo':
                resultado = this.base * this.altura;
                break;
            default:
                throw new Error('Poligono não identificado');
        }
        return resultado;
    }
}

let calculador = new CalculadorDeAreas('triangulo', 6, 8);
const areaDoTriangulo = calculador.calcular();
calculador = new CalculadorDeAreas('quadrado', 4, 4);
const areaDoQuadrado = calculador.calcular();
calculador = new CalculadorDeAreas('retangulo', 4, 6);
const areaDoRetangulo = calculador.calcular();

console.log(areaDoTriangulo, areaDoQuadrado, areaDoRetangulo);


// 8) Os juros de uma aplicação podem ser calculados de forma simples ou composta.
// Para o cálculo, geralmente se usa a letra 'C' ou 'M' para representar o montante final da aplicação, a letra 'i' para representar
// a taxa aplicada (ao mês ou anual) e a letra 't' indicando o tempo (em meses ou anos) da aplicação.
// Crie uma classe 'Juros', que tenha como atributos o capital inicial, a taxa aplicada e o tempo (no mesmo período: meses ou anos).
// a) Adicione o método 'calcularJurosSimples()' que faça o cálculo usando a fórmula 'J = C * i * t'
// b) Adicione o método 'calcularJurosCompostos()' que faça o cálculo usando a fórmula 'M = C (1+i)**t'
// c) Teste a implementação da classe imprimindo no console os valores de juros simples e composto para uma aplicação de 10.000 reais
// a uma taxa de 7% ao mês (ou seja, 0.07) pelo período de 24 meses.
// d) Teste também (imprimindo igualmente no console) os valores de juros simples e composto para uma aplicação de 10.000 reais
// a uma taxa de 15% ao ano (ou seja, 0.15) pelo período de 10 anos.

class Juros {

    constructor(capitalInicial, taxa, tempo) {
        this.capitalInicial = capitalInicial;
        this.taxa = taxa;
        this.tempo = tempo;
    }

    calcularJurosSimples() {
        // J = C * i * t
        const j = this.capitalInicial * this.taxa * this.tempo;
        return j.toFixed(2);
    }

    calcularJurosCompostos() {
        // M = C (1+i)**t
        const m = this.capitalInicial * (1 + this.taxa) ** this.tempo;
        return m.toFixed(2);
    }

}

// C = 10000, i = 0,07, t = 24
let juros = new Juros(10000, 0.07, 24);
let montanteComJurosSimples = juros.calcularJurosSimples();
let montanteComJurosCompostos = juros.calcularJurosCompostos();
console.log(montanteComJurosSimples, montanteComJurosCompostos);

// C = 10000, i = 0,15, t = 10
juros = new Juros(10000, 0.15, 10);
montanteComJurosSimples = juros.calcularJurosSimples();
montanteComJurosCompostos = juros.calcularJurosCompostos();
console.log(montanteComJurosSimples, montanteComJurosCompostos);


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

const time = new Time('São Paulo Futebol Clube', 'SPFC');
console.log( time.exibirSituacao() );
const partida1 = new Partida('SPFC', 3, 'Liverpool', 1);   // vitorias
const partida2 = new Partida('SPFC', 2, 'Real Madrid', 2); // empate
const partida3 = new Partida('Barcelona', 2, 'SPFC', 1);   // derrota
time.computarPartida(partida1);
time.computarPartida(partida2);
time.computarPartida(partida3);
console.log( time.exibirSituacao() );


// 10) Crie uma pagina de autenticacao baseado no layout em anexo.
// Dado a classe Usuário abaixo:
//         class Usuario {
//             constructor(nome, email, senha) {
//                 this.nome = nome;
//                 this.email = email;
//                 this.senha = senha;
//             }

//             autenticar(emailInformado, senhaInformada) {
//                 return (this.email === emailInformado && this.senha === senhaInformada);
//             }
//         }
// Use esta classe 'Usuário' para implementar a autenticação quando for clicado no botão 'Acessar'.

// Dicas:
// a) Instancie um usuário indicando seus atributos: nome, email e senha (podem ser dados fixos e indicados no momento da criação do objeto).
// b) Colocar no evento relacionado ao botão a chamada para uma função que faça uso do método 'autenticar' deste objeto previamente instanciado.
// c) Se a autenticação tiver sucesso (resultado = true), exibir mensagem de sucesso na tela, caso contrário, exibir mensagem de credenciais inválidas.
// Sugestão: aplique estilo CSS na página para praticar!


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Autenticação</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: bisque;
        }
        #login div {
            margin: 15px;
            font-size: 1.3rem;
        }
        #login div:first-child, #login div:last-child {
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
        #login div input {
            font-size: 1.2rem;
            border-radius: 8px;
        }
        .btn-acessar {
            margin: 10px;
            padding: 10px;
            font-size: 1.2rem;
            width: 150px;
        }
    </style>
</head>
<body>

    <section id="login">
        <div>
            Login
        </div>
        <div>
            <label for="email">E-Mail:</label>
            <input type="email" id="email" size="30">
        </div>
        <div>
            <label for="senha">Senha:</label>
            <input type="password" id="senha", size="30">
        </div>
        <div>
            <button class="btn-acessar" onclick="login()">Acessar</button>
        </div>

    </section>

    <script>
         class Usuario {
            constructor(nome, email, senha) {
                this.nome = nome;
                this.email = email;
                this.senha = senha;
            }

            autenticar(emailInformado, senhaInformada) {
                return (this.email === emailInformado && this.senha === senhaInformada);
            }
        }

        const usuario = new Usuario('James Kirk', 'james@kirk.com', '1234');

        function login() {
            const inputEmail = document.querySelector('#email');
            const valorEmail = inputEmail.value;
            const inputSenha = document.querySelector('#senha');
            const valorSenha = inputSenha.value;
            if (valorEmail === '' || valorSenha === '') {
                alert('Credenciais não informadas');
                return;
            }
            const autenticado = usuario.autenticar(valorEmail, valorSenha);
            if (autenticado) {
                alert('Usuário autenticado com sucesso!');
            } else {
                alert('Credenciais inválidas!');
            }
            inputEmail.value = '';
            inputSenha.value = '';
        }

    </script>
</body>
</html>



 */