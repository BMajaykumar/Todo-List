const storeArray = [
  { name: 'washing clothes', duedate: '2022-07-28' },
  { name: 'cleaning clothes', duedate: '2022-07-29' }
];

const todoList = document.querySelector('.todo-list');

function renderTodoList() {
  todoList.innerHTML = '';
  // This line clears the todoList before rendering new items
  todoList.innerHTML = '';
  storeArray.forEach((todo, index) => {
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    todoItem.innerHTML = `
      <span>${todo.name} - ${todo.duedate}</span>
      <button onclick="removeTodo(${index})">Delete</button>
    `;
    todoList.appendChild(todoItem);
  });
}

function addTodo() {
  const todoNameInput = document.querySelector('.todo-name');
  const todoDateInput = document.querySelector('.todo-date');
  const name = todoNameInput.value.trim();
  const duedate = todoDateInput.value;

  if (name && duedate) {
    storeArray.push({ name, duedate });
    renderTodoList();
    todoNameInput.value = '';
    todoDateInput.value = '';
  } else {
    alert('Please enter a valid todo name and date.');
  }
}

function removeTodo(index) {
  storeArray.splice(index, 1);
  renderTodoList();
}

renderTodoList();