function sumEvenNumbers(arr) {
  let total = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    let arrNum = Number(arr[i]);
    if (arrNum % 2 === 0) {
      total += arrNum;
    }
  }
  console.log(total);
}

sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
sumEvenNumbers(["2", "4", "6", "8", "10"]);
sumEvenNumbers(["3", "5", "7", "9"]);
