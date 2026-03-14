let responseTimes = [320, 85, 1200, 450, 99];
let sorted = responseTimes.sort((a,b)=>a-b);
console.log("Fastest:", sorted[0]);