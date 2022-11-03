let fotoEstacao = document.getElementById("EstacaoImg")
let EstacaoNome = document.getElementById("EstacaoNome")


/*****************************************/
let Data = new Date();
let Dia = Data.getDate();
let Mes = Data.getMonth()+1;
let Ano = Data.getFullYear();
let DiaStr = Dia.toString();
let MesStr = Mes.toString();
let AnoStr = Ano.toString();

switch (MesStr) {
    case "1":
    case "2":
    case "3":
      fotoEstacao.innerHTML = "<img src=verao.webp alt=Foto_Verão title=Verão width=300px>"
      EstacaoNome.innerHTML = "<h2>Verão</h2>"
      break;

    case "4":
    case "5":
    case "6":
      fotoEstacao.innerHTML = "<img src=outono.jpg alt=Foto_Outono title=Outono width=300px>"
      EstacaoNome.innerHTML = "<h2>Outono</h2>"
      break;

    case "7":
    case "8":
    case "9":
        fotoEstacao.innerHTML = "<img src=inverno.webp alt=Foto_Inverno title=Inverno width=300px>"
        EstacaoNome.innerHTML = "<h2>Inverno</h2>"
        break;

    case "10":
    case "11":
    case "12":
      fotoEstacao.innerHTML = "<img src=primavera.jpg alt=Foto_Primavera title=Primavera width=300px>"
      EstacaoNome.innerHTML = "<h2>Primavera</h2>"
       break;
}