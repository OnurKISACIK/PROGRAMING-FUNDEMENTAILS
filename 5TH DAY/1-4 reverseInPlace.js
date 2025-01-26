/*function reverseInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let currentElement = arr[i];
    let lastElementIndex = arr.length - 1 - i;
    let lastElement = arr[lastElementIndex];
    arr[i] = lastElement;
    arr[lastElementIndex] = currentElement;
  }
  console.log(arr.join(" "));
}
reverseInPlace(["a", "b", "c", "d", "e"]);
reverseInPlace(["abc", "def", "hig", "klm", "nop"]);
reverseInPlace(["33", "123", "0", "dd"]);
*/
function reverseInPlace(arr) {
  let rever = arr.reverse();
  console.log(arr.join(" "));
}
reverseInPlace(["33", "123", "0", "dd"]);
