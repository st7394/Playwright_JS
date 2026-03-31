let score = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

let rowsum = score.map(row => row.reduce((a, b) => a + b, 0));
console.log(rowsum);

let colsum = score.reduce((acc, row) => {
    row.forEach((val, i) => {
        acc[i] = (acc[i] || 0) + val;
    });
    return acc;
}, []);
console.log(colsum)


let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],  // Auth suite
    ["search-pass", "filter-fail", "sort-pass"],  // Search suite
    ["checkout-fail", "payment-fail", "confirm-pass"]   // Payment suite
];

for (let i = 0; i < suiteResults.length; i++) {
    for (let j = 0; j < suiteResults[i].length; j++) {
        if (suiteResults[i][j].includes("fail")) {
            console.log(suiteResults[i][j]);
        }
    }
}

let execTimes = [
    [120, 340, 89, 450],  // dev
    [200, 410, 100, 520],  // staging
    [180, 390, 95, 490]   // prod
];

let avg = execTimes.map(row => row.reduce((a, b) => a + b, 0) / row.length);
console.log(avg);