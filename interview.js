// function Odd (nums) {
//     return (nums % 2 == 0)
// }
// console.log(
//     Odd(3)
// );



// let color1 = 'oq';
// let color2 = 'qora';

// let one = color1 
// color1 = color2
// color2 = one

// console.log(color1);
// console.log(color2);



// let one = new Promise ((resolve, reject) => {
//     if(1+1 == 3){
//         resolve('Ok: True')
//     } else {
//         reject('Ok: False')
//     }
// })
// console.log(one);


// function main (a, b) {
//     return (a > b) ? a : b; 
// }
// console.log(
//     main(3, 2)
// );
/*
70
5km 1p
12 point olib qo'yiladi
*/

function checkSpeed (speed) {
    let point = 0;
    if(speed > 70){
        point = point + Math.floor((speed - 70) / 5)
        return `Sizning tezligingiz 70dan oshdi, ${point} berildi`
    } else if(point > 12) {
        return `Sizning guvohnomangiz olib qo'yiladi`
    }
    return `Ok: true, because it's 70`
}

console.log(
    checkSpeed(70)
);






