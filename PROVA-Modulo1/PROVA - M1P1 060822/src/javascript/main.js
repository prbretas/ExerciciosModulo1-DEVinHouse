const form = document.getElementById("formulario");

const cardsList = document.getElementById("cards-list");

const inputTitle = document.getElementById("input-title");
const inputLinguagem = document.getElementById("input-linguagem");
const inputCategory = document.getElementById("input-category");
const inputDescription = document.getElementById("input-description");
const inputLinkVideo = document.getElementById("input-link-video");

const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById('btn-search')
const btnClearSearch = document.getElementById("btn-clear-search");


const TotalCards = document.getElementById('n-total')
const nFrontend = document.getElementById("n-frontend");
const nBackend = document.getElementById("n-backend");
const nFullstack = document.getElementById("n-fullstack");
const nSoftskills = document.getElementById("n-softskills");

/*************************/

// CRIA VETOR DE CONTROLE
let ListaCartoes = [];

//CONTROLA ESTADO DE EDIÇÃO DO FORM
let editingCardId = null;

// ***************** FUNÇÂO SALVAR LISTA ***************

function saveList() {
  const ListaCartoesJson = JSON.stringify(ListaCartoes);
  localStorage.setItem("Cards-List", ListaCartoesJson);
}

// ***************** FUNÇÂO CARREGAR LISTA ***********
function recoverList() {
  const ListaCartoesJson = localStorage.getItem("Cards-List");
  if (ListaCartoesJson) {
    ListaCartoes = JSON.parse(ListaCartoesJson);
  }
  updateScreen(ListaCartoes);
}

// ***************** FUNÇÂO CRIAR CARD ***************
function createCard() {
  if (editingCardId) {
    //SALVA ITEM SENDO EDITADO

    const cardItem = ListaCartoes.find((item) => item.id === editingCardId);

    cardItem.title = inputTitle.value;
    cardItem.linguagem = inputLinguagem.value;
    cardItem.category = inputCategory.value;
    cardItem.description = inputDescription.value;
    cardItem.link = inputLinkVideo.value;

    editingCardId = null;
    alert("Card alterado com sucesso!");
  } else {
    //CRIA NOVO CARD
    const newCard = {
      title: inputTitle.value,
      linguagem: inputLinguagem.value,
      category: inputCategory.value,
      description: inputDescription.value,
      link: inputLinkVideo.value,
    };

    ListaCartoes.push(newCard);
    alert("Card cadastrado com sucesso!");
  }
  form.requestFullscreen();
  updateScreen(ListaCartoes);
  saveList();
}

function editingCardId(cardToEdit) {
  const { title, linguagem, category, description, link } = cardToEdit;

  inputTitle.value = title;
  inputLinguagem.value = linguagem;
  inputCategory.value = category;
  inputDescription.value = description;
  inputLinkVideo.value = link;

  editingCardId = cardToEdit;
}

function removeCard(itemId) {
  const response = confirm("Deseja realmente excluir o card?");

  if (response) {
    ListaCartoes = ListaCartoes.filter((item) => item.id === itemId);

    updateScreen(ListaCartoes);
    saveList();
  }
}

//CRIA ELEMENTO HTML DO ITEM

function createCardElement(item) {
  const li = document.createElement("li");

  li.innerHTML = `
  
  <div>
      <h4>${item.title}</h4>
      <p>
          <strong>Linguagem: </strong> ${item.linguagem}
      </p>

      <p><strong>Categoria: </strong> ${item.category}</p>

      <p><strong>Descrição: </strong> 
      ${item.description} </p>


      <p><strong>Link: </strong> 
      ${item.link} </p>


      ${item.link ? "<button>Link</button>" : ""}

 
  `;

  li.querySelector("button.remove").addEventListener("click", () => {
    console.log("REMOVE", item.id);
    removeCard(item.id);
  });

  li.querySelector("button.edit").addEventListener("click", () => {
    console.log("EDITA", item);
    editingCardId(item);
  });

  const btnLink = li.querySelector("button.link");

  if (btnLink) {
    btnLink.addEventListener("click", () => {
      window.open(item.link, "_blank").focus();
    });
  }
  return li;
}

// FUNÇÃO UPDATE CATEGORY

function updateCategories() {
  const totalFront = ListaCartoes.reduce((acc, item) => {
    if (item.category === "front-end") {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  const totalBack = ListaCartoes.reduce((acc, item) => {
    if (item.category === "back-end") {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  const totalFullStack = ListaCartoes.reduce((acc, item) => {
    if (item.category === "fullstack") {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  const totalSoftSkills = ListaCartoes.reduce((acc, item) => {
    if (item.category === "softskills") {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  nFrontend.innerText = totalFront;
  nBackend.innerText = totalBack;
  nFullstack.innerText = totalFullStack;
  nSoftskills.innerText = totalSoftSkills;
}

// ATUALIZA HTML DA LISTA

function updateScreen(list) {
  cardsList.innerHTML = "";
  list.forEach((item) => {
    const elem = createItemElement(item);
    cardsList.appendChild(elem);
  });
  updateCategories();
}

form.addEventListener("submit", (event) => {
  //evita o comportamento padrão do navegador
  event.preventDefault();
  //chama função de criação do novo Item
  createCard();
});

form.addEventListener("reset", (event) => {
  editingCardId = null;
});

btnSearch.addEventListener("click", () => {
  const filteredList = ListaCartoes.filter((item) =>
    item.title
      .toLocaleLowerCase()
      .includes(inputSearch.value.toLocaleLowerCase())
  );
  updateScreen(filteredList);
});

btnClearSearch.addEventListener("click", () => {
  inputSearch.value = "";
  updateScreen(ListaCartoes);
});

recoverList();
