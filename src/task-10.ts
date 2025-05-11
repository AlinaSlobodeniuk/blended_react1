const users = ["alice", "bob", "charlie"];

interface User {
    id: number;
    name: string;
}

function toUserObjects(arr: string[]): User[] {
    return arr.map((name, index) => ({
        id: index + 1,
        name: name,
    }));
}

console.log(toUserObjects(users));
