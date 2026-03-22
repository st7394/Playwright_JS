function makecounter(start) {
    let count = start;
    return {
        increment() {
            count++;
        }
        decrement() {
            count--;
        },
        getValue() {
            return count;
        }
    }
}
let counter = makecounter(0);
counter.increment();
counter.decrement();
console.log(counter.get());