function nums(arr) {
  let firstItems = arr.shift().split(" ");
  let index = 0;
  let currentCommand = arr[index].split(" ");

  let command1 = currentCommand[0];
  let firstItem1 = currentCommand[1];
  let secondItem = currentCommand[2];
  while (command1 !== "Finish") {
    if (command1 === "Add") {
      firstItems.push(firstItem1);
    } else if (command1 === "Remove") {
      if (firstItems.includes(firstItem1)) {
        let index = firstItems.indexOf(firstItem1);
        firstItems.splice(index, 1);
      }
    } else if (command1 === "Replace") {
      if (firstItems.includes(firstItem)) {
        let index = firstItems.indexOf(firstItem);
        firstItems.splice(index, 1, secondItem);
      }
    } else if (command1 === "Collapse") {
      for (let i = 0; i < firstItems.length; i++) {
        if (firstItems[i] < firstItem1) {
          firstItems.splice(i, 1);
        }
      }
    }
    index++;
    currentCommand = arr[index].split(" ");
    command1 = currentCommand[0];
    firstItem1 = currentCommand[1];
    secondItem = currentCommand[2];
  }
  console.log(firstItems.join(" "));
}
nums(["1 4 5 19", "Add 1", "Remove 4", "Finish"]);
nums(["1 20 -1 10", "Collapse 8", "Finish"]);
nums(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"]);
b;
