const obj1 = {
    name: "John",
    age: 30,
    email: "[EMAIL_ADDRESS]"
};

const obj2 = {
    ...obj1,
    age: 40,
    city: "New York"
};

const merge = {
    ...obj1,
    ...obj2
};
console.log(merge);

const user = {
    name: "John",
    age: 28,
    sayname(lasatname) {
        this.name += lasatname;
        return this.name;
    }
}