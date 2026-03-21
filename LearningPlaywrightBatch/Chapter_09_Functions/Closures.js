function outer() {
    let x = 20;
    function inner() {
        return x;
    }
    return inner;
}
let test = outer();

console.log("Answer is:", test());


