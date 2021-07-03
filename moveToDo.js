let numbers = [1, 2, 3, 4];
let output = move(numbers, 0, 2)

console.log(output);

function move (array, index, offset) {
    let position = index + offset
    if(position >= array.length || position < 0) {
        console.error('Invalid offset.')
        return;
    }

    let result = [...array]
    let element = result.splice(index, 1)[0]
    result.splice(index + offset, 0, element)
    return result
}

