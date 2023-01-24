var a = [ "Hydrogen", "Helium", "Lithium", "Beryl­lium" ];
var a2 = a.map(function(s){ return s.length });
console.log(a.map( s => s.length ));
console.log(a2);

console.log([...Array(40)].map(e=>~~(Math.random()*40)));

//array & list 

var arr = [1, 2];
arr.forEach(ele => {
  console.log(ele);
});


[1,2,3,4,5].filter(function(x){ return x < 4; }).map(function(x) { return 'foo ' + x; });

[...(function*() { for(let x of [1,2,3,4,5,6]) if(x%2 == 0) yield x;})()]

// 090 배열의 특정 요소 위치 확인하기(indexOf) // 088 배열 특정 위치의 요소 추출하기(slice) // 089 배열 인덱스로 특정 요소 수정하기(splice)
//https://tocomo.tistory.com/31
lotto = [1, 2, 4]; lotto.indexOf(-1)
lotto.splice(-2, 2, 91, 99); lotto
lotto = [1, 2, 4]; 
lotto.slice(2, 6)

const capitals = `Prague, Czech Republic
Copenhagen,Denmark
Paris,France,
Madrid,Spain
Rome,Italy`

capitals.split('\n').forEach(s => {
    const capital = s.split(',')[0];
    const country = s.split(',')[1];
    console.log(`${capital} is in ${country}`);
})

datas = [ 
	{ id: 1, type: "ko", name: '비빔밥', price : '8,000' },  { id: 2, type: "ko", name: "삼계탕", price : "12,000" },  { id: 3, type: "ko", name: "김치찌개", price : "8,500" },  { id: 4, type: "ko", name: "라볶이", price : "5,000" },  { id: 5, type: "ch", name: "짜장면", price : "8,000" },  { id: 6, type: "ch", name: "탕수육", price : "17,000" },  { id: 7, type: "ch", name: "짬뽕", price : "8,500" },  { id: 8, type: "jp", name: "라멘", price : "9,000" }, 
    { id: 9, type: "jp", name: "스시", price : "14,900" },  { id: 10, type: "jp", name: "우동", price : "8,000" },  { id: 11, type: "jp", name: "나가사키 짬뽕", price : "7,500" } 
];


datas.filter(el => el.name.includes('비빔밥'));
const res = datas.some(el => el.price === '8,000');
datas.reduce((acc, el) => (
	{ ...acc, [el.price]: (acc[el.price] || 0) + 1 }
),{});

//set([np.random.randint(1, 12) for k in range(6)])



//dictionary  & map


map = new Map()
map.set('one', 1)
map.set('two', 2)
map.keys()
map.values()
map.entries()
for (let key of map.keys()) {
  console.log(key)
}

for (let value of map.values()) {console.log(value)}  
for (let [key, value] of map.entries()) {
  console.log(`키는 ${key}, 값은 ${value} 입니다`)}
for (let [key, value] of map) {console.log(`키는 ${key}, 값은 ${value} 입니다`)}
map.forEach((value, key) => {console.log(`키는 ${key}, 값은 ${value} 입니다`)})

dialogue = ['a' ,'b'];
console.log(dialogue.join('.\n'));


coworkers = ['egoing','leezche','duru','taeho']; i = 0;
while(i < coworkers.length) {
    console.log('<li><a href="http://a.com/'+coworkers[i]+'">'+coworkers[i]+'</a></li>');
    i = i + 1;
}


str = "hello"

for (const item of str) {
  console.log(item)
}

const iter = str[Symbol.iterator]()
console.log(iter.next())


// 069 문자열 자르기 ②(substring)
// 070 문자열 자르기 ③(substr)
// 071 문자열 길이 구하기(length)
// 072 문자열로 변환하기(toString)
// 073 두 개의 문자열 하나로 합치기(concat)
// 074 특정 위치의 문자 반환하기(charAt)
// 075 특정 문자열 위치 확인하기 ①(indexOf)
// 076 특정 문자열 위치 확인하기 ②(lastIndexOf)
// 077 특정 문자열 포함 여부 확인하기(includes)

// dice_list = []
// for i in range(100):
//     dice_list.append(np.random.randint(1, 7) + np.random.randint(1,7))
function myDices(num){
    dices = []
    for (let i = 0; i < num; i++) {
        dice = Math.trunc(Math.random() * 6) + 1;
        dices.push(dice);
    }
    return dices
}
d1 = myDices(100);d2 = myDices(100)
sum_of_dices = d1.map( (val, i) => val + d2[i] );
sum = 0

[...Array(40)].map(e=>~~(Math.random()*40))
Array.from({length: 10}, () => Math.floor(Math.random() * 40));

