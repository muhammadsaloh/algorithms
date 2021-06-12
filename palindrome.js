function palindrome (str) {
    let newStr = ''
    for(let i of str){
        newStr = i + newStr
    }
    
    return newStr === str
     
}

console.log( palindrome('anna') )
console.log( palindrome('hafsa') )
console.log( palindrome('niin') )
console.log( palindrome('aziza') )