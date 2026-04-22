function getstring(name: string): string {
    return "Amit";
}

getstring("John");
//getstring(123);

function getFirstResults<T>(results: T[]): T {
    return results[0];
}

let first = getFirstResults(["John", "Jane", "Bob"]);
console.log(first);

let first1 = getFirstResults([1, 2, 3]);
console.log(first1);

