function calculator(a, b, c) {
  switch (b) {
    case "+":
      console.log((a + c).toFixed(2));
      break;
    case "-":
      console.log((a - c).toFixed(2));
      break;
    case "*":
      console.log((a * c).toFixed(2));
      break;
    case "/":
      console.log((a / c).toFixed(2));
      break;
  }
}
calculator(5, "/", 1);
