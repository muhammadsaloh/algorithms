//Palindrome

class Solution {
  solve(s) {
    if (s.length < 1) {
      return true;
    } else {
      let str = "";
      for (let i = s.length - 1; i >= 0; i--) {
        str += s[i];
      }
      return s === str;
    }
  }
}


