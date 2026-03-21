const code = function (status) {
    if (status >= 200) {
        return "Valid";
    }
}
console.log(code(200));


//arrow
const code1 = (status) => status >= 200 && status <= 299 ? "Valid request" : "Invalid";
console.log(code1(100))

