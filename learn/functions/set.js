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


const colors = ["red", "blue", "green", "orange"];
const colorsSet = new Set(colors);
for(let color of colorsSet.keys()){
    console.log('%c [ color ]-25', 'font-size:13px; background:pink; color:#bf2c9f;', color)
}

console.log('%c [  ]-26', 'font-size:13px; background:pink; color:#bf2c9f;', colorsSet.keys())
console.log('%c [  ]-28', 'font-size:13px; background:pink; color:#bf2c9f;', colorsSet.values())

for(let color of colorsSet.values()){
    console.log('%c [ color ]-30', 'font-size:13px; background:pink; color:#bf2c9f;', color)
}

for(let color of colorsSet.entries()){
    console.log('%c [ color ]-34', 'font-size:13px; background:pink; color:#bf2c9f;', color);
}

for(let color of colorsSet){
    console.log('%c [ color ]-38', 'font-size:13px; background:pink; color:#bf2c9f;', color);
}

colorsSet.forEach((value,key) => {
    console.log('%c [ key ]-42', 'font-size:13px; background:pink; color:#bf2c9f;', key)
    console.log('%c [ value ]-43', 'font-size:13px; background:pink; color:#bf2c9f;', value)
});