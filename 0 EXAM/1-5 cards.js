function cards(arr) {
  let card = [];
  let action = "";
  let index = [];
  let cardsLists = arr.shift().split(", ");

  let forCommand = arr.shift();

  let control = arr.shift().split(", ").sort();

  for (let i = 0; i < arr.length; i++) {
    control = arr[i].split(", ");
    if (control.length == 3) {
      index = parseInt(control[1]);
      action = control[0];
      card = control[2];
    } else {
      action = control[0];
      card = control[1];
    }

    if (action === "Insert") {
      if (index < 0 || index >= cardsLists.length) {
        console.log("Index out of range");
      } else {
        if (cardsLists.includes(card)) {
          console.log("Card is already added");
        } else {
          cardsLists.splice(index, 0, card);
          console.log("Card successfully added");
        }
      }
    } else if (action === "Add") {
      if (cardsLists.includes(card)) {
        console.log("Card is already added");
      } else {
        cardsLists.push(card);
        console.log("Card successfully added");
      }
    } else if (action === "Remove") {
      if (cardsLists.includes(card)) {
        let index1 = cardsLists.indexOf(card);
        cardsLists.splice(index1, 1);
        console.log("Card successfully removed");
      } else {
        console.log("Card not found");
      }
    }
  }

  console.log(cardsLists.join(", "));
}

cards([
  "Ace of Diamonds, Queen of Hearts, King of Clubs",
  "3",
  "Add, King of Diamonds",
  "Insert, 2, Jack of Spades",
  "Remove, Ace of Diamonds"
]);
