function start (arr, array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    for(let i = 0; i < arr.length; i++){
        arr[i].students = array.splice(0, arr[i].count)
    }
    return arr
}

console.log(
    start(
        [
            {
             name: "muhammad",
             count: 4
            },
            {
             name: "asadbek",
             count: 12
            }
        ],
        ["a","b","q","t","p","l","c","d","e","v","l","c","d","e","v", 'o']
    )
);
