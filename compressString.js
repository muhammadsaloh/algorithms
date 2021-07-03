function compress (rawString) {
    let count = 0
    let compressedString = ""
    for (let i = 0; i < rawString.length; i++) {
        count ++
        const currentLetter = rawString[i];
        if(currentLetter !== rawString[i + 1]) {
            compressedString += currentLetter + count
            count = 0
        }
    }
    return compressedString.length < rawString.length ? compressedString : rawString    
}

let rawString = 'aaaabbbsssdd'
console.log(`Raw: ${rawString}`);
const compressed = compress(rawString)
console.log(`Compressed: ${compressed}`);