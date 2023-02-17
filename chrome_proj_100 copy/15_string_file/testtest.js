s = "Test abc test test abc test test test abc test test abc";
s = s.replace('abc', 'ddd');
console.log(s);
console.log(s.split('abc').join('ddd'));
//https://stackoverflow.com/questions/1144783/how-do-i-replace-all-occurrences-of-a-string-in-javascript