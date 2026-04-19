interface testhook{
    (testname: string): void;
}
let beforetest: testhook = (testname: string) => {
    console.log("Before test: " + testname);
}
let aftertest: testhook = (testname: string) => {
    console.log("After test: " + testname);
}

function runtest(testname: string, beforetest: testhook, aftertest: testhook) {
    beforetest(testname);
    console.log("Running test: " + testname);
    aftertest(testname);
}

runtest("Test1", beforetest, aftertest);