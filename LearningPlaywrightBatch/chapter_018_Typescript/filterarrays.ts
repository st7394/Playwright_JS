let responseCodes: number[] = [200, 201, 404, 500];
function filterSuccessCodes(codes: number[]): number[] {
    return codes.filter(code => code >= 200 && code < 300);
}

console.log(filterSuccessCodes(responseCodes));

let testSuites: string[] = ["Smoke", "Regression", "Sanity"];

console.log("Test suites:", testSuites);

let testResult: { name: string; status: string; duration: number } = {
    name: "Login Test",
    status: "PASS",
    duration: 1200
};

console.log(testResult.name + " → " + testResult.status + " (" + testResult.duration + "ms)");