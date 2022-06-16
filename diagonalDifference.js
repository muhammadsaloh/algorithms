const array = [[11, 2, 4,] [4, 5, 6,] [10, 8, -12]];
console.log(diagonalDifference(array));

function diagonalDifference(arr) {
  let arr = [];
  let a = 0;
  let b = 0;
  for (
    let i = 0, j = arr.length - 1;
    i < arr.length, j >= 0;
    i++, j--
  ) {
    a += arr[i][i];
    b += arr[i][j];
  }
  return a > b ? a - b : b - a;
}
