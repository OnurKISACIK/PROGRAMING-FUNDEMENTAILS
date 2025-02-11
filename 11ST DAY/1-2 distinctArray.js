function distinctArray(arr) {
  let unique = [];
  for (let num of arr) {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }
  console.log(unique.join(" "));
}
distinctArray([1, 2, 3, 4]);
