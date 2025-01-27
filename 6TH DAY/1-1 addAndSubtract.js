function addAndSubtract(arr) {
  let originaSum = 0;
  let modifiedSum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    originaSum += arr[i];
    if (arr[i] % 2 === 0) {
      arr[i] += i;
    } else {
      arr[i] -= i;
    }
    modifiedSum += arr[i];
  }
  console.log(arr);
  console.log(originaSum);
  console.log(modifiedSum);
}
addAndSubtract([5, 15, 23, 56, 35]);
