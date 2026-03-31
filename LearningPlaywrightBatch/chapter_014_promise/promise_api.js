let apicall = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("api called");
        resolve();
    }, 2000);
});