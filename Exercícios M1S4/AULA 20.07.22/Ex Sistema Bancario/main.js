/*****************************CLASSE***********************/

// classes de domínio (modelo)

class ContaBancaria {
  constructor(agencia, numConta, saldo) {
    this.agencia = agencia;
    this.numConta = numConta;
    this.saldo = saldo;
    this.operacoes = []; //lçançamentos de credito e debito
  }

  debitar(valor) {
    if (valor > this.saldo) {
      return false;
    }
    //logica para debito ou saque
    this.saldo -= valor;
    const DebLancamento = new Lancamento("Débito", valor);
    this.operacoes.push(DebLancamento);
    return true;
  }

  creditar(valor) {
    this.saldo += valor;
    const CredLancamento = new Lancamento("Crédito", valor);
    this.operacoes.push(CredLancamento);
    return true;
  }

  //retorna as operacaoes lancamentos feitos de forma formatada

  gerarExtrato() {
    const extrato = [];
    for (let i = 0; i < this.operacoes.length; i++) {
      const operacao = this.operacoes[i];
      const formatada = `Data ${operacao.data.toLocaleString("pt-BR")} - ${
        operacao.tipo
      } - R$ ${operacao.valor}`;
      extrato.push(formatada);
    }
    return extrato;
  }
}









class Lancamento {
  constructor(tipo, valor) {
    this.tipo = tipo;
    this.valor = valor;
    this.data = new Date(); // DATA da operacao
  }
}











/*************************** EXEMPLOS ***********************/
let divSaida = document.getElementById("saida");

var conta = new ContaBancaria(1212, 333, 1000);

// controller: interação com UI
function efetuarOperacao(acao) {
  let valor = obterValor();

  if (acao !== "saldo" && acao !== "extrato") {
    //validar valor de entrada
    const isValido = validar(valor);
    if (!isValido) {
      return;
    }
    valor = parseFloat(valor); //converter string para numero fracionario
  }

  switch (acao) {
    case "sacar":
      sacar(valor);
      break;

    case "saldo":
      divSaida.innerText = `O saldo atual é de R$${conta.saldo}`;
      break;

    case "depositar":
      conta.creditar(valor);
      alert("Deposito realizado com sucesso!");
      break;

    case "extrato":
      consultaExtrato();
      break;

    default:
      alert("Operação não reconhecida");
  }

  limparValor();
}








function consultaExtrato() {
  const extrato = conta.gerarExtrato();
  let extratoFormatado = "";
  for (let i = 0; i < extrato.length; i++) {
    extratoFormatado += extrato[i] + "\n";
  }
  divSaida.innerText = extratoFormatado;
  divSaida.style.fontWeight = "bold";
}




function sacar(valor) {
  const sucesso = conta.debitar(valor);
  if (sucesso) {
    alert("Saque efetuado com sucesso");
  } else {
    alert("Saldo insuficiente");
  }
}



function obterValor() {
  const input = document.querySelector("#valor");
  let valor = input.value;
  return valor;
}



function limparValor() {
  const input = document.querySelector("#valor");
  input.value = "";
}



function limparSaida() {
  const saida = document.querySelector("#saida");
  while (saida.hasChildNodes()) {
    saida.removeChild(saida.lastChild);
  }
}



function validar(valor) {
  if (!valor || valor.length === 0) {
    alert("Valor não preenchido!");
    return false;
  }
  const regex = /^[0-9]*\.?[0-9]*$/;
  const isNumerico = valor.match(regex);
  if (!isNumerico) {
    alert(
      "Valor deve ser numérico, parte fracionária separada por ponto e ser maior que zero!"
    );
    return false;
  }
  if (parseFloat(valor) === 0) {
    alert("Valor não pode ser zero!");
    return false;
  }
  return true;
}
