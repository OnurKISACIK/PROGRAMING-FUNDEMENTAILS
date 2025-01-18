/*
function sumDigits(num) {
  let numStr = String(num);
  let total = 0;
  for (let chracter of numStr) {
    let digit = Number(chracter);
    total += digit;
  }
  console.log(total);
}
sumDigits(245678);
*/
function changeOpposite(num) {
  let numStr = String(num);
  let total = 0;
  for (chracter of numStr) {
    let digit = Number(chracter);
    total += digit;
  }
  console.log(total);
}
changeOpposite(12);
