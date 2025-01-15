function echoType(value) {
  let a = typeof value;
  let b = "string";
  let c = "number";
  if (b === a) {
    console.log("string");
    console.log(value);
  } else if (c === a) {
    console.log("number");
    console.log(value);
  } else {
    console.log("object");
    console.log("Parameter is not suitable for printing");
  }
}
echoType("Hello, JavaScript!");
echoType(18);
echoType(null);
