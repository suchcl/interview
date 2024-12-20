// let nums1 = [1, 2, 3, 0, 0, 0], m = 3;
// let nums2 = [2, 5, 6], n = 3;
// // 数组合并
// function merge(arr1, m, arr2, n) {
//     let i = m - 1;
//     let j = n - 1;
//     let k = m + n -1;
//     while(j >= 0){
//         if(i>=0 && arr1[i] > arr2[j]){
//             arr1[k--] = arr1[i--];
//         }else {
//             arr1[k--] = arr2[j--];
//         }
//     }
// }

// merge(nums1, 3, nums2, 3);
// console.log('%c [ nums1 ]-17', 'font-size:13px; background:pink; color:#bf2c9f;', nums1)


function solution(cards){
    let result = 0;
    for(let i = 0; i < cards.length; i++){
        result = result ^ cards[i];
    }
    return result;
}

function main(){
    const r1 = solution([1, 1, 2, 2, 3, 3, 4, 5, 5]);
    console.log('%c [ r1 ]-31', 'font-size:13px; background:pink; color:#bf2c9f;', r1);
    const r2 = solution([0, 1, 0, 1, 2]);
    console.log('%c [ r2 ]-33', 'font-size:13px; background:pink; color:#bf2c9f;', r2);
}
main();