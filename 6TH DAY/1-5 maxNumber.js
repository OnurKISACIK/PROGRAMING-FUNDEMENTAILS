function maxNumber(arr) {
  let topNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let isTop = true;

    for (let j = i + 1; j <= arr.length; j++) {
      let numberToRight = arr[j];

      if (num <= numberToRight) {
        isTop = false;
        break;
      }
    }
    if (isTop) {
      topNumbers.push(num);
    }
  }
  console.log(topNumbers.join(" "));
}
maxNumber([1, 4, 3, 2]);
