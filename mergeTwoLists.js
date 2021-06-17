var mergeTwoLists = function(l1, l2) {
    let arr = [];
    for(let i = 0; i < l1.length; i++){
        arr.push(l1[i])
    }
    for(let i = 0; i < l2.length; i++){
        arr.push(l2[i])
    }
    return arr.sort((a, b) => {
        return a - b
    })
};

console.log(
    mergeTwoLists(
        [1, 2, 4],
        [1, 3, 4]
    )
);