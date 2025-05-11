interface User {
    name: string;
    age: number;
}

const users: User[] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
  ];

users.push({ name: "Mary", age: 20 });

console.log(users);
