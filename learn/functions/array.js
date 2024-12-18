const arr = [2, 3, 1, 2, 2, 3, 4, 4, 5];
const set = new Set(arr);
console.log('%c [ set ]-3', 'font-size:13px; background:pink; color:#bf2c9f;', set)
const uniqueArr = [...new Set(arr)];
console.log('%c [ 去重后的数组 ]-5', 'font-size:13px; background:pink; color:#bf2c9f;', uniqueArr)



const arr2 = [2, 3, 1, 2, 2, 3, 4, 4, 5];
function removalDuplicate(arr){
    const targetArr = [];
    for(let i = 0; i < arr.length; i++){
        if(targetArr.indexOf(arr[i]) === -1){
            targetArr.push(arr[i]);
        }
    }
    return targetArr;
}
removalDuplicate(arr2)
console.log('%c [ 通过for循环和indexOf来实现去重 (arr2) ]-20', 'font-size:13px; background:pink; color:#bf2c9f;', removalDuplicate(arr2))

const arr3 = [2, 3, 1, 2, 2, 3, 4, 4, 5];

function removeDup(arr){
    const targetArr = [];
    arr.forEach(item => {
        if(!targetArr.includes(item)){
            targetArr.push(item);
        }
    });
    return targetArr;
}
console.log('%c [ 通过forEach和includes实现数组去重 (arr3) ]-34', 'font-size:13px; background:pink; color:#bf2c9f;', removeDup(arr3))


const arr5 = [2, 3, 1, 2, 2, 3, 4, 4, 5];

function removeDupByKey(arr){
    const tempObj = {};
    const targetArr = [];
    arr.forEach(item => {
        if(!tempObj[item]){
            tempObj[item] = true;
            targetArr.push(item);
        }
    });
    return targetArr;
}

console.log('%c [ 通过对象属性名的判断方式实现数组去重 (arr5) ]-50', 'font-size:13px; background:pink; color:#bf2c9f;', removeDupByKey(arr5))