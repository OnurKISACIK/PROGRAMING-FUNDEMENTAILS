function evenAndOddSubtraction(arr) {
  let evenTotal = 0;
  let oddTotal = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      evenTotal += num;
    } else {
      oddTotal += num;
    }
  }
  console.log(evenTotal - oddTotal);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);
