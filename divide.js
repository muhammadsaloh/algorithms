var divide = function (dividend, divisor) {
  let result = parseInt(dividend / divisor);
  return result > 2147483647 ? result - 1 : result;
};

console.log(
  divide(-2147483648,
-1)
)
