let fastserver = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("fast server response");
        resolve("fast server response");
    }, 2000);
});

let slowserver = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("slow server response");
        resolve("slow server response");
    }, 4000);
});

Promise.race([fastserver, slowserver]).then(function (winner) {
    console.log("Winner is:", winner);
})
//promise.race will return the first promise that is resolved or rejected