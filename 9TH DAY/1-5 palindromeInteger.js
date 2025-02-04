function palindromeInteger(arr) {
  for (let num of arr) {
    console.log(checkIsPalindrome(num));
  }
  function checkIsPalindrome(num) {
    let numStr = num + "";
    let reversedNumStr = "";

    for (let i = numStr.length - 1; i >= 0; i--) {
      let currentChar = numStr[i];
      reversedNumStr += currentChar;
    }
    return numStr === reversedNumStr;
  }
}

palindromeInteger([123, 323, 421, 121]);
