
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');

function paintTodo(newTodo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    button.innerText = "❌";
    span.innerText = newTodo;
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}


function todoHandleSubmit(event) {
    event.preventDefault(todoInput.value);
    console.log(todoInput.value);
    newTodo = todoInput.value;
    todoInput.value = '';
    paintTodo(newTodo);

}

todoForm.addEventListener('submit', todoHandleSubmit);
