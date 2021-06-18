function sorted (arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                let swap = arr[i]
                arr[i] = arr[j]
                arr[j] = swap
            }
        }
    }
    return arr
}


console.log(
    sorted(
        [4, 2, 6, 3, 1]
    )
);