function findMax (array) {
    let max = array[0]
    for(let i of array){
        if(max < i){
            max = i
        }
    }
    return max
}

console.log(
    findMax(
        [1, 4, 9, 7, 5, 1000000]
    )
);