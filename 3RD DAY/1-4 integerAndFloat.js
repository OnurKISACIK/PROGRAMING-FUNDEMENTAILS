function integerAndFloat(x, y, z) {
  let a = x;
  let b = y;
  let c = z;
  total = a + b + c;
  if (total % 1 == 0) {
    console.log(`${total} - Integer`);
  } else {
    console.log(`${total} - Float`);
  }
}
integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 30);
