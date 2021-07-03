// 0-50 F
// 51-60 D
// 61-70 C
// 71-80 B
// 81-100 A

const marks = [20, 52, 63, 75, 86];
console.log( calculateGrade(marks) );

function calculateGrade (marks) {
    let avrg = calculateAvrg(marks)
        if(avrg <= 50) return 'F'
        if(avrg <= 60) return 'D'
        if(avrg <= 70) return 'C'
        if(avrg <= 80) return 'B'
        return 'A'
}

function calculateAvrg (array) {
    let sum = 0
    for(let i of array) 
        sum += i
        
    let avrg = sum / array.length
    return avrg
}
