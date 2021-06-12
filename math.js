function mathJs (array, index) {
    let arr = [];
    let size = array.length - 1
    for(let i = 0; i < (size / 2); i++){
        if(array[i] + array[size - i] == index) {
            arr.push([array[i], array[size - i]], [array[size - i], array[i]])
        }
    }
    return arr
}
console.log( 
    mathJs(
        [1, 2, 3, 4, 5, 6, 7], 8
    ) 
)
