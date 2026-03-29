const user = {
    name: "John",
    lastname: "Doe",
    age: 30,
    email: "[EMAIL_ADDRESS]",
    get fullName() {
        return this.name + " " + this.lastname;
    },
    set fullName(name) {
        this.name = name.split(" ")[0];
        this.lastname = name.split(" ")[1];
    }
};

console.log(user.fullName);
user.fullName = "Jane Doe";
console.log(user.name);
console.log(user.lastname);