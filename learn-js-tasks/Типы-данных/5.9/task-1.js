let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
function sumSalaries(salaries) {
    let arr = Object.values(salaries);
    let sum = 0;
    for (let value of arr) {
        if (arr.length == 0) {
            return 0;
        }
        sum += value;
    }
    return sum;
}

console.log(sumSalaries(salaries));