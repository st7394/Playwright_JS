function sayhello(name: string): void {
    console.log("Hello, " + name);
}

sayhello("John");


function add(a: number, b: number): number {
    return a + b;
}

console.log(add(1, 2));

function greet(name: string, age: number): string {
    return "Hello, " + name + " you are " + age + " years old";
}

console.log(greet("John", 30));

function throwerror(message: string): never {
    throw new Error(message);
}

throwerror("Something went wrong");

