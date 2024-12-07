let nums1 = [1, 2, 3, 0, 0, 0], m = 3;
let nums2 = [2, 5, 6], n = 3;
function merge(arr1, m, arr2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n -1;
    while(j >= 0){
        if(i>=0 && arr1[i] > arr2[j]){
            arr1[k--] = arr1[i--];
        }else {
            arr1[k--] = arr2[j--];
        }
    }
}

merge(nums1, 3, nums2, 3);
console.log('%c [ nums1 ]-17', 'font-size:13px; background:pink; color:#bf2c9f;', nums1)
