let str = "Hello world";
console.log(str.match(/world/));
console.log(str.search(/world/));
console.log(str.replace(/world/, "Playwright"));
console.log(str.split(" "));

let email = "[saumtripathi@gmail.com]";
console.log(email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/));