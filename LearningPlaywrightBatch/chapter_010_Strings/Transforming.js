let str = "Hello ,World!  ";
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

let mssg = "Test:Pass,Fail,Skip";
console.log(mssg.split(","));
console.log(mssg.split(":"));
console.log(mssg.replace("Pass", "pass"));

let url = "https://www.audible.in/redeem";
console.log(url.split("//").join("-"));
console.log(url.replace("/redeem", ".eu"));
console.log((200).toString());
