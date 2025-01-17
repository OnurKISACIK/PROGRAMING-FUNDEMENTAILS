function ascii(digit1, digit2, digit3) {
  console.log(`${digit3} ${digit2} ${digit1}`);

  let a = digit1.charCodeAt();
  let b = digit2.charCodeAt();
  let c = digit3.charCodeAt();
  console.log(c, b, a);
}
ascii("a", "b", "c");
