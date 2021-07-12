var reverse = function (int){
    if (typeof int == 'number' && int <= 2 ** 31 && int !== 0 && int >= -(2 ** 31)) {
        let str = int + ''
        let reInt = ''
        for(let c of str){
            reInt = c + reInt
        }
        return Number(parseInt(reInt) * Math.sign(int))
    } else {
        return 0
    }
}

console.log(
    reverse(
        -123
    )
);
