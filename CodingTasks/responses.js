let responses = [200, 201, 401, 500, 404, 200, 503];
let con = responses.every(responses=>responses>=200 && responses<=299);
console.log(con);


let fail = [...responses].find(responses=>responses>=400);
console.log(fail);
