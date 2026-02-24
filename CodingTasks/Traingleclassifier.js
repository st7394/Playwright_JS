const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter side a: ", (a) => {
    rl.question("Enter side b: ", (b) => {
        rl.question("Enter side c: ", (c) => {
            a = Number(a);
            b = Number(b);
            c = Number(c);

            if (a == b && b == c) {
                console.log("Equilateral Triangle");
            } else if (a == b || b == c || a == c) {
                console.log("Isosceles Triangle");
            } else {
                console.log("Scalene Triangle");
            }

            rl.close();
        });
    });
});