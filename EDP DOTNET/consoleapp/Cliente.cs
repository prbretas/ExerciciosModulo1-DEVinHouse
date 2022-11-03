/* 



public class Cliente{

    public string nome {set;get;}
    
    private string codigoCliente {set; get;}
    
    protected string tokenDispositivoMovel = "X1DELTA";



public static string retornaQualquerCoisa(){
        return "aaaaaa";
    }

    public string retornaNome(){
        return nome;
    }


}





// : herança, herda
//clientePlatinum herda de Cliente

public class clientePlatinumMegaBlaster : Cliente {
public clientePlatinumMegaBlaster(){
    bool permissao = tokenDispositivoMovel == "X1DELTA";
    string texto = retornaQualquerCoisa();

}

    static void test(){
        
    }

}


 */




/******************************************/
public class Vendedor{

public string nome {get;set;}
private decimal totalVendido = 0;

public void SomaValor (int valor){
    totalVendido += valor;
}

public void decimal pegaTotalVendido (){

    return totalVendido;
}


}

public class CompraCliente{
public Cliente Cliente {get;set;} //para atribuir um valor ou recupera-lo

//----->  SUBISTITUI O GET E SET ACIMA!  <-------
/* public void SetCliente(Cliente _cliente){
    Cliente = _cliente;
}

public Cliente GetCliente(){
    return Cliente;
} */

/* 
public decimal ValotTotal {get;set;}
public decimal PercentualComissao {get;set;}

 */


}









public class Cliente{
    public string nome {get;set;}

}