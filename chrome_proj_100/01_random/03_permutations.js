


//https://wickies.tistory.com/75
const print=x => console.log(x);



var inputArray = ["p", "c", "w", "h"];

//var inputArray = [1, 2, 3];

var result = inputArray.reduce(function permute(res, item, key, arr) {
    return res.concat(arr.length > 1 && arr.slice(0, key)
        .concat(arr.slice(key + 1))
        .reduce(permute, [])
        .map(function (perm) {
            return [item].concat(perm);
        }) || item);
}, []);




//alert(JSON.stringify(result));
  printJSON.stringify(result));


//https://stackoverflow.com/questions/9960908/permutations-in-javascript