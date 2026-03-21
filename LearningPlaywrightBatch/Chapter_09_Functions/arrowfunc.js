const greet = (name2) => `Hello, ${name2}!`;

console.log(greet("John"));
console.log(greet("Jane"));
const double = (num) => (num*num);
console.log(double(5));


//multiline arrow function
const add = (a,b) => {
    console.log("Adding two numbers");
    return a+b;
}
console.log(add(5,10));

const res = (score)=>{
   return score>=70 ? "Pass" : "Fail";
}
console.log(res(80));


//arrow function with no arguments
