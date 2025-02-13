function unquie(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let firstNum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let secondNum = arr[j];
      if (firstNum + secondNum === target) {
        console.log(`${firstNum} ${secondNum}`);
      }
    }
  }
}
unquie([14, 20, 60, 13, 7, 19, 8], 27);
