
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');

//const todos = [];
let todos = [];

function deleteTodo (event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    //span.innerText = newTodo;
    const button = document.createElement('button');
    button.innerText = "❌";
    button.addEventListener('click',deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}


function todoHandleSubmit(event) {
    event.preventDefault(todoInput.value);
    const newTodo = todoInput.value;
    todoInput.value = '';
    const newTodoObj = {
        id: Date.now(),
        text: newTodo,
    };
    
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    localStorage.setItem('todos', JSON.stringify(todos));

}

const loadedTodos = localStorage.getItem('todos');
if (loadedTodos !== null) {
    const parsedTodos = JSON.parse(loadedTodos);
    parsedTodos.forEach(ele=> {
        console.log('hello', ele)
    });
    parsedTodos.forEach(paintTodo);

}



todoForm.addEventListener('submit', todoHandleSubmit);
