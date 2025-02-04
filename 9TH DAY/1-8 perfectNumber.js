function perfectNumber(num1) {
  function perfectDivisors(num1) {
    let sum = 0;
    for (let divisor = 0; divisor < num1; divisor++) {
      if (num1 % divisor === 0) {
        sum += divisor;
      }
    }
    return sum;
  }
  let sum = perfectDivisors(num1);
  if (sum === num1) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}
perfectNumber(6);
