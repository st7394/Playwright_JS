interface TestCase {
    id: number;
    name: string;
    status: string;
    duration: number;
}

let testCase1: TestCase = {
    id: 1,
    name: "Login Test",
    status: "PASS",
    duration: 1200
};

console.log(testCase1.name + " → " + testCase1.status + " (" + testCase1.duration + "ms)");

let testCases: TestCase[] = [
    {
        id: 1,
        name: "Login Test",
        status: "PASS",
        duration: 1200
    },
    {
        id: 2,
        name: "Logout Test",
        status: "FAIL",
        duration: 800
    },
    {
        id: 3,
        name: "Search Test",
        status: "PASS",
        duration: 1500
    }
];

console.log(testCases);

function getFailedTestCases(testCases: TestCase[]): TestCase[] {
    return testCases.filter(testCase => testCase.status === "FAIL");
}

console.log(getFailedTestCases(testCases));