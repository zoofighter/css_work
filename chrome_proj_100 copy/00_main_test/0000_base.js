
//https://wickies.tistory.com/75
const print=x => console.log(x);

var s = 'john smith~123 Street~Apt 4~New York~NY~12345';
var fields = s.split(/~/);
var name = fields[0];
var street = fields[1];

console.log(name);
console.log(street);