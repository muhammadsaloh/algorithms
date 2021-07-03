function compress (rawString) {
    let count = 0
    let resultString = ""
    for (let i = 0; i < rawString.length; i++) {
        count ++
        const currentString = rawString[i];
        if(currentString !== rawString[i + 1]) {
            resultString += currentString + count
            count = 0
        }
    }
    return resultString.length < rawString ? rawString : resultString
}

let rawString = 'aaaabbbsssdd'
console.log(`Raw: ${rawString}`);
const compressed = compress(rawString)
console.log(`Compressed: ${compressed}`);