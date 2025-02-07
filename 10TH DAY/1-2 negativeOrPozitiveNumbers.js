/*
function negativeOrPozitiveNumbers(arr) {
  let newArr = [];
  for (let el of arr) {
    let num = Number(el);
    if (el < 0) {
      //burda bu numaralari alip  yeni array in icerisine mi atiyor?
      newArr.unshift(num);
    } else {
      newArr.push(num);
    }
  }
  return newArr.join("\n");
}
console.log(negativeOrPozitiveNumbers(["3", "-2", "0", "-1"]));
*/

function a(arr) {
  let newArr = [];
  for (let el of arr) {
    if (el > 1) {
      newArr.push(el);
    }
  }
  return newArr;
}
console.log(a([1, 2, 3, 4]));
