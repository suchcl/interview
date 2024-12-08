const nums = [3,2,2,3]
const val = 2;
function removeElement(nums, val){
    const tempArr = [];
    nums.forEach(item => {
        if(item !== val){
            tempArr.push(item);
        }
    });
    return tempArr.length;
}

// removeElement(nums, val)
console.log('%c [ removeElement(nums, val) ]-14', 'font-size:13px; background:pink; color:#bf2c9f;', removeElement(nums, val))

function remove(nums, val){
    let cur = 0;
    nums.forEach(item => {
        if(item !== val){
            cur++;
        }
    });
    return cur;
}
console.log('%c [ remove(nums, 2) ]-26', 'font-size:13px; background:pink; color:#bf2c9f;', remove(nums, 2))

function removeDul(nums){
    let n = 0;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] != nums[n]){
            nums[++n] = nums[i];
        }
    }
    return n + 1;
}
const nums2 = [1,1,2];
console.log('%c [ removeDul(nums2) ]-38', 'font-size:13px; background:pink; color:#bf2c9f;', removeDul(nums2))

function removeDulp(nums){
    const set = new Set(nums);

    const newARr = [...set]
    console.log('%c [ newARr ]-43', 'font-size:13px; background:pink; color:#bf2c9f;', newARr)
    return set.size;
}

console.log('%c [ removeDulp(nums2) ]-44', 'font-size:13px; background:pink; color:#bf2c9f;', removeDulp(nums2))