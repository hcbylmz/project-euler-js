const num = 600851475143;

const checkIfPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

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

