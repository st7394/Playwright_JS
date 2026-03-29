// Step 1: Declare variables
let key = "John";
let age = 30;
let email = "john@example.com";

// Step 2: Use variables as values in the object
const obj = {
    key: key,
    age: age,
    email: email
};

console.log(obj.age);

// ES6 Shorthand - when variable name matches key name
const obj2 = {
    key,    // same as key: key
    age,    // same as age: age
    email   // same as email: email
};
obj2.age = 40;
console.log(obj2.age);

