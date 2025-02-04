function calculator(num1, num2) {
  function sum(a, b) {
    return a + b;
  }
  function subtruct(c, d) {
    return d - c;
  }
  function dividea(e, f) {
    return f / e;
  }

  console.log(sum(num1, num2));
  console.log(subtruct(num1, num2));
  let onur = sum(num1, num2);
  let kotce = onur * 5;
  console.log(kotce);
}
calculator(2, 4);
