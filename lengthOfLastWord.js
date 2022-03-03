let result = lengthOfLastWord("luffy is still joyboy");
console.log(result)

function lengthOfLastWord (s) {
  let arr = s.trim().split(' ')
  let lastWord = arr.length - 1
  return arr[lastWord].length
}