let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(obj) {
    return (a, b) => a[obj] > b[obj] ? 1 : -1;
}

users.sort(byField('name'));
users.forEach(user => console.log(user.name)); 

users.sort(byField('age'));
users.forEach(user => console.log(user.age)); 