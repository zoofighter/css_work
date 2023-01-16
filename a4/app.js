

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input") 
const greeting = document.querySelector("#greeting") 

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// const loginButton = document.querySelector("#login-form button") 

const link = document.querySelector("a");


function onLoingBtnClick() {
    // console.log("click")
  console.log("hello", loginInput.value)
  const username = loginInput.value

  // if (username === "") {
  //   alert("pleese write you anme");
  // } else if (username.lenghh < 15) {
  //   console.log("click")
  //   alert("username is too long ");
  // }
  console.log("click2")
}


function onLoginSubmit(tomato) {
  // console.log("click")
  tomato.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  loginForm.classList.add("hidden")
  console.log(loginInput.value)
  //greeting.innerText = "hello " + username;
  greeting.innerText = `Hello " ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);

//   const username = loginInput.value
//   console.log(username)
  }


function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event)

  alert("clicked")
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem("username");

if(savedUsername === null) {
  // show the form 
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit", onLoginSubmit)
  console.log(savedUsername);

} else {
  greeting.classList.remove(HIDDEN_CLASSNAME)
  greeting.innerText = `Hello " ${username}`;
}



// link.addEventListener("click", handleLinkClick);


//onLoginSubmit({infomation})

// onLoginSubmit()  browser see (info ))_  




//loginButton.addEventListener("click", onLoingBtnClick);

//console.log(loginInput)

