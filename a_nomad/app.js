const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');

console.log(loginForm);
console.log(loginInput.value);
function onLoginButtonClick() {
    console.log('value:', loginInput.value);
}

function onLoginSubmit(event) {
    event.preventDefault();
    console.log('value:', loginInput.value);
    console.log(loginInput.value);
  }
  
loginForm.addEventListener('submit', onLoginSubmit);

// loginButton.addEventListener('submit', onLoginButtonClick)


// const loginForm = document.querySelector("#login-form")
// const loginInput = document.querySelector("#login-form input")
// const greeting = document.querySelector("#greeting")

// const HIDDEN_CLASSNAME = "hidden"
// const USERNAME_KEY = "userName"

// function onLoginSubmit(event) {
//   event.preventDefault()
//   loginForm.classList.add(HIDDEN_CLASSNAME)
//   const userName = loginInput.value
//   localStorage.setItem(USERNAME_KEY, userName)
//   paintGreetings(userName)
// }

// function paintGreetings(username) {
//   greeting.innerHTML = "hello " + username
//   greeting.classList.remove(HIDDEN_CLASSNAME)
// }

// const savedUserName = localStorage.getItem(USERNAME_KEY)

// if (savedUserName === null) {
//   // show the form 유저정보가 없는 경우
//   loginForm.classList.remove(HIDDEN_CLASSNAME) // 로그인 화면을 보여줌
//   loginForm.addEventListener("submit", onLoginSubmit) // 유저정보를 받는 이벤트
// } else {
//   // show the greetings 유저정보가 있는 경우
//   paintGreetings(savedUserName) // 환영 화면을 보여줌
// }