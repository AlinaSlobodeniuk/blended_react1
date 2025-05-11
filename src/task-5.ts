interface CreateUser {
    name: string;
    age: number;
}

interface User {
    name: string;
    age: number;
    isAdmin: boolean;
}

function createUser({ name, age }: CreateUser): User {
    return {
      name,
      age,
      isAdmin: false
    };
  }
  
  createUser({ name: "Alice", age: 30 });