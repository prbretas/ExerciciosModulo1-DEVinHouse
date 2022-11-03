/***************PROGRESSAO ARITMETICA***********/
function executarPA(){
  var ValorInicial = parseInt(document.getElementById('ValorInicial').value);
  var RaizPA = parseInt(document.getElementById('Raiz').value);
  var termo = parseInt(document.getElementById('termo').value);
  var resultado='';

  for(var i=1; i<=termo ; i++){
   resultado += "Termo "+i+" = "+ValorInicial+"<br />";
   ValorInicial += RaizPA;
  }
     let Resultado = document.getElementById("Resultado");
   Resultado.innerHTML = (resultado)
}


/***************PROGRESSAO GEOMETRICA***********/
function executarPG(){
  var ValorInicial = parseInt(document.getElementById('ValorInicial').value);
  var RaizPG = parseInt(document.getElementById('Raiz').value);
  var termo = parseInt(document.getElementById('termo').value);
  var resultado='';

  for(var i=1; i<=termo ; i++){
   resultado += "Termo "+i+" = "+ValorInicial+"<br />";
   ValorInicial *= RaizPG;
  }
     let Resultado = document.getElementById("Resultado");
   Resultado.innerHTML = (resultado)
}