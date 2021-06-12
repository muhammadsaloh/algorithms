function challenge (a) {
    return function (b) {
        return a + b
    }
}

console.log(
    challenge(4)(2)
);