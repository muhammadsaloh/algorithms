var isPowerOfTwo = function (n) {
  if (-2147483648 <= n <= 2147483647) return n != 0 && !(n & (n - 1));
  return false
};
