function cards(arr) {
  let deck = arr.shift().split(", ");
  let n = Number(arr.shift());

  for (let i = 0; i < n; i++) {
    let [command, ...args] = arr[i].split(", ");

    switch (command) {
      case "Add":
        let cardToAdd = args[0];
        if (deck.includes(cardToAdd)) {
          console.log("Card is already in the deck");
        } else {
          deck.push(cardToAdd);
          console.log("Card successfully added");
        }
        break;

      case "Remove":
        let cardToRemove = args[0];
        if (deck.includes(cardToRemove)) {
          deck = deck.filter(card => card !== cardToRemove);
          console.log("Card successfully removed");
        } else {
          console.log("Card not found");
        }
        break;

      case "Remove At":
        let indexToRemove = Number(args[0]);
        if (indexToRemove >= 0 && indexToRemove < deck.length) {
          deck.splice(indexToRemove, 1);
          console.log("Card successfully removed");
        } else {
          console.log("Index out of range");
        }
        break;

      case "Insert":
        let indexToInsert = Number(args[0]);
        let cardToInsert = args[1];
        if (indexToInsert >= 0 && indexToInsert <= deck.length) {
          if (deck.includes(cardToInsert)) {
            console.log("Card is already added");
          } else {
            deck.splice(indexToInsert, 0, cardToInsert);
            console.log("Card successfully added");
          }
        } else {
          console.log("Index out of range");
        }
        break;
    }
  }

  console.log(deck.join(", "));
}

cards([
  "Jack of Spades, Ace of Clubs, Jack of Clubs",
  "2",
  "Insert, -1, Queen of Spades",
  "Remove At, 1"
]);
