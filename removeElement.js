var removeElement = function(nums, val) {
    let count = 0
    for(let i of nums){
        if(i !== val) {
            nums[count++] = nums[i]
        }
    }
    return count
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2))