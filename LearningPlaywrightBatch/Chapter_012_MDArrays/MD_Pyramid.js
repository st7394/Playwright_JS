let n = 5;


for (let i = 1; i <= n; i++) {
    let r = "";
    for (let j = 1; j <= n - i; j++) {
        r += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        r += "*";
    }
    console.log(r);
}

