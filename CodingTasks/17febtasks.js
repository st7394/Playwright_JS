/*
console.log(greet("Alice"));
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(getStatus(200));
const getStatus = (code) => code >= 200 ? "ok" : "error";

function analyze(scores = []) {
    return scores.filter(s => s >= 70).length;
}
analyze();

*/
function makeCounter() {
    let count = 0;
    return () => ++count;
}
let counter = makeCounter();
counter();
counter();
console.log(counter());