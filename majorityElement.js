/* 
    Given an array nums of size n, return the majority element.

    The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/

function majorityElement(nums) {
    let majority = nums[0];
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            majority = nums[i];
        }
        if (nums[i] === majority) {
            count++;
        } else {
            count--;
        }
        // console.log(count);
    }
    return majority;
}
console.log(
    majorityElement([33, 22, 22, 33, 'a', 33, 22])
);
