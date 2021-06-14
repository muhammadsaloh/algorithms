var isPalindrome = function (int) {
    let str = int + ''
    let reInt = ''
    for(let c of str){
        reInt = c + reInt
    }
    let one = parseInt(reInt)
    return int === one
}

console.log(
    isPalindrome(
        121
    )
);