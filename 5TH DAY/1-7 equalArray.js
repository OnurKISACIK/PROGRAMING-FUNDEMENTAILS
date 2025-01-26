function equalArray(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i <= arr1.length; i++) {}
  for (let i = 0; i <= arr2.length; i++) {}
  let equal = true;
  for (let i = 0; i < arr1.length; i++) {
    sum += Number(arr1[i]);
    if (arr1[i] !== arr2[i]) {
      console.log(`Arrays are not identical. Found difference at ${[i]} index`);
      let equal = false;

      break;
    } else {
    }
  }
}

equalArray(["10", "20", "30"], ["10", "20", "30"]);
//equalArray(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
