function wrapresponse<T>(statusCode: number, data: T): { statusCode: number, data: T } {
    return { statusCode: statusCode, data: data };
}



let response1 = wrapresponse<any>(400, {
    name: "John",
    age: 30,
    email: "ishtripathi7@gmail.com"
});
console.log(response1);

let response2 = wrapresponse<number>(201, 12345);
console.log(response2);

let response3 = wrapresponse<boolean>(404, true);
console.log(response3);


