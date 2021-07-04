var plusOne = function(digits) {
    let lastIndex = digits.length - 1
    digits[lastIndex] += 1
    return digits
};
console.log(
    plusOne(
        [9]
    )
);