console.log(showPrimeNumbers(20));

function showPrimeNumbers(num) {
    for (let i = 2; i < num; i++) 
        if (isPrime(i)) console.log(i);
}

function isPrime(n) {
    for (let j = 2; j < n; j++)
        if (n % j === 0) 
            return false
    return true
}