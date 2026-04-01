function greettester(name, callback) {
    console.log("Hello " + name);
    callback();
}

greettester("Ravi", function () {
    console.log("Welcome to the world of callbacks");
});