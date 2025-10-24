const isPalindrome = (num) => {
  const str = num.toString();
  return str === str.split('').reverse().join('');
}

const findLargestPalindrome = () => {
  let largest = 0;
  for (let i = 999; i > 100; i--) {
    for (let j = 999; j > 100; j--) {
      const product = i * j;
      if (isPalindrome(product) && product > largest) {
        largest = product;
      }
    }
  }
  return largest;
}
console.log(findLargestPalindrome());