let sumOfSquares = 0;
let squareOfSum = 0;

for (let i = 1; i <= 100; i++) {
    sumOfSquares += i * i;
}
for (let i = 1; i <= 100; i++) {
    squareOfSum += i;
}
squareOfSum *= squareOfSum;
console.log(squareOfSum - sumOfSquares);