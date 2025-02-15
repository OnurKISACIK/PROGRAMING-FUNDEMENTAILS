function counterStrike(input) {
  let energy = Number(input.shift());
  let wonBattles = 0;

  while (input.length > 0) {
    let command = input.shift();
    if (command === "End of battle") {
      console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);
      return;
    }

    let distance = Number(command);
    if (energy >= distance) {
      energy -= distance;
      wonBattles++;
      if (wonBattles % 3 === 0) {
        energy += wonBattles;
      }
    } else {
      console.log(
        `Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`
      );
      return;
    }
  }

  console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);
}

counterStrike([
  "100",
  "10",
  "10",
  "10",
  "1",
  "2",
  "3",
  "73",
  "10",
  "End of battle"
]);
