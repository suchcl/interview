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