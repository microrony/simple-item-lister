let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

let addItem = (e) => {
  e.preventDefault();
  let newItem = document.getElementById('item').value;
  let li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));

  let deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));

  li.appendChild(deleteBtn);
  itemList.appendChild(li);
}

let removeItem = (e) => {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

let filterItems = (e) => {
  let text = e.target.value.toLowerCase();
  let items = itemList.getElementsByTagName('li');
  Array.from(items).forEach(item => {
    let itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
};

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);