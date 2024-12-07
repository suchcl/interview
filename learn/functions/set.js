// 创建一个空的set
const set = new Set();
set.add(10);

// 通过一个已存在的数组初始化一个Set
const setWithArr = new Set([1, 2, 3, 4, 5]);
setWithArr.delete(2);
console.log('%c [ setWithArr ]-8', 'font-size:13px; background:pink; color:#bf2c9f;', setWithArr)

if(setWithArr.has(4)){
    console.log('%c [  ]-12', 'font-size:13px; background:pink; color:#bf2c9f;', "1111")
}else {
    console.log('%c [  ]-14', 'font-size:13px; background:pink; color:#bf2c9f;', "22222")
}

setWithArr.clear();
console.log('%c [ setWithArr ]-17', 'font-size:13px; background:pink; color:#bf2c9f;', setWithArr)

const obj = {
    name: "Nichoalas Zakas",
    age: 12
};

console.log('%c [  ]-24', 'font-size:13px; background:pink; color:#bf2c9f;', obj.keys)

const colors = ["red", "blue", "green", "orange"];
const colorsSet = new Set(colors);
for(let color of colorsSet.keys()){
    console.log('%c [ color ]-25', 'font-size:13px; background:pink; color:#bf2c9f;', color)
}