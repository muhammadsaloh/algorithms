function backTo (n) {
    let arr = [];
    for (let i = n; i >= 1; i--) {
      arr.push(i);
    }
    return n > 0 ? arr : []
}

console.log(
    backTo(0)
)
