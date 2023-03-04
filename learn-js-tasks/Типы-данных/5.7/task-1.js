let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
    let set = new Set();
    for (let item of arr) {
        set.add(item);
    }
    return Array.from(set);
}

console.log(unique(values));