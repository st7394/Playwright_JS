let a = { status: "Pass", message: "Test Passed" };
console.log(a.status.toLowerCase());
let b = a;
b.status = "Fail";
console.log(a.status);


let str = "Helllo";
str[0] = "h";
console.log(str);

let url = "https://staging.example.com/";
console.log(url.slice(8, 15));
console.log(url.split("://")[1].split(".")[0]);

let data = "Test_001_Pass";
console.log(data.split("_")[1]);
