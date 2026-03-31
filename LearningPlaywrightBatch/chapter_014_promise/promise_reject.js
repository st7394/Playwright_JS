let apicall = new Promise((resolve, reject) => {
    reject("500 Error");
});

apicall.then(function (data) {
    console.log(data);
}
).catch(function (error) {
    console.log(error);
})
//catch will be called only when promise is rejected
//then will be called only when promise is resolved
//finally will be called always