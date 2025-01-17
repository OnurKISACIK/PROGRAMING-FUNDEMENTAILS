function convertDistance(number) {
  let km = number / 1000;
  let miles = km * 0.621371192;
  console.log(`${number} meters is equal to ${km} kilometers.`);
  console.log(`${km} kilometers is equal to ${miles.toFixed(2)} miles.`);
}
convertDistance(798);
