//#https://stackoverflow.com/questions/9329446/loop-for-each-over-an-array-in-javascript
//https://stackoverflow.com/questions/33468028/lotto-generator-javascript
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for...of
for (const num of nums) {
    console.log(num);
  /* Do something with num */
}

nums.forEach(num => {
    console.log("this is num:", num);
})

const arr = Array(50).fill(0).map((_, i) => i);
const DRAW = 7;

const rand = (from, to) => Math.floor(Math.random() * (to - from + 1)) + from;

for (let i = 0; i < DRAW; ++i) {
  const r = rand(i, arr.length - 1);
  [arr[r], arr[i]] = [arr[i], arr[r]];
}

const selected = arr.slice(0, DRAW);
console.log(selected);