function shoppingList(arr) {
  let firstitem = arr.shift().split("!");
  let command = arr.shift();

  while (command !== "Go Shopping!") {
    command = command.split(" ");
    let initialcommand = command[0];
    let firstitem1 = command[1];
    let seconditem = command[2];

    if (initialcommand === "Urgent") {
      if (!firstitem.includes(firstitem1)) {
        firstitem.unshift(firstitem1);
      }
    } else if (initialcommand === "Unnecessary") {
      if (firstitem.includes(firstitem1)) {
        let index = firstitem.indexOf(firstitem1);
        firstitem.splice(index, 1);
      }
    } else if (initialcommand === "Correct") {
      if (firstitem.includes(firstitem1)) {
        let index = firstitem.indexOf(firstitem1);
        firstitem.splice(index, 1, seconditem);
      }
    } else if (initialcommand === "Rearrange") {
      if (firstitem.includes(firstitem1)) {
        let index = firstitem.indexOf(firstitem1);
        firstitem.splice(index, 1);
        firstitem.push(firstitem1);
      }
    }
    command = arr.shift();
  }
  console.log(firstitem.join(", "));
}
shoppingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!"
]);
shoppingList([
  "Milk!Pepper!Salt!Water!Banana",

  "Urgent Salt",

  "Unnecessary Grapes",

  "Correct Pepper Onion",

  "Rearrange Grapes",

  "Correct Tomatoes Potatoes",

  "Go Shopping!"
]);
