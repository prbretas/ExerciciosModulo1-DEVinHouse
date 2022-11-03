class Tarefa {
  constructor(id, descricao, concluido = false) {
    this.id = id;
    this.descricao = descricao;
    this.concluida = concluido;
  }

  alterarStatus() {
    this.concluida = !this.concluida;
  }
}

const tarefas = []; // objetos da classe Tarefa

carregarDados();

function adicionarNovaTarefa() {
  const entrada = document.querySelector(".entrada-item input");
  if (entrada.value === "") {
    return;
  }
  const id = tarefas.length;
  const novaTarefa = new Tarefa(id, entrada.value);
  tarefas.push(novaTarefa);
  entrada.value = "";
  carregarDados();
}

function carregarDados() {
  removerElementos();
  const listaUl = document.querySelector(".lista ul");
  let qtdConcluidos = 0;
  for (let i = 0; i < tarefas.length; i++) {
    const tarefa = tarefas[i];
    if (tarefa.concluida) {
      qtdConcluidos++;
    }
    const item = montarElementoDoItem(tarefa);
    listaUl.append(item);
  }
  const elemQtdConcluidos = document.querySelector("#qtdConcluidos");
  elemQtdConcluidos.innerText = qtdConcluidos;
  const elemQtdPendentes = document.querySelector("#qtdPendentes");
  elemQtdPendentes.innerText = tarefas.length - qtdConcluidos;
}

function montarElementoDoItem(tarefa) {
  // checkbox
  const check = document.createElement("input");
  check.type = "checkbox";
  check.checked = tarefa.concluida;
  check.addEventListener("click", function () {
    tarefa.alterarStatus();
    carregarDados();
  });
  // span - texto
  const texto = document.createElement("span");
  texto.innerText = tarefa.descricao;
  if (tarefa.concluida) {
    texto.classList.add("concluido");
  } else {
    texto.classList.remove("concluido");
  }
  // li - novo item
  const item = document.createElement("li");
  item.append(check);
  item.append(texto);
  return item;
}

function limparTarefas() {
  tarefas.splice(0, tarefas.length);
  carregarDados();
}

function removerElementos() {
  const listaUl = document.querySelector(".lista ul");
  while (listaUl.firstChild) {
    listaUl.removeChild(listaUl.lastChild);
  }
}
