function makeRetrytracker(maxRetries = 3) {
    let tries = 0;

    return function tryagain() {
        tries++;
        if (tries < maxRetries) {
            return `Attempt ${tries}/${maxRetries}: Within limit`;
        } else {
            return `Attempt ${tries}/${maxRetries}: Exceeded limit!`;
        }
    }
}

const attempt = makeRetrytracker(7);
for (let i = 0; i < 10; i++) {
    console.log(attempt());
}
