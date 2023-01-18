todos = [1, 2, 3, 4, 5,];

function hotFilter(item) {return item !== 3}
console.log(todos.filter(hotFilter));
todos.filter(hotFilter);


todos = todos.filter((x) => x > 3);
console.log(todos);