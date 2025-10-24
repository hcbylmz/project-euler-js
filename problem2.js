let total = 0;
let arr= [1,2];
let i = 1;
while (true) {
    if (arr[i-1] > 4000000) {
        break;
      }
  arr.push(arr[i] + arr[i-1]);
  i++;

}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    total += arr[i];
  }
}
console.log(arr[arr.length-1]);
console.log(total);