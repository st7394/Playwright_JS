let unknown: unknown = "hello";
if (typeof unknown === "string") {
    console.log("hi");
}

let message: string = "hello";
let username: string;
let userid: string;

function greet(name: string): string {
    return "Hello, " + name;
}

const multiply = (a: number, b: number): number => a * b;

// Object annotations
let user: { name: string; age: number } = {
    name: "John",
    age: 30
};

console.log(greet("John"));
console.log(multiply(2, 3));
console.log(user);