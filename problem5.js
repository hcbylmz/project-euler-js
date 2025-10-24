let startingNumber = 2520; // starting number is the number that problem gives us
const isEvenlyDivisibleToNumber = (number, maxNumber) => {
    for (let i = 1; i <= maxNumber; i++) {
        if (number % i !== 0) {
            return false;
        }
    }
        return true;
}

while (!isEvenlyDivisibleToNumber(number, 20)) {
    number++;
}
console.log(number);