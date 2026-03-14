let salary = ["10000", "20000", "30000", "40000", "50000"];
let tax = salary.map((amount) => amount * 0.1);
console.log(tax);


let tax1 = salary.map((amount) => {
    return amount * 10;
})
console.log(tax1);


let score = [10, 20, 90, 80, 50];


let tax2 = score.map(s => s > 70 ? "pass" : "fail");
console.log(tax2);

let pass = score.filter(s => s > 70);
console.log(pass);

let fail = score.filter(s => s < 70);
console.log(fail);

let total = score.reduce((acc, curr) => acc + curr, 0);
console.log(total);
