class car {
    #engine;
    constructor(name, enginename) {
        this.name = name;
        this.#engine = enginename;
    }

    getEngineName() {
        return this.#engine;
    }
    setEngineName(newEngineName) {
        this.#engine = newEngineName;
    }
}

let myCar = new car("BMW", "V8");
console.log(myCar.getEngineName());
myCar.setEngineName("V12");
console.log(myCar.getEngineName());