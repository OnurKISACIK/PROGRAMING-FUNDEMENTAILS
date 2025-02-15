function treasureHunt(arr) {
  let firstItems = arr.shift().split("|");
  console.log(firstItems);

  let arrayLeft = arr.shift().split(", ");
  console.log(arrayLeft); //['Gold', 'Silver', 'Bronze', 'Medallion', 'Cup']
  let command1 = arrayLeft.shift().split(" ");
  console.log(command1); //'Loot', 'Wood', 'Gold', 'Coins']
  let command2 = command1.shift();
  console.log(command2); // Loot
  let hazine = command1;
  console.log(hazine); // [ 'Wood', 'Gold', 'Coins' ]

  while (command2 !== "Yohoho!") {
    command1 = arrayLeft.shift().split(" ");
    command2 = command1.shift();
    hazine = command1;

    if (command2 === "Loot") {
      for (let el of hazine) {
        if (!firstItems.includes(el)) {
          firstItems.push(el);
          console.log(firstItems);
        }
      }
      command1 = arrayLeft.shift();
    }
  }
}
treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!"
]);

/*
function treasureHunt(arr) {
  let loot = arr.shift().split("|");
  for (let i = 0; i < arr.length; i++) {
    let [command, ...items] = arr[i].split(" ");
    if (command === "Loot") {
      for (let item of items) {
        if (!loot.includes(item)) {
          loot.unshift(item);
        }
      }
    } else if (command === "Drop") {
      let index = Number(items[0]);
      if (index >= 0 && index < loot.length) {
        let item = loot.splice(index, 1);
        loot.push(item);
      }
    } else if (command === "Steal") {
      let count = Number(items[0]);
      let stolenItems = loot.splice(-count);
      console.log(stolenItems.join(", "));
    }
  }
  let sum = 0;
  for (let item of loot) {
    sum += item.length;
  }
  let averageGain = sum / loot.length;
  if (loot.length > 0) {
    console.log(
      `Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`
    );
  } else {
    console.log("Failed treasure hunt.");
  }
}
treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!"
]);
*/
