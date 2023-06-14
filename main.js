let form = document.querySelector('#addForm');
let itemsList = document.querySelector('#items');
let filter = document.querySelector('#filter');

form.addEventListener('submit', addItem);
itemsList.addEventListener('click', removeItem);
filter.addEventListener("keyup", filterItems);

// Добавление новой задачи 
function addItem(e) {
    e.preventDefault();

    let newItemInput = document.querySelector('#newItemText');
    let newItemText = newItemInput.value;

    let newElement = document.createElement("li");
    newElement.className = "list-group-item";
    let newTextNode = document.createTextNode(newItemText);
    newElement.appendChild(newTextNode);

    let deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Удалить"));
    deleteBtn.className = 'btn btn-light btn-sm float-right';
    deleteBtn.dataset.action = 'delete';

    newElement.appendChild(deleteBtn);
    console.log(newElement);

    itemsList.prepend(newElement);

    newItemInput.value = '';

}
// Удаление задачи
function removeItem(e) {
    if (e.target.hasAttribute("data-action") && e.target.getAttribute("data-action") == "delete") {
        if (confirm("Удалить задачу?")) {
            e.target.parentNode.remove();
        }
    }
}
// Фильтрация списка
function filterItems(e) {
    let searchedText = e.target.value.toLowerCase();

    let items = itemsList.querySelectorAll('li');
    items.forEach(function(item) {
        let itemText = item.firstChild.textContent.toLowerCase();
        if (itemText.indexOf(searchedText) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}
