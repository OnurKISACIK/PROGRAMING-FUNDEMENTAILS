/*
function onur(n) {
  let final = "";
  for (let i = 1; i <= n; i++) {
    final += i;
    console.log(final);
  }
}
onur(5);
*/

/*
function a(num) {
  let final = "";
  for (let i = 1; i <= num - 2; i++) {
    console.log(i);
    for (let i = 2; i <= num - 1; i++) {
      final += i;
      console.log(final + `${i}`);
      for (let i = 3; i <= num - 1; i++) {
        final += i;
        console.log(final + `${i}`);
      }
    }
  }
}
a(3);
*/
function b(num) {
  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= i; j++) {
      console.log(i + " ");
    }
    console.log(j);
  }
}
b(5);
