let a = prompt("Enter side a: ");
let b = prompt("Enter side b: ");
let c = prompt("Enter side c: ");

if (a == b && b == c) {
    console.log("Equilateral Triangle");
} else if (a == b || b == c || a == c) {
    console.log("Isosceles Triangle");
} else {
    console.log("Scalene Triangle");
}