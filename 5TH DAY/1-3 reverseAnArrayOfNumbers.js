function reverseAnArrayOfNumbers(n, arr) {
  let result = [];
  let reversArr = [];
  for (let i = 0; i <= n - 1; i++) {
    result.push(arr[i]);
  }
  for (let i = result.length - 1; i >= 0; i--) {
    reversArr.push(result[i]);
  }
  console.log(reversArr.join(" "));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
