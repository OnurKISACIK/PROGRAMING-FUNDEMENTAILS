function calculator(num1, num2, operator) {
  let multiply = (num1, num2) => console.log(num1 * num2);
  let divide = (num1, num2) => console.log(num1 / num2);
  let add = (num1, num2) => console.log(num1 + num2);
  let subtract = (num1, num2) => console.log(num1 - num2);

  switch (operator) {
    case "multiply":
      multiply(num1, num2);
      break;
    case "divide":
      divide(num1, num2);
      break;
    case "add":
      add(num1, num2);
      break;
    case "subtract":
      subtract(num1, num2);
      break;
  }
}

calculator(5, 5, "multiply");
calculator(2, 3, "add");
calculator(25, 5, "divide");
//arrow fonksiyonlar ozellikle swithcten once yaziliyor sebebi ise function expression
/*
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
*/
