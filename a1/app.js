// event 0107-2030
// search for element


// const title = document.getElementById('title');
const title = document.getElementById('title');



// title.innerText = 'Got you!';

// console.log(title.id); // title
// console.log(title.className); // hello


const hellos  = document.getElementsByClassName('hello');
console.log(hellos);


// const first_hello  = document.querySelectorAll('h1:first-child')
//const first_hello  = document.querySelector('h1:first-child')
// const by_class  = document.querySelector('.hello')
// const by_tag  = document.querySelector('h1')
// const by_id  = document.querySelector('#title')
const by_class_plus  = document.querySelector('div.hello:first-child h1')
// console.log(by_class);
// console.log(by_tag);
// console.log(by_id);
console.log(by_class_plus);

function handleTitleClick() {
    //title.style.color = 'blue'
    console.log(h1.style.color);
    //h1.style.color = "green";
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === 'blue') {
        newColor = 'tomato';
      } else {
        newColor = 'blue';
      }
    h1.style.color = newColor;
    console.log(h1.style.color);
  }

//   const h1  = document.querySelector('.hello:first-child')

//   function handleTActiveClick() {
//     //title.style.color = 'blue'
//     by_class_plus.className = "active";
//     console.log(by_class_plus.className);
//     console.log(by_class_plus.style.color);

//   }

  function handleTActiveClick() {
    const clickedClass = "clicked"
    if(by_class_plus.className === "clickedClass") {
        by_class_plus.className = "";
    } else {
        by_class_plus.className = "clickedClass";
    }

  }

  
 by_class_plus.addEventListener('click', handleTActiveClick);

function handleMouseEnter() {
    title.innerText = 'Mouse is here!';
  }
  
  function handleMouseLeave() {
    title.innerText = 'Mouse is gone!';
  }
  
//   title.addEventListener('mouseenter', handleMouseEnter);
//   title.addEventListener('mouseleave', handleMouseLeave);

  function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
  }
  
  window.addEventListener('resize', handleWindowResize);

  function handleWindowCopy() {
    alert('copier!');
  }
  
  window.addEventListener('copy', handleWindowCopy);


  const h1  = document.querySelector('.hello:first-child')
  const currentColor = h1.style.color;
  console.log("aaa");
  console.log(currentColor);
  let newColor;
  
  if (currentColor === 'red') {
    newColor = 'black';
  } else {
    newColor = 'red';
  }
  
  console.log(currentColor);
  h1.style.color = newColor;