const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');
const greeting = document.querySelector('#greeting');
const link = document.querySelector('a');

const USERNAME_KEY = 'userkey';

console.log(loginForm);
console.log(loginInput.value);
function onLoginButtonClick() {
    console.log('value:', loginInput.value);
}

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add('hidden');
    console.log('value:', loginInput.value);
    const username = loginInput.value
    localStorage.setItem('USERNAME_KEY',username);
    greeting.innerText = `hello ${username}`
    greeting.classList.remove('hidden');

    //constloginInput.value);
  }
  
const savedUserName = localStorage.getItem('USERNAME_KEY');
console.log(savedUserName);
console.log("aa");



if (savedUserName === null) {
  loginForm.classList.remove('hidden');
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  console.log("bb");
  loginForm.classList.add('hidden');
  greeting.innerText = `Hello ${savedUserName}`;
  greeting.classList.remove('hidden');
}

//loginForm.addEventListener('submit', onLoginSubmit);



// function handleLinkClick(event) {
//   console.log(event)
//   alert("clicked!");
// }

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
//   // show the form ??????????????? ?????? ??????
//   loginForm.classList.remove(HIDDEN_CLASSNAME) // ????????? ????????? ?????????
//   loginForm.addEventListener("submit", onLoginSubmit) // ??????????????? ?????? ?????????
// } else {
//   // show the greetings ??????????????? ?????? ??????
//   paintGreetings(savedUserName) // ?????? ????????? ?????????
// }