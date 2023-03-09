"use strict";
function sumToCycle(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumToCycle(4));
console.log(sumToCycle(100));


function sumTo(n) {
    if (n == 1) {
        return n;
    }
    else {
        return n + sumTo(n - 1);
    }
}
// самый медленный
console.log(sumTo(4));
console.log(sumTo(100));

function sumToProgress(n) {
    return n * (n + 1) / 2;
}
// самый быстрый
console.log(sumToProgress(5));
console.log(sumToProgress(100));