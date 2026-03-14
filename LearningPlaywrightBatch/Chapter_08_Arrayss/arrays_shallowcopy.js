let orignal =[1,2,10];
let copy = [...orignal];
console.log(copy)
console.log(orignal)

copy.push(8);
console.log(copy)
console.log(orignal)
let copy3 =Array.from(orignal);
console.log(copy3);

let copy4 = orignal.concat(copy3);
console.log(copy4);

console.log([80,50,70].every((value)=>value>50));
console.log([80,76,12].some((value)=>value>34));

let a= [23,43,21];
let b =a;
a.push(50);
console.log(b.length);
console.log(b);
