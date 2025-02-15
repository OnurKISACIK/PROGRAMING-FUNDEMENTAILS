function arrayManupulations(arr) {
  let firstPart = arr.shift().split(" ");

  let secondPart = arr;

  for (let el of secondPart) {
    let values = el.split(" ");
    let command = values[0];
    let num = values[1];
    let index = values[2];

    if (command === "Add") {
      firstPart.push(num);
    } else if (command === "Remove") {
      let isThere = firstPart.indexOf(num);
      if (isThere !== -1) {
        firstPart.splice(isThere, 1);
      }
    } else if (command === "RemoveAt") {
      firstPart.splice(num, 1);
    } else if (command === "Insert") {
      firstPart.splice(index, 0, num);
    }
  }
  console.log(firstPart.join(" "));
}

arrayManupulations([
  "6 12 2 65 6 42",
  "Add 8",
  "Remove 12",
  "RemoveAt 3",
  "Insert 6 2"
]);

/*
function solve(comments) {
  let array = comments.shift().split(" ").map(Number);
  for (let i = 0; i < comments.length; i++) {
    let [command, firstNum, secondNum] = comments[i].split(" ");
    firstNum = Number(firstNum);
    secondNum = secondNum !== undefined ? Number(secondNum) : undefined;
    if (command === "Add") {
      array.push(firstNum);
    } else if (command === "Remove") {
      array = array.filter(x => x !== firstNum);
    } else if (command === "RemoveAt") {
      array.splice(firstNum, 1);
    } else if (command === "Insert") {
      array.splice(secondNum, 0, firstNum);
    }
  }
  console.log(array.join(" "));
}
solve(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"]);
*/
