//#https://stackoverflow.com/questions/9329446/loop-for-each-over-an-array-in-javascript
//https://stackoverflow.com/questions/33468028/lotto-generator-javascript
//https://wickies.tistory.com/75
const print=x => console.log(x);
const arr = Array(50).fill(0).map((_, i) => i);

array_1 = [];
array_2 = [];

for (var i = 0; i < 100; i++) {
  rnum1 = Math.floor(Math.random() * 6 + 1);
  rnum2 = Math.floor(Math.random() * 6 + 1);
  array_1.push(rnum1);
  array_2.push(rnum2);
  //print(array_1)
}
print(array_1)


array_bb = [array_1, array_2].reduce((a, b) => a.map((v, i) => v  + b[i]));
print(array_bb)

const counts = {};
for (const num of array_bb) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log(counts);


const occurrences = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].reduce(function (acc, curr) {
  return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
}, {});
console.log(occurrences) 


//https://stackoverflow.com/questions/51660428/elementwise-concatenation-of-string-arrays
//https://stackoverflow.com/questions/5667888/counting-the-occurrences-frequency-of-array-elements

//for (var k = 0; k < 10; k++) {
//  console.log(k);
//};

