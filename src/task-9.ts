interface Container<T> {
    items: T[];
    addItem: (item: T) => void;
    getItem: (index: number) => T;
}

function getLastElement<T>(container: Container<T>): T {
    return container.items[container.items.length - 1];
}

const numberContainer: Container<number> = {
    items: [],
    addItem(item: number) {
        this.items.push(item);
    },
    getItem(index: number) {
        return this.items[index];
    }
};

const stringContainer: Container<string> = {
    items: [],
    addItem(item: string) {
        this.items.push(item);
    },
    getItem(index: number) {
        return this.items[index];
    }
}

numberContainer.addItem(1);
numberContainer.addItem(2);
numberContainer.addItem(3);

stringContainer.addItem("apple");
stringContainer.addItem("strawsberry");
stringContainer.addItem("cherry");

console.log(numberContainer.getItem(0));
console.log(stringContainer.getItem(0));

console.log(getLastElement(numberContainer));
console.log(getLastElement(stringContainer));
