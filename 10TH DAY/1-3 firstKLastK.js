function firstandLastKNumbers(arr) {
  let k = Number(arr.shift());
  let first2El = arr.slice(0, k);
  let second2El = arr.slice(arr.length - k);
  console.log(first2El.join(` `));
  console.log(second2El.join(` `));
}
firstandLastKNumbers([2, 7, 8, 9]);
