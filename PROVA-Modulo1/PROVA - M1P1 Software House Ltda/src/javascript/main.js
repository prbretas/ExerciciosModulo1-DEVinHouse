console.log("PROJETO 1 - DEVINHOUSE - EDP");
console.log("Aluno: Philippe Rocca Bretas");

let divQuickTips = document.getElementById("divQuickTips");
let formulario = document.getElementById("formulario");

/* //função para salvar formulario
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("salvou o formulario");
  const novadiv = document.createElement('div')
  novadiv.style.width = '300x'
  novadiv.style.height = '300x'
  novadiv.style.backgroundColor = 'red'
  console.log('criou uma div')

});


 */

//----------------FORMULARIO CARDS----------------------------------

const save_tip_btn = document.getElementById("save-btn");
const clear_form_btn = document.getElementById("clear-form-btn");

//FUNÇÕES - FORMULÁRIO

const createQuickTip = formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("salvou o formulario");

  const CardQuickTip = document.createElement("div");
  CardQuickTip.className = 'Card-QuickTip'

  console.log("criou uma div");

  divQuickTips.appendChild(CardQuickTip);
  divQuickTips.style.display = "flex";
  divQuickTips.style.flexWrap = "wrap";









  const Title = document.getElementById("input-titulo").value;
  const Language = document.getElementById("linguagem").value;
  const Category = document.getElementById("categoria").value;
  const Description = document.getElementById("descricao").value;
  const Youtube = document.getElementById("url-video").value;


CardQuickTip.innerText = Title
CardQuickTip.innerText = Language
CardQuickTip.innerText = Category
CardQuickTip.innerText = Description
CardQuickTip.innerText = Youtube


/* 
CardQuickTip.innerHTML = `<h3>Titulo Card</h3>
<p>
    <strong>Linguagem / Skill: </strong> CSS
</p>

<p><strong>Categoria: </strong> Front-end</p>

<p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Exercitationem vel nemo quas maxime distinctio. Nobis neque
    exercitationem quam esse fuga, reprehenderit aliquam asperiores.
    Et iste ipsum dolorem inventore tenetur ab.
</p>
<div id="div-card-btn">
    <button id="card-delete">🗑️</button>
    <button id="card-edit">📝</button>
    <button id="card-video">📹</button>
</div>` */







  console.log(Title);
  console.log(Language);
  console.log(Category);
  console.log(Description);
  console.log(Youtube);

  // novaDiv.appendChild(Title)
  // novaDiv.appendChild(Language)
  // novaDiv.appendChild(Category)
  // novaDiv.appendChild(Description)
  // novaDiv.appendChild(Youtube)

  // localStorage.setItem(divQuickTips)
alert('O Card foi criado com sucesso!')
}
);

/* 




function createItemElement(item) {
  return li;
}




const ulQuickTips = document.getElementById("ulQuickTips");

const li = document.createElement("li");
const title = document.createElement("h3");
const category = document.createElement("p");
const description = document.createElement("p");
title.innerText = li.title;

category.innerHTML = `<strong>Category:</strong> Doces`;
description.innerHTML = `<strong>Descrição: </strong> Lorem`;
li.innerText = "Testando!";
li.appendChild(category);
li.appendChild(description);

ulQuickTips.appendChild(li);
 */
/* const clearForm = () => {
  clear_form_btn.reset();
  console.log("limpou card");
};
 */
//---------------- FORMULARIO SEARCH TIPS--------------------------------
const searchForm = document.getElementById("search-form");
const search_btn = document.getElementById("search-btn");
const clear_search_btn = document.getElementById("clear-search-btn");

// FUNÇÃO PROCURAR DICA

const SearchTip = searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("pesquisou Cards");
});

//-------------------------CARDS TIPS-----------------------------------------------------

const card_delete = document.getElementById("card-delete");
const card_edit = document.getElementById("card-edit");
const card_video = document.getElementById("card-video");

//FUNÇÃO CARDS QUICK TIPS
const DeleteTip = () => {};
const EditTip = () => {};
const VideoTip = () => {};
