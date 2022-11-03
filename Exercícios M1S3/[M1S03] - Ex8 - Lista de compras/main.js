console.log("MSS03 | Ex 8")

let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter')


// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', buscarItems);

// Adiciona item
function addItem(e) {
e.preventDefault();
// Pega o valor do <input>
let newItem = document.getElementById('item').value;
// Cria novo elemento <li>
let li = document.createElement('li');
// Adiciona classe
li.className = 'list-group-item';
// Adiciona o texto no novo elemento com o valor armazenado no newItem
li.appendChild(document.createTextNode(newItem));
// Cria o elemento botão para deletar um item
let deleteBtn = document.createElement('button');
// Adiciona classes para o botão de deletar
deleteBtn.className = 'btn btn-danger btn- float-end delete';
// Acrescenta o texto no novo elemento
deleteBtn.appendChild(document.createTextNode('x'));
// Acrescenta o botão no elemento li
li.appendChild(deleteBtn);
itemList.appendChild(li); // Adiciona o novo item na lista
form.reset(); // Limpa o formulário
}



// Função Remove Item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
  let li = e.target.parentElement;
  itemList.removeChild(li);
  }
  }

