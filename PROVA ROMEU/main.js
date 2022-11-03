const form = document.getElementById("form-recipe");

const ulRecipes = document.getElementById("recipes");




const inTitle = document.getElementById("in-title");
const inCategory = document.getElementById("in-category");
const inDescription = document.getElementById("in-description");
const inLink = document.getElementById("in-link");

const inSearch = document.getElementById("in-search");
const btnSearch = document.getElementById("btn-search");
const btnClearSearch = document.getElementById("btn-clear-search");

const nDoces = document.getElementById("n-doces");
const nSalgados = document.getElementById("n-salgados");

/*************************/

// CRIA VETOR DE CONTROLE
let recipesList = [];

//CONTROLA ESTADO DE EDIÇÃO DO FORM
let editingItemId = null;

// ***************** FUNÇÂO SALVAR LISTA ***************

function saveList() {
  const recipesJson = JSON.stringify(recipesList);
  localStorage.setItem("recipes", recipesJson);
}

// ***************** FUNÇÂO CARREGAR LISTA ***********
function recoverList() {
  const recipesJson = localStorage.getItem("recipes");
  if (recipesJson) {
    recipesList = JSON.parse(recipesJson);
  }
  updateScreen(recipesList);
}

// ***************** FUNÇÂO CRIAR CARD ***************
function createItem() {
  if (editingItemId) {

    //SALVA ITEM SENDO EDITADO
    const item = recipesList.find((item) => item.id === editingItemId);

    item.title = inTitle.value;
    item.category = inCategory.value;
    item.description = inDescription.value;
    item.link = inLink.value;

    editingItemId = null;
    alert("Card alterado com sucesso!");
  } else {
    //CRIA NOVO CARD
    const newItem = {
      id: Date.now(),
      title: inTitle.value,
      category: inCategory.value,
      description: inDescription.value,
      link: inLink.value,
    };

    recipesList.push(newItem);
    alert("Card cadastrado com sucesso!");
  }
  form.reset();
  updateScreen(recipesList);
  saveList();
}

function editItem(itemToEdit) {
  const { title, category, description, link } = itemToEdit;

  inTitle.value = title;
  inCategory.value = category;
  inDescription.value = description;
  inLink.value = link;

  editingItemId = itemToEdit.id;
}

function removeItem(itemId) {
  const response = confirm("Deseja realmente excluir o card?");

  if (response) {
    recipesList = recipesList.filter((item) => item.id !== itemId);

    updateScreen(recipesList);
    saveList();
  }
}

//CRIA ELEMENTO HTML DO ITEM

function createItemElement(item) {
  const li = document.createElement("li");

  li.innerHTML = `
  
     <h3>${item.title}</h3>
    <p><strong>Categoria:</strong> ${item.category}</p>

      <p><strong>Descrição:</strong> 
      ${item.description}</p>


      <button class="remove">Remover</button>
      <button class="edit">Editar</button>

      ${item.link ? `<button class="link">Link</button> ` : ""}
  `;

  li.querySelector("button.remove").addEventListener("click", () => {
    console.log("REMOVE", item.id);
    removeItem(item.id);
  });

  li.querySelector("button.edit").addEventListener("click", () => {
    console.log("EDITA", item);
    editItem(item);
  });

  const btnLink = li.querySelector("button.link");

  if (btnLink) {
    btnLink.addEventListener("click", () => {
      window.open(item.link, "_blank").focus();
    });
  }
  return li;
}

// FUNÇÂO UPDATE CATEGORY

function updateCategories() {
  const totalDoces = recipesList.reduce((acc, item) => {
    if (item.category === "Doces") {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  const totalSalgados = recipesList.reduce((acc, item) => {
    if (item.category === "Salgados") {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  nDoces.innerText = totalDoces;
  nSalgados.innerText = totalSalgados;
}

// ATUALIZA HTML DA LISTA

function updateScreen(list) {
  ulRecipes.innerHTML = "";
  list.forEach((item) => {
    const el = createItemElement(item);
    ulRecipes.appendChild(el);
  });
  updateCategories();
}

form.addEventListener("submit", (event) => {
  //evita o comportamento padrão do navegador
  event.preventDefault();
  //chama função de criação do novo Item
  createItem();
});

form.addEventListener("reset", (event) => {
  editingItemId = null;
});

btnSearch.addEventListener("click", () => {
  const filteredList = recipesList.filter((item) =>
    item.title.toLocaleLowerCase().includes(inSearch.value.toLocaleLowerCase())
  );
  updateScreen(filteredList);
});

btnClearSearch.addEventListener("click", () => {
  inSearch.value = "";
  updateScreen(recipesList);
});

recoverList();
