function oddAndEvenSum(number) {
  let evenNum = 0;
  let oddNUm = 0;
  let num = String(number);
  let arr = num.split(``);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNum += Number(arr[i]);
    } else {
      oddNUm += Number(arr[i]);
    }
  }
  console.log(`Odd sum = ${oddNUm}, Even sum = ${evenNum}`);
}

oddAndEvenSum(1000435);
