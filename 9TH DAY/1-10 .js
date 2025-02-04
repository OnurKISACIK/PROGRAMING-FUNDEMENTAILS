function factorialDivision(num1, num2) {
  function find(num1) {
    let a = 1;

    for (let i = 1; i <= num1; i++) {
      a = a * i; // factoryel carpimini bu sekilde bulmaktayiz....
    }
    return a;
  }
  let b = 1;
  function find2(num2) {
    for (let i = 1; i <= num2; i++) {
      b = b * i;
    }
    return b;
  }
  let onur = find(num1);
  let alex = find2(num2);
  console.log((onur / alex).toFixed(2));
}
factorialDivision(6, 2);
