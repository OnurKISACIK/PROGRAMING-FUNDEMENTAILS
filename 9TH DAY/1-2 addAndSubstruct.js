function addAndSubstruct(num1, num2, num3) {
  function sum(num1, num2) {
    return num1 + num2;
  }
  function substruct(num1, num2) {
    return num1 - num2;
  }
  let firstFuncSum = sum(num1, num2);
  let secFuncSubs = substruct(firstFuncSum, num3);
  console.log(secFuncSubs);
}
addAndSubstruct(23, 6, 10);
