function cards(arr) {
  let list = arr.shift().split(" ");
  let command = arr.shift();
  let count = 0;
  while (command !== "Finish") {
    let tokens = command.split(` `);

    let action = tokens[0];

    let first = tokens[1];

    let second = tokens[2];
    if (action === "Add") {
      list.push(first);
    } else if (action === "Remove") {
      if (list.includes(first)) {
        for (let i = 0; i < list.length; i++) {
          if (list[i] === first) {
            list.splice(i, 1);
          }
        }
      }
    } else if (action === "Replace") {
      if (list.includes(first)) {
        for (let i = 0; i < list.length; i++) {
          let index = list.indexOf(first);
          count++;
          if (count === 1) {
            list.splice(index, 1, second);
          }
        }
      }
    } else if (action === "Collapse") {
      for (let i = 0; i < list.length; i++) {
        if (list[i] < first) {
          list.splice(i, 1);
        } else {
          continue;
        }
      }
    }

    command = arr.shift();
  }
  console.log(list.join(" "));
}

//cards(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"]);
//cards(["1 4 5 19", "Add 1", "Remove 4", "Finish"]);
cards(["1 20 -1 10", "Collapse 8", "Finish"]);
