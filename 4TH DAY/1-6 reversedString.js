function reversedString(text) {
  let reversedText = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversedText += text[i];
  }
  console.log(reversedText);
}
reversedString("Information");
/*
function reverseStr(str) {
  let reversedMet = str.split("").reverse().join("");
  console.log(reversedMet);
}
reverseStr("onur");
*/
