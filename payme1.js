function customReverse(array) {
    let arr = [];
    for(let i = array.length - 1; i >= 0; i--){
        arr.push(array[i])
    }
    return arr;
}

console.log(
    customReverse(
        [1, 2, 3, 4, 5]
    )
)
