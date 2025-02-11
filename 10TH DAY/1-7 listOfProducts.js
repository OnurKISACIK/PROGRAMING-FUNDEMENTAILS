function listOfProducts(arr) {
  let newArr = arr.sort();
  for (let i = 0; i < arr.length; i++) {
    console.log(`${i + 1}.${newArr[i]}`);
  }
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
