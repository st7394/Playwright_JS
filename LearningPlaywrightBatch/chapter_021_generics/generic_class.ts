class Teststorage<T> {
    private storage: T[] = [];
    add(item: T) {
        this.storage.push(item);
    }
    get(index: number): T {
        return this.storage[index];
    }
}

let storage = new Teststorage<string>();
storage.add("121");
storage.add("Jane");
storage.add("1211");
console.log(storage.get(0));
