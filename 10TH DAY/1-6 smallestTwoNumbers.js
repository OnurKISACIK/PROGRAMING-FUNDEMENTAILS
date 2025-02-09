/* 
function smallestTwoNumbers(arr) {
  let arrsmallestNumbers = arr.sort((a, b) => a - b).slice(0, 2);

  console.log(arrsmallestNumbers.join(` `));
}
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);

*/
function smallestTwoNumbersOne(arr) {
  let compare = arr.sort((a, b) => b - a);
  console.log(compare.join(" "));
}
smallestTwoNumbersOne([10, 40, 60, 70, 35, 26]);
