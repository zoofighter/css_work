

const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "The world is a book and those who do not travel read only one page.",
    author: "Saint Augustine",
  }
]


const quote = document.querySelector('#qoutes span:first-child');
const author = document.querySelector('#qoutes span:last-child');
rand_int = (Math.floor(Math.random() * quotes.length));
console.log(quotes[rand_int]);
todayQuotes = quotes[rand_int];
quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;
