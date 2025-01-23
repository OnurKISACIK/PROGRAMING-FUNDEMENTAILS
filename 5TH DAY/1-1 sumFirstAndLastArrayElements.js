function sumFirstAndLastArrayElements(index) {
  let firstNumber = index[0];
  let lastNumber = index[index.length - 1];
  console.log(firstNumber + lastNumber);
}
sumFirstAndLastArrayElements([20, 30, 40]);
sumFirstAndLastArrayElements([10, 17, 22, 33]);
sumFirstAndLastArrayElements([11, 58, 69]);
