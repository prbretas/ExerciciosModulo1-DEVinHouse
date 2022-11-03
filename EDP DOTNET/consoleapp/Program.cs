//cd consoleapp
//dotnet run





//Fibonacci.Executa(5);




//PAREI NA AULA 3 - 1h40

/* 
var textos = new List<Cliente>{
     new Cliente {
         nome = "eduardo",
         idade = 26
     },
    new Cliente {
         nome = "fulano",
         idade = 66
    },
     new Cliente {
         nome = "ciclano",
        idade = 9
     },
};

public class Cliente {
    public string nome {get:set;}
    public int idade {get;set;}
}



bool possuiMaiorDeIdade = clientes.Any((item) => item.idade >= 18);
bool possuiMenorDeIdade = clientes.Any((item) => item.idade < 18);
int quantidade = clientes.Count();

var primeiro = clientes.First();
var primeiroMaiorDeIdade = clientes.First((item) => item.idade >= 18);
var ultimo = textos.Last();
var ultimoMaiorDeIdade = clientes.Last((item) => item.idade >= 18);






var semMenores = clientes.Where(item => item.idade >= 18).ToList();
    clientes.RemoveAll(item => item.idade >= 65);
    clientes.Add(new Cliente { nome = "beltrano", idade = 40});

    double mediaDasIdades = clientes.Average(item => item.idade);
     var clienteMaisVelho = clientes.Max(item = item.idade);
    var clienteMaisNovo = clientes.Min(item => item.nome);



    var cliente = new Cliente
 {
    nomeCompleto = "fulano da silva sauro",
    endereco = new Endereco {
        rua = "benhalí, esquina com o rio mais belo",
        numero = 1020

    }
    }

 Cliente[] clientes = {cliente, new Cliente ()};
var list = clientes.ToList();
list.Add(new Cliente())
 */





/************** EXERCICIO 2h38 ***********************/

/* Console.WriteLine("***********  JOKENPO  ***********");
Console.WriteLine("ESCOLHA UMA OPÇÃO");
Console.WriteLine("1 - PEDRA");
Console.WriteLine("2 - PAPEL");
Console.WriteLine("3 - TESOURA");

var escolha = Console.ReadLine();
Console.WriteLine(escolha);
 */



 /*************************06-10-22********/

/*  var dict = new Dictionary<string,string>{};

 */
/*  var vendedor1 =  new Vendedor(){
    nome = "Eduardo",
 }
 */


var vendedores = new Vendedor[]{
    new Vendedor(){
        nome = "Eduardo"

    },
      new Vendedor(){
        nome = "Nicolas"

    },
      new Vendedor(){
        nome = "Tatyana"

    },
};





foreach(var vendedor in vendedores){
    for(var i = 0; i < 5; i++){
   
        Console.WriteLine($"Insira os valores das compras efetuadas pelo vendedor [{vendedor.nome}]:");
            var valorDaCompra = Console.ReadLine();
            decimal.TryParse(valorDaCompra, out decimal decimalValue);
            Console.WriteLine(decimalValue);
   }
}


// PAREI NA AULA 4 46:27-------------------



