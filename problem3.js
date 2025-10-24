import { checkIfPrime } from "./helpers.js";

const num = 600851475143;



const primeFactors = [];
let testNumber =2;

while (testNumber < Math.sqrt(num)) {
  console.log(testNumber);
  if (num % testNumber === 0) {
    if (checkIfPrime(testNumber)) {
      primeFactors.push(testNumber);
      }
  }
  testNumber++;
}

