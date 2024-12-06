const arr = [2, 3, 1, 2, 2, 3, 4, 4, 5];
const set = new Set(arr);
console.log('%c [ set ]-3', 'font-size:13px; background:pink; color:#bf2c9f;', set)
const uniqueArr = [...new Set(arr)];
console.log('%c [ 去重后的数组 ]-5', 'font-size:13px; background:pink; color:#bf2c9f;', uniqueArr)
