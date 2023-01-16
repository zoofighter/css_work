const toDoForm = document.getElementById("todo-form");
const toDoinput = document.querySelector("#todo-form input"); 
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];


function savaeTodos(){
    localStorage.setItem("TODOS_KEY", JSON.stringify(toDos));
}

function deleteTodo(event) {
    console.log(event);
    console.log(event.target.parentElement);
    const li = event.target.parentElement;
    li.remove();
}
function paintTodo(newTodo){
    console.log("i will ");
    const li = document.createElement("li");
    li.id = newTodo.id; 
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "XX";
    button.addEventListener("click",deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    //console.log(toDoinput.value);
    const newTodo = toDoinput.value;     //<-  ----- copy
    toDoinput.value = "";
    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    //console.log(n ewTodo, toDoinput.value);
    paintTodo(newToDoObj);
    savaeTodos(); 
}

toDoForm.addEventListener("submit", handleTodoSubmit)

function sayHello(item){
    console.log("hello of ", item);
}

const savedToDos = localStorage.getItem("todos");
console.log(savedToDos);
if(savedToDos !== null){
    const parseTodos = JSON.parse(savedToDos);
    //parseTodos.forEach(sayHello);
    parseTodos.forEach(paintTodo);
    console.log(paintTodo'
    
    
    );
}

paintTodo({text:"a", id:1101})