function fizzBuzz (array) {
    let j = []
    for(let i of array){
        if(i % 3 == 0 && i % 5 == 0){
            j.push('fizzBuzz')
        }
        else if(i % 3 == 0){
            j.push(`\ ${i} fizz`)
        } else if (i % 5 ==0){
            j.push('buzz')
        } else {
            j.push(i)
        }
    }
    return j
}

console.log(
    fizzBuzz(
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13, 14, 15]
    )
);