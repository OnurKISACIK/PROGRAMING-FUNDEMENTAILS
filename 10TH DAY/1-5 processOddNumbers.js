function processOddNumbers(arr) {
  let oddNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
      let doubled = arr[i] * 2;
      let a = doubled.toString();
      oddNumbers.push(doubled);
    } else {
    }
    oddNumbers.reverse();
  }
  console.log(oddNumbers.join(` `));
}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);

function processOddNumbersOne(arr) {
  let oddNumbers = arr.filter((_, i) => i % 2 === 1);
  let doubled = oddNumbers.map(x => x * 2);
  console.log(doubled.reverse().join(` `));
}
processOddNumbersOne([10, 15, 20, 25]);

function processOddNumbersTwo(arr) {
  let doubled = arr.map(el => el * 2);
  let oddNumbers = doubled.filter((_, i) => i % 2 !== 0);
  let reversed = oddNumbers.reverse();
  console.log(reversed.join(` `));
}
processOddNumbersTwo([10, 15, 20, 25]);
