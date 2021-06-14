var reverse = function (int){
    let str = int + ''
    let reInt = ''
    for(let c of str){
        reInt = c + reInt
    }
    return parseInt(reInt) * Math.sign(int)
}

console.log(
    reverse(
        1534236469
        
    )
);
9646324351