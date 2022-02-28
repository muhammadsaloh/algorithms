const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let result = maxSubArray(nums)
console.log(result)

function maxSubArray (nums) {
  let prev = 0
  let max = -Infinity

  for(let i = 0; i < nums.length; i++) {
    prev = Math.max(prev +nums[i], nums[i])

    max = Math.max(max, prev)
  }
  return max
}

// Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// Output: 6;