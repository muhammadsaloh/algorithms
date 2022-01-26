const first = [1, 2, 3, 4];
const second = [3, 4, 5, 6];

function intersection(a, b) {
  let result = [];
  for (let i in a) {
    for(let j in b) {
      if(b[j] === a[i]) {
        result.push(a[i])
      }
    }
  }
  return result;
}

console.log(intersection(first, second));
