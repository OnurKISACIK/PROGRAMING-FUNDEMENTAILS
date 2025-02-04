function charactersInRange(char1, char2) {
  let allChars = [];
  let code1 = char1.charCodeAt();
  let code2 = char2.charCodeAt();
  let startCode = Math.min(code1, code2);
  let endCode = Math.max(code1, code2);
  for (let i = startCode + 1; i < endCode; i++) {
    let currentChar = String.fromCharCode(i);
    allChars.push(currentChar);
  }
  console.log(allChars.join(` `));
}

charactersInRange("#", ":");
