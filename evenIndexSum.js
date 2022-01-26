// juftli indekslar yig'indisi
//          0, 1, 2, 3, 4, 5, 6, 7
let nums = [1, 2, 3, 4, 5, 6, 7, 8];

// without methods

function sumEvnIdx(a) {
  let total = 0;
  for (let i in a) {
    if (i % 2 == 0) {
      total += Number(i)
    }
  }
  return total;
}

console.log(sumEvnIdx(nums));
