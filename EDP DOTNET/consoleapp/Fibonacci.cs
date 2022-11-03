//AULA 05-10-22

public class Fibonacci {


public static void Executa(int posicao){

    Console.WriteLine(pegaPosicaoFibonacci(posicao));
}


public static double pegaPosicaoFibonacci(int posicao){
    if(posicao == 0){
return 0;
    }
    if(posicao == 1 || posicao == 2){
        return 1;
    }

    //posicao 5
    return pegaPosicaoFibonacci(posicao - 1) + pegaPosicaoFibonacci(posicao - 2);


}

}