function reverseInt (int){
    let str = int + ''
    let reInt = ''
    for(let c of str){
        reInt = c + reInt
    }
    return parseInt(reInt) * Math.sign(int)
}

console.log(
    reverseInt(
        -1323
    )
);