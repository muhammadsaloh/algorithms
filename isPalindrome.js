// var isPalindrome = function (int) {
//     let str = int + ''
//     let reInt = ''
//     for(let c of str){
//         reInt = c + reInt
//     }
//     let one = parseInt(reInt)
//     return int === one
// }

// console.log(
//     isPalindrome(
//         121
//     )
// );

var isPalindrome = function (str) {
  let len = str.length
//   console.log(len)
  for (let i = 0; i < len / 2; i++) {
    if(str[i] !== str[len - 1 -i]) {
        return false
    }
  }
  return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
