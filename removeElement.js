var removeElement = function(nums, val) {
    let arr = []
    for(let i of nums){
        if(i == val) {
            arr.unshift(i)
            arr.push('_')
        }
    }
    return val
};

console.log(removeElement([3, 2, 2, 3], 3));


// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]