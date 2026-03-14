let test = ["checkin", "checkout", "checkup"];
for (let a of test) {
    console.log(a);
}

test.forEach((test, index) => console.log(test, index));

let brands = ["apple", "samsung", "oneplus", "xiaomi"];
for (let [i, test] of brands.entries()) {
    console.log(i, test);
}

let students = ["rahul", "rohan", "rohit", "roshni"];
for (let [i, test] of students.entries()) {
    console.log(i, test);
}

let num = [1, 2, 3, 4, 5];
for (let i in num) {
    console.log(i);
}
