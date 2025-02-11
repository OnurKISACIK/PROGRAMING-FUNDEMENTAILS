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
