

const images = ['0.jpeg', '1.jpeg'];

rand_int = (Math.floor(Math.random() * images.length));


const bgImage = document.createElement("img");
const chosenImage = images[rand_int];

console.log(chosenImage);

bgImage.src= `img/${chosenImage}`;

console.log(bgImage.src);

document.body.appendChild(bgImage);
