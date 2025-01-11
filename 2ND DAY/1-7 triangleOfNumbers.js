function pyramid(n) {
  let Space = " ";
  let down = "\n";
  for (let i = 1; i <= n; i++) {
    console.log(i + down);
  }
  for (let j = 1; j <= n; j++) {
    console.log(j);
  }
}
pyramid(6);
