function train(arr) {
  let wagons = arr.shift().split(" ").map(num => Number(num));
  let capacity = Number(arr.shift());
  for (let people of arr) {
    if (people.includes("Add")) {
      let tokens = people.split(" ");
      let newWagon = Number(tokens[1]);
      wagons.push(newWagon);
    } else {
      let newPeople = Number(people);
      for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] + newPeople <= capacity) {
          wagons[i] += newPeople;
          break;
        }
      }
    }
  }

  console.log(wagons.join(" "));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
