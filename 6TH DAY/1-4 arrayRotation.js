function arrayRotation(arr, rotation) {
  for (
    let currentRotation = 1;
    currentRotation <= rotation;
    currentRotation++
  ) {
    let firstElement = arr.shift();
    arr.push(firstElement);
  }
  console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);
