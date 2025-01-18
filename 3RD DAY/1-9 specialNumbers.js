function specialNumbers(number) {
  let sum = 0;
  let newNumber = 0;
  for (let i = 1; i <= number; i++) {
    let numStr = String([i]);
    if (i < 10) {
      for (chracter of numStr) {
        if (i < 10) {
          let newNumber = Number(chracter);
          sum += newNumber;
          if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
          } else {
            console.log(`${i} -> False`);
          }
          sum = 0;
        }
      }
    }
    if (i >= 10) {
      for (chracter of numStr) {
        let newNumber = Number(chracter);
        sum += newNumber;
      }
      if (sum === 5 || sum === 7 || sum === 11) {
        console.log(`${i} -> True`);
      } else {
        console.log(`${i} -> False`);
      }
      sum = 0;
    }
  }
}

specialNumbers(20);
