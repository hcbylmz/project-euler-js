import { checkIfPrime } from "./helpers.js";

let number = 0;
let primeCount = 0;
while (primeCount <= 10001 ) {
    number++;
    if (checkIfPrime(number)) {
        primeCount++;
    }
}
console.log(number);