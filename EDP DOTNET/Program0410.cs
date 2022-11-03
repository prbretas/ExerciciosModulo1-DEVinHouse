//AULA 04-10-22
//passar pra pasta consoleapp


// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

if (true)
{

    for (var i = 0; i < 10; i++)
    {

    }
}


/* char varChar = 'a';
string varString = "oi, olá, hello";
for (var i = 0; i < varString.Length; i++){
    Console.WriteLine(varString[i]);
    }
 */



/* 
var str = "qwerty, qwerty, qwerty";

var tamanho = str.Length;

var novo = str.Replace(", ","-");
//qwerty-qwerty-qwerty
var maiusculo = str.ToUpper();
var minusculo = str.ToLower();

 */



/* 

string palavraChave = "jabuti2020-$*";

//CONTAINS - ira perguntar se tem o char $ na string
bool possuiCifrao = palavraChave.Contains("$");
//resultado = true

bool possuiAlgumaInterrogacao = palavraChave.Any((varChar => varChar == '?'));
//false

//SPLIT - ira separa o texto a partir do char que foi selecionado
string[] quebraFrase = palavraChave.Split("-");


// a partir do split, a string foi separada em dois arrays. quebrafrase0 e quebraFrase1
bool palavraChaveEstaCorreta = quebraFrase[0].Equals("jabuti2020");
//true

 */

int[] lista = { 1, 2, 3, 4 };

foreach (int item in lista)
{
    Console.WriteLine(item * 1000);
}



var palavras = "barco-avião-bicicleta-patinete";


var arrayDePalavras = palavras.Split('-');

/* string palavraFormada = "";



for(var i=0; i < palavras.Length; i++){
var letraAtual = palavras[i];

if(letraAtual != '-'){
    palavraFormada += letraAtual;
}else{
    arrayDePalavras += palavraFormada;
    palavraFormada = "";
}

} */


foreach (var palavra in arrayDePalavras)
{
    Console.WriteLine(palavra);
}



var novaData = new DateTime();
//01/01/0001 00:00:00
Console.WriteLine(novaData);

var dataAtual = DateTime.Now;
//04/10/2022 20:00:00
Console.WriteLine(dataAtual);

/* 
-----------------------PAREI NA AULA 2 1h40 --------------*/



var dataComHorasZeradas = DateTime.Today;

Console.WriteLine(dataComHorasZeradas);

var dataManipulada = new DateTime(2020, 10, 02);
//02/10/2020 00:00:00

Console.WriteLine(dataManipulada);

int ano = dataManipulada.Year;

Console.WriteLine(ano);
DateTime doisAnosAntes = dataManipulada.AddYears(-2);

Console.WriteLine(doisAnosAntes);
int novoAno = doisAnosAntes.Year;
//2018
Console.WriteLine(novoAno);

int somaDeAnoMesDia = doisAnosAntes.Year + doisAnosAntes.Month +
doisAnosAntes.Day;
//2030
Console.WriteLine(somaDeAnoMesDia);







/*********************/


var hoje = DateTime.Today;
var aniversario = new DateTime(1992, 08, 29);
var subtracaoDeDatas = hoje - aniversario;
var diasDeDiferenca = subtracaoDeDatas.TotalDays;
// 11006

/*
TotalDays
TotalHours
TotalMilliseconds
TotalMinutes
TotalSeconds
*/

Console.WriteLine(diasDeDiferenca);



if (hoje > aniversario)
{
    var novoAniversario = aniversario.AddDays(diasDeDiferenca + 1);
    if (hoje < novoAniversario)
    {
        Console.WriteLine(novoAniversario);
        //29/08/2022 00:00:00
    }
}


var cliente = new clientePlatinumMegaBlaster()
{
    nome = "Philippe"
};

Console.WriteLine(clientePlatinumMegaBlaster.retornaQualquerCoisa());

Console.WriteLine(cliente.retornaNome());




/**************** EXERCICIO AULA 2 ************/

//APLICAÇÃO
/*
1 - UM PROGRAMA QUE LEIA O NOME E A DATA DE NASCIMENTO DO USUARIO
2 - APOS O PROCESSAMENTO DEVE SER MOSTRADO
    A - DIA DA SEMANA DO NASCIMENTO
    B - DIA DE SEMANA DO ANIVERSARIO DE 60 ANOS DA PESSOA
    C - MES ANTERIOR AO SEU ANIVERSARIO
    D - NOME INVERTIDO
    E - LETRAS E QUANTAS VEZES ELA SE REPETIU NO NOME
*/

Console.WriteLine("------ Bem Vindo a aplicação ------");
Console.WriteLine();

Console.WriteLine("Qual o seu nome?");
var nome = Console.ReadLine();

Console.WriteLine("Qual dia você nasceu?");
var diaNascimento = Console.ReadLine();


Console.WriteLine("Qual mes você nasceu?");
var mesNascimento = Console.ReadLine();


Console.WriteLine("Qual ano você nasceu?");
var anoNascimento = Console.ReadLine();

Console.WriteLine();

Console.WriteLine(nome + ", a sua data de nascimento é " + diaNascimento +" "+ mesNascimento + " " + anoNascimento);

//a)
//b)
//c)
//d)
//e)
