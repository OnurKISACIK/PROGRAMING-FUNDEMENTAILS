function a(n, arr) {
  let num = [];
  for (let i = 0; i < n; i++) {
    num.push(arr[i]);
  }
  console.log(num.reverse().join(" "));
}
a(4, [-1, 20, 99, 5]);
