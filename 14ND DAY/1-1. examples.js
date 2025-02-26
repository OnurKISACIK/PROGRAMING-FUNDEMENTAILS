function grocery(arr) {
  let list = arr.shift().split("!");

  let command = arr.shift();
  while (command !== "Go Shopping!") {
    let tokens = command.split(" ");
    let action = tokens[0];
    let item = tokens[1];
    if (action === "Urgent") {
      if (!list.includes(item)) {
        list.unshift(item);
      }
    } else if (action === "Unnecessary") {
      if (list.includes(item)) {
        let index = list.indexOf(item);
        list.splice(index, 1);
      }
    } else if (action === "Correct") {
      if (list.includes(item)) {
        let newItem = tokens[2];
        let index = list.indexOf(item);
        list.splice(index, 1, newItem);
      }
    } else if (action === "Rearrange") {
      if (list.includes(item)) {
        let index = list.indexOf(item);
        list.splice(index, 1);
        list.push(item);
      }
    }

    command = arr.shift();
  }
  console.log(list.join(", "));
}
grocery([
  "Milk!Pepper!Salt!Water!Banana",

  "Urgent Salt",

  "Unnecessary Grapes",

  "Correct Pepper Onion",

  "Rearrange Grapes",

  "Correct Tomatoes Potatoes",

  "Go Shopping!"
]);
