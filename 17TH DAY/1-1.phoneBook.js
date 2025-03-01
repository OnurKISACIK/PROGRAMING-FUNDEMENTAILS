function phoneBook(arr) {
  let phoneBook = {};
  for (let key in arr) {
    let [name, number] = arr[key].split(" ");
    phoneBook[name] = number;
  }
  for (let key in phoneBook) {
    console.log(`${key} -> ${phoneBook[key]}`);
  }
}
phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344"
]);
