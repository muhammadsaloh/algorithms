var removeDuplicates = function (nums) {
  let obj = {};
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = true;
  }
  for (let i in obj) {
    arr.push(i);
  }
  return arr
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// [0, 1, 2, 3, 4, _, _, _, _, _];
