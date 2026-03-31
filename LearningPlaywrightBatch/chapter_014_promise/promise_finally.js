let testrun = new Promise((resolve, reject) => {
    reject("test run failed");
});

testrun.then(function (data) {
    console.log(data);
}
).catch(function (error) {
    console.log(error);
})
.finally(function () {
    console.log("test run completed");
})

