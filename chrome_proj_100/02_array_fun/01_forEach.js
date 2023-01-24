//#https://stackoverflow.com/questions/9329446/loop-for-each-over-an-array-in-javascript

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for...of
for (const num of nums) {
    console.log(num);
  /* Do something with num */
}

nums.forEach(num => {
    console.log("this is num:", num);
})

//map  like list comprehension
// Important: As map() is meant to return a value at each iteration, it is an ideal method for transforming elements in arrays:
console.log(nums.map(num => "cool:" + num));


//with index
const arr = Array(50).fill(0).map((_, i) => i);
num_x = nums.map((num, i) => i + "num" + num);
console.log(nums.forEach((num, i) => i + "num" + num));
console.log(num_x);

