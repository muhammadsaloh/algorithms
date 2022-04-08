class Solution {
  solve(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      let cur = str[i];
      let next = str[i + 1];
      if (cur !== next) {
        result += cur;
      }
    }
    return result;
  }
}

let solution = new Solution();

console.log(solution.solve("aaaaaabbbccccaaaaddf"));
