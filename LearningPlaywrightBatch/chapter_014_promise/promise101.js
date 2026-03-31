let order = new Promise((resolve, reject) => {
    let fooddelivery = true;
    if (fooddelivery) {
        resolve("order placed");
    } else {
        reject("order cancelled");
    }
});
console.log(order);

