function specialNumbers(number) {
  for (let i = 1; i <= number; i++) {
    let c = 0;
    c += i;
    let b = c;
    // sum in toplamindaki sayilarin 5,7,11 e bolune bilmesi gerekli
    if (
      b.toString().includes("5") ||
      b.toString().includes("7") ||
      b.toString().includes("11")
  
  }
}
specialNumbers(15);
  /*) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }*/
