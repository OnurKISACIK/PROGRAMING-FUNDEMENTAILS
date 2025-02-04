/*function repeatString(string, n) {
  buffer = "";
  for (let i = 0; i < n; i++) {
    buffer += string;
  }
  return buffer;
}
console.log(repeatString(abc, n));
*/
function repeatString(str, n) {
  let a = str.repeat(n);
  return a;
}
console.log(repeatString("abc", 3));
