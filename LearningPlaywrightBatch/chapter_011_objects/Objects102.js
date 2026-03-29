let status = {
    code: 200,
    st: "Pass",
    message: "Success"
};

let a = status;
a.code = 404;
console.log(status.code);

let c = a;
c.st = "Fail";
console.log(a.st);

let newob = {
    status: "Pass",
    message: "Success New"
}
console.log(newob);


