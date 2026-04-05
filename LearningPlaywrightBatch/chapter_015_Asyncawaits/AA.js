async function getResult() {
    return "Pass";
}

getResult().then(function (result) {
    console.log(result);
});

async function runTest() {
    let result = await Promise.resolve("Passed");
    console.log(result);

    let result2 = await Promise.resolve("Test 2 passed");
    console.log(result2);

}

runTest();