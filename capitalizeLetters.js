function capitalizeLetters (str) {
    let arr = str.toLowerCase().split(' ')
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].substring(0, 1).toUpperCase() + arr[i].substring(1)
    };
    return arr.join(' ');
};

console.log(
    capitalizeLetters(
        'testbek testbekov testbekovich'
    )
);

