import { checkIfPrime } from "./helpers.js";

let sum = 0;
for (let i = 2; i < 2000000; i++) {
    if (checkIfPrime(i)) {
        console.log(i);
        sum += i;
    }
}
console.log(sum);

// it takes a while to run, but it works