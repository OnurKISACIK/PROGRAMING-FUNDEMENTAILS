function ages(ages) {
  if (0 <= ages && ages <= 2) {
    console.log("baby");
  } else if (3 <= ages && ages <= 13) {
    console.log("child");
  } else if (14 <= ages && ages <= 19) {
    console.log("teenager");
  } else if (20 <= ages && ages <= 65) {
    console.log("adult");
  } else if (ages >= 66) {
    console.log("elder");
  } else {
    console.log("out of bounds");
  }
}
ages(20);
