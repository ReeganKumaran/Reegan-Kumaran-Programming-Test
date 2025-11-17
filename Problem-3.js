const a = 3;
let count = 0;
const output = [];

if (a % 2 === 0) {
    count = a - 1;
} else {
    count = a;
}

for (let i = 1; i <= count; i ++) {
    const result = 2 * i - 1;
    output.push(result);
}
console.log(output); // [1, 3, 5, 7, 9]